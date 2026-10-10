# GitHub da equipe — configuração recomendada

Este arquivo descreve as configurações administrativas que não ficam no código do repositório.

## 1. Proteger a branch main

No GitHub, abra:

**Settings → Rules → Rulesets → New branch ruleset**

Use um ruleset para `main` com:

- Target branches: `main`;
- Restrict deletions;
- Block force pushes;
- Require a pull request before merging;
- Require at least 1 approval;
- Dismiss stale approvals when new commits are pushed;
- Require conversation resolution before merging;
- Require status checks to pass.

Checks atuais recomendados:

- `validate`;
- `browser`.

Não permita bypass para desenvolvedores comuns. Mantenha bypass apenas para responsáveis administrativos quando realmente necessário.

## 2. Acesso da equipe

Cada integrante deve usar sua própria conta GitHub.

Fluxo:

```text
branch pessoal
  -> Pull Request
  -> CI
  -> revisão
  -> merge main
```

O arquivo `.github/CODEOWNERS` já marca `@socialmei-ia` como responsável inicial. Quando a equipe tiver uma GitHub Organization, substitua por um time, por exemplo:

```text
* @SocialMEI/team-dev
/database/ @SocialMEI/team-backend
/.github/ @SocialMEI/team-infra
```

## 3. Environment de produção

Crie:

**Settings → Environments → New environment → production**

Recomendado:

- required reviewers: pelo menos 1 responsável;
- impedir self-review quando disponível;
- restringir deploy à branch `main`.

Cadastre estes secrets no environment `production`:

| Secret               | Conteúdo                                                   |
| -------------------- | ---------------------------------------------------------- |
| `DEPLOY_HOST`        | host/IP público da VPS                                     |
| `DEPLOY_USER`        | usuário Linux dedicado para deploy                         |
| `DEPLOY_PATH`        | diretório do checkout na VPS, ex. `/home/ubuntu/socialmei` |
| `DEPLOY_SSH_KEY`     | chave privada exclusiva do robô de deploy                  |
| `DEPLOY_KNOWN_HOSTS` | linha validada do host para `~/.ssh/known_hosts`           |

Não use a chave privada pessoal de um integrante como `DEPLOY_SSH_KEY`.

## 4. Chave dedicada de deploy

Na máquina de administração, gere um par exclusivo:

```bash
ssh-keygen -t ed25519 -C "socialmei-github-deploy" -f socialmei-github-deploy
```

- chave pública: autorize somente no usuário Linux de deploy da VPS;
- chave privada: salve somente no secret `DEPLOY_SSH_KEY`;
- nunca faça commit de nenhuma das duas.

O usuário de deploy precisa conseguir:

- acessar o diretório do projeto;
- executar `git fetch/pull`;
- executar `docker compose`.

Acesso ao grupo `docker` equivale, na prática, a privilégio administrativo na máquina. Restrinja esse usuário e essa chave.

## 5. Known hosts

Cole em `DEPLOY_KNOWN_HOSTS` a fingerprint/linha de host obtida por um canal confiável.

Não substitua isso por `StrictHostKeyChecking=no`.

## 6. Como fazer deploy

Depois de configurar o environment:

**Actions → Manual production deploy → Run workflow**

Selecione `main` e digite:

```text
DEPLOY
```

O workflow:

1. recusa execução fora da `main`;
2. usa a chave dedicada;
3. recusa deploy se a VPS tiver arquivos locais modificados;
4. executa `git pull --ff-only origin main`;
5. valida o Compose;
6. executa `docker compose up -d --build`;
7. mostra o estado dos containers.

Nesta fase o deploy é manual de propósito. Depois de algumas execuções estáveis, a equipe pode decidir se quer automatizar o deploy após o CI.

## 7. Próximo estágio

A evolução recomendada é:

```text
PR
 -> CI
 -> merge main
 -> staging automático
 -> validação
 -> aprovação
 -> produção
```

Antes disso, mantenha produção com aprovação humana.
