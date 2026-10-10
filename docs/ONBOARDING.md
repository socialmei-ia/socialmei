# Entrada da equipe

1. Leia o [README](../README.md) para identificar o estágio e os limites do produto.
2. Sirva a raiz com `python -m http.server 5500` e abra http://localhost:5500.
3. Edite `frontend/socialmei-app.html`, `frontend/scripts/` e `frontend/styles/socialmei.css`. As entradas antigas apenas redirecionam.
4. Consulte [DEVELOPMENT.md](../DEVELOPMENT.md), execute os testes e trabalhe em branch/PR.
5. Leia [PROJECT-REVIEW.md](../PROJECT-REVIEW.md) e [ROADMAP.md](../ROADMAP.md) antes de escolher a próxima tarefa.

## Responsabilidades

| Área           | Onde trabalhar                                                    |
| -------------- | ----------------------------------------------------------------- |
| Frontend       | `frontend/`; textos em português e novos nomes internos em inglês |
| API auxiliar   | `python-service/`                                                 |
| Automação      | `n8n-workflows/`, importando primeiro em teste                    |
| Banco          | `database/` e [BANCO-DE-DADOS.md](BANCO-DE-DADOS.md)              |
| Infraestrutura | Compose/Caddy e [DEPLOYMENT.md](../DEPLOYMENT.md)                 |
| Acesso         | [ACESSOS.md](ACESSOS.md) e [SECURITY.md](../SECURITY.md)          |

Não é necessário SSH/AWS para editar e testar o frontend. A aplicação possui login local demonstrativo; isso não concede acesso aos serviços remotos. Aplicação na VPS fica com os responsáveis autorizados.

Não versione `.env`, chaves, credenciais, dumps, screenshots com dados reais ou novos HTMLs de backup. O Git preserva as versões anteriores.


## Banco local e migrations

Depois de subir o ambiente:

```bash
npm run db:status
npm run db:migrate
```

Cada integrante aplica migrations somente no seu PostgreSQL local durante desenvolvimento.

Nunca use `npm run db:migrate` apontando para produção. O executor atual foi feito especificamente para o Compose local.
