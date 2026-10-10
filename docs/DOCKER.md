# Docker

O procedimento de preparação, publicação, atualização e rollback está em [DEPLOYMENT.md](../DEPLOYMENT.md).

`compose.yaml` define PostgreSQL, n8n, pgAdmin, Caddy, Python e WAHA. `compose.override.yaml` é uma entrada vazia de compatibilidade; não existe mais uma segunda definição WAHA.

## Diagnóstico

```bash
docker compose config --quiet
docker compose ps
docker compose logs --tail 100 NOME_DO_SERVICO
```

Para validar somente a estrutura com placeholders:

```bash
docker compose --env-file .env.example config --quiet
```

Evite publicar o resultado completo de `docker compose config`: ele pode conter valores do `.env`. A validação não verifica disponibilidade de imagens, credenciais, certificado ou saúde da VPS.

Caddy usa 80/443; PostgreSQL não publica 5432; o bind WAHA é `127.0.0.1:3000`. Username, password e API key WAHA são obrigatórios na configuração. A comunicação n8n → WAHA usa `http://waha:3000` e exige credencial conforme a versão instalada.

Não mude o project name nem apague volumes para aplicar uma revisão. `latest` ainda é dívida técnica; fixe versões depois de validá-las em teste. SQL/workflows não são inicializados automaticamente pelo Compose.

Mudanças seguem branch → PR → revisão → aplicação por responsável pela infraestrutura. Veja [ACESSOS.md](ACESSOS.md).
