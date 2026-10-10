# Banco de dados — SocialMEI.IA

## Objetivo

Este guia descreve o schema versionado, não uma verificação atual da VPS. Somente o histórico de atendimento tem SQL de persistência; os módulos de gestão permanecem locais no frontend.

O PostgreSQL guarda o histórico persistente da Caixa Unificada. A equipe não depende do computador de um integrante: o banco fica no servidor e o acesso humano é feito preferencialmente pelo **pgAdmin via HTTPS**.

## Arquitetura

```mermaid
flowchart TD
    TEAM["🧑‍💻 Equipe autorizada"] -->|HTTPS| PG["🗄️ pgAdmin"]
    PG --> DB[("🐘 PostgreSQL")]
    N8N["⚙️ n8n"] -->|socialmei_app| DB
    WEB["Webhooks"] --> N8N
```

A porta 5432 do PostgreSQL continua **sem publicação direta na internet**.

## Estrutura funcional

O schema `socialmei` é versionado em `database/schema.sql`:

```text
socialmei
├── clientes
├── conversas
└── mensagens
```

As tabelas internas do n8n permanecem separadas.

## Acesso web

pgAdmin:

`https://db.54-94-213-7.sslip.io`

O login é autenticado. Contas humanas devem ser individuais e criadas somente para quem precisar.

Veja também [ACESSOS.md](./ACESSOS.md).

## Roles atuais

| Role              | Uso                                       | Princípio                                                   |
| ----------------- | ----------------------------------------- | ----------------------------------------------------------- |
| `socialmei_admin` | manutenção estrutural do schema funcional | administrativo, uso restrito                                |
| `socialmei_app`   | n8n / automações                          | leitura e escrita funcional sem privilégios administrativos |

As senhas não ficam no GitHub.

## Arquivos reproduzíveis

- `database/bootstrap.sql` — prepara o schema com a role administrativa já criada;
- `database/schema.sql` — cria tabelas, índices e restrições;
- `database/permissions.sql` — aplica permissões da role técnica de automação.

Em ambiente **novo e isolado**, crie `socialmei_admin` e defina a senha interativamente (`\password socialmei_admin`) usando um administrador. Aplique bootstrap com administrador, schema como `socialmei_admin` e permissions com administrador. As tabelas precisam pertencer a `socialmei_admin` para que seus default privileges se apliquem às próximas tabelas.

Esses arquivos citam o banco `n8n`; se `POSTGRES_DB` for outro, revise os grants antes de aplicar. O Compose não monta nem executa esses scripts automaticamente. A partir desta fase, novas mudanças estruturais devem entrar em `database/migrations/`.

A primeira migration, `001_initial_socialmei_schema.sql`, representa a estrutura funcional atualmente versionada e é idempotente. Em desenvolvimento local:

```bash
npm run dev
npm run db:status
npm run db:migrate
```

O executor registra versões em `socialmei.schema_migrations` no PostgreSQL local. Ele foi criado para o ambiente de desenvolvimento e **não aplica migrations automaticamente em produção**.

Os arquivos históricos `bootstrap.sql`, `schema.sql` e `permissions.sql` continuam como referência de bootstrap/roles. Novas alterações incrementais devem ser criadas como migrations numeradas:

```text
database/migrations/
  001_initial_socialmei_schema.sql
  002_nome_da_mudanca.sql
  003_outra_mudanca.sql
```

Uma migration aplicada nunca deve ser reescrita. Para corrigir algo, crie uma nova migration.

Estas migrations ainda não foram aplicadas automaticamente na produção. Aplicação em ambiente real exige backup, revisão e execução controlada. O workflow insere mensagens sem deduplicação de evento externo e retorna só as últimas 50 mensagens de entrada; veja [ARCHITECTURE.md](../ARCHITECTURE.md) e [ROADMAP.md](../ROADMAP.md).

## Alterando a estrutura

Mudanças relevantes devem ficar registradas no GitHub:

```text
branch → SQL/migration → revisão → teste → merge → backup → aplicar
```

Não faça uma mudança estrutural importante apenas pelo painel sem também versionar a alteração.

## Novos integrantes

Não é necessário criar acesso ao banco para todos antecipadamente. Quando alguém precisar:

1. crie uma conta individual no pgAdmin;
2. crie/atribua uma role PostgreSQL com o menor privilégio necessário, se for preciso acesso SQL próprio;
3. nunca compartilhe `socialmei_admin` como login coletivo;
4. documente a finalidade do acesso sem registrar a senha.

## Segurança

- não expor 5432;
- não publicar `.env`;
- não salvar senhas em documentação;
- não usar login administrativo em automações;
- fazer backup antes de migrations destrutivas;
- revisar SQL antes de produção;
- revogar acesso quando deixar de ser necessário.
