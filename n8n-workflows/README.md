# Workflows n8n

| Grupo | Arquivos | Uso |
| --- | --- | --- |
| `producao/` | `01-caixa-unificada-api-postgresql.json` | Candidato oficial de entrada/leitura de histórico, export inativo e sem credenciais. O nome da pasta não comprova deploy. |
| `examples/` | `hello-world.json`, `process-text.json` | Exercícios HTTP e chamada da API Python interna. |
| `experimental/` | `instagram-agent.json`, `instagram-webhook-challenge.json` | Experimentos Meta/Gemini. Selecionar credenciais Gemini e HTTP Header Auth após importar. |
| `experimental/` | `scheduled-request-draft.json` | Possível legado — revisar manualmente. Requisição agendada sem destino configurado; preservada sem ativação. |

Os antigos arquivos `error.json`, `my-workflow.json`, `integracao-n8n-insta.json` e `teste-python.json` foram movidos para nomes descritivos. Seus grafos úteis foram preservados; metadados da instância, dados fixados e autenticação literal foram retirados.

## Entrada e leitura PostgreSQL

Credencial técnica: `socialmei_app`, host `postgres`, porta 5432, banco configurado no ambiente. Selecione a credencial nos dois nós PostgreSQL. O schema deve existir antes da execução.

POST aceita campos como:

```json
{
  "cliente": "Cliente de teste",
  "cliente_id": "customer-test-1",
  "conversa_id": "conversation-test-1",
  "canal": "whatsapp",
  "mensagem": "Olá",
  "horario": "2026-10-10T12:00:00Z"
}
```

O caminho POST versionado é `6404b870-1c8c-4633-b487-6c3971775934`; GET usa `5f82c1c2-99de-43f4-9578-42f3aa901fcf`, também configurado no frontend. Use as URLs de teste/produção fornecidas pelo seu n8n. Não envie essa amostra à VPS compartilhada durante testes locais.

GET retorna `status`, `total` e `mensagens` com `id`, `cliente`, `canal`, `mensagem`, `horario`. Retorna apenas as últimas 50 mensagens de entrada. `since` não é implementado. Reenvios não são deduplicados por identificador de mensagem; autenticação, CORS restrito e IDs estáveis são pendências P0.

## Instagram

Os grafos experimentais não são uma integração completa. O fluxo de challenge tem componentes de agente desconectados; o agente Instagram tem um nó de resposta separado do caminho de mensagens. Modelos, permissões Meta, versões de API e payload precisam ser validados antes de uso. Não ative exports automaticamente.

Os cabeçalhos Authorization literais antigos foram removidos. Configure credencial **HTTP Header Auth** no n8n; segredos permanecem no gerenciador de credenciais, não nos JSONs. Se os valores antigos eram válidos, o responsável deve revogá-los: limpar o arquivo atual não remove histórico Git.

## Alterar e testar

Importe em ambiente isolado, selecione credenciais, confira nós e queries, teste com dados fictícios e só depois publique. Exporte novamente com `active: false`, sem dados fixados e sem referências de credenciais da instância. Rode `npm test` para validar JSON e normalização; isso não executa SQL nem serviços remotos.
