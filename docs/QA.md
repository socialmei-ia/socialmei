# Validação da revisão técnica

## Executado em 10/10/2026

| Verificação                                              | Resultado                                                                                                                      |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Testes Node de dados, backups, temas, exports e recursos | 15 testes passaram.                                                                                                            |
| Contratos Python: rotas, modelo e respostas              | 3 testes passaram; preservados `/`, `/health`, `/processar` e chaves JSON.                                                     |
| Backup com Docker falso                                  | 5 testes passaram: sucesso, falha de dump, falha de archive, falha de restart e volume ausente. Não executam containers reais. |
| Comparação de extração JavaScript                        | AST de 22 módulos igual à fonte aprovada, excluindo comentários/formatação e declaração de configuração literal movida.        |
| Comparação da cascata CSS                                | 13.010 declarações preservadas em ordem/contexto/valor; uma media query adjacente consolidada.                                 |
| Assets extraídos                                         | Ícone e fonte com bytes idênticos aos data URIs da fonte aprovada; licença Inter preservada.                                   |
| Compose                                                  | `docker compose --env-file .env.example config --quiet` passou. Antes da correção, YAML inválido.                              |
| Shell                                                    | `bash -n backup.sh` passou.                                                                                                    |

Os testes são reproduzíveis pelos comandos do [DEVELOPMENT.md](../DEVELOPMENT.md). A comparação pontual AST/cascata foi feita contra o arquivo aprovado fornecido nesta sessão; SHA-256 e origem estão em [PROJECT-REVIEW.md](../PROJECT-REVIEW.md).

## Não executado neste ambiente

- Chromium não iniciou: sandbox bloqueou operação de socket do processo. A suíte `npm run test:browser` foi adicionada para CI/ambiente compatível, mas **não se considera aprovada por ter sido escrita**.
- Daemon Docker inacessível pelo socket local. A validação Compose foi possível sem daemon; build/containers, Caddy/TLS, PostgreSQL, n8n e WAHA não foram executados.
- Teste HTTP in-process por TestClient não concluiu neste ambiente; os testes Python executados são de modelo/função/rotas, sem alegar um teste HTTP completo.
- Sem acesso à VPS/serviços externos: nenhuma mensagem enviada, credencial validada, workflow ativado, consulta SQL aplicada, sessão WAHA iniciada ou backup real produzido.
- Git via shell não alcançou o proxy configurado. A leitura pelo conector GitHub confirmou o HEAD, mas `create_branch` foi bloqueado: a ferramenta exige aprovação e a política do ambiente é `never`. Os cinco commits existem somente no checkout local; não houve push, PR ou execução do CI remoto.

## Gate antes do merge/deploy

O CI deve executar formatação, contratos e a regressão de navegador: 11 módulos × 4 larguras × claro/escuro, além dos fluxos locais de CRUD/auth/onboarding/backup/Assistente. Capturas e resumo ficam em `test-results/`, publicados como artifact do job.

Revisão manual complementar: landing e animações com movimento normal, formulários nos quatro tamanhos, tema custom, teclado/foco, filtros/estados vazios do Inbox, modais/drawers e conservação dos dados já existentes. Os testes offline não substituem homologação da integração remota.

Não há baseline visual novo aprovado nem resultado de integração externa nesta revisão. Se o CI falhar, ajuste a implementação/teste com evidência antes do merge, sem tratar a falha como ruído.
