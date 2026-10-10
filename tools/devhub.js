/* ============================================
   CONFIGURAÇÕES DO MIKE — EDITE AQUI
   Dados, identidades e ajuda contextual.
   Preserve IDs para manter favoritos existentes.
   Guarde só caminhos; nunca conteúdo PEM, senhas ou tokens.
============================================ */
const PROJECT_INFO = {
  name: "Mike DevHub",
  credit: "Criado por Mike",
  projectName: "SocialMEI.IA",
  githubUrl: "https://github.com/socialmei-ia/SocialMEI-IA",
  dashboardUrl: "https://socialmei-ia.github.io/SocialMEI-IA/",
  branch: "main",
};

const PERSONAL_CONFIG = {
  vpsIp: "IP_DO_SERVIDOR",
  sshUser: "ubuntu",
  pemFile: "SUA_CHAVE.pem",
  serverPath: "/home/ubuntu/socialmei",
  dbUser: "USUARIO",
  dbName: "BANCO",
  dashboardUrl: "https://socialmei-ia.github.io/SocialMEI-IA/",
  githubUrl: "https://github.com/socialmei-ia/SocialMEI-IA",
  n8nUrl: "https://socialmei.54-94-213-7.sslip.io/home/workflows",
  pgadminUrl: "https://db.54-94-213-7.sslip.io",
  trelloUrl: "",
  awsResourceUrl: "",
  keyPairName: "",
};

const QUICK_LINKS = [
  {
    id: "dashboard",
    title: "Abrir Dashboard",
    url: "https://socialmei-ia.github.io/SocialMEI-IA/",
    group: "Projeto",
    category: "Dashboard",
    description: "Interface pública do SocialMEI.IA.",
    aliases: ["dashboard", "painel", "site do projeto"],
    config: "dashboardUrl",
  },
  {
    id: "github",
    title: "Abrir GitHub",
    url: "https://github.com/socialmei-ia/SocialMEI-IA",
    group: "Projeto",
    category: "Git",
    description: "Repositório do projeto.",
    aliases: ["github", "repositorio", "codigo"],
    config: "githubUrl",
  },
  {
    id: "pages",
    title: "Abrir GitHub Pages",
    url: "https://socialmei-ia.github.io/SocialMEI-IA/",
    group: "Projeto",
    category: "Dashboard",
    description: "Versão publicada do dashboard.",
    aliases: ["pages", "pagina publicada"],
  },
  {
    id: "pages-settings",
    title: "Configurar GitHub Pages",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/settings/pages",
    group: "Projeto",
    category: "Deploy",
    description: "Configuração de publicação; requer acesso ao repo.",
    aliases: ["publicar dashboard", "pages settings"],
  },
  {
    id: "trello",
    title: "Abrir Trello",
    url: "",
    group: "Projeto",
    category: "Projeto",
    description: "Seu quadro de tarefas.",
    aliases: ["trello", "tarefas", "kanban"],
    config: "trelloUrl",
  },
  {
    id: "aws",
    title: "Abrir AWS Console",
    url: "https://console.aws.amazon.com/",
    group: "Infraestrutura",
    category: "AWS",
    description: "Console da sua conta AWS.",
    aliases: ["aws", "amazon", "console"],
  },
  {
    id: "ec2",
    title: "Abrir AWS EC2",
    url: "https://console.aws.amazon.com/ec2/",
    group: "Infraestrutura",
    category: "AWS",
    description: "Instâncias, IPs e Security Groups.",
    aliases: ["ec2", "vps", "servidor", "ip", "security group"],
  },
  {
    id: "aws-resource",
    title: "Abrir instância do projeto",
    url: "",
    group: "Infraestrutura",
    category: "AWS",
    description: "Atalho opcional para sua instância.",
    aliases: ["instancia", "servidor aws"],
    config: "awsResourceUrl",
  },
  {
    id: "n8n",
    title: "Abrir n8n",
    url: "https://socialmei.54-94-213-7.sslip.io/home/workflows",
    group: "Infraestrutura",
    category: "n8n",
    description: "Workflows e execuções.",
    aliases: ["n8n", "abrir n8n", "workflow", "executions"],
    config: "n8nUrl",
  },
  {
    id: "pgadmin",
    title: "Abrir pgAdmin",
    url: "https://db.54-94-213-7.sslip.io",
    group: "Infraestrutura",
    category: "PostgreSQL",
    description: "Administração visual do banco.",
    aliases: ["pgadmin", "banco", "postgres"],
    config: "pgadminUrl",
  },
  {
    id: "docker-site",
    title: "Abrir Docker",
    url: "https://www.docker.com/",
    group: "Infraestrutura",
    category: "Docker",
    description: "Ferramentas oficiais Docker.",
    aliases: ["docker"],
  },
  {
    id: "docker-docs",
    title: "Docker Docs",
    url: "https://docs.docker.com/",
    group: "Documentação",
    category: "Docker",
    description: "Documentação oficial.",
    aliases: ["docker", "docs", "documentacao"],
  },
  {
    id: "n8n-docs",
    title: "n8n Docs",
    url: "https://docs.n8n.io/",
    group: "Documentação",
    category: "n8n",
    description: "Documentação oficial.",
    aliases: ["n8n", "docs", "documentacao"],
  },
  {
    id: "postgres-docs",
    title: "PostgreSQL Docs",
    url: "https://www.postgresql.org/docs/16/",
    group: "Documentação",
    category: "PostgreSQL",
    description: "Documentação oficial.",
    aliases: ["postgresql", "docs", "documentacao"],
  },
  {
    id: "caddy-docs",
    title: "Caddy Docs",
    url: "https://caddyserver.com/docs/",
    group: "Documentação",
    category: "Caddy",
    description: "Documentação oficial.",
    aliases: ["caddy", "docs", "documentacao"],
  },
  {
    id: "download-docker",
    title: "Docker Desktop",
    url: "https://www.docker.com/products/docker-desktop/",
    group: "Instalar ferramentas",
    category: "Docker",
    description: "Download oficial.",
    aliases: ["docker desktop", "instalar", "baixar"],
  },
  {
    id: "download-python",
    title: "Python",
    url: "https://www.python.org/downloads/",
    group: "Instalar ferramentas",
    category: "Python",
    description: "Download oficial.",
    aliases: ["python", "instalar", "baixar"],
  },
  {
    id: "download-git",
    title: "Git",
    url: "https://git-scm.com/downloads/",
    group: "Instalar ferramentas",
    category: "Git",
    description: "Download oficial.",
    aliases: ["git", "instalar", "baixar"],
  },
  {
    id: "download-code",
    title: "VS Code",
    url: "https://code.visualstudio.com/download",
    group: "Instalar ferramentas",
    category: "Projeto",
    description: "Download oficial.",
    aliases: ["vs code", "instalar", "baixar"],
  },
  {
    id: "compose-file",
    title: "Abrir compose.yaml",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/blob/main/compose.yaml",
    group: "Arquivos do projeto",
    category: "Docker Compose",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: ["abrir compose.yaml", "compose.yaml"],
  },
  {
    id: "override-file",
    title: "Abrir compose.override.yaml",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/blob/main/compose.override.yaml",
    group: "Arquivos do projeto",
    category: "Docker Compose",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: ["abrir compose.override.yaml", "compose.override.yaml"],
  },
  {
    id: "dashboard-file",
    title: "Editar dashboard no GitHub",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/blob/main/frontend/socialmei-app.html",
    group: "Arquivos do projeto",
    category: "Dashboard",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: ["editar dashboard no github", "frontend/socialmei-app.html"],
  },
  {
    id: "workflow-file",
    title: "Abrir JSON do workflow",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/blob/main/n8n-workflows/producao/01-caixa-unificada-api-postgresql.json",
    group: "Arquivos do projeto",
    category: "n8n",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: [
      "abrir json do workflow",
      "n8n-workflows/producao/01-caixa-unificada-api-postgresql.json",
    ],
  },
  {
    id: "sql-files",
    title: "Abrir arquivos SQL",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/tree/main/database",
    group: "Arquivos do projeto",
    category: "PostgreSQL",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: ["abrir arquivos sql", "database"],
  },
  {
    id: "backup-file",
    title: "Revisar backup.sh",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/blob/main/backup.sh",
    group: "Arquivos do projeto",
    category: "Deploy",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: ["revisar backup.sh", "backup.sh"],
  },
  {
    id: "caddy-file",
    title: "Abrir Caddyfile",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/blob/main/Caddyfile",
    group: "Arquivos do projeto",
    category: "Caddy",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: ["abrir caddyfile", "Caddyfile"],
  },
  {
    id: "checks-file",
    title: "Ver verificações do repositório",
    url: "https://github.com/socialmei-ia/SocialMEI-IA/blob/main/.github/workflows/repository-checks.yml",
    group: "Arquivos do projeto",
    category: "Deploy",
    description: "Arquivo versionado; alterações seguem PR.",
    aliases: ["ver verificações do repositório", ".github/workflows/repository-checks.yml"],
  },
  {
    id: "aws-key-docs",
    title: "Key Pairs AWS",
    url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",
    group: "Documentação",
    category: "AWS",
    description: "Orientação oficial; nenhuma ação automática.",
    aliases: ["chave pem", "key pair", "aws ssh"],
  },
  {
    id: "aws-create-key",
    title: "Criar Key Pair · documentação",
    url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html",
    group: "Documentação",
    category: "AWS",
    description: "Orientação oficial; nenhuma ação automática.",
    aliases: ["chave pem", "key pair", "aws ssh"],
  },
  {
    id: "aws-key-identify",
    title: "Identificar Key Pair",
    url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/describe-keys.html",
    group: "Documentação",
    category: "AWS",
    description: "Orientação oficial; nenhuma ação automática.",
    aliases: ["chave pem", "key pair", "aws ssh"],
  },
  {
    id: "aws-ssh-help",
    title: "Diagnóstico SSH AWS",
    url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html",
    group: "Documentação",
    category: "SSH",
    description: "Orientação oficial; nenhuma ação automática.",
    aliases: ["chave pem", "key pair", "aws ssh"],
  },
  {
    id: "aws-replace-key",
    title: "Adicionar chave pública autorizada",
    url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-key-pair.html",
    group: "Documentação",
    category: "SSH",
    description: "Orientação oficial; nenhuma ação automática.",
    aliases: ["chave pem", "key pair", "aws ssh"],
  },
  {
    id: "windows-key-help",
    title: "Permissões PEM · Microsoft",
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls",
    group: "Documentação",
    category: "PowerShell",
    description: "Orientação oficial; nenhuma ação automática.",
    aliases: ["permissao chave", "icacls"],
  },
];

const COMMANDS = [
  {
    id: "clone",
    title: "Clonar o projeto",
    category: "PowerShell",
    context: "PowerShell",
    description: "Baixa arquivos e histórico em uma nova pasta.",
    code: "git clone https://github.com/socialmei-ia/SocialMEI-IA.git",
    risk: "safe",
    when: "Primeira cópia neste computador.",
    result: "Uma pasta SocialMEI-IA.",
    warning: "",
    aliases: [],
  },
  {
    id: "cdpc",
    title: "Entrar na cópia local",
    category: "PowerShell",
    context: "PowerShell",
    description: "Muda a pasta atual do PowerShell.",
    code: 'Set-Location "SocialMEI-IA"',
    risk: "safe",
    when: "Após clonar, a partir da pasta que contém o projeto.",
    result: "O prompt termina com SocialMEI-IA.",
    warning: "",
    aliases: [],
  },
  {
    id: "serve",
    title: "Abrir servidor local",
    category: "PowerShell",
    context: "PowerShell",
    description: "Serve arquivos apenas neste computador.",
    code: "python -m http.server 5500 --bind 127.0.0.1",
    risk: "safe",
    when: "Na raiz do checkout; Python 3 precisa estar instalado.",
    result: "Abra http://localhost:5500/ para testar o dashboard.",
    warning: "",
    aliases: [],
  },
  {
    id: "ps-pwd",
    title: "Ver a pasta atual",
    category: "PowerShell",
    context: "PowerShell",
    description: "Mostra onde os próximos comandos serão executados.",
    code: "Get-Location",
    risk: "safe",
    when: "No PC; confira a pasta e os nomes dos arquivos.",
    result: "Caminho da pasta.",
    warning: "",
    aliases: [],
  },
  {
    id: "ps-dir",
    title: "Listar arquivos",
    category: "PowerShell",
    context: "PowerShell",
    description: "Lista arquivos e subpastas.",
    code: "Get-ChildItem",
    risk: "safe",
    when: "No PC; confira a pasta e os nomes dos arquivos.",
    result: "Lista com nomes e tipos.",
    warning: "",
    aliases: [],
  },
  {
    id: "ps-cls",
    title: "Limpar a tela",
    category: "PowerShell",
    context: "PowerShell",
    description: "Limpa somente a exibição do terminal.",
    code: "Clear-Host",
    risk: "safe",
    when: "No PC; confira a pasta e os nomes dos arquivos.",
    result: "Tela limpa, arquivos intactos.",
    warning: "",
    aliases: [],
  },
  {
    id: "ps-mkdir",
    title: "Criar pasta",
    category: "PowerShell",
    context: "PowerShell",
    description: "Cria uma pasta vazia.",
    code: 'New-Item -ItemType Directory -Path "minha-pasta"',
    risk: "safe",
    when: "No PC; confira a pasta e os nomes dos arquivos.",
    result: "A pasta minha-pasta aparece.",
    warning: "",
    aliases: [],
  },
  {
    id: "ps-copy",
    title: "Copiar arquivo",
    category: "PowerShell",
    context: "PowerShell",
    description: "Duplica um arquivo.",
    code: 'Copy-Item "anotacao.txt" "anotacao-copia.txt"',
    risk: "attention",
    when: "No PC; confira a pasta e os nomes dos arquivos.",
    result: "Dois arquivos distintos.",
    warning: "",
    aliases: [],
  },
  {
    id: "ps-move",
    title: "Mover arquivo",
    category: "PowerShell",
    context: "PowerShell",
    description: "Move a cópia para outra pasta.",
    code: 'Move-Item "anotacao-copia.txt" "minha-pasta/"',
    risk: "attention",
    when: "No PC; confira a pasta e os nomes dos arquivos.",
    result: "A cópia passa a estar em minha-pasta.",
    warning: "",
    aliases: [],
  },
  {
    id: "ps-del",
    title: "Prévia de remoção",
    category: "PowerShell",
    context: "PowerShell",
    description: "Mostra o que seria removido; -WhatIf não apaga.",
    code: 'Remove-Item "anotacao-copia.txt" -WhatIf',
    risk: "attention",
    when: "No PC; confira a pasta e os nomes dos arquivos.",
    result: "Mensagem What if com o caminho afetado.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-status",
    title: "Consultar alterações",
    category: "Git",
    context: "PowerShell",
    description: "Mostra branch, arquivos alterados e o que está preparado para commit.",
    code: "git status",
    risk: "safe",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Estado claro do checkout.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-switch",
    title: "Ir para main",
    category: "Git",
    context: "PowerShell",
    description: "Troca para a branch principal.",
    code: "git switch main",
    risk: "attention",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Switched to branch main.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-pull",
    title: "Atualizar projeto local",
    category: "Git",
    context: "PowerShell",
    description: "Atualiza somente quando é possível avançar sem conflito de histórico.",
    code: "git pull --ff-only origin main",
    risk: "attention",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Atualizado ou Already up to date.",
    warning: "",
    aliases: ["git pull", "atualizar projeto", "baixar alteracoes"],
  },
  {
    id: "git-branch",
    title: "Criar branch",
    category: "Git",
    context: "PowerShell",
    description: "Cria uma linha de trabalho a partir do commit atual.",
    code: "git switch -c feat/minha-alteracao",
    risk: "safe",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Nova branch ativa.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-diff",
    title: "Revisar mudanças",
    category: "Git",
    context: "PowerShell",
    description: "Mostra mudanças ainda não preparadas nesses arquivos.",
    code: "git diff",
    risk: "safe",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Diferenças de texto; arquivos novos não aparecem até serem adicionados.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-add",
    title: "Preparar arquivos escolhidos",
    category: "Git",
    context: "PowerShell",
    description: "Prepara apenas os arquivos que você escolheu.",
    code: "git add CAMINHO_DO_ARQUIVO",
    risk: "attention",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "git diff --cached mostra o conteúdo preparado.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-cached",
    title: "Conferir o que será commitado",
    category: "Git",
    context: "PowerShell",
    description: "Mostra o conteúdo preparado, inclusive arquivos novos.",
    code: "git diff --cached",
    risk: "safe",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Somente mudanças desejadas e nenhum segredo.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-commit",
    title: "Registrar uma versão",
    category: "Git",
    context: "PowerShell",
    description: "Cria um commit local com os arquivos preparados.",
    code: 'git commit -m "feat: atualiza projeto"',
    risk: "attention",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Hash curto e resumo das mudanças.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-push",
    title: "Enviar branch para GitHub",
    category: "Git",
    context: "PowerShell",
    description: "Envia seus commits da branch para o GitHub.",
    code: "git push -u origin feat/minha-alteracao",
    risk: "attention",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Branch remota e opção de abrir PR.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-fetch",
    title: "Consultar histórico remoto",
    category: "Git",
    context: "PowerShell",
    description: "Baixa referências remotas sem alterar seus arquivos de trabalho.",
    code: "git fetch origin",
    risk: "safe",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Referências atualizadas.",
    warning: "",
    aliases: [],
  },
  {
    id: "git-unstage",
    title: "Retirar arquivo do próximo commit",
    category: "Git",
    context: "PowerShell",
    description: "Retira da área preparada, preservando o arquivo local.",
    code: "git restore --staged CAMINHO_DO_ARQUIVO",
    risk: "safe",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Arquivo aparece como não preparado.",
    warning: "",
    aliases: [],
  },
  {
    id: "ssh-connect",
    title: "Acessar VPS",
    category: "SSH",
    context: "PowerShell",
    description: "Abre uma sessão SSH no servidor.",
    code: 'ssh -i "CAMINHO_DA_CHAVE.pem" ubuntu@IP_DO_SERVIDOR',
    risk: "attention",
    when: "No PowerShell. Ajuste IP, usuário e caminho da chave em Configurações.",
    result: "Prompt remoto do Ubuntu; exit volta ao PC.",
    warning: "",
    aliases: [
      "vps",
      "ssh",
      "entrar servidor",
      "acessar servidor",
      "abrir vps",
      "entrar vps",
      "comando vps",
      "aws",
      "ec2",
    ],
    template: "ssh",
  },
  {
    id: "ssh-key",
    title: "Gerar chave individual",
    category: "SSH",
    context: "PowerShell",
    description: "Gera um par de chaves pessoal.",
    code: 'ssh-keygen -t ed25519 -C "nome-socialmei"',
    risk: "attention",
    when: "Novo integrante com acesso SSH aprovado.",
    result: "Chave privada e arquivo .pub no caminho escolhido.",
    warning: "",
    aliases: [],
  },
  {
    id: "ssh-exit",
    title: "Voltar ao seu PC",
    category: "SSH",
    context: "SSH",
    description: "Fecha a sessão SSH atual.",
    code: "exit",
    risk: "safe",
    when: "Quando terminou a manutenção.",
    result: "O prompt local PowerShell retorna.",
    warning: "",
    aliases: [],
  },
  {
    id: "scp",
    title: "Enviar arquivo ao VPS",
    category: "SSH",
    context: "PowerShell",
    description: "Copia um arquivo do PC para o servidor.",
    code: 'scp -i "CAMINHO_DA_CHAVE.pem" "anotacao.txt" USUARIO@IP_DO_SERVIDOR:~/anotacao.txt',
    risk: "attention",
    when: "Confira arquivo e destino; um nome repetido pode sobrescrever.",
    result: "Arquivo transferido para a pasta pessoal remota.",
    warning: "",
    aliases: [],
    template: "scp",
  },
  {
    id: "linux-path",
    title: "Confirmar pasta",
    category: "Linux",
    context: "SSH",
    description: "Exibe a pasta atual.",
    code: "pwd",
    risk: "safe",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Caminho absoluto.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-list",
    title: "Listar inclusive ocultos",
    category: "Linux",
    context: "SSH",
    description: "Lista nomes, permissões e arquivos ocultos sem abrir conteúdo.",
    code: "ls -la",
    risk: "safe",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Arquivos e pastas.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-cd",
    title: "Entrar na pasta do projeto",
    category: "Linux",
    context: "SSH",
    description: "Muda para o caminho documentado em backup.sh.",
    code: "cd /home/ubuntu/socialmei",
    risk: "attention",
    when: "Caminho registrado em backup.sh; confirme se vale para seu servidor.",
    result: "Confira a pasta com pwd e ls -la.",
    warning: "",
    aliases: [],
    template: "serverPath",
  },
  {
    id: "linux-cat",
    title: "Ler o README",
    category: "Linux",
    context: "SSH",
    description: "Exibe documentação pública.",
    code: "cat README.md",
    risk: "safe",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Texto do README.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-grep",
    title: "Buscar serviços no Compose",
    category: "Linux",
    context: "SSH",
    description: "Localiza os nomes de containers.",
    code: "grep -n 'container_name' compose.yaml compose.override.yaml",
    risk: "safe",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Linhas numeradas com nomes.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-tail",
    title: "Ver final de arquivo",
    category: "Linux",
    context: "SSH",
    description: "Exibe as últimas 20 linhas.",
    code: "tail -n 20 anotacao.txt",
    risk: "safe",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Final do arquivo.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-nano",
    title: "Editar anotação",
    category: "Linux",
    context: "SSH",
    description: "Abre editor de terminal.",
    code: "nano anotacao.txt",
    risk: "attention",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Tela do nano.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-mkdir",
    title: "Criar diretório",
    category: "Linux",
    context: "SSH",
    description: "Cria pasta sem remover as existentes.",
    code: "mkdir -p minha-pasta",
    risk: "safe",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Pasta criada ou já existente.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-cp",
    title: "Copiar arquivo",
    category: "Linux",
    context: "SSH",
    description: "Copia e pergunta antes de sobrescrever.",
    code: "cp -i anotacao.txt anotacao-copia.txt",
    risk: "attention",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Cópia do arquivo.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-mv",
    title: "Mover arquivo",
    category: "Linux",
    context: "SSH",
    description: "Move e pergunta antes de sobrescrever.",
    code: "mv -i anotacao-copia.txt minha-pasta/",
    risk: "attention",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Arquivo no destino.",
    warning: "",
    aliases: [],
  },
  {
    id: "linux-rm",
    title: "Remover arquivo",
    category: "Linux",
    context: "SSH",
    description: "Pergunta antes de apagar o arquivo indicado.",
    code: "rm -i minha-pasta/anotacao-copia.txt",
    risk: "danger",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Pedido de confirmação; apaga se responder sim.",
    warning:
      "Comandos de leitura não mudam arquivos. Para edições/remoção, restaure de cópia verificada; rm não tem desfazer automático.",
    aliases: [],
  },
  {
    id: "linux-clear",
    title: "Limpar tela",
    category: "Linux",
    context: "SSH",
    description: "Limpa a tela do shell.",
    code: "clear",
    risk: "safe",
    when: "No servidor; confirme pwd e os caminhos antes de alterar arquivos.",
    result: "Tela limpa.",
    warning: "",
    aliases: [],
  },
  {
    id: "docker-ps",
    title: "Ver containers",
    category: "Docker",
    context: "SSH",
    description: "Mostra os containers ativos.",
    code: "docker ps",
    risk: "safe",
    when: "No host Docker, via SSH.",
    result: "Lista com nomes, estado e portas.",
    warning: "",
    aliases: [
      "docker",
      "containers",
      "ver containers",
      "ver conteineres",
      "vps",
      "servicos rodando",
    ],
  },
  {
    id: "docker-all",
    title: "Ver todos os containers",
    category: "Docker",
    context: "SSH",
    description: "Inclui os containers que estão parados.",
    code: "docker ps -a",
    risk: "safe",
    when: "Serviço ausente de docker ps.",
    result: "Estados Exited ou Restarting ajudam no diagnóstico.",
    warning: "",
    aliases: ["container parado", "docker ps a"],
  },
  {
    id: "docker-shell",
    title: "Abrir shell no n8n",
    category: "Docker",
    context: "SSH",
    description: "Abre um shell dentro do container existente.",
    code: "docker exec -it socialmei-n8n sh",
    risk: "attention",
    when: "Diagnóstico autorizado; não faça instalações manuais.",
    result: "Prompt de shell interno.",
    warning: "",
    aliases: [],
  },
  {
    id: "container-exit",
    title: "Sair do container",
    category: "Docker",
    context: "Container",
    description: "Fecha o shell aberto com exec.",
    code: "exit",
    risk: "safe",
    when: "Após uma inspeção.",
    result: "Prompt do host retorna.",
    warning: "",
    aliases: [],
  },
  {
    id: "compose-ps",
    title: "Ver estado do Compose",
    category: "Docker Compose",
    context: "SSH",
    description: "Lista containers do projeto Compose.",
    code: "docker compose ps",
    risk: "safe",
    when: "Diagnóstico no host e projeto corretos.",
    result: "Cinco serviços se todos foram criados.",
    warning: "",
    aliases: ["ver compose", "status servicos", "docker"],
  },
  {
    id: "compose-services",
    title: "Listar nomes dos serviços",
    category: "Docker Compose",
    context: "SSH",
    description: "Lista somente nomes da configuração combinada.",
    code: "docker compose config --services",
    risk: "safe",
    when: "Diagnóstico no host e projeto corretos.",
    result: "postgres, n8n, pgadmin, caddy, python-api.",
    warning: "",
    aliases: [],
  },
  {
    id: "compose-validate",
    title: "Validar configuração sem expor valores",
    category: "Docker Compose",
    context: "SSH",
    description: "Valida configuração sem imprimir o .env resolvido.",
    code: "docker compose config --quiet",
    risk: "safe",
    when: "Diagnóstico no host e projeto corretos.",
    result: "Sem saída com código de saída zero.",
    warning: "",
    aliases: [],
  },
  {
    id: "compose-up",
    title: "Criar ou atualizar os serviços",
    category: "Docker Compose",
    context: "SSH",
    description: "Aplica a configuração e mantém execução em segundo plano.",
    code: "docker compose up -d",
    risk: "attention",
    when: "Na pasta do Compose revisado; pode recriar serviços e causar interrupção.",
    result: "Containers criados/iniciados; confira ps e logs.",
    warning: "",
    aliases: [],
  },
  {
    id: "compose-build",
    title: "Reconstruir a API Python",
    category: "Docker Compose",
    context: "SSH",
    description: "Reconstrói a imagem local e atualiza a API.",
    code: "docker compose up -d --build python-api",
    risk: "attention",
    when: "Na pasta do Compose, com override presente. Rebuild pode interromper a API.",
    result: "Novo container python-api saudável.",
    warning: "",
    aliases: [],
  },
  {
    id: "compose-logs",
    title: "Ler logs do projeto",
    category: "Docker Compose",
    context: "SSH",
    description: "Mostra até 100 linhas por serviço.",
    code: "docker compose logs --tail 100",
    risk: "safe",
    when: "Diagnóstico no host e projeto corretos.",
    result: "Mensagens recentes; podem conter dados sensíveis.",
    warning: "",
    aliases: [],
  },
  {
    id: "compose-follow",
    title: "Acompanhar logs do n8n",
    category: "Docker Compose",
    context: "SSH",
    description: "Segue novos logs do n8n.",
    code: "docker compose logs -f --tail 100 n8n",
    risk: "safe",
    when: "Diagnóstico no host e projeto corretos.",
    result: "Fluxo contínuo de mensagens.",
    warning: "",
    aliases: [],
  },
  {
    id: "compose-down",
    title: "Parar e remover containers do projeto",
    category: "Docker Compose",
    context: "SSH",
    description: "Remove containers e rede do projeto, preservando volumes nomeados por padrão.",
    code: "docker compose down",
    risk: "danger",
    when: "Somente responsável autorizado, na pasta e projeto confirmados.",
    result: "Serviços indisponíveis até recriação.",
    warning:
      "Interrompe TODOS os serviços e remove containers/redes do projeto. Dados na camada do container podem ser perdidos; revise volumes e backup.",
    aliases: [],
  },
  {
    id: "compose-downv",
    title: "Apagar volumes do projeto",
    category: "Docker Compose",
    context: "SSH",
    description: "Além de parar, remove os volumes gerenciados pelo projeto.",
    code: "docker compose down -v",
    risk: "danger",
    when: "Somente responsável autorizado, na pasta e projeto confirmados.",
    result: "Dados podem ser apagados definitivamente.",
    warning:
      "APAGA volumes do projeto, incluindo banco e dados n8n. Só prossiga com backup testado e confirmação de que o alvo pode ser perdido.",
    aliases: [],
  },
  {
    id: "n8n-stop",
    title: "Parar temporariamente o n8n",
    category: "n8n",
    context: "SSH",
    description: "Interrompe o serviço n8n sem apagar volumes.",
    code: "docker compose stop n8n",
    risk: "attention",
    when: "Manutenção autorizada com impacto informado.",
    result: "Estado Exited; webhooks ficam indisponíveis.",
    warning: "",
    aliases: [],
  },
  {
    id: "n8n-start",
    title: "Iniciar novamente o n8n",
    category: "n8n",
    context: "SSH",
    description: "Inicia o container n8n já criado.",
    code: "docker compose start n8n",
    risk: "attention",
    when: "Manutenção autorizada com impacto informado.",
    result: "Running; confira log e interface.",
    warning: "",
    aliases: [],
  },
  {
    id: "n8n-restart",
    title: "Reiniciar n8n",
    category: "n8n",
    context: "SSH",
    description: "Reinicia o serviço n8n; há uma breve interrupção.",
    code: "docker compose restart n8n",
    risk: "attention",
    when: "Via SSH, na pasta do Compose. Não aplica nova imagem nem novo .env.",
    result: "Serviço volta a iniciar; confirme status e logs.",
    warning: "",
    aliases: ["reiniciar n8n", "restart n8n", "n8n travou", "n8n parado", "reinicia n8n"],
  },
  {
    id: "n8n-logs",
    title: "Ler logs do n8n",
    category: "n8n",
    context: "SSH",
    description: "Consulta o container pelo nome completo.",
    code: "docker logs --tail 100 socialmei-n8n",
    risk: "safe",
    when: "Manutenção autorizada com impacto informado.",
    result: "Mensagens recentes do n8n.",
    warning: "",
    aliases: [],
  },
  {
    id: "new-service",
    title: "Aplicar somente um serviço novo",
    category: "Docker Compose",
    context: "SSH",
    description: "Cria/atualiza o serviço indicado sem iniciar dependências automaticamente.",
    code: "docker compose up -d --no-deps NOME_DO_SERVICO",
    risk: "attention",
    when: "Depois de revisão; dependências precisam estar ativas.",
    result: "Somente o serviço solicitado é aplicado.",
    warning: "",
    aliases: ["adicionar programa", "adicionar servico", "instalar servico"],
  },
  {
    id: "remove-container",
    title: "Remover container parado",
    category: "Docker Compose",
    context: "SSH",
    description: "Apaga o container e sua camada gravável; volumes são outra entidade.",
    code: "docker rm NOME_DO_CONTAINER_PARADO",
    risk: "danger",
    when: "Somente após confirmar backup, parada e fonte da configuração.",
    result: "Container deixa de aparecer em ps -a.",
    warning:
      "Compose pode recriar a partir da configuração; arquivos só na camada apagada podem ser perdidos.",
    aliases: [],
  },
  {
    id: "remove-image",
    title: "Remover imagem local",
    category: "Docker Compose",
    context: "SSH",
    description: "Remove uma imagem do armazenamento local.",
    code: "docker image rm IMAGEM:TAG",
    risk: "danger",
    when: "Manutenção planejada; verifique que ela não é necessária para rollback.",
    result: "Imagem removida se não estiver em uso.",
    warning:
      "Imagem publicada pode ser baixada novamente se ainda disponível; imagem local precisa de build.",
    aliases: [],
  },
  {
    id: "caddy-logs",
    title: "Ver logs do Caddy",
    category: "Caddy",
    context: "SSH",
    description: "Mostra erros do proxy e certificados.",
    code: "docker compose logs --tail 100 caddy",
    risk: "safe",
    when: "Site ou serviço web com erro.",
    result: "Mensagens com causa/horário; sanitize antes de compartilhar.",
    warning: "",
    aliases: [],
  },
  {
    id: "caddy-validate",
    title: "Validar Caddyfile montado",
    category: "Caddy",
    context: "SSH",
    description: "Valida a configuração no ambiente do container.",
    code: "docker compose exec caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile",
    risk: "safe",
    when: "Antes de recarregar arquivo revisado.",
    result: "Configuração válida; diagnóstico pode indicar erro.",
    warning: "",
    aliases: [],
  },
  {
    id: "caddy-reload",
    title: "Recarregar Caddyfile",
    category: "Caddy",
    context: "SSH",
    description: "Solicita recarga da configuração validada.",
    code: "docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile",
    risk: "attention",
    when: "Mudança no arquivo já revisada; não aplica nova variável de ambiente.",
    result: "Proxy usa nova configuração.",
    warning: "",
    aliases: [],
  },
  {
    id: "json-check",
    title: "Validar export antes de importar",
    category: "n8n",
    context: "PowerShell",
    description: "Verifica sintaxe JSON sem imprimir o conteúdo.",
    code: 'python -m json.tool "n8n-workflows/producao/01-caixa-unificada-api-postgresql.json" > $null',
    risk: "safe",
    when: "Antes de importar export editado; na raiz local.",
    result: "Sem saída e $LASTEXITCODE igual a 0.",
    warning: "",
    aliases: [],
  },
  {
    id: "psql-open",
    title: "Entrar no PostgreSQL",
    category: "PostgreSQL",
    context: "SSH",
    description: "Abre o cliente SQL no container do projeto.",
    code: "docker exec -it socialmei-postgres psql -U USUARIO -d BANCO",
    risk: "attention",
    when: "Substitua role e banco autorizados; não escreva senha no comando.",
    result: "Prompt BANCO=> ou equivalente.",
    warning: "",
    aliases: ["banco", "postgres", "postgresql", "entrar banco", "abrir banco", "acessar banco"],
    template: "psql",
  },
  {
    id: "psql-list",
    title: "Listar bancos",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Lista bancos existentes.",
    code: "\\l",
    risk: "safe",
    when: "Dentro do psql, no banco autorizado.",
    result: "Nomes dos bancos.",
    warning: "",
    aliases: [],
  },
  {
    id: "psql-connect",
    title: "Trocar banco",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Muda a conexão do cliente psql.",
    code: "\\c BANCO",
    risk: "safe",
    when: "Dentro do psql, no banco autorizado.",
    result: "Mensagem de nova conexão.",
    warning: "",
    aliases: [],
    template: "dbConnect",
  },
  {
    id: "psql-tables",
    title: "Listar tabelas funcionais",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Lista tabelas do schema socialmei.",
    code: "\\dt socialmei.*",
    risk: "safe",
    when: "Dentro do psql, no banco autorizado.",
    result: "clientes, conversas, mensagens se inicializadas.",
    warning: "",
    aliases: [],
  },
  {
    id: "psql-describe",
    title: "Descrever mensagens",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Mostra colunas, índices e relações.",
    code: "\\d socialmei.mensagens",
    risk: "safe",
    when: "Dentro do psql, no banco autorizado.",
    result: "Estrutura da tabela.",
    warning: "",
    aliases: [],
  },
  {
    id: "psql-select",
    title: "Consultar contagem sem dados pessoais",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Conta registros de mensagens.",
    code: "SELECT COUNT(*) FROM socialmei.mensagens;",
    risk: "safe",
    when: "Dentro do psql, no banco autorizado.",
    result: "Número de linhas da tabela.",
    warning: "",
    aliases: [],
  },
  {
    id: "psql-quit",
    title: "Sair do banco",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Fecha psql.",
    code: "\\q",
    risk: "safe",
    when: "Dentro do psql, no banco autorizado.",
    result: "Retorno ao host.",
    warning: "",
    aliases: [],
  },
  {
    id: "env-create",
    title: "Criar configuração sem sobrescrever",
    category: "PostgreSQL",
    context: "SSH",
    description: "Copia modelo e pergunta se .env já existe.",
    code: "cp -i .env.example .env",
    risk: "attention",
    when: "Ambiente novo, na raiz do checkout.",
    result: "Modelo criado; preencha em editor protegido.",
    warning: "",
    aliases: [],
  },
  {
    id: "role-create",
    title: "Criar role administrativa restrita",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Cria role de administração do schema sem privilégios globais.",
    code: "CREATE ROLE socialmei_admin WITH LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE;",
    risk: "attention",
    when: "Somente banco novo, conectado como administrador autorizado.",
    result: "CREATE ROLE.",
    warning: "",
    aliases: [],
  },
  {
    id: "role-password",
    title: "Definir senha interativamente",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Solicita nova senha sem escrevê-la no histórico SQL.",
    code: "\\password socialmei_admin",
    risk: "attention",
    when: "Na sessão administrativa autorizada após criar a role.",
    result: "Duas solicitações de senha.",
    warning: "",
    aliases: [],
  },
  {
    id: "sql-bootstrap",
    title: "Aplicar bootstrap",
    category: "PostgreSQL",
    context: "SSH",
    description: "Prepara o schema usando a role socialmei_admin já criada.",
    code: "docker exec -i socialmei-postgres psql -v ON_ERROR_STOP=1 -U USUARIO_ADMIN -d BANCO < database/bootstrap.sql",
    risk: "attention",
    when: "Ambiente novo revisado; substitua administrador e banco.",
    result: "Schema e GRANT criados sem erro.",
    warning: "",
    aliases: [],
  },
  {
    id: "sql-schema",
    title: "Aplicar schema como proprietário",
    category: "PostgreSQL",
    context: "SSH",
    description: "Cria tabelas, índices e restrições como role proprietária.",
    code: "docker exec -i socialmei-postgres psql -v ON_ERROR_STOP=1 -U socialmei_admin -d BANCO < database/schema.sql",
    risk: "attention",
    when: "Depois do bootstrap e com autenticação autorizada.",
    result: "Tabelas em socialmei.",
    warning: "",
    aliases: [],
  },
  {
    id: "sql-permissions",
    title: "Aplicar permissões técnicas",
    category: "PostgreSQL",
    context: "SSH",
    description: "Cria role técnica e grants funcionais.",
    code: "docker exec -i socialmei-postgres psql -v ON_ERROR_STOP=1 -U USUARIO_ADMIN -d BANCO < database/permissions.sql",
    risk: "attention",
    when: "Após schema; administrador autorizado.",
    result: "socialmei_app com permissões funcionais.",
    warning: "",
    aliases: [],
  },
  {
    id: "python-version",
    title: "Conferir Python local",
    category: "Python",
    context: "PowerShell",
    description: "Mostra versão do Python disponível no PATH.",
    code: "python --version",
    risk: "safe",
    when: "Após instalar.",
    result: "Python 3.x.",
    warning: "",
    aliases: [],
  },
  {
    id: "venv",
    title: "Criar ambiente virtual",
    category: "Python",
    context: "PowerShell",
    description: "Cria ambiente de dependências local.",
    code: "python -m venv .venv",
    risk: "safe",
    when: "Raiz do checkout; Python 3 disponível.",
    result: "Pasta .venv, ignorada pelo Git.",
    warning: "",
    aliases: [],
  },
  {
    id: "pip",
    title: "Instalar dependências no venv",
    category: "Python",
    context: "PowerShell",
    description: "Instala dependências da API somente no ambiente virtual.",
    code: ".\\.venv\\Scripts\\python.exe -m pip install -r python-service/requirements.txt",
    risk: "attention",
    when: "Depois de criar .venv.",
    result: "Pacotes instalados; versões devem ser avaliadas.",
    warning: "",
    aliases: [],
  },
  {
    id: "apt-python",
    title: "Instalar Python no host Ubuntu",
    category: "Python",
    context: "SSH",
    description: "Atualiza índice e instala Python/venv no host.",
    code: "sudo apt update\nsudo apt install python3 python3-venv",
    risk: "attention",
    when: "Apenas quando o host precisa dessas ferramentas; manutenção autorizada.",
    result: "Pacotes instalados.",
    warning: "",
    aliases: [
      "instalar python servidor",
      "colocar python servidor",
      "python no vps",
      "python ubuntu",
      "adicionar python servidor",
    ],
  },
  {
    id: "uvicorn",
    title: "Iniciar API de teste local",
    category: "FastAPI",
    context: "PowerShell",
    description: "Inicia FastAPI local usando o ambiente virtual.",
    code: ".\\.venv\\Scripts\\python.exe -m uvicorn app:app --app-dir python-service --host 127.0.0.1 --port 8000",
    risk: "safe",
    when: "Após instalar requirements.",
    result: "API local e docs em http://localhost:8000/docs.",
    warning: "",
    aliases: [],
  },
  {
    id: "api-post",
    title: "Testar processamento local",
    category: "FastAPI",
    context: "PowerShell",
    description: "Envia JSON à API local.",
    code: "Invoke-RestMethod -Method Post -Uri 'http://localhost:8000/processar' -ContentType 'application/json' -Body '{\"texto\":\"Ola SocialMEI\"}'",
    risk: "safe",
    when: "Uvicorn local em execução.",
    result: "original, maiusculo e quantidade_caracteres.",
    warning: "",
    aliases: [],
  },
  {
    id: "api-health",
    title: "Verificar saúde da API interna",
    category: "FastAPI",
    context: "SSH",
    description: "Usa Python já instalado no container para consultar health.",
    code: "docker compose exec python-api python -c \"import urllib.request; print(urllib.request.urlopen('http://127.0.0.1:8000/health').read().decode())\"",
    risk: "safe",
    when: "Diagnóstico interno, sem publicar porta.",
    result: "JSON com status healthy.",
    warning: "",
    aliases: [],
  },
  {
    id: "dashboard-sync",
    title: "Validar a entrada publicada",
    category: "Dashboard",
    context: "PowerShell",
    description: "Valida a fonte oficial e as entradas de compatibilidade.",
    code: "npm test",
    risk: "safe",
    when: "Depois de alterar frontend/.",
    result: "Testes aprovados; não é necessário copiar HTML para index.html.",
    warning: "",
    aliases: [],
  },
  {
    id: "dashboard-compare",
    title: "Revisar alterações do frontend",
    category: "Dashboard",
    context: "PowerShell",
    description: "Mostra o diff da aplicação e das entradas.",
    code: "git diff -- frontend/ index.html",
    risk: "safe",
    when: "Antes de commit.",
    result: "Diff das alterações propostas.",
    warning: "",
    aliases: [],
  },
  {
    id: "webhook-test",
    title: "Enviar mensagem fictícia ao webhook",
    category: "n8n",
    context: "PowerShell",
    description: "Envia um evento de teste; o fluxo pode gravá-lo no banco configurado.",
    code: 'Invoke-RestMethod -Method Post -Uri \'URL_DE_TESTE_COPIADA_DO_N8N\' -ContentType \'application/json\' -Body \'{"cliente":"Cliente teste","canal":"whatsapp","mensagem":"Ola, teste"}\'',
    risk: "attention",
    when: "Somente URL de ambiente de teste, credencial e banco verificados.",
    result: "Resposta JSON e execução no n8n.",
    warning: "",
    aliases: [],
  },
  {
    id: "deploy-status",
    title: "Conferir versão no servidor",
    category: "Deploy",
    context: "SSH",
    description: "Mostra alterações, branch e último commit.",
    code: "git status\ngit branch --show-current\ngit log -1 --oneline",
    risk: "safe",
    when: "Antes de atualizar checkout no servidor.",
    result: "Branch e commit esperados, sem alterações locais.",
    warning: "",
    aliases: [],
  },
  {
    id: "deploy-pull",
    title: "Atualizar checkout do servidor",
    category: "Deploy",
    context: "SSH",
    description: "Baixa commits integrados sem merge implícito.",
    code: "git pull --ff-only origin main",
    risk: "attention",
    when: "Main ativa e limpa; manutenção autorizada.",
    result: "Checkout atualizado.",
    warning: "",
    aliases: ["atualizar servidor", "deploy", "git pull servidor"],
  },
  {
    id: "git-identity",
    title: "Configurar autoria local ao repositório",
    category: "Git",
    context: "PowerShell",
    description: "Define autoria neste checkout sem trocar a configuração global.",
    code: 'git config user.name "SEU_NOME"\ngit config user.email "SEU_EMAIL_DE_COMMIT"',
    risk: "attention",
    when: "Na raiz do checkout; confirme a branch e git status.",
    result: "Commits novos usam sua identidade.",
    warning: "",
    aliases: [],
  },
  {
    id: "volumes",
    title: "Identificar volumes antes do backup",
    category: "Deploy",
    context: "SSH",
    description: "Lista volumes reais do host.",
    code: "docker volume ls",
    risk: "safe",
    when: "Para conferir prefixo/projeto antes de usar scripts.",
    result: "Volumes nomeados existentes.",
    warning: "",
    aliases: [],
  },
  {
    id: "backup-run",
    title: "Executar rotina existente após revisão",
    category: "Deploy",
    context: "SSH",
    description:
      "Executa o script versionado, que faz cópias, para/retoma n8n e remove backups antigos.",
    code: "bash backup.sh",
    risk: "danger",
    when: "Só após conferir caminho, volumes, espaço, cobertura e janela autorizada.",
    result: "Arquivos de backup e n8n retomado; valide os arquivos.",
    warning:
      "Para o n8n e apaga backups com mais de 14 dias. Revise caminho/volume fixos; o script não cobre o override nem todos os volumes.",
    aliases: [],
  },
  {
    id: "dump-manual",
    title: "Criar dump sem sobrescrever arquivo existente",
    category: "Deploy",
    context: "SSH",
    description:
      "Exporta banco em formato custom, com arquivo privado e proteção contra sobrescrita.",
    code: 'umask 077\nmkdir -p backups\n(set -C; docker exec socialmei-postgres sh -c \'pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" -Fc\' > backups/postgres_TESTE_UNICO.dump)',
    risk: "attention",
    when: "Substitua TESTE_UNICO por identificador novo; usuário deve poder ler o banco.",
    result: "Arquivo criado; verifique tamanho, saída e restauração isolada.",
    warning: "",
    aliases: [],
  },
  {
    id: "host-space",
    title: "Ver espaço em disco",
    category: "Linux",
    context: "SSH",
    description: "Confere espaço livre no servidor.",
    code: "df -h",
    risk: "safe",
    when: "",
    result: "Uso dos sistemas de arquivos.",
    warning: "",
    aliases: ["disco cheio", "espaco", "erro docker"],
  },
  {
    id: "compose-restart",
    title: "Reiniciar serviços do Compose",
    category: "Docker Compose",
    context: "SSH",
    description: "Reinicia todos os serviços; há interrupção.",
    code: "docker compose restart",
    risk: "attention",
    when: "Manutenção planejada; não aplica nova imagem ou variáveis.",
    result: "Serviços reiniciados.",
    warning: "",
    aliases: [],
  },
  {
    id: "dump-list",
    title: "Inspecionar dump PostgreSQL",
    category: "PostgreSQL",
    context: "SSH",
    description: "Lista o conteúdo de um dump sem restaurar.",
    code: "docker exec -i socialmei-postgres pg_restore -l < backups/ARQUIVO.dump",
    risk: "safe",
    when: "Use o nome de um dump custom existente.",
    result: "Lista de objetos no arquivo.",
    warning: "",
    aliases: [],
  },
  {
    id: "restore-isolated",
    title: "Restaurar em banco isolado",
    category: "PostgreSQL",
    context: "SSH",
    description: "Aplica um dump em um banco vazio de teste.",
    code: "docker exec -i socialmei-postgres pg_restore --exit-on-error --no-owner --no-privileges -U USUARIO_AUTORIZADO -d BANCO_ISOLADO_VAZIO < backups/ARQUIVO.dump",
    risk: "danger",
    when: "Banco vazio criado previamente, role autorizada e dump validado.",
    result: "Objetos e dados restaurados no banco indicado.",
    warning:
      "Grava no banco de destino. Confirme que NÃO é produção. Ownership e grants precisam de revisão; não use --clean.",
    aliases: ["restaurar banco", "restore postgres"],
  },
  {
    id: "pem-exists",
    title: "Conferir caminho da chave",
    category: "SSH",
    context: "PowerShell",
    description: "Confere a existência do arquivo sem abrir seu conteúdo.",
    template: "pem-exists",
    code: "",
    risk: "safe",
    when: "No PC, depois de configurar o caminho local.",
    result: "True indica que o caminho existe; não valida a chave.",
    warning: "",
    aliases: ["arquivo pem", "caminho chave"],
  },
  {
    id: "pem-acl-inspect",
    title: "Ver permissões da PEM",
    category: "SSH",
    context: "PowerShell",
    description: "Mostra o proprietário e as permissões do arquivo.",
    template: "pem-acl-inspect",
    code: "",
    risk: "safe",
    when: "No PowerShell do seu PC; somente um arquivo.",
    result: "Owner e ACL; confirme que só sua conta tem acesso.",
    warning: "",
    aliases: ["chave pem", "permissao chave"],
  },
  {
    id: "pem-acl-fix",
    title: "Restringir leitura da PEM",
    category: "SSH",
    context: "PowerShell",
    description: "Ajusta a ACL de uma única chave que pertence a você.",
    template: "pem-acl-fix",
    code: "",
    risk: "attention",
    when: "Só após conferir proprietário e caminho. Altera permissões; não use em arquivos compartilhados.",
    result: "Sua conta com leitura; sem herança. Revise a saída antes de conectar.",
    warning: "",
    aliases: ["chave pem", "permissao chave"],
  },
  {
    id: "git-remote-show",
    title: "Ver endereço do GitHub configurado",
    category: "Git",
    context: "PowerShell",
    description: "Mostra para onde fetch e push do repositório estão apontando.",
    code: "git remote -v",
    risk: "safe",
    when: "Dentro do checkout do projeto.",
    result: "URLs atuais de origin para fetch e push.",
    warning: "",
    aliases: ["ver origin", "remote github", "qual repositorio", "endereco github"],
  },
  {
    id: "git-remote-set-socialmei",
    title: "Corrigir origin para SocialMEI-IA",
    category: "Git",
    context: "PowerShell",
    description: "Atualiza somente o endereço do remote origin para o repositório atual.",
    code: "git remote set-url origin git@github.com:socialmei-ia/SocialMEI-IA.git",
    risk: "attention",
    when: "Depois de conferir git remote -v e confirmar que este checkout é do SocialMEI.",
    result: "origin passa a usar o endereço canônico SocialMEI-IA.",
    warning: "Altera o destino de fetch/push deste checkout. Confira o repositório antes.",
    aliases: ["trocar origin", "corrigir github", "repositorio mudou nome", "remote socialmei"],
  },
  {
    id: "git-log-five",
    title: "Ver últimos 5 commits",
    category: "Git",
    context: "PowerShell",
    description: "Mostra rapidamente o histórico recente do checkout.",
    code: "git log --oneline --decorate -5",
    risk: "safe",
    when: "Dentro de um repositório Git.",
    result: "Cinco commits recentes com referências.",
    warning: "",
    aliases: ["historico git", "ultimos commits", "ver commits"],
  },
  {
    id: "git-branch-vv",
    title: "Ver branches e rastreamento",
    category: "Git",
    context: "PowerShell",
    description: "Mostra branch atual, upstream e último commit conhecido.",
    code: "git branch -vv",
    risk: "safe",
    when: "Dentro de um repositório Git.",
    result: "Branches locais e respectivos upstreams.",
    warning: "",
    aliases: ["branch upstream", "branch servidor", "rastrear branch"],
  },
  {
    id: "deploy-compare-origin",
    title: "Comparar VPS com origin/main",
    category: "Deploy",
    context: "SSH",
    description:
      "Atualiza referências remotas e compara o commit local com origin/main sem alterar arquivos.",
    code: "git fetch origin --prune\nprintf 'local:  '; git rev-parse HEAD\nprintf 'origin: '; git rev-parse origin/main",
    risk: "safe",
    when: "Na pasta do projeto na VPS.",
    result: "SHAs iguais indicam que o checkout está no mesmo commit de origin/main.",
    warning: "",
    aliases: ["vps atualizada", "servidor atualizado", "comparar github vps", "commit servidor"],
  },
  {
    id: "compose-pull",
    title: "Baixar imagens novas do Compose",
    category: "Docker Compose",
    context: "SSH",
    description: "Baixa versões configuradas das imagens sem recriar os containers imediatamente.",
    code: "docker compose pull",
    risk: "attention",
    when: "Depois de revisar compose.yaml e tags das imagens.",
    result: "Imagens disponíveis localmente; serviços ainda precisam ser aplicados com compose up.",
    warning:
      "Pode baixar imagens grandes. Não reinicia sozinho, mas prepare espaço e janela de manutenção.",
    aliases: ["docker pull", "atualizar imagens docker", "baixar imagens compose"],
  },
  {
    id: "docker-inspect",
    title: "Inspecionar um container",
    category: "Docker",
    context: "SSH",
    description: "Mostra configuração, mounts, rede e estado de um container.",
    code: "docker inspect NOME_DO_CONTAINER",
    risk: "safe",
    when: "Troque NOME_DO_CONTAINER por um nome confirmado em docker ps.",
    result: "JSON detalhado do container.",
    warning: "",
    aliases: ["inspect container", "ver configuracao container", "container detalhes"],
  },
  {
    id: "docker-stats",
    title: "Ver consumo dos containers",
    category: "Docker",
    context: "SSH",
    description: "Mostra uma fotografia de CPU e memória dos containers.",
    code: "docker stats --no-stream",
    risk: "safe",
    when: "Diagnóstico de lentidão ou consumo.",
    result: "CPU, memória, rede e I/O por container.",
    warning: "",
    aliases: ["cpu docker", "memoria docker", "docker lento", "consumo container"],
  },
  {
    id: "postgres-ready",
    title: "Testar se PostgreSQL está aceitando conexões",
    category: "PostgreSQL",
    context: "SSH",
    description: "Usa pg_isready dentro do container sem revelar senha.",
    code: 'docker compose exec postgres sh -c \'pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB"\'',
    risk: "safe",
    when: "Na pasta do Compose com o serviço postgres ativo.",
    result: "accepting connections quando o banco está pronto.",
    warning: "",
    aliases: ["postgres pronto", "banco caiu", "banco responde", "pg_isready"],
  },
  {
    id: "host-uptime",
    title: "Ver uptime e carga do VPS",
    category: "Linux",
    context: "SSH",
    description: "Mostra há quanto tempo o host está ativo e a carga média.",
    code: "uptime",
    risk: "safe",
    when: "No VPS.",
    result: "Tempo ligado e load average.",
    warning: "",
    aliases: ["servidor lento", "carga servidor", "uptime vps"],
  },
  {
    id: "host-memory",
    title: "Ver memória do VPS",
    category: "Linux",
    context: "SSH",
    description: "Mostra RAM e swap em formato legível.",
    code: "free -h",
    risk: "safe",
    when: "No VPS.",
    result: "Memória total, usada, disponível e swap.",
    warning: "",
    aliases: ["memoria servidor", "ram vps", "servidor sem memoria"],
  },
  {
    id: "host-project-size",
    title: "Ver tamanho da pasta do projeto",
    category: "Linux",
    context: "SSH",
    description: "Mede o espaço ocupado pelo checkout atual.",
    code: "du -sh .",
    risk: "safe",
    when: "Dentro da pasta do projeto.",
    result: "Tamanho total aproximado da pasta.",
    warning: "",
    aliases: ["tamanho projeto", "pasta grande", "espaco projeto"],
  },
  {
    id: "python-host-version",
    title: "Conferir Python no VPS",
    category: "Python",
    context: "SSH",
    description: "Verifica se Python 3 está instalado diretamente no host Ubuntu.",
    code: "python3 --version",
    risk: "safe",
    when: "No VPS.",
    result: "Versão instalada ou mensagem de comando ausente.",
    warning: "",
    aliases: ["python servidor", "python vps", "tem python", "ver python ubuntu"],
  },
  {
    id: "python-host-pip",
    title: "Conferir pip no VPS",
    category: "Python",
    context: "SSH",
    description: "Verifica o pip associado ao Python 3 do host.",
    code: "python3 -m pip --version",
    risk: "safe",
    when: "Depois de instalar Python/pip no host.",
    result: "Versão e caminho do pip.",
    warning: "",
    aliases: ["pip servidor", "pip vps", "python pip ubuntu"],
  },
  {
    id: "apt-package-policy",
    title: "Ver pacote disponível no Ubuntu",
    category: "Linux",
    context: "SSH",
    description: "Consulta a versão disponível antes de instalar um pacote no host.",
    code: "apt-cache policy NOME_DO_PACOTE",
    risk: "safe",
    when: "Troque NOME_DO_PACOTE pelo pacote oficial que você pretende instalar.",
    result: "Versões instalada e candidata, quando disponíveis.",
    warning: "",
    aliases: ["procurar pacote ubuntu", "pacote apt", "versao apt"],
  },
  {
    id: "apt-package-install",
    title: "Instalar pacote no Ubuntu",
    category: "Linux",
    context: "SSH",
    description: "Atualiza o índice e instala um pacote conhecido no host.",
    code: "sudo apt update\nsudo apt install NOME_DO_PACOTE",
    risk: "attention",
    when: "Somente quando a ferramenta deve realmente existir no host e a manutenção foi autorizada.",
    result: "Pacote instalado pelo gerenciador do Ubuntu.",
    warning:
      "Instalar software no host altera o servidor. Para aplicações/serviços do projeto, prefira Docker/Compose.",
    aliases: [
      "instalar programa servidor",
      "instalar pacote vps",
      "apt install",
      "colocar programa ubuntu",
    ],
  },
  {
    id: "psql-insert-template",
    title: "Modelo para inserir um registro",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Template de INSERT; exige substituir tabela, colunas e valores conscientemente.",
    code: "INSERT INTO socialmei.NOME_DA_TABELA (COLUNA_1, COLUNA_2)\nVALUES ('VALOR_1', 'VALOR_2')\nRETURNING *;",
    risk: "danger",
    when: "Somente após descrever a tabela e confirmar o ambiente/banco corretos.",
    result: "Um novo registro, se constraints e tipos forem válidos.",
    warning:
      "Grava dados. Nunca cole senha/token e não use dados pessoais de teste sem necessidade. Prefira ambiente de teste.",
    aliases: ["adicionar dado banco", "inserir registro", "salvar dado postgres", "insert banco"],
  },
  {
    id: "psql-add-column-template",
    title: "Modelo para adicionar coluna",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Template de ALTER TABLE para mudanças de schema planejadas.",
    code: "ALTER TABLE socialmei.NOME_DA_TABELA\nADD COLUMN NOME_DA_COLUNA TIPO;",
    risk: "danger",
    when: "Preferencialmente por arquivo SQL versionado, testado e revisado antes de produção.",
    result: "Nova coluna na tabela escolhida.",
    warning:
      "Altera estrutura do banco. Faça backup/teste e prefira migration versionada em vez de executar direto em produção.",
    aliases: ["adicionar coluna banco", "alterar tabela", "mudar schema", "nova coluna postgres"],
  },
  {
    id: "psql-create-table-template",
    title: "Modelo para criar tabela",
    category: "PostgreSQL",
    context: "PostgreSQL",
    description: "Estrutura mínima de CREATE TABLE para adaptar em migration versionada.",
    code: "CREATE TABLE socialmei.NOME_DA_TABELA (\n  id BIGSERIAL PRIMARY KEY,\n  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);",
    risk: "danger",
    when: "Depois de definir campos, chaves, índices e ownership; teste antes.",
    result: "Nova tabela no schema socialmei.",
    warning:
      "Muda o schema. Não execute por impulso no banco principal; versione a alteração e revise.",
    aliases: ["criar tabela banco", "nova tabela postgres", "adicionar tabela", "create table"],
  },
  {
    id: "sql-new-migration",
    title: "Criar arquivo SQL de mudança",
    category: "PostgreSQL",
    context: "PowerShell",
    description: "Cria um arquivo vazio versionável na pasta database para uma mudança planejada.",
    code: 'New-Item "database/NNN_descricao.sql" -ItemType File',
    risk: "safe",
    when: "Em uma branch de trabalho no checkout local; escolha um nome claro e único.",
    result: "Arquivo SQL vazio pronto para edição e revisão.",
    warning: "",
    aliases: ["criar migration", "arquivo sql", "mudanca banco versionada"],
  },
  {
    id: "sql-apply-file",
    title: "Aplicar arquivo SQL revisado",
    category: "PostgreSQL",
    context: "SSH",
    description: "Executa um arquivo SQL versionado com parada imediata em erro.",
    code: "docker exec -i socialmei-postgres psql -v ON_ERROR_STOP=1 -U socialmei_admin -d BANCO < database/ARQUIVO.sql",
    risk: "danger",
    when: "Somente após backup, revisão, teste e confirmação do banco de destino.",
    result: "Alterações do arquivo aplicadas ou interrupção no primeiro erro.",
    warning:
      "Pode alterar dados e schema. Confirme BANCO/ARQUIVO, backup e janela de manutenção antes.",
    aliases: ["aplicar migration", "rodar sql servidor", "executar arquivo banco"],
  },
  {
    id: "http-dashboard",
    title: "Testar resposta do Dashboard",
    category: "Dashboard",
    context: "SSH",
    description: "Consulta apenas os headers da página pública.",
    code: "curl -fsSI https://socialmei-ia.github.io/SocialMEI-IA/ | head -n 1",
    risk: "safe",
    when: "Diagnóstico de disponibilidade pública.",
    result: "Linha HTTP quando o endpoint responde.",
    warning: "",
    aliases: ["dashboard caiu", "testar dashboard", "site responde"],
  },
  {
    id: "http-n8n",
    title: "Testar resposta pública do n8n",
    category: "n8n",
    context: "SSH",
    description: "Consulta headers da interface sem autenticar.",
    code: "curl -fsSI https://socialmei.54-94-213-7.sslip.io/home/workflows | head -n 1",
    risk: "safe",
    when: "Diagnóstico de HTTPS/Caddy/n8n.",
    result: "Linha HTTP ou erro de conexão.",
    warning: "",
    aliases: ["n8n caiu", "testar n8n", "n8n responde"],
  },
  {
    id: "http-pgadmin",
    title: "Testar resposta pública do pgAdmin",
    category: "PostgreSQL",
    context: "SSH",
    description: "Consulta headers da página de login sem enviar credenciais.",
    code: "curl -fsSI https://db.54-94-213-7.sslip.io | head -n 1",
    risk: "safe",
    when: "Diagnóstico de HTTPS/Caddy/pgAdmin.",
    result: "Linha HTTP ou redirecionamento quando responde.",
    warning: "",
    aliases: ["pgadmin caiu", "testar pgadmin", "banco painel responde"],
  },
];

const RECIPES = [
  {
    id: "access-vps",
    title: "Acessar o VPS",
    category: "SSH",
    description: "Do PowerShell ao prompt do servidor.",
    steps: [
      {
        title: "Abra o PowerShell no seu PC.",
      },
      {
        title: "Conecte ao servidor.",
        command: "ssh-connect",
      },
      {
        title: "Confirme o contexto remoto.",
        command: "linux-path",
      },
    ],
    aliases: ["acessar vps", "entrar servidor", "ssh"],
    flow: ["PC", "PowerShell", "SSH", "VPS"],
    note: "",
  },
  {
    id: "restart-n8n",
    title: "Reiniciar o n8n",
    category: "n8n",
    description: "Acesse, reinicie e confira o serviço.",
    steps: [
      {
        title: "Acesse o VPS.",
        command: "ssh-connect",
      },
      {
        title: "Entre na pasta do Compose.",
        command: "linux-cd",
      },
      {
        title: "Reinicie apenas o n8n.",
        command: "n8n-restart",
      },
      {
        title: "Confira o estado.",
        command: "compose-ps",
      },
      {
        title: "Confira os logs.",
        command: "n8n-logs",
      },
    ],
    aliases: ["restart n8n", "n8n travou", "reiniciar n8n"],
    flow: ["PC", "VPS", "Compose", "n8n"],
    note: "Breve indisponibilidade. restart não aplica alterações no .env; para isso, revise e recrie com compose up -d n8n.",
  },
  {
    id: "enter-db",
    title: "Entrar no PostgreSQL",
    category: "PostgreSQL",
    description: "Abra o psql e encontre as tabelas.",
    steps: [
      {
        title: "Acesse o VPS.",
        command: "ssh-connect",
      },
      {
        title: "Abra o cliente SQL.",
        command: "psql-open",
      },
      {
        title: "Liste as tabelas do projeto.",
        command: "psql-tables",
      },
      {
        title: "Saia do psql quando terminar.",
        command: "psql-quit",
      },
    ],
    aliases: ["banco", "postgres", "entrar banco", "abrir banco"],
    flow: ["VPS", "Container PostgreSQL", "Banco", "Tabelas"],
    note: "",
  },
  {
    id: "update-server",
    title: "Atualizar servidor",
    category: "Deploy",
    description: "Revise main e aplique o Compose.",
    steps: [
      {
        title: "Acesse o VPS.",
        command: "ssh-connect",
      },
      {
        title: "Entre no checkout.",
        command: "linux-cd",
      },
      {
        title: "Confira branch, commit e alterações.",
        command: "deploy-status",
        note: "Prossiga apenas em main, sem alterações locais.",
      },
      {
        title: "Baixe main.",
        command: "deploy-pull",
      },
      {
        title: "Valide a configuração.",
        command: "compose-validate",
      },
      {
        title: "Aplique e confira.",
        command: "compose-up",
        note: "Confira depois com docker compose ps; para Python, use o rebuild específico.",
      },
    ],
    aliases: ["deploy", "atualizar servidor", "git pull servidor"],
    flow: ["GitHub", "VPS", "Compose"],
    note: "Janela de manutenção: serviços podem ser recriados. As verificações do GitHub não fazem deploy automático na VPS.",
  },
  {
    id: "add-service",
    title: "Adicionar serviço ao Docker",
    category: "Docker Compose",
    description: "Edite o Compose e aplique somente o alvo.",
    steps: [
      {
        title: "Abra o Compose como referência.",
        link: "compose-file",
      },
      {
        title: "Edite o checkout e adicione o serviço.",
        note: "Confirme imagem, volumes e rede; revise via PR. --no-deps pressupõe dependências já ativas.",
      },
      {
        title: "No VPS, entre na pasta atualizada.",
        command: "linux-cd",
      },
      {
        title: "Valide sem imprimir valores do .env.",
        command: "compose-validate",
      },
      {
        title: "Suba o serviço; troque NOME_DO_SERVICO.",
        command: "new-service",
      },
      {
        title: "Confirme o estado.",
        command: "compose-ps",
      },
    ],
    aliases: [
      "adicionar programa",
      "adicionar servico",
      "novo servico",
      "instalar programa docker",
    ],
    flow: ["Compose", "Validar", "Aplicar", "Conferir"],
    note: "",
  },
  {
    id: "remove-service",
    title: "Remover serviço parado",
    category: "Docker",
    description: "Confira o alvo e preserve seus dados.",
    steps: [
      {
        title: "Liste containers e confirme o alvo.",
        command: "docker-all",
      },
      {
        title: "Revise Compose e volumes do serviço.",
        link: "compose-file",
      },
      {
        title: "Com backup testado, remova o container parado.",
        command: "remove-container",
        note: "Um serviço ainda no Compose será recriado no próximo up; revise a definição via PR.",
      },
    ],
    aliases: ["remover servico", "remover container"],
    flow: ["Alvo", "Backup", "Remover"],
    note: "",
  },
  {
    id: "debug-service",
    title: "Descobrir erro no Docker",
    category: "Docker",
    description: "Estado, logs e espaço livre.",
    steps: [
      {
        title: "Confira serviços do projeto.",
        command: "compose-ps",
      },
      {
        title: "Veja também os parados.",
        command: "docker-all",
      },
      {
        title: "Leia os últimos logs.",
        command: "compose-logs",
      },
      {
        title: "Confira o disco.",
        command: "host-space",
      },
    ],
    aliases: ["docker travou", "docker erro", "descobrir erro", "ver logs", "container parado"],
    flow: ["Estado", "Logs", "Disco"],
    note: "No host via SSH. Logs podem conter dados privados; revise antes de compartilhar.",
  },
  {
    id: "n8n-import",
    title: "Importar workflow JSON",
    category: "n8n",
    description: "Valide o arquivo e importe pelo editor.",
    steps: [
      {
        title: "Valide o export na raiz local.",
        command: "json-check",
      },
      {
        title: "Abra o n8n.",
        link: "n8n",
      },
      {
        title: "No editor, escolha Import from File.",
        link: "workflow-file",
      },
      {
        title: "Associe credenciais e teste.",
        note: "Só publique/ative após conferir endpoints e banco de destino.",
      },
    ],
    aliases: ["importar json", "importar workflow", "n8n json"],
    flow: ["JSON", "n8n", "Credenciais", "Teste"],
    note: "",
  },
  {
    id: "n8n-execute",
    title: "Executar workflow e ver execuções",
    category: "n8n",
    description: "Abra o editor, teste e confira o resultado.",
    steps: [
      {
        title: "Abra o n8n.",
        link: "n8n",
      },
      {
        title: "Abra o workflow e use Execute Workflow.",
        note: "Webhook de teste exige escuta ativa e URL de teste correta.",
      },
      {
        title: "Abra Executions e confira os nodes.",
        note: "Execução manual pode gravar dados ou chamar integrações.",
      },
    ],
    aliases: ["executar workflow", "ver executions", "executions n8n"],
    flow: [],
    note: "",
  },
  {
    id: "n8n-export",
    title: "Exportar workflow",
    category: "n8n",
    description: "Baixe JSON antes de alterar o fluxo.",
    steps: [
      {
        title: "Abra o n8n.",
        link: "n8n",
      },
      {
        title: "No menu do workflow, escolha Download.",
      },
      {
        title: "Revise o JSON antes de enviar.",
        note: "Remova URLs sensíveis, dados de teste e referências privadas; não inclua credenciais.",
      },
    ],
    aliases: ["exportar workflow", "baixar json n8n"],
    flow: [],
    note: "",
  },
  {
    id: "db-query",
    title: "Consultar estrutura e contagem",
    category: "PostgreSQL",
    description: "Consulta sem exibir mensagens pessoais.",
    steps: [
      {
        title: "Entre no banco.",
        command: "psql-open",
      },
      {
        title: "Liste os bancos.",
        command: "psql-list",
      },
      {
        title: "Confira tabelas.",
        command: "psql-tables",
      },
      {
        title: "Veja a estrutura de mensagens.",
        command: "psql-describe",
      },
      {
        title: "Conte registros.",
        command: "psql-select",
      },
      {
        title: "Saia do psql.",
        command: "psql-quit",
      },
    ],
    aliases: ["consultar registros", "ver tabelas", "consulta banco"],
    flow: ["psql", "Schema", "Consulta"],
    note: "",
  },
  {
    id: "db-schema",
    title: "Criar tabelas em ambiente novo",
    category: "PostgreSQL",
    description: "Use os SQLs versionados na ordem correta.",
    steps: [
      {
        title: "Revise os SQLs e o banco vazio de destino.",
        link: "sql-files",
      },
      {
        title: "No psql administrativo, crie a role.",
        command: "role-create",
      },
      {
        title: "Defina a senha interativamente.",
        command: "role-password",
      },
      {
        title: "Volte ao host e aplique bootstrap.",
        command: "sql-bootstrap",
      },
      {
        title: "Aplique schema como proprietário.",
        command: "sql-schema",
      },
      {
        title: "Aplique permissões.",
        command: "sql-permissions",
      },
    ],
    aliases: ["criar tabela", "criar banco", "schema"],
    flow: ["Role", "Bootstrap", "Schema", "Grants"],
    note: "Somente ambiente novo revisado. permissions.sql cita o banco n8n: alinhe esse nome ao destino. Saia do psql com \\q antes dos comandos Docker. Não tente reinicializar produção; os scripts não são aplicados automaticamente.",
  },
  {
    id: "backup-db",
    title: "Backup do PostgreSQL",
    category: "PostgreSQL",
    description: "Dump privado e validação do arquivo.",
    steps: [
      {
        title: "Confira os volumes reais.",
        command: "volumes",
      },
      {
        title: "Confira espaço no host.",
        command: "host-space",
      },
      {
        title: "Gere um dump com nome novo.",
        command: "dump-manual",
      },
      {
        title: "Inspecione o dump salvo.",
        command: "dump-list",
      },
      {
        title: "Guarde uma cópia fora do host.",
        note: "A existência do arquivo não prova backup válido; teste restauração isolada.",
      },
    ],
    aliases: ["backup", "dump", "backup banco"],
    flow: ["Banco", "Dump", "Validar", "Cópia segura"],
    note: "",
  },
  {
    id: "restore-db",
    title: "Restaurar backup isolado",
    category: "PostgreSQL",
    description: "Valide o dump e use um banco vazio de teste.",
    steps: [
      {
        title: "Inspecione o arquivo.",
        command: "dump-list",
      },
      {
        title: "Crie um banco vazio isolado no pgAdmin.",
        link: "pgadmin",
        note: "Confirme role e destino; nunca selecione produção para este procedimento.",
      },
      {
        title: "Revise os alvos e restaure.",
        command: "restore-isolated",
      },
      {
        title: "No banco de teste, confira as tabelas.",
        command: "psql-tables",
        note: "Abra psql no BANCO_ISOLADO_VAZIO; ownership e grants precisam de revisão.",
      },
    ],
    aliases: ["restaurar", "restore", "restaurar backup"],
    flow: ["Dump", "Banco isolado", "Validar"],
    note: "",
  },
  {
    id: "update-local",
    title: "Atualizar projeto local",
    category: "Git",
    description: "Confira o checkout e baixe main.",
    steps: [
      {
        title: "Revise alterações.",
        command: "git-status",
      },
      {
        title: "Vá para main se o checkout permitir.",
        command: "git-switch",
      },
      {
        title: "Baixe a versão remota.",
        command: "git-pull",
      },
    ],
    aliases: ["atualizar projeto", "git pull", "baixar codigo"],
    flow: [],
    note: "",
  },
  {
    id: "send-change",
    title: "Enviar alteração ao GitHub",
    category: "Git",
    description: "Prepare os arquivos e abra um PR.",
    steps: [
      {
        title: "Confira o checkout.",
        command: "git-status",
      },
      {
        title: "Crie uma branch.",
        command: "git-branch",
      },
      {
        title: "Prepare apenas o arquivo escolhido.",
        command: "git-add",
      },
      {
        title: "Revise o conteúdo preparado.",
        command: "git-cached",
      },
      {
        title: "Registre um commit.",
        command: "git-commit",
      },
      {
        title: "Envie a branch e abra um PR.",
        command: "git-push",
      },
    ],
    aliases: ["enviar alteracao", "git push", "commit", "criar branch"],
    flow: ["Editar", "Git", "GitHub", "PR"],
    note: "Nenhum segredo no commit. Integração em main segue revisão do projeto.",
  },
  {
    id: "before-push",
    title: "Resolver alterações antes do push",
    category: "Git",
    description: "Revise arquivos, staging e remoto.",
    steps: [
      {
        title: "Veja pendências.",
        command: "git-status",
      },
      {
        title: "Revise o diff.",
        command: "git-diff",
      },
      {
        title: "Retire um arquivo indevido do staging.",
        command: "git-unstage",
      },
      {
        title: "Confira o que será commitado.",
        command: "git-cached",
      },
      {
        title: "Atualize referências remotas.",
        command: "git-fetch",
      },
    ],
    aliases: ["resolver alteracao", "antes push", "conflito git"],
    flow: [],
    note: "Divergência exige revisão. Preserve seu trabalho; esta receita não executa merge nem descarta arquivos.",
  },
  {
    id: "dashboard-update",
    title: "Atualizei o dashboard. E agora?",
    category: "Dashboard",
    description: "Teste a fonte oficial e envie a alteração.",
    steps: [
      {
        title: "Edite a fonte oficial em frontend/.",
        link: "dashboard-file",
      },
      {
        title: "Valide os recursos e as entradas.",
        command: "dashboard-sync",
      },
      {
        title: "Revise o diff antes de publicar.",
        command: "dashboard-compare",
      },
      {
        title: "Sirva a raiz local.",
        command: "serve",
      },
      {
        title: "Teste no navegador.",
        note: "Abra localhost:5500 e F12 → Console; Ctrl+C encerra o servidor.",
      },
      {
        title: "Envie via branch/PR e confira Pages.",
        link: "pages-settings",
        note: "Use a receita Enviar alteração; as verificações atuais não publicam na VPS.",
      },
    ],
    aliases: ["atualizar dashboard", "editar dashboard", "dashboard deploy"],
    flow: ["Código", "Teste", "GitHub", "Pages"],
    note: "Dashboard é HTML estático. Atualização na VPS segue a receita Atualizar servidor se essa cópia for usada; a Caixa lê n8n, respostas digitadas são locais.",
  },
  {
    id: "python-local",
    title: "Rodar API Python local",
    category: "Python",
    description: "Venv, dependências e API de teste.",
    steps: [
      {
        title: "Confira Python.",
        command: "python-version",
      },
      {
        title: "Crie um venv.",
        command: "venv",
      },
      {
        title: "Instale os requisitos no venv.",
        command: "pip",
      },
      {
        title: "Inicie a API.",
        command: "uvicorn",
      },
      {
        title: "Teste o processamento.",
        command: "api-post",
      },
    ],
    aliases: ["fastapi", "rodar python", "api local"],
    flow: ["Python", "Venv", "FastAPI", "Teste"],
    note: "",
  },
  {
    id: "caddy-update",
    title: "Aplicar Caddyfile",
    category: "Caddy",
    description: "Valide e recarregue o proxy.",
    steps: [
      {
        title: "Revise o arquivo versionado.",
        link: "caddy-file",
      },
      {
        title: "No host, valide a configuração montada.",
        command: "caddy-validate",
      },
      {
        title: "Recarregue o arquivo.",
        command: "caddy-reload",
      },
      {
        title: "Confira os logs.",
        command: "caddy-logs",
      },
    ],
    aliases: ["caddy", "https erro", "proxy", "recarregar caddy"],
    flow: ["Arquivo", "Validar", "Recarregar"],
    note: "Mudança em variável .env exige recriar o serviço. O Caddy atual publica n8n e pgAdmin; não há rota pública para a API Python.",
  },
  {
    id: "aws-ip",
    title: "Ver IP e Security Group",
    category: "AWS",
    description: "Encontre a instância no console.",
    steps: [
      {
        title: "Abra EC2 na região correta.",
        link: "ec2",
      },
      {
        title: "Selecione a instância em Instances.",
      },
      {
        title: "Veja Public IPv4 na aba Details.",
      },
      {
        title: "Abra Security → Security Groups.",
        note: "Confira SSH com origem restrita; não abra o PostgreSQL na internet.",
      },
    ],
    aliases: ["ver ip", "security group", "aws ip", "servidor aws"],
    flow: ["AWS", "EC2", "Instância"],
    note: "",
  },
  {
    id: "aws-reboot",
    title: "Reiniciar instância AWS",
    category: "AWS",
    description: "Confira o alvo antes de reiniciar.",
    steps: [
      {
        title: "Abra EC2 e selecione região/instância.",
        link: "ec2",
      },
      {
        title: "Planeje a interrupção dos serviços.",
      },
      {
        title: "Use Instance state → Reboot instance.",
        note: "Confirme o ID do alvo. Reboot interrompe conexões; não selecione Terminate.",
      },
      {
        title: "Acompanhe Status checks e conecte novamente.",
        command: "ssh-connect",
      },
    ],
    aliases: ["reiniciar instancia", "reboot aws"],
    flow: ["EC2", "Alvo", "Reboot", "Status"],
    note: "",
  },
  {
    id: "pem-permissions",
    title: "SSH reclama da permissão da chave",
    category: "SSH",
    description: "Confira o arquivo e ajuste somente sua PEM no Windows.",
    aliases: ["permissao da chave", "ssh permission", "unprotected private key", "permissoes pem"],
    flow: ["Arquivo local", "Owner / ACL", "OpenSSH"],
    note: "No PowerShell do PC. Procedimento da AWS com icacls, sem /T e sem execução automática. Confira que você é o proprietário; se não for, siga a orientação oficial nas Propriedades do arquivo.",
    steps: [
      {
        title: "Confirme que o caminho existe.",
        command: "pem-exists",
      },
      {
        title: "Confira o proprietário e a ACL.",
        command: "pem-acl-inspect",
      },
      {
        title: "No seu arquivo, restrinja o acesso.",
        command: "pem-acl-fix",
      },
      {
        title: "Confira a ACL final.",
        command: "pem-acl-inspect",
      },
      {
        title: "Tente conectar novamente.",
        command: "ssh-connect",
      },
    ],
  },
  {
    id: "python-server",
    title: "Instalar Python no VPS",
    category: "Python",
    description:
      "Do seu PC até Python 3 funcionando no host Ubuntu, com verificação antes e depois.",
    steps: [
      {
        title: "Entre no VPS.",
        command: "ssh-connect",
      },
      {
        title: "Veja se Python já existe.",
        command: "python-host-version",
        note: "Se já houver uma versão adequada, talvez não seja necessário instalar nada.",
      },
      {
        title: "Instale Python e venv somente se necessário.",
        command: "apt-python",
      },
      {
        title: "Confirme a versão.",
        command: "python-host-version",
      },
      {
        title: "Confira pip se você realmente precisar instalar pacotes no host.",
        command: "python-host-pip",
      },
    ],
    aliases: [
      "como instalar python no servidor",
      "colocar python no servidor",
      "python no vps",
      "adicionar python servidor",
      "instalar python ubuntu",
    ],
    flow: ["PC", "SSH", "Ubuntu", "Python 3"],
    note: "No SocialMEI, a API Python já é executada em container. Instale Python no host apenas quando uma tarefa realmente exigir isso.",
  },
  {
    id: "install-tool-server",
    title: "Instalar uma ferramenta no VPS",
    category: "Linux",
    description: "Decida se deve ser pacote do host ou serviço Docker e instale com cuidado.",
    steps: [
      {
        title: "Entre no VPS.",
        command: "ssh-connect",
      },
      {
        title: "Confira espaço disponível.",
        command: "host-space",
      },
      {
        title: "Pesquise a versão do pacote antes de instalar.",
        command: "apt-package-policy",
      },
      {
        title: "Se for ferramenta de host, instale o pacote.",
        command: "apt-package-install",
        note: "Troque NOME_DO_PACOTE. Para aplicações que precisam ficar rodando, prefira a receita Adicionar serviço ao Docker.",
      },
      {
        title: "Confira serviços do projeto depois da manutenção.",
        command: "compose-ps",
      },
    ],
    aliases: [
      "instalar programa servidor",
      "adicionar programa servidor",
      "colocar programa vps",
      "instalar ferramenta ubuntu",
      "como instalar pacote",
    ],
    flow: ["VPS", "Identificar", "Instalar", "Validar"],
    note: "Não instale software no host só porque é possível. Serviços permanentes devem ser reproduzíveis no Compose sempre que fizer sentido.",
  },
  {
    id: "db-add-record",
    title: "Adicionar um dado ao banco",
    category: "PostgreSQL",
    description: "Entre no banco, confira a tabela e só então adapte um INSERT.",
    steps: [
      {
        title: "Entre no VPS.",
        command: "ssh-connect",
      },
      {
        title: "Abra o PostgreSQL.",
        command: "psql-open",
      },
      {
        title: "Liste as tabelas do projeto.",
        command: "psql-tables",
      },
      {
        title: "Confira a estrutura da tabela de exemplo.",
        command: "psql-describe",
        note: "Para outra tabela, troque o nome no comando antes de usar.",
      },
      {
        title: "Adapte o INSERT aos campos e tipos corretos.",
        command: "psql-insert-template",
      },
      {
        title: "Saia do psql.",
        command: "psql-quit",
      },
    ],
    aliases: [
      "adicionar dado banco",
      "inserir dado banco",
      "salvar coisa banco",
      "colocar informação postgres",
      "adicionar registro",
      "gravar no banco",
    ],
    flow: ["VPS", "psql", "Estrutura", "INSERT", "Conferir"],
    note: "Se a alteração for parte da aplicação, prefira fazê-la pelo código/n8n em vez de inserir manualmente. Use dados de teste quando possível.",
  },
  {
    id: "db-change-schema",
    title: "Adicionar tabela ou coluna ao banco",
    category: "PostgreSQL",
    description: "Faça mudança de schema como código versionado, não como improviso em produção.",
    steps: [
      {
        title: "Abra os arquivos SQL do projeto.",
        link: "sql-files",
      },
      {
        title: "Crie uma branch para a mudança.",
        command: "git-branch",
      },
      {
        title: "Crie um arquivo SQL específico.",
        command: "sql-new-migration",
      },
      {
        title: "Use um modelo de coluna se essa for a mudança.",
        command: "psql-add-column-template",
      },
      {
        title: "Ou use o modelo de tabela se precisar de uma tabela nova.",
        command: "psql-create-table-template",
      },
      {
        title: "Revise o diff antes de aplicar.",
        command: "git-diff",
      },
      {
        title: "Após backup/teste, aplique o arquivo no ambiente escolhido.",
        command: "sql-apply-file",
      },
    ],
    aliases: [
      "criar tabela banco",
      "adicionar tabela banco",
      "adicionar coluna banco",
      "alterar banco dados",
      "mudar schema postgres",
      "migration banco",
    ],
    flow: ["Branch", "SQL versionado", "Revisão", "Teste", "Aplicar"],
    note: "Mudança de schema é código. O caminho preferido é PR + teste + backup + aplicação controlada.",
  },
  {
    id: "fix-github-remote",
    title: "Corrigir o endereço do GitHub na VPS",
    category: "Git",
    description: "Confira o origin atual, altere para SocialMEI-IA e valide.",
    steps: [
      {
        title: "Entre no VPS.",
        command: "ssh-connect",
      },
      {
        title: "Entre na pasta do projeto.",
        command: "linux-cd",
      },
      {
        title: "Confira o endereço atual.",
        command: "git-remote-show",
      },
      {
        title: "Ajuste o origin se estiver antigo.",
        command: "git-remote-set-socialmei",
      },
      {
        title: "Confira novamente.",
        command: "git-remote-show",
      },
    ],
    aliases: [
      "github mudou nome",
      "corrigir origin vps",
      "trocar repositorio servidor",
      "remote antigo",
    ],
    flow: ["VPS", "origin", "corrigir", "validar"],
    note: "Isso altera somente o remote Git do checkout; não reinicia Docker nem muda banco.",
  },
  {
    id: "server-health",
    title: "Diagnosticar VPS lenta, cheia ou pesada",
    category: "Linux",
    description:
      "Cheque carga, RAM, disco e consumo dos containers antes de reiniciar qualquer coisa.",
    steps: [
      {
        title: "Entre no VPS.",
        command: "ssh-connect",
      },
      {
        title: "Veja carga e uptime.",
        command: "host-uptime",
      },
      {
        title: "Confira memória.",
        command: "host-memory",
      },
      {
        title: "Confira disco.",
        command: "host-space",
      },
      {
        title: "Veja o tamanho do checkout se o disco estiver apertado.",
        command: "host-project-size",
      },
      {
        title: "Veja consumo por container.",
        command: "docker-stats",
      },
      {
        title: "Confira estado do Compose.",
        command: "compose-ps",
      },
    ],
    aliases: [
      "servidor lento",
      "vps lenta",
      "servidor cheio",
      "sem memoria",
      "cpu alta",
      "diagnosticar servidor",
      "vps problema",
    ],
    flow: ["VPS", "CPU/carga", "RAM", "Disco", "Containers"],
    note: "Primeiro diagnostique; reiniciar sem saber a causa pode esconder o problema.",
  },
  {
    id: "verify-server-sync",
    title: "Conferir se a VPS está igual ao GitHub",
    category: "Deploy",
    description: "Compare commits sem sobrescrever arquivos.",
    steps: [
      {
        title: "Entre no VPS.",
        command: "ssh-connect",
      },
      {
        title: "Entre no checkout.",
        command: "linux-cd",
      },
      {
        title: "Confira branch e alterações locais.",
        command: "deploy-status",
      },
      {
        title: "Compare local com origin/main.",
        command: "deploy-compare-origin",
      },
      {
        title: "Se estiver limpo e atrasado, use a receita Atualizar servidor.",
        note: "Não use pull se houver alteração local sem revisar.",
      },
    ],
    aliases: [
      "vps atualizada",
      "servidor igual github",
      "comparar github vps",
      "qual commit servidor",
    ],
    flow: ["VPS", "Git status", "origin/main", "Comparar"],
    note: "SHAs iguais indicam o mesmo commit, mas serviços em execução ainda podem precisar de compose up/rebuild conforme a mudança.",
  },
  {
    id: "check-public-services",
    title: "Ver se Dashboard, n8n e pgAdmin respondem",
    category: "Deploy",
    description: "Teste os principais endpoints públicos sem login nem alteração.",
    steps: [
      {
        title: "Entre no VPS ou use um terminal Linux com curl.",
        command: "ssh-connect",
      },
      {
        title: "Teste o Dashboard.",
        command: "http-dashboard",
      },
      {
        title: "Teste o n8n.",
        command: "http-n8n",
      },
      {
        title: "Teste o pgAdmin.",
        command: "http-pgadmin",
      },
      {
        title: "Se algum falhar, confira Compose.",
        command: "compose-ps",
      },
      {
        title: "Depois veja logs do Caddy.",
        command: "caddy-logs",
      },
    ],
    aliases: [
      "site caiu",
      "ver se esta online",
      "dashboard n8n pgadmin",
      "servicos publicos",
      "https problema",
    ],
    flow: ["HTTP", "Dashboard", "n8n", "pgAdmin", "Caddy"],
    note: "Resposta HTTP apenas confirma alcance básico; não significa que login, banco ou workflow estejam funcionando por completo.",
  },
  {
    id: "update-docker-images",
    title: "Atualizar imagens Docker com segurança",
    category: "Docker Compose",
    description: "Valide o Compose, baixe imagens, aplique e confira os serviços.",
    steps: [
      {
        title: "Entre no VPS.",
        command: "ssh-connect",
      },
      {
        title: "Entre na pasta do projeto.",
        command: "linux-cd",
      },
      {
        title: "Valide o Compose.",
        command: "compose-validate",
      },
      {
        title: "Baixe as imagens configuradas.",
        command: "compose-pull",
      },
      {
        title: "Aplique os serviços.",
        command: "compose-up",
      },
      {
        title: "Confira o resultado.",
        command: "compose-ps",
      },
    ],
    aliases: [
      "atualizar docker",
      "atualizar imagens",
      "docker pull compose",
      "nova imagem container",
    ],
    flow: ["Validar", "Pull", "Up", "Conferir"],
    note: "Evite tags flutuantes quando estabilidade importa. Aplicar imagens pode recriar containers.",
  },
];

const QUICK_GLOSSARY = [
  {
    term: "VPS",
    definition: "Servidor virtual acessado pela rede.",
  },
  {
    term: "SSH",
    definition: "Conexão segura para usar o terminal do servidor.",
  },
  {
    term: "Container",
    definition: "Aplicação isolada em execução pelo Docker.",
  },
  {
    term: "Imagem",
    definition: "Modelo usado para criar um container.",
  },
  {
    term: "Volume",
    definition: "Armazenamento que persiste além da vida de um container.",
  },
  {
    term: "Compose",
    definition: "Arquivo e ferramenta que gerenciam serviços Docker em conjunto.",
  },
  {
    term: "n8n",
    definition: "Ferramenta que executa fluxos de automação.",
  },
  {
    term: "Workflow",
    definition: "Sequência de ações conectadas no n8n.",
  },
  {
    term: "PostgreSQL",
    definition: "Banco de dados relacional do projeto.",
  },
  {
    term: "Schema",
    definition: "Grupo de tabelas e outros objetos dentro de um banco.",
  },
  {
    term: "Caddy",
    definition: "Proxy que encaminha requisições e gerencia HTTPS.",
  },
  {
    term: "PR",
    definition: "Proposta de alterações enviada para revisão no GitHub.",
  },
  {
    term: "Deploy",
    definition: "Aplicação de uma versão no ambiente de destino.",
  },
  {
    term: "Webhook",
    definition: "Endereço que recebe eventos para iniciar uma integração.",
  },
  {
    term: "FastAPI",
    definition: "Framework da API Python de processamento de texto.",
  },
  {
    term: "Venv",
    definition: "Ambiente Python com dependências separadas do sistema.",
  },
];

const OFFICIAL_SOURCES = {
  keyPairs: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",
  createKey: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html",
  identifyKey: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/describe-keys.html",
  connect: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-to-linux-instance.html",
  prerequisites:
    "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs-general.html",
  troubleshoot:
    "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html",
  replaceKey: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-key-pair.html",
  icacls: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls",
};

const PAGE_THEMES = {
  PowerShell: {
    id: "powershell",
    color: "#7ba9ff",
    light: "#295fba",
    family: "terminal",
    layout: "console",
    motion: "prompt",
  },
  SSH: {
    id: "ssh",
    color: "#74d8c9",
    light: "#127267",
    family: "terminal",
    layout: "tunnel",
    motion: "packet",
  },
  AWS: {
    id: "aws",
    color: "#efb66b",
    light: "#956023",
    family: "infra",
    layout: "network",
    motion: "pulse",
  },
  Git: {
    id: "git",
    color: "#eeaa83",
    light: "#a4552d",
    family: "graph",
    layout: "branch",
    motion: "branch",
  },
  Linux: {
    id: "linux",
    color: "#9ad6a0",
    light: "#35783a",
    family: "terminal",
    layout: "filesystem",
    motion: "cursor",
  },
  Docker: {
    id: "docker",
    color: "#70c7ed",
    light: "#26718d",
    family: "infra",
    layout: "stack",
    motion: "lift",
  },
  "Docker Compose": {
    id: "compose",
    color: "#8ed4e6",
    light: "#2b7082",
    family: "infra",
    layout: "manifest",
    motion: "stack",
  },
  n8n: {
    id: "n8n",
    color: "#ee9d9f",
    light: "#a54857",
    family: "graph",
    layout: "workflow",
    motion: "connector",
  },
  PostgreSQL: {
    id: "postgresql",
    color: "#9aafea",
    light: "#4d5ca2",
    family: "data",
    layout: "explorer",
    motion: "query",
  },
  Python: {
    id: "python",
    color: "#e9c873",
    light: "#866b22",
    family: "editor",
    layout: "editor",
    motion: "indent",
  },
  FastAPI: {
    id: "fastapi",
    color: "#74d6bd",
    light: "#137c64",
    family: "editor",
    layout: "endpoint",
    motion: "request",
  },
  Caddy: {
    id: "caddy",
    color: "#a5d0b1",
    light: "#3c784c",
    family: "infra",
    layout: "proxy",
    motion: "route",
  },
  Deploy: {
    id: "deploy",
    color: "#b8aaee",
    light: "#7557ad",
    family: "pipeline",
    layout: "pipeline",
    motion: "stage",
  },
  Dashboard: {
    id: "dashboard",
    color: "#91b8ed",
    light: "#346ba3",
    family: "editor",
    layout: "workspace",
    motion: "preview",
  },
  Projeto: {
    id: "project",
    color: "#9aabc5",
    light: "#55677e",
    family: "infra",
    layout: "workspace",
    motion: "launch",
  },
  Links: {
    id: "links",
    color: "#90c9cf",
    light: "#227379",
    family: "launch",
    layout: "launchpad",
    motion: "launch",
  },
  Receitas: {
    id: "recipes",
    color: "#c6b2e5",
    light: "#745797",
    family: "pipeline",
    layout: "recipe-index",
    motion: "stage",
  },
  Comandos: {
    id: "commands",
    color: "#91b7d8",
    light: "#356789",
    family: "terminal",
    layout: "command-index",
    motion: "prompt",
  },
};

const CONTEXT_HELP = {
  SSH: {
    use: [
      "Confirme o Key Pair e localize a PEM.",
      "Abra o PowerShell no seu PC.",
      "Confira IP público e usuário da AMI.",
      "Copie, cole e pressione Enter.",
      "Na primeira conexão, compare o fingerprint da instância.",
      "Prompt Ubuntu indica sessão remota; exit volta ao PC.",
    ],
    where: ["Seu computador", "PowerShell", "SSH", "EC2", "Ubuntu"],
    errors: [
      [
        "Permission denied (publickey)",
        "Confira chave e usuário; Ubuntu costuma usar ubuntu. A chave pública precisa estar autorizada na instância.",
      ],
      [
        "Connection timed out",
        "Confira IP, estado da instância, rede e regra SSH 22 limitada ao seu IP.",
      ],
      ["No such file", "Corrija o caminho da PEM no seu PC; mantenha as aspas."],
      ["Could not resolve hostname", "Revise o IP/hostname e remova textos de exemplo."],
      [
        "UNPROTECTED PRIVATE KEY FILE",
        "Confira Owner e ACL; abra a receita de permissões Windows.",
      ],
    ],
  },
  Git: {
    use: [
      "Abra o terminal na raiz do checkout.",
      "Confira git status e a branch.",
      "Copie a ação escolhida.",
      "Revise a saída antes de commit, pull ou push.",
    ],
    where: ["PC", "PowerShell / Git Bash", "Checkout Git"],
    errors: [
      ["Not a git repository", "Entre na pasta clonada e confira git status."],
      [
        "Non-fast-forward / divergência",
        "Faça fetch e revise o histórico; preserve alterações locais.",
      ],
      ["Author identity unknown", "Configure user.name e user.email no checkout."],
    ],
  },
  Docker: {
    use: [
      "Acesse o servidor via SSH.",
      "No host Docker, copie a ação.",
      "Confira status e logs depois de alterar serviços.",
    ],
    where: ["PC", "SSH", "Host Docker"],
    errors: [
      [
        "Cannot connect to daemon",
        "Confira Docker e permissões do usuário; não altere acesso sem revisão.",
      ],
      ["No such container", "Compare docker ps -a com o nome real do container."],
      ["No space left", "Confira df -h e volumes antes de remover dados."],
    ],
  },
  "Docker Compose": {
    use: [
      "Acesse o servidor e entre na pasta do checkout.",
      "Valide com docker compose config --quiet.",
      "Copie a ação e confira docker compose ps.",
    ],
    where: ["PC", "SSH", "Pasta do Compose", "Serviços"],
    errors: [
      ["No configuration file provided", "Entre na pasta onde está compose.yaml."],
      ["Variable is not set", "Confira as variáveis locais sem compartilhar o .env."],
      ["Serviço não existe", "Confira docker compose config --services."],
    ],
  },
  Linux: {
    use: [
      "Acesse o host Ubuntu via SSH.",
      "Confira pwd antes de usar caminhos relativos.",
      "Copie o comando e confira a saída.",
    ],
    where: ["PC", "SSH", "Shell Ubuntu"],
    errors: [
      ["No such file or directory", "Confira pwd, nomes e caminho."],
      ["Permission denied", "Confira owner e permissões; não use sudo como atalho automático."],
    ],
  },
  PowerShell: {
    use: [
      "Abra PowerShell no seu PC.",
      "Confira Get-Location e os caminhos.",
      "Cole o comando e pressione Enter.",
    ],
    where: ["Seu computador", "PowerShell"],
    errors: [
      ["Command not found", "Confira instalação e PATH."],
      ["Caminho com espaços", "Mantenha o caminho entre aspas."],
    ],
  },
  n8n: {
    use: [
      "Abra n8n para ações no workflow; use SSH para Docker.",
      "Confira ambiente e credenciais antes de executar.",
      "Após testar, confira Executions ou os logs do serviço.",
    ],
    where: ["Navegador / n8n", "ou SSH / Docker"],
    errors: [
      ["Webhook 404", "Confira método, URL de teste/produção e escuta ativa."],
      ["Credencial / SQL", "Confira role, banco e schema do node PostgreSQL."],
      ["Serviço não responde", "Confira status, logs n8n e Caddy."],
    ],
  },
  PostgreSQL: {
    use: [
      "Abra psql no banco e na role autorizados.",
      "Copie a consulta no prompt do PostgreSQL.",
      "Confira a saída; \\q retorna ao host.",
    ],
    where: ["VPS", "Container PostgreSQL", "psql", "Schema socialmei"],
    errors: [
      ["Relation does not exist", "Confira banco, schema e inicialização."],
      ["Permission denied", "Confira a role e seus grants; não conceda superuser como atalho."],
      ["Authentication failed", "Confira usuário, banco e acesso autorizado."],
    ],
  },
  Python: {
    use: [
      "No PC, confira Python.",
      "Use o venv do projeto para instalar dependências.",
      "Copie a ação no contexto indicado.",
    ],
    where: ["PC", "PowerShell", "Venv"],
    errors: [
      ["Python não encontrado", "Confira instalação e PATH; no Windows teste py -3."],
      ["ModuleNotFoundError", "Use o executável do venv e revise requirements.txt."],
    ],
  },
  FastAPI: {
    use: [
      "Prepare o venv e os requisitos.",
      "Inicie Uvicorn local na porta 8000.",
      "Teste /health ou /processar no contexto do card.",
    ],
    where: ["PC / Venv", "Uvicorn", "HTTP local"],
    errors: [
      ["422", "Confira JSON e campo texto."],
      ["Connection refused", "Confira Uvicorn e porta; API Docker é interna."],
    ],
  },
  Caddy: {
    use: [
      "Revise o Caddyfile montado.",
      "Valide antes de recarregar.",
      "Confira logs e destino depois da alteração.",
    ],
    where: ["Internet", "HTTPS / Caddy", "n8n ou pgAdmin"],
    errors: [
      ["502 Bad Gateway", "Confira o serviço de destino na rede Docker."],
      ["TLS / certificado", "Confira DNS, portas 80/443 e logs."],
    ],
  },
  Deploy: {
    use: [
      "Revise main e o checkout do servidor.",
      "Baixe somente com fast-forward.",
      "Valide, aplique Compose e confira serviços.",
    ],
    where: ["PC", "GitHub / PR", "VPS", "Compose"],
    errors: [
      ["Checkout alterado", "Pare e preserve o trabalho local antes de atualizar."],
      ["Build falhou", "Leia logs e revise dependências antes de tentar outra versão."],
    ],
  },
  Dashboard: {
    use: [
      "Edite frontend/socialmei-app.html.",
      "A entrada index.html apenas encaminha para a fonte oficial.",
      "Teste localmente e revise via PR.",
    ],
    where: ["Editor", "Teste local", "GitHub / Pages"],
    errors: [
      ["Recurso ausente", "Rode npm test e confira os recursos referenciados."],
      ["Console / endpoint", "Abra F12 → Console e confira o endereço da integração."],
    ],
  },
};

("use strict");
// Capture somente o HTML original: nunca exporte valores pessoais do DOM.
const SHAREABLE_HTML = "<!doctype html>\n" + document.documentElement.outerHTML;
const $ = (id) => document.getElementById(id);
const escapeHTML = (v) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
const normalized = (v) =>
  String(v)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
const PATHS = {
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  webhook:
    '<circle cx="5" cy="12" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><path d="m8 12 8-7m-8 7 8 7"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/>',
  home: '<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',
  terminal: '<path d="m5 7 5 5-5 5M13 17h6"/>',
  link: '<path d="m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0M16 8l2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 0) scale(.9)"/>',
  star: '<path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3L3 9.7l6.2-.9Z"/>',
  pin: '<path d="M8 3h8l-1 7 4 4v2H5v-2l4-4ZM12 16v6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
  recipe: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
  open: '<path d="M14 3h7v7M21 3l-9 9M10 4H3v17h17v-7"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  moon: '<path d="M20 15a9 9 0 0 1-11-11 9 9 0 1 0 11 11Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v2M12 21v2M1 12h2M21 12h2M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2"/>',
  auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/>',
  settings:
    '<path d="m9 3-1 3-3 1-2 4 2 3 1 4 4 2 3-1 4 1 3-4-1-3 1-4-4-2-3-1Z"/><circle cx="12" cy="12" r="3"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  upload: '<path d="M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5"/>',
  docker:
    '<path d="M3 12h17c0 6-5 8-9 8-5 0-8-2-8-8Z"/><path d="M5 8h4v4H5ZM9 8h4v4H9ZM13 8h4v4h-4ZM9 4h4v4H9ZM20 12l2-3"/>',
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
  cloud: '<path d="M6 18a5 5 0 0 1-1-10 7 7 0 0 1 13-1 5.5 5.5 0 0 1 0 11Z"/>',
  git: '<circle cx="7" cy="5" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="7" cy="19" r="2"/><path d="M7 7v10M17 9v2c0 4-10 3-10 6"/>',
  flow: '<rect x="2" y="8" width="6" height="7" rx="1"/><rect x="16" y="2" width="6" height="7" rx="1"/><rect x="16" y="16" width="6" height="7" rx="1"/><path d="M8 11h4V5h4M12 11v8h4"/>',
  code: '<path d="m7 5-6 7 6 7M17 5l6 7-6 7M14 3l-4 18"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  shield: '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6Z"/><path d="m8 12 3 3 5-6"/>',
  book: '<path d="M12 5v16M12 5C8 2 4 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-6-2-10 1Z"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name] || PATHS.terminal}</svg>`;
function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon);
  });
}
const CATEGORY_INFO = {
  PowerShell: {
    icon: "terminal",
    sentence: "Terminal do PC para executar comandos e abrir conexões.",
  },
  SSH: { icon: "shield", sentence: "SSH conecta o terminal do seu PC ao servidor." },
  Git: { icon: "git", sentence: "Git registra versões e envia alterações para revisão." },
  Docker: { icon: "docker", sentence: "Docker roda as aplicações do projeto em containers." },
  "Docker Compose": {
    icon: "docker",
    sentence: "Compose gerencia os serviços declarados nos arquivos do projeto.",
  },
  Linux: { icon: "terminal", sentence: "Comandos do host Ubuntu, executados no servidor via SSH." },
  n8n: { icon: "flow", sentence: "n8n executa os workflows de automação do projeto." },
  PostgreSQL: {
    icon: "database",
    sentence: "PostgreSQL guarda os dados; psql é o cliente de terminal.",
  },
  FastAPI: { icon: "code", sentence: "Endpoints e testes da API Python do projeto." },
  Python: { icon: "code", sentence: "A API Python do projeto processa texto com FastAPI." },
  Caddy: { icon: "shield", sentence: "Caddy encaminha n8n e pgAdmin e gerencia HTTPS." },
  Deploy: { icon: "upload", sentence: "Deploy aplica uma versão revisada no ambiente de destino." },
  AWS: { icon: "cloud", sentence: "A AWS hospeda o servidor do projeto." },
  Dashboard: {
    icon: "grid",
    sentence: "Dashboard estático: dados de gestão e preferências ficam neste navegador.",
  },
  Projeto: { icon: "code", sentence: "Arquivos e tarefas do SocialMEI.IA." },
};
const CATEGORY_NAMES = Object.keys(CATEGORY_INFO);
const CONTEXT_LABELS = {
  PowerShell: "PC · PowerShell",
  SSH: "Servidor · SSH",
  Container: "Dentro do container",
  PostgreSQL: "PostgreSQL · psql",
};
const RISK_LABELS = { safe: "Seguro", attention: "Atenção", danger: "Perigoso" };
const entries = [
  ...COMMANDS.map((x) => ({ ...x, type: "command", key: "cmd:" + x.id })),
  ...QUICK_LINKS.map((x) => ({ ...x, type: "link", key: "link:" + x.id })),
  ...RECIPES.map((x) => ({ ...x, type: "recipe", key: "recipe:" + x.id })),
];
const ENTRY_MAP = new Map(entries.map((x) => [x.key, x]));
const commandById = (id) => ENTRY_MAP.get("cmd:" + id);
const linkById = (id) => ENTRY_MAP.get("link:" + id);

const HOME_NODES = [
  {
    id: "aws",
    label: "AWS",
    icon: "cloud",
    category: "AWS",
    x: 18,
    y: 15,
    keys: ["link:aws", "link:ec2", "recipe:aws-ip", "cmd:ssh-connect"],
    aliases: ["aws", "ec2", "amazon", "servidor"],
  },
  {
    id: "vps",
    label: "VPS",
    icon: "shield",
    category: "SSH",
    x: 14,
    y: 49,
    keys: ["cmd:ssh-connect", "recipe:access-vps", "link:ec2", "cmd:docker-ps"],
    aliases: ["vps", "ssh", "servidor", "acessar"],
  },
  {
    id: "docker",
    label: "Docker",
    icon: "docker",
    category: "Docker",
    x: 29,
    y: 82,
    keys: ["cmd:docker-ps", "cmd:n8n-restart", "cmd:compose-logs", "link:docker-site"],
    aliases: ["docker", "container", "compose", "logs"],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "grid",
    category: "Dashboard",
    x: 50,
    y: 91,
    keys: ["link:dashboard", "link:dashboard-file", "recipe:dashboard-update", "cmd:serve"],
    aliases: ["dashboard", "painel", "frontend", "pages"],
  },
  {
    id: "github",
    label: "GitHub",
    icon: "git",
    category: "Git",
    x: 71,
    y: 82,
    keys: ["link:github", "cmd:git-status", "cmd:git-pull", "cmd:git-push"],
    aliases: ["github", "git", "repo", "repositorio"],
  },
  {
    id: "n8n",
    label: "n8n",
    icon: "flow",
    category: "n8n",
    x: 86,
    y: 49,
    keys: ["link:n8n", "cmd:n8n-restart", "cmd:n8n-logs", "recipe:n8n-execute"],
    aliases: ["n8n", "workflow", "automacao", "executions"],
  },
  {
    id: "db",
    label: "Banco",
    icon: "database",
    category: "PostgreSQL",
    x: 82,
    y: 15,
    keys: ["link:pgadmin", "cmd:psql-open", "cmd:psql-tables", "recipe:enter-db"],
    aliases: ["banco", "postgres", "postgresql", "pgadmin", "db"],
  },
];
const HOME_NODE_MAP = new Map(HOME_NODES.map((n) => [n.id, n]));

const KEYS = "michael-devhub-v1";
let storageOK = true,
  saved = {};
try {
  saved = JSON.parse(localStorage.getItem(KEYS) || "{}") || {};
} catch {
  saved = {};
  storageOK = false;
}
const validKeys = (arr) =>
  Array.isArray(arr)
    ? [...new Set(arr.filter((x) => typeof x === "string" && ENTRY_MAP.has(x)))].slice(0, 200)
    : [];
const state = {
  favorites: validKeys(saved.favorites),
  pins: Array.isArray(saved.pins)
    ? validKeys(saved.pins)
    : ["cmd:ssh-connect", "link:n8n", "link:dashboard", "link:github"],
  recents: Array.isArray(saved.recents)
    ? saved.recents.filter((x) => x && ENTRY_MAP.has(x.key) && Number.isFinite(x.time)).slice(0, 15)
    : [],
  theme: ["dark", "light", "auto"].includes(saved.theme) ? saved.theme : "dark",
  mode: saved.mode === "personal" ? "personal" : "share",
  category: CATEGORY_NAMES.includes(saved.category) ? saved.category : "",
  personal: { ...PERSONAL_CONFIG },
  homeMotion: ["reduced", "normal", "high"].includes(saved.homeMotion)
    ? saved.homeMotion
    : "normal",
  homeParticles: saved.homeParticles !== false,
  homeRecents: saved.homeRecents !== false,
  showcase: saved.showcase === true,
  sidebarCompact: saved.sidebarCompact === true,
  navGroups:
    saved.navGroups && typeof saved.navGroups === "object" && !Array.isArray(saved.navGroups)
      ? { ...saved.navGroups }
      : {},
};
if (saved.personal && typeof saved.personal === "object")
  Object.keys(PERSONAL_CONFIG).forEach((k) => {
    if (typeof saved.personal[k] === "string") state.personal[k] = saved.personal[k];
  });
let page = "home",
  mainQuery = "",
  kindFilter = "all",
  paletteItems = [],
  paletteIndex = 0,
  manualPending = null,
  currentRecipe = null,
  recipeGroups = [],
  toastTimer;
let revealed = new Set();
let activeHomeNode = "",
  homeTerminalIndex = 0,
  homeMotionRAF = 0,
  homeEasterTimer = 0;
let firstHomeEntrance = true;
try {
  firstHomeEntrance = !sessionStorage.getItem("michael-dev-hub-home-seen");
} catch {}
function persist() {
  try {
    localStorage.setItem(KEYS, JSON.stringify(state));
  } catch {
    storageOK = false;
    $("storageAlert").hidden = false;
  }
}
function config() {
  return state.mode === "personal" ? state.personal : PERSONAL_CONFIG;
}
function safeUrl(value) {
  try {
    const u = new URL(value);
    return ["https:", "http:"].includes(u.protocol) && !u.username && !u.password ? u.href : "";
  } catch {
    return "";
  }
}
const psQuote = (v) =>
  '"' + String(v).replace(/`/g, "``").replace(/\$/g, "`$").replace(/"/g, '`"') + '"';
const shQuote = (v) => "'" + String(v).replace(/'/g, "'\\''") + "'";
function linkUrl(e) {
  const configured = e.config ? config()[e.config] : "";
  return safeUrl(configured || e.url);
}
function toast(msg) {
  clearTimeout(toastTimer);
  $("toast").textContent = msg;
  $("toast").hidden = false;
  $("toast").classList.remove("show");
  void $("toast").offsetWidth;
  $("toast").classList.add("show");
  toastTimer = setTimeout(() => {
    $("toast").hidden = true;
  }, 2800);
}
function noteRecent(key) {
  state.recents = [{ key, time: Date.now() }, ...state.recents.filter((x) => x.key !== key)].slice(
    0,
    15,
  );
  persist();
}
function flags(e) {
  return `<div class="card-tools"><button class="icon-btn" data-action="favorite" data-key="${escapeHTML(e.key)}" aria-pressed="${state.favorites.includes(e.key)}" aria-label="${state.favorites.includes(e.key) ? "Remover dos favoritos" : "Favoritar"} ${escapeHTML(e.title)}" title="Favoritar">${icon("star")}</button><button class="icon-btn" data-action="pin" data-key="${escapeHTML(e.key)}" aria-pressed="${state.pins.includes(e.key)}" aria-label="${state.pins.includes(e.key) ? "Desfixar" : "Fixar"} ${escapeHTML(e.title)}" title="Fixar na home">${icon("pin")}</button></div>`;
}
function badges(e) {
  return `<div class="badges"><span class="badge place">${icon(e.context === "PostgreSQL" ? "database" : "terminal")}${escapeHTML(CONTEXT_LABELS[e.context] || e.context)}</span><span class="badge ${e.risk}">${RISK_LABELS[e.risk] || "Atenção"}</span></div>`;
}
function linkCard(e) {
  const url = linkUrl(e);
  let host = "Configure seu endereço";
  try {
    host = new URL(url).hostname;
  } catch {}
  return `<article class="card link-card" data-entry="${e.key}"><div class="card-top"><span class="card-icon">${icon(CATEGORY_INFO[e.category]?.icon || "link")}</span><div class="card-title"><h3>${escapeHTML(e.title)}</h3></div>${flags(e)}</div><p>${escapeHTML(e.description)}</p><div class="link-url">${escapeHTML(host)}</div><div class="card-bottom"><button class="action" data-action="open" data-key="${e.key}">${icon(url ? "open" : "settings")}${url ? (e.group === "Instalar ferramentas" ? "Baixar" : "Abrir") : "Configurar link"}</button><span class="recipe-count">${escapeHTML(e.category)}</span></div></article>`;
}
function flowHtml(flow) {
  return flow?.length
    ? `<div class="mini-flow">${flow.map((x, i) => `${i ? icon("arrow") : ""}<span>${escapeHTML(x)}</span>`).join("")}</div>`
    : "";
}
function recipeCard(e) {
  return `<article class="card recipe-card" data-entry="${e.key}"><div class="card-top"><span class="card-icon">${icon("recipe")}</span><div class="card-title"><h3>${escapeHTML(e.title)}</h3></div>${flags(e)}</div><p>${escapeHTML(e.description)}</p>${flowHtml(e.flow)}<div class="card-bottom"><button class="action" data-action="recipe" data-key="${e.key}">Ver receita ${icon("arrow")}</button><span class="recipe-count">${e.steps.length} passos</span></div></article>`;
}
function card(e) {
  return e.type === "command" ? commandCard(e) : e.type === "link" ? linkCard(e) : recipeCard(e);
}
function cards(list) {
  return `<div class="grid">${list.map(card).join("")}</div>`;
}
function section(title, content, ico = "grid", more = "") {
  return `<section class="section"><div class="section-head"><h2>${icon(ico)}${escapeHTML(title)}</h2>${more}</div>${content}</section>`;
}
const moreButton = (target, title = "Ver todos") =>
  `<button class="more" data-page="${escapeHTML(target)}">${escapeHTML(title)}${icon("arrow")}</button>`;
function quickRow(e, time) {
  const label = e.type === "command" ? "Copiar" : e.type === "link" ? "Abrir" : "Receita";
  let sub =
    e.type === "command"
      ? e.risk === "danger"
        ? "Comando protegido"
        : commandCode(e)
      : e.type === "link"
        ? e.category
        : e.description;
  return `<div class="list-row">${icon(e.type === "command" ? "terminal" : e.type === "recipe" ? "recipe" : "link")}<div class="row-title"><strong>${escapeHTML(e.title)}</strong><small>${escapeHTML(sub)}</small></div><button class="action" data-action="activate" data-key="${e.key}" aria-label="${label} ${escapeHTML(e.title)}">${label}${icon(e.type === "command" ? "copy" : "arrow")}</button></div>`;
}
function pinsHtml() {
  return state.pins.length
    ? `<div class="pin-grid">${state.pins
        .map((key) => {
          const e = ENTRY_MAP.get(key);
          return `<div class="pin-card"><button class="pin-act" data-action="activate" data-key="${key}"><span class="pin-icon">${icon(CATEGORY_INFO[e.category]?.icon || "terminal")}</span><span><strong>${escapeHTML(e.title)}</strong><small>${e.type === "command" ? escapeHTML(CONTEXT_LABELS[e.context]) : e.type === "link" ? "Link rápido" : "Receita rápida"}</small></span></button><button class="icon-btn" data-action="pin" data-key="${key}" aria-label="Desfixar ${escapeHTML(e.title)}" title="Desfixar">${icon("pin")}</button></div>`;
        })
        .join("")}</div>`
    : '<div class="empty">Use o ícone de alfinete em qualquer item para fixá-lo aqui.</div>';
}
function categoriesHtml() {
  return `<div class="categories">${CATEGORY_NAMES.map((cat) => `<button class="cat-chip" data-category="${escapeHTML(cat)}">${icon(CATEGORY_INFO[cat].icon)}${escapeHTML(cat)}<small>${entries.filter((x) => x.category === cat).length}</small></button>`).join("")}</div>`;
}

function greetingText() {
  const h = new Date().getHours();
  return h < 12 ? "Bom dia, Mike." : h < 18 ? "Boa tarde, Mike." : "Boa noite, Mike.";
}
function homeNodeStatus(node) {
  const p = config();
  if (node.id === "vps") return localSSHStatus(p).label;
  if (node.id === "docker") return "comandos prontos";
  const first = node.keys.map((k) => ENTRY_MAP.get(k)).find((e) => e?.type === "link");
  return first && linkUrl(first) ? "link disponível" : "configure o link";
}
function homeNodeMatches(node, q) {
  const n = normalized(q);
  if (!n) return false;
  const terms = [
    node.label,
    node.category,
    ...node.aliases,
    ...node.keys.map((k) => ENTRY_MAP.get(k)?.title || ""),
  ].join(" ");
  return (
    normalized(terms).includes(n) ||
    n.split(" ").some((t) => t.length > 2 && normalized(terms).includes(t))
  );
}
function homeNodeHtml(node, i) {
  return `<button type="button" class="home-node" data-home-node="${node.id}" style="--x:${node.x}%;--y:${node.y}%;--i:${i}" aria-label="Abrir painel rápido de ${escapeHTML(node.label)}"><span class="home-node-icon">${icon(node.icon)}</span><strong>${escapeHTML(node.label)}</strong><small>${escapeHTML(node.category)}</small><span class="node-status"><i></i>${escapeHTML(homeNodeStatus(node))}</span>${i < 3 ? `<span class="node-hotkey">Alt ${i + 1}</span>` : ""}<span class="node-count">${node.keys.length} ações</span></button>`;
}
function homeDockKeys() {
  const defaults = [
    "cmd:ssh-connect",
    "link:n8n",
    "link:github",
    "link:dashboard",
    "cmd:docker-ps",
  ];
  return [...new Set([...state.pins, ...state.favorites, ...defaults])]
    .filter((k) => ENTRY_MAP.has(k))
    .slice(0, 6);
}
function homeDockHtml() {
  return `<nav class="home-dock" aria-label="Command Dock">${homeDockKeys()
    .map((k) => {
      const e = ENTRY_MAP.get(k);
      const ico =
        CATEGORY_INFO[e.category]?.icon ||
        (e.type === "link" ? "link" : e.type === "recipe" ? "recipe" : "terminal");
      return `<button class="dock-item" data-action="activate" data-key="${k}" aria-label="${escapeHTML(e.title)}"><span>${icon(ico)}</span><span class="dock-label">${escapeHTML(e.title)}</span></button>`;
    })
    .join(
      "",
    )}<span class="dock-separator"></span><button class="dock-item dock-showcase" data-home-showcase aria-pressed="${state.showcase}" aria-label="Alternar modo Showcase">${icon("star")}<span class="dock-label">Showcase</span></button></nav>`;
}
function homeRecentHtml() {
  if (!state.homeRecents) return "";
  const items = state.recents
    .slice(0, 3)
    .map((x) => ({ e: ENTRY_MAP.get(x.key), time: x.time }))
    .filter((x) => x.e);
  return `<div class="home-recents"><div class="recent-label">últimos usados</div><div class="recent-strip">${items.length ? items.map(({ e, time }) => `<button class="recent-chip" data-action="activate" data-key="${e.key}">${icon(e.type === "command" ? "terminal" : e.type === "link" ? "link" : "recipe")}<span>${escapeHTML(e.title)}</span><time>${relativeTime(time)}</time></button>`).join("") : '<div class="recent-chip"><span>Suas últimas ações aparecem aqui.</span></div>'}</div></div>`;
}
function relativeTime(time) {
  const min = Math.max(0, Math.floor((Date.now() - time) / 60000));
  if (min < 1) return "agora";
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  return h < 24 ? `${h}h` : `${Math.floor(h / 24)}d`;
}
function terminalEntry() {
  const pool = ["cmd:docker-ps", "cmd:git-status", "cmd:compose-ps", "cmd:n8n-logs"]
    .map((k) => ENTRY_MAP.get(k))
    .filter(Boolean);
  const recent = state.recents
    .map((x) => ENTRY_MAP.get(x.key))
    .find((e) => e?.type === "command" && e.risk !== "danger");
  return recent || pool[homeTerminalIndex % pool.length];
}
function homeTerminalHtml() {
  const e = terminalEntry();
  return `<div class="home-mini-terminal" aria-label="Mini terminal demonstrativo"><div class="terminal-top"><span class="terminal-lights"><i></i><i></i><i></i></span>mini terminal · preview</div><div class="terminal-code"><b>&gt;</b><code>${escapeHTML(commandCode(e))}</code><span class="terminal-cursor"></span></div><div class="terminal-actions"><button data-action="activate" data-key="${e.key}">${icon("copy")} copiar</button><button data-home-terminal-next>${icon("arrow")} outro exemplo</button></div></div>`;
}
function homeParticlesHtml() {
  if (!state.homeParticles) return "";
  const pts = [
    [8, 15, 9, 12, 7, -8],
    [17, 65, 11, 15, 5, -10],
    [26, 31, 8, 14, 8, 6],
    [35, 10, 13, 18, -6, 8],
    [44, 75, 12, 16, 9, -5],
    [56, 18, 10, 13, -7, 9],
    [64, 64, 14, 17, 6, -8],
    [72, 34, 9, 15, -6, 7],
    [83, 73, 12, 16, 7, -8],
    [91, 21, 15, 18, -9, 6],
    [12, 84, 10, 14, 7, -6],
    [88, 49, 11, 17, -8, 5],
  ];
  return `<div class="cockpit-ambient" aria-hidden="true">${pts.map((p, i) => `<i class="particle" style="--x:${p[0]}%;--y:${p[1]}%;--dur:${p[2]}s;--delay:-${i * 0.8}s;--dx:${p[4]}px;--dy:${p[5]}px"></i>`).join("")}</div>`;
}
function homeHtml() {
  const entrance = firstHomeEntrance ? "cockpit-enter-first" : "cockpit-enter-quick";
  return `<section class="cockpit-stage ${entrance}${state.showcase ? " showcase" : ""}" id="homeCockpit" aria-label="Mike DevHub — centro de controle"><div class="cockpit-topline"><div class="cockpit-greeting"><span class="ready-dot"></span><span>${escapeHTML(greetingText())}</span></div><div class="cockpit-shortcuts"><span>atalhos</span><kbd>/</kbd><kbd>Ctrl K</kbd><kbd>Alt 1–3</kbd></div></div>${homeParticlesHtml()}<div class="constellation-map" id="constellationMap"><svg class="home-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${HOME_NODES.map(homeWireHtml).join("")}</svg><div class="home-hub" id="homeHub"><div class="hub-brand"><div class="hub-mark">M/</div><div class="hub-name"><strong>Mike DevHub</strong><span>COMMAND CONSTELLATION</span></div><div class="hub-status">SYSTEM READY</div></div><div id="homeSearchMount"></div><div class="hub-command-stack" id="homeSearchResults">${homeSearchStackHtml()}</div></div><div class="home-node-layer">${HOME_NODES.map(homeNodeHtml).join("")}</div></div><aside class="home-quick-panel" id="homeQuickPanel" hidden aria-live="polite"></aside>${homeTerminalHtml()}${homeRecentHtml()}${homeDockHtml()}<div class="cockpit-easter" id="cockpitEaster"><span>SYSTEM READY</span></div></section>`;
}
const INTENTS = [
  {
    matches: [
      "vps",
      "ssh",
      "entrar servidor",
      "acessar servidor",
      "abrir vps",
      "acessar vps",
      "entrar vps",
      "comando vps",
      "como acessar vps",
      "como entrar no servidor",
    ],
    keys: ["recipe:access-vps", "cmd:ssh-connect", "cmd:linux-path", "link:ec2"],
  },
  {
    matches: [
      "instalar python servidor",
      "colocar python servidor",
      "python no vps",
      "python ubuntu",
      "adicionar python servidor",
    ],
    keys: [
      "recipe:python-server",
      "cmd:python-host-version",
      "cmd:apt-python",
      "cmd:python-host-pip",
    ],
  },
  {
    matches: [
      "instalar programa servidor",
      "instalar ferramenta vps",
      "adicionar programa servidor",
      "colocar programa ubuntu",
      "apt install",
    ],
    keys: [
      "recipe:install-tool-server",
      "recipe:add-service",
      "cmd:apt-package-policy",
      "cmd:apt-package-install",
    ],
  },
  {
    matches: [
      "adicionar dado banco",
      "inserir dado banco",
      "salvar dado banco",
      "adicionar registro banco",
      "gravar banco",
      "colocar informacao postgres",
    ],
    keys: [
      "recipe:db-add-record",
      "cmd:psql-open",
      "cmd:psql-describe",
      "cmd:psql-insert-template",
    ],
  },
  {
    matches: [
      "criar tabela banco",
      "adicionar tabela banco",
      "adicionar coluna banco",
      "alterar banco",
      "mudar schema",
      "migration banco",
    ],
    keys: [
      "recipe:db-change-schema",
      "link:sql-files",
      "cmd:sql-new-migration",
      "cmd:psql-add-column-template",
      "cmd:psql-create-table-template",
    ],
  },
  {
    matches: ["reiniciar n8n", "restart n8n", "n8n travou", "reinicia n8n"],
    keys: ["recipe:restart-n8n", "cmd:n8n-restart", "cmd:n8n-logs", "cmd:compose-ps"],
  },
  {
    matches: ["banco", "postgres", "postgresql", "entrar banco", "abrir banco"],
    keys: ["recipe:enter-db", "cmd:psql-open", "link:pgadmin", "cmd:psql-tables"],
  },
  {
    matches: [
      "docker",
      "ver containers",
      "containers",
      "ver conteineres",
      "como vejo os containers",
    ],
    keys: ["cmd:docker-ps", "cmd:docker-all", "cmd:compose-ps", "recipe:debug-service"],
  },
  {
    matches: [
      "atualizar docker",
      "atualizar imagens docker",
      "docker pull compose",
      "nova imagem container",
    ],
    keys: ["recipe:update-docker-images", "cmd:compose-pull", "cmd:compose-up", "cmd:compose-ps"],
  },
  {
    matches: [
      "servidor lento",
      "vps lenta",
      "servidor cheio",
      "sem memoria servidor",
      "cpu alta",
      "diagnosticar servidor",
      "problema vps",
    ],
    keys: [
      "recipe:server-health",
      "cmd:host-uptime",
      "cmd:host-memory",
      "cmd:host-space",
      "cmd:docker-stats",
    ],
  },
  {
    matches: [
      "vps atualizada",
      "servidor atualizado github",
      "comparar github vps",
      "servidor igual github",
      "qual commit servidor",
    ],
    keys: [
      "recipe:verify-server-sync",
      "cmd:deploy-compare-origin",
      "cmd:deploy-status",
      "cmd:git-log-five",
    ],
  },
  {
    matches: [
      "github mudou nome",
      "corrigir origin",
      "remote antigo",
      "trocar repositorio vps",
      "endereco github servidor",
    ],
    keys: ["recipe:fix-github-remote", "cmd:git-remote-show", "cmd:git-remote-set-socialmei"],
  },
  {
    matches: [
      "site caiu",
      "dashboard caiu",
      "n8n caiu",
      "pgadmin caiu",
      "servicos publicos",
      "testar urls",
    ],
    keys: [
      "recipe:check-public-services",
      "cmd:http-dashboard",
      "cmd:http-n8n",
      "cmd:http-pgadmin",
      "cmd:caddy-logs",
    ],
  },
  {
    matches: ["aws", "abrir aws", "amazon", "ec2"],
    keys: ["link:aws", "link:ec2", "cmd:ssh-connect", "recipe:aws-ip"],
  },
  {
    matches: ["github", "abrir github", "repositorio"],
    keys: ["link:github", "cmd:git-status", "cmd:git-pull", "recipe:send-change"],
  },
  {
    matches: ["dashboard", "abrir dashboard"],
    keys: ["link:dashboard", "recipe:dashboard-update", "cmd:serve"],
  },
  {
    matches: ["n8n", "abrir n8n"],
    keys: ["link:n8n", "cmd:n8n-restart", "cmd:n8n-logs", "recipe:n8n-execute"],
  },
  {
    matches: [
      "adicionar programa docker",
      "adicionar servico",
      "novo servico",
      "instalar programa docker",
    ],
    keys: ["recipe:add-service", "cmd:compose-validate", "cmd:new-service", "link:compose-file"],
  },
  {
    matches: ["atualizar dashboard", "editar dashboard"],
    keys: ["recipe:dashboard-update", "link:dashboard-file", "cmd:dashboard-compare"],
  },
  { matches: ["trello", "abrir trello"], keys: ["link:trello"] },
  {
    matches: ["git pull", "atualizar projeto"],
    keys: ["cmd:git-pull", "recipe:update-local", "cmd:git-status"],
  },
  {
    matches: ["atualizar servidor", "deploy"],
    keys: ["recipe:update-server", "cmd:deploy-status", "cmd:deploy-pull"],
  },
  {
    matches: ["logs", "ver logs", "logs n8n", "erro n8n"],
    keys: ["cmd:n8n-logs", "cmd:compose-logs", "recipe:debug-service"],
  },
  {
    matches: ["pgadmin", "abrir pgadmin", "painel banco"],
    keys: ["link:pgadmin", "cmd:psql-open", "recipe:enter-db"],
  },
  {
    matches: ["status servidor", "status containers", "servicos rodando"],
    keys: ["cmd:compose-ps", "cmd:docker-ps", "cmd:deploy-status"],
  },
];
function searchEntries(query) {
  const q = normalized(query);
  if (!q)
    return [
      "recipe:access-vps",
      "recipe:python-server",
      "recipe:db-add-record",
      "recipe:server-health",
      "cmd:n8n-restart",
      "cmd:docker-ps",
      "link:github",
    ]
      .map((k) => ENTRY_MAP.get(k))
      .filter(Boolean);
  const stop = new Set([
    "como",
    "eu",
    "o",
    "a",
    "os",
    "as",
    "um",
    "uma",
    "quero",
    "queria",
    "preciso",
    "no",
    "na",
    "do",
    "da",
    "de",
    "para",
    "meu",
    "minha",
    "voce",
    "faco",
    "fazer",
    "tal",
    "coisa",
    "algo",
    "isso",
    "essa",
    "esse",
    "por",
    "favor",
  ]);
  const tokens = q.split(" ").filter((x) => x.length > 1 && !stop.has(x));
  const intent = INTENTS.find((i) =>
    i.matches.some((m) => {
      const nm = normalized(m),
        mt = nm.split(" ").filter((x) => x.length > 1 && !stop.has(x));
      return q === nm || q.includes(nm) || (mt.length >= 2 && mt.every((t) => q.includes(t)));
    }),
  );
  return entries
    .map((e) => {
      const title = normalized(e.title),
        aliases = (e.aliases || []).map(normalized);
      const recipeSteps = e.steps
        ? e.steps.map((s) => [s.title, s.note || "", s.command || "", s.link || ""].join(" "))
        : [];
      const hay = normalized(
        [
          e.title,
          e.description,
          e.category,
          e.context || "",
          e.code || "",
          e.when || "",
          e.result || "",
          e.warning || "",
          ...(e.aliases || []),
          ...(e.flow || []),
          ...recipeSteps,
        ].join(" "),
      );
      let score = 0;
      if (title === q) score += 100;
      if (title.includes(q)) score += 40;
      if (aliases.includes(q)) score += 70;
      if (tokens.length) {
        const hits = tokens.filter((t) => hay.includes(t));
        const ratio = hits.length / tokens.length;
        if (ratio === 1) score += 38;
        else if (ratio >= 0.66) score += 25;
        else if (ratio >= 0.5 && hits.length >= 2) score += 14;
        score += hits.filter((t) => title.includes(t)).length * 5;
      }
      if (intent) {
        const rank = intent.keys.indexOf(e.key);
        if (rank >= 0) score += 1200 - rank * 70;
      }
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        (a.e.risk === "danger") - (b.e.risk === "danger") ||
        a.e.title.localeCompare(b.e.title, "pt-BR"),
    )
    .map((x) => x.e);
}
function renderSearch() {
  const all = searchEntries(mainQuery),
    list = kindFilter === "all" ? all : all.filter((e) => e.type === kindFilter);
  return `<div id="internalSearchMount" class="internal-search-mount"></div><div class="page-title"><div><h2>Resultados</h2><p>${all.length} ${all.length === 1 ? "ação encontrada" : "ações encontradas"} para “${escapeHTML(mainQuery)}”</p></div></div><div class="filter-bar">${[
    ["all", "Tudo"],
    ["command", "Comandos"],
    ["link", "Links"],
    ["recipe", "Receitas"],
  ]
    .map(
      ([value, label]) =>
        `<button data-filter="${value}" class="${kindFilter === value ? "active" : ""}">${label}</button>`,
    )
    .join(
      "",
    )}</div>${list.length ? cards(list) : '<div class="empty">Não achei um guia específico. Tente descrever o objetivo: “instalar Python no servidor”, “adicionar dado no banco”, “VPS lenta” ou “corrigir GitHub na VPS”.</div>'}`;
}

function parkSearch() {
  const core = $("globalSearchCore"),
    parking = $("searchParking");
  if (core && parking && core.parentElement !== parking) parking.append(core);
}
function mountSearch() {
  const core = $("globalSearchCore");
  const mount = page === "home" ? $("homeSearchMount") : $("internalSearchMount");
  if (core && mount) mount.append(core);
}
const NAV_GROUPS = [
  {
    id: "shortcuts",
    label: "ATALHOS",
    items: [
      { label: "Links", target: "links", icon: "link" },
      {
        label: "Favoritos",
        target: "favorites",
        icon: "star",
        count: () => state.favorites.length,
      },
      { label: "Recentes", target: "recents", icon: "clock", count: () => state.recents.length },
    ],
  },
  {
    id: "commands",
    label: "COMANDOS",
    items: [
      { label: "Todos os comandos", target: "commands", icon: "terminal" },
      ...["PowerShell", "SSH", "Git", "Docker", "Linux", "PostgreSQL"].map((cat) => ({
        label: cat,
        target: "cat:" + cat,
        icon: CATEGORY_INFO[cat].icon,
      })),
    ],
  },
  {
    id: "services",
    label: "SERVIÇOS",
    items: ["AWS", "n8n", "Caddy"].map((cat) => ({
      label: cat,
      target: "cat:" + cat,
      icon: CATEGORY_INFO[cat].icon,
    })),
  },
  {
    id: "project",
    label: "PROJETO",
    items: ["Dashboard", "Deploy", "Docker Compose", "Python", "FastAPI", "Projeto"].map((cat) => ({
      label: cat,
      target: "cat:" + cat,
      icon: CATEGORY_INFO[cat].icon,
    })),
  },
  {
    id: "utilities",
    label: "UTILIDADES",
    items: [
      { label: "Receitas rápidas", target: "recipes", icon: "recipe" },
      { label: "Glossário rápido", target: "glossary", icon: "book" },
    ],
  },
];
let navIndicatorReady = false,
  lastActiveNavKey = "",
  navPulseTimer = 0;
function navTargetActive(target) {
  return (
    !mainQuery &&
    (page === target ||
      (target.startsWith("cat:") && page === "category" && state.category === target.slice(4)))
  );
}
function navTargetCount(target) {
  if (target === "favorites") return state.favorites.length;
  if (target === "recents") return state.recents.length;
  return "";
}
function navButton(label, target, ico, count = "", extra = "", order = 0) {
  const active = navTargetActive(target),
    realCount = count === "" ? navTargetCount(target) : count;
  const classes = [
    "nav-item",
    active ? "active" : "",
    target === "home" ? "nav-home" : "",
    target === "favorites" && state.favorites.length ? "nav-favorite-live" : "",
    target === "recents" && state.recents.length ? "nav-recent-live" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
  const attrs = target.startsWith("cat:")
    ? `data-category=\"${escapeHTML(target.slice(4))}\"`
    : `data-page=\"${target}\"`;
  return `<button class=\"${classes}\" ${attrs} ${active ? 'aria-current=\"page\"' : ""} aria-label=\"${escapeHTML(label)}\" data-sidebar-tip=\"${escapeHTML(label)}\" style=\"--nav-order:${order}\"><span class=\"nav-icon-cell\">${icon(ico)}</span><span class=\"nav-text\">${escapeHTML(label)}</span>${realCount !== "" && Number(realCount) > 0 ? `<small class=\"count\">${realCount}</small>` : ""}</button>`;
}
function navGroupActive(group) {
  return group.items.some((item) => navTargetActive(item.target));
}
function navGroupHtml(group, startOrder) {
  const active = navGroupActive(group),
    stored = state.navGroups[group.id],
    collapsed = stored === false && !active && !state.sidebarCompact;
  let order = startOrder;
  const items = group.items
    .map((item) =>
      navButton(
        item.label,
        item.target,
        item.icon,
        typeof item.count === "function" ? item.count() : "",
        "",
        ++order,
      ),
    )
    .join("");
  const groupState = active ? "ATIVO" : collapsed ? "ABRIR" : "OCULTAR";
  const actionLabel = active
    ? `${group.label}: grupo ativo e aberto`
    : `${group.label}: ${collapsed ? "expandir grupo" : "recolher grupo"}`;
  return {
    html: `<section class=\"nav-group${collapsed ? " collapsed" : ""}${active ? " active-group" : ""}\" data-nav-group-wrap=\"${group.id}\"><button type=\"button\" class=\"nav-group-toggle\" data-nav-group=\"${group.id}\" aria-expanded=\"${!collapsed}\" aria-label=\"${actionLabel}\" title=\"${active ? "Grupo atual" : collapsed ? "Clique para mostrar itens" : "Clique para ocultar itens"}\" style=\"--nav-order:${order}\"><i class=\"nav-group-node\" aria-hidden=\"true\"></i><span class=\"nav-group-label\">${group.label}</span><small class=\"nav-group-count\">${group.items.length}</small><span class=\"nav-group-action\"><span class=\"nav-group-action-text\">${groupState}</span><span class=\"nav-group-caret\">${icon("arrow")}</span></span></button><div class=\"nav-group-items\"><div>${items}</div></div></section>`,
    order,
  };
}
function activeNavKey() {
  if (mainQuery) return "";
  if (page === "category") return "cat:" + state.category;
  return page;
}
function applySidebarState() {
  document.documentElement.classList.toggle("sidebar-compact", !!state.sidebarCompact);
  const b = $("sidebarCompactToggle");
  if (b) {
    b.setAttribute("aria-pressed", String(!!state.sidebarCompact));
    b.setAttribute("aria-label", state.sidebarCompact ? "Expandir sidebar" : "Compactar sidebar");
    b.title = state.sidebarCompact ? "Expandir sidebar" : "Compactar sidebar";
  }
  requestAnimationFrame(() => syncActiveNavIndicator(false));
}
function syncActiveNavIndicator(animate = true) {
  const sidebar = $("sidebar"),
    nav = $("navigation"),
    indicator = $("activeNavIndicator"),
    active = nav?.querySelector(".nav-item.active");
  if (!sidebar || !nav || !indicator || !active) {
    if (indicator) indicator.hidden = true;
    return;
  }
  const s = sidebar.getBoundingClientRect(),
    n = nav.getBoundingClientRect(),
    r = active.getBoundingClientRect();
  if (r.bottom < n.top + 2 || r.top > n.bottom - 2) {
    indicator.hidden = true;
    return;
  }
  const y = r.top - s.top;
  indicator.hidden = false;
  indicator.classList.toggle("no-anim", !animate || !navIndicatorReady);
  indicator.style.height = Math.max(34, r.height) + "px";
  indicator.style.setProperty("--nav-indicator-y", `${y}px`);
  requestAnimationFrame(() => {
    indicator.classList.remove("no-anim");
    navIndicatorReady = true;
  });
}
function pulseNavRail() {
  if (
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.body.classList.contains("motion-reduced")
  )
    return;
  const sidebar = $("sidebar");
  if (!sidebar) return;
  clearTimeout(navPulseTimer);
  sidebar.classList.remove("nav-route-pulse");
  void sidebar.offsetWidth;
  sidebar.classList.add("nav-route-pulse");
  navPulseTimer = setTimeout(() => sidebar.classList.remove("nav-route-pulse"), 460);
}
function updateSidebarAccentMotion() {
  const key = activeNavKey(),
    changed = lastActiveNavKey && key && key !== lastActiveNavKey;
  requestAnimationFrame(() => syncActiveNavIndicator(!!changed));
  if (changed) pulseNavRail();
  if (key) lastActiveNavKey = key;
}
function updateNavScrollFade() {
  const nav = $("navigation");
  if (!nav) return;
  nav.classList.toggle("scrolled", nav.scrollTop > 6);
  nav.classList.toggle("has-more", nav.scrollTop + nav.clientHeight < nav.scrollHeight - 6);
}
function showNavTooltip(target) {
  if (!state.sidebarCompact || innerWidth <= 900) return;
  const tip = $("navTooltip");
  if (!tip || !target) return;
  tip.textContent = target.dataset.sidebarTip || target.getAttribute("aria-label") || "";
  if (!tip.textContent) return;
  const r = target.getBoundingClientRect();
  tip.hidden = false;
  tip.style.left = r.right + 10 + "px";
  tip.style.top = Math.max(8, r.top + r.height / 2 - tip.offsetHeight / 2) + "px";
  requestAnimationFrame(() => tip.classList.add("show"));
}
function hideNavTooltip() {
  const tip = $("navTooltip");
  if (!tip) return;
  tip.classList.remove("show");
  setTimeout(() => {
    if (!tip.classList.contains("show")) tip.hidden = true;
  }, 110);
}

function openHomePanel(id) {
  const node = HOME_NODE_MAP.get(id),
    panel = $("homeQuickPanel");
  if (!node || !panel) return;
  activeHomeNode = id;
  panel.innerHTML = `<div class="quick-panel-head"><span class="home-node-icon">${icon(node.icon)}</span><span><strong>${escapeHTML(node.label)}</strong><small>${escapeHTML(homeNodeStatus(node))} · ${node.keys.length} atalhos</small></span><button class="icon-btn" data-home-close aria-label="Fechar painel">${icon("close")}</button></div><div class="quick-actions">${node.keys.map((k) => homePanelEntryHtml(ENTRY_MAP.get(k))).join("")}</div><div class="quick-panel-footer"><button data-category="${escapeHTML(node.category)}">Ver biblioteca de ${escapeHTML(node.category)} →</button><button data-home-close>Fechar</button></div>`;
  panel.hidden = false;
  hydrateIcons(panel);
  highlightHomeNode(id, true);
}
function closeHomePanel() {
  const panel = $("homeQuickPanel");
  if (panel) panel.hidden = true;
  activeHomeNode = "";
  highlightHomeNode("", false);
}
function highlightHomeNode(id, lock = false) {
  const stage = $("homeCockpit");
  if (!stage) return;
  stage
    .querySelectorAll(".home-node")
    .forEach((el) => el.classList.toggle("active", el.dataset.homeNode === id));
  stage
    .querySelectorAll(".connection-line")
    .forEach((el) => el.classList.toggle("active", el.dataset.wire === id));
  if (lock) stage.dataset.lockedNode = id;
  else if (!activeHomeNode) delete stage.dataset.lockedNode;
}
function updateHomeSearchVisual() {
  const stage = $("homeCockpit");
  if (!stage) return;
  const raw = mainQuery.trim();
  stage.classList.toggle("searching", !!raw);
  const results = $("homeSearchResults");
  if (results) results.innerHTML = homeSearchStackHtml();
  stage.querySelectorAll(".home-node").forEach((el) => {
    const node = HOME_NODE_MAP.get(el.dataset.homeNode),
      match = raw && homeNodeMatches(node, raw);
    el.classList.toggle("match", !!match);
    el.classList.toggle("dim", !!raw && !match);
  });
  stage.querySelectorAll(".connection-line").forEach((el) => {
    const node = HOME_NODE_MAP.get(el.dataset.wire);
    el.classList.toggle("active", !!raw && homeNodeMatches(node, raw));
  });
  handleHomeEasterEgg(raw);
}
function handleHomeEasterEgg(raw) {
  const stage = $("homeCockpit"),
    easter = $("cockpitEaster");
  if (!stage || !easter) return;
  clearTimeout(homeEasterTimer);
  stage.classList.remove("matrix-mode", "socialmei-mode", "system-mode");
  easter.classList.remove("show");
  const q = raw.toLowerCase();
  if (!["/matrix", "/michael", "/socialmei", "michael"].includes(q)) return;
  if (q === "/matrix") stage.classList.add("matrix-mode");
  else if (q === "/socialmei") stage.classList.add("socialmei-mode");
  else stage.classList.add("system-mode");
  easter.querySelector("span").textContent =
    q === "/matrix" ? "TERMINAL MODE" : q === "/socialmei" ? "SOCIALMEI LINKED" : "SYSTEM READY";
  void easter.offsetWidth;
  easter.classList.add("show");
  homeEasterTimer = setTimeout(() => {
    stage.classList.remove("matrix-mode", "socialmei-mode", "system-mode");
    easter.classList.remove("show");
  }, 1400);
}
function applyHomePrefs() {
  document.body.classList.toggle("motion-reduced", state.homeMotion === "reduced");
  document.body.classList.toggle("motion-high", state.homeMotion === "high");
  document.body.classList.toggle("showcase", !!state.showcase);
}
function setupHomeExperience() {
  applyHomePrefs();
  const stage = $("homeCockpit");
  if (!stage) return;
  updateHomeSearchVisual();
  let mx = 0,
    my = 0,
    pending = false;
  const reduced =
    matchMedia("(prefers-reduced-motion: reduce)").matches || state.homeMotion === "reduced";
  if (!reduced && innerWidth > 900 && matchMedia("(pointer:fine)").matches) {
    stage.addEventListener("pointermove", (e) => {
      const r = stage.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      if (pending) return;
      pending = true;
      homeMotionRAF = requestAnimationFrame(() => {
        pending = false;
        const x = Math.max(0, Math.min(100, (mx / r.width) * 100)),
          y = Math.max(0, Math.min(100, (my / r.height) * 100));
        stage.style.setProperty("--mx", x + "%");
        stage.style.setProperty("--my", y + "%");
        stage.style.setProperty("--px", (x - 50) * 0.055 + "px");
        stage.style.setProperty("--py", (y - 50) * 0.055 + "px");
      });
    });
    stage.querySelectorAll(".home-node").forEach((node) => {
      node.addEventListener("pointermove", (e) => {
        if (state.homeMotion === "reduced") return;
        const r = node.getBoundingClientRect();
        const x = ((e.clientX - r.left - r.width / 2) / r.width) * 5,
          y = ((e.clientY - r.top - r.height / 2) / r.height) * 5;
        node.style.translate = `${x}px ${y}px`;
      });
      node.addEventListener("pointerleave", () => {
        node.style.translate = "0 0";
      });
    });
  }
}
function toggleShowcase() {
  state.showcase = !state.showcase;
  persist();
  applyHomePrefs();
  const stage = $("homeCockpit");
  if (stage) stage.classList.toggle("showcase", state.showcase);
  const btn = document.querySelector("[data-home-showcase]");
  if (btn) btn.setAttribute("aria-pressed", String(state.showcase));
  toast(state.showcase ? "Showcase ativado" : "Showcase desativado");
}

function navigate(target, cat) {
  page = cat ? "category" : target;
  if (cat) {
    state.category = cat;
    persist();
  }
  mainQuery = "";
  $("mainSearch").value = "";
  kindFilter = "all";
  render();
  closeDrawer();
  window.scrollTo({ top: 0, behavior: "instant" });
  const hash = cat ? "cat=" + encodeURIComponent(cat) : target;
  try {
    history.replaceState(null, "", "#" + hash);
  } catch {}
}
function syncDrawerAccessibility() {
  const mobile = innerWidth <= 900,
    open = $("sidebar").classList.contains("open");
  $("sidebar").inert = mobile && !open;
  document.querySelector(".shell").inert = mobile && open;
}
function closeDrawer() {
  $("sidebar").classList.remove("open");
  $("drawerBackdrop").hidden = true;
  $("menuToggle").setAttribute("aria-expanded", "false");
  syncDrawerAccessibility();
}
function toggleFlag(field, key) {
  if (!ENTRY_MAP.has(key)) return;
  const index = state[field].indexOf(key);
  if (index < 0) state[field].push(key);
  else state[field].splice(index, 1);
  persist();
  render();
  if (currentRecipe && $("recipeDialog").open) renderRecipe(currentRecipe);
  toast(
    field === "favorites"
      ? index < 0
        ? "Adicionado aos favoritos"
        : "Removido dos favoritos"
      : index < 0
        ? "Fixado na home"
        : "Removido dos fixados",
  );
}
async function copyText(text, keys = [], button = null) {
  let success = false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      success = true;
    }
  } catch {}
  if (!success) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";
    document.body.append(textarea);
    textarea.select();
    try {
      success = document.execCommand("copy");
    } catch {}
    textarea.remove();
  }
  if (success) {
    keys.forEach(noteRecent);
    copyFeedback(button);
    toast(keys.length > 1 ? "Sequência copiada" : "Comando copiado");
    refreshHomeLists();
  } else {
    manualPending = { keys, button };
    $("manualCopy").value = text;
    if (!$("manualCopyDialog").open) $("manualCopyDialog").showModal();
    $("manualCopy").focus();
    $("manualCopy").select();
  }
}
function activate(key, button) {
  const e = ENTRY_MAP.get(key);
  if (!e) return;
  if (e.type === "command") {
    if (e.risk === "danger" && !revealed.has(key)) {
      showDanger(e);
      return;
    }
    copyText(commandCode(e), [key], button);
  } else if (e.type === "link") {
    const url = linkUrl(e);
    if (!url) {
      openSettings(e.config);
      return;
    }
    toast("Abrindo " + e.title.replace(/^Abrir /, "") + "…");
    window.open(url, "_blank", "noopener,noreferrer");
    noteRecent(key);
    refreshHomeLists();
  } else openRecipe(e);
}
function showDanger(e) {
  $("dangerDialog").innerHTML =
    `<div class="dialog-head"><div><h2 id="dangerTitle">${escapeHTML(e.title)}</h2><p>Operação com risco</p></div><button class="icon-btn" data-close="dangerDialog" aria-label="Fechar">${icon("close")}</button></div><div class="dialog-body"><p class="danger-note">${escapeHTML(e.warning || "Confira o alvo e preserve os dados antes de usar.")}</p><div style="margin-top:16px">${badges(e)}</div><button class="action danger" data-action="confirm-reveal" data-key="${e.key}">${icon("shield")}Mostrar comando</button></div>`;
  $("dangerDialog").showModal();
}
const NO_BATCH = new Set([
  "ssh-connect",
  "scp",
  "ssh-exit",
  "container-exit",
  "psql-open",
  "role-password",
  "docker-shell",
  "serve",
  "uvicorn",
  "linux-nano",
  "compose-follow",
]);
function groupsForRecipe(e) {
  let list = [],
    group = null;
  const finish = () => {
    if (group?.keys.length >= 2) list.push(group);
    group = null;
  };
  e.steps.forEach((step) => {
    const c = commandById(step.command);
    if (!c || c.risk === "danger" || NO_BATCH.has(c.id)) {
      finish();
      return;
    }
    if (group && group.context !== c.context) finish();
    if (!group) group = { context: c.context, keys: [] };
    group.keys.push(c.key);
  });
  finish();
  return list;
}
function renderRecipe(e) {
  recipeGroups = groupsForRecipe(e);
  $("recipeDialog").innerHTML =
    `<div class="dialog-head"><div><div class="eyebrow">Receita rápida · ${escapeHTML(e.category)}</div><h2 id="recipeTitle">${escapeHTML(e.title)}</h2><p>${escapeHTML(e.description)}</p></div>${flags(e)}<button class="icon-btn" data-close="recipeDialog" aria-label="Fechar receita">${icon("close")}</button></div><div class="dialog-body">${flowHtml(e.flow)}${e.note ? `<p class="recipe-note">${escapeHTML(e.note)}</p>` : ""}<ol class="recipe-steps">${e.steps
      .map((step) => {
        const c = commandById(step.command),
          l = linkById(step.link),
          danger = c?.risk === "danger",
          visible = c && (!danger || revealed.has(c.key));
        return `<li class="recipe-step"><h3>${escapeHTML(step.title)}</h3>${c ? `${badges(c)}${danger ? `<p class="danger-note">${escapeHTML(c.warning)}</p>` : ""}${visible ? `<pre><code>${escapeHTML(commandCode(c))}</code></pre>` : ""}<div class="card-bottom"><button class="action${danger ? " danger" : ""}" data-action="${visible ? "copy" : "reveal"}" data-key="${c.key}">${icon(visible ? "copy" : "shield")}${visible ? "Copiar" : "Mostrar comando"}</button></div>` : ""}${l ? `<button class="action" data-action="open" data-key="${l.key}">${icon(linkUrl(l) ? "open" : "settings")}${linkUrl(l) ? escapeHTML(l.title) : "Configurar " + escapeHTML(l.title.replace("Abrir ", ""))}</button>` : ""}${step.note ? `<p>${escapeHTML(step.note)}</p>` : ""}</li>`;
      })
      .join(
        "",
      )}</ol>${recipeGroups.length ? `<div class="copy-groups"><p>Copiar sequência: cada bloco usa um único terminal. Confira os placeholders antes de colar.</p>${recipeGroups.map((g, i) => `<button class="action" data-action="copy-group" data-group="${i}">${icon("copy")}Copiar ${g.keys.length} comandos · ${escapeHTML(CONTEXT_LABELS[g.context])}</button>`).join("")}</div>` : ""}</div>`;
}
function openRecipe(e) {
  currentRecipe = e;
  noteRecent(e.key);
  renderRecipe(e);
  if (!$("recipeDialog").open) $("recipeDialog").showModal();
  refreshHomeLists();
}
function openPalette() {
  $("paletteSearch").value = "";
  paletteIndex = 0;
  renderPalette();
  $("palette").showModal();
  $("paletteSearch").focus();
}
function renderPalette() {
  paletteItems = searchEntries($("paletteSearch").value).slice(0, 12);
  paletteIndex = Math.max(0, Math.min(paletteIndex, paletteItems.length - 1));
  $("paletteResults").innerHTML = paletteItems.length
    ? paletteItems
        .map(
          (e, i) =>
            `<button type="button" class="palette-row" id="palette-result-${i}" role="option" aria-selected="${i === paletteIndex}" data-palette-index="${i}">${icon(e.type === "command" ? "terminal" : e.type === "link" ? "open" : "recipe")}<span><strong>${escapeHTML(e.title)}</strong><small>${e.type === "command" ? escapeHTML(CONTEXT_LABELS[e.context]) : e.type === "recipe" ? `${e.steps.length} passos` : escapeHTML(e.category)}</small></span><span class="key-hint">${e.risk === "danger" ? "Revisar" : e.type === "command" ? "Copiar" : e.type === "link" ? "Abrir" : "Receita"}</span></button>`,
        )
        .join("")
    : '<div class="empty">Nenhuma ação encontrada.</div>';
  $("paletteSearch").setAttribute(
    "aria-activedescendant",
    paletteItems.length ? "palette-result-" + paletteIndex : "",
  );
}
function choosePalette(i) {
  const e = paletteItems[i];
  if (!e) return;
  $("palette").close();
  activate(e.key);
}
function setTheme() {
  const actual =
    state.theme === "auto"
      ? matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
      : state.theme;
  document.documentElement.dataset.theme = actual;
  $("themeToggle").innerHTML = icon(
    state.theme === "auto" ? "auto" : state.theme === "light" ? "sun" : "moon",
  );
  $("themeToggle").title =
    "Tema: " + { dark: "escuro", light: "claro", auto: "automático" }[state.theme];
  $("themeToggle").setAttribute("aria-label", $("themeToggle").title + ". Alterar tema.");
}
function setMode() {
  $("modeLabel").textContent = state.mode === "personal" ? "Pessoal" : "Compartilhável";
  $("modeToggle").title =
    state.mode === "personal"
      ? "Modo pessoal: usando configurações locais. Alternar para compartilhável."
      : "Modo compartilhável: usando placeholders. Alternar para pessoal.";
  $("modeToggle").setAttribute("aria-label", $("modeToggle").title);
}
const CONFIG_FIELDS = [
  { key: "sshUser", label: "Usuário SSH", placeholder: "ubuntu" },
  { key: "vpsIp", label: "IP ou hostname do VPS", placeholder: "IP_DO_SERVIDOR" },
  {
    key: "pemFile",
    label: "Caminho da chave PEM",
    placeholder: "SUA_CHAVE.pem",
    wide: true,
    help: "Somente o caminho no seu PC. Não cole o conteúdo da PEM.",
  },
  {
    key: "keyPairName",
    label: "Nome do Key Pair (opcional)",
    placeholder: "Nome encontrado em EC2 → Details",
    wide: true,
    help: "Referência local; informar o nome não autoriza uma chave na instância.",
  },
  {
    key: "serverPath",
    label: "Pasta do projeto no VPS",
    placeholder: "/home/ubuntu/socialmei",
    wide: true,
    help: "Caminho registrado no backup; confirme no seu servidor.",
  },
  { key: "dbUser", label: "Role do PostgreSQL", placeholder: "USUARIO" },
  { key: "dbName", label: "Nome do banco", placeholder: "BANCO" },
  ...["n8nUrl", "pgadminUrl", "trelloUrl", "awsResourceUrl", "dashboardUrl", "githubUrl"].map(
    (key) => ({
      key,
      label: {
        n8nUrl: "URL do n8n",
        pgadminUrl: "URL do pgAdmin",
        trelloUrl: "URL do Trello",
        awsResourceUrl: "URL da instância AWS (opcional)",
        dashboardUrl: "URL do Dashboard",
        githubUrl: "URL do repositório",
      }[key],
      placeholder: "https://…",
      wide: true,
      url: true,
    }),
  ),
];
function downloadText(content, name, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
/* Páginas internas: composições próprias, ações compartilhadas. */
function compactTitle(title, line, mark = "") {
  return `<header class="area-title">${mark ? `<span class="area-mark">${escapeHTML(mark)}</span>` : ""}<div><h2>${escapeHTML(title)}</h2><p>${escapeHTML(line)}</p></div></header>`;
}
function internalSearch() {
  return '<div id="internalSearchMount" class="internal-search-mount"></div>';
}
function actionByKey(key, label = "") {
  const e = ENTRY_MAP.get(key);
  if (!e) return "";
  return `<button class="action" data-action="activate" data-key="${e.key}">${icon(e.type === "command" ? "copy" : e.type === "recipe" ? "recipe" : "open")}${escapeHTML(label || e.title)}</button>`;
}
function chosenCommands(ids) {
  return ids.map(commandById).filter(Boolean);
}
function commandCollection(title, list, cls = "tool-grid") {
  return list.length
    ? section(title, `<div class="${cls}">${list.map(commandCard).join("")}</div>`, "terminal")
    : "";
}
function recipeCollection(list) {
  return list.length
    ? section(
        "Receitas de ação",
        `<div class="recipe-rack">${list.map((e) => `<button class="recipe-ticket" data-action="recipe" data-key="${e.key}"><span>${icon("recipe")}</span><span><strong>${escapeHTML(e.title)}</strong><small>${e.steps.length} passos · ${escapeHTML(e.description)}</small></span>${icon("arrow")}</button>`).join("")}</div>`,
        "recipe",
      )
    : "";
}
function linkStrip(list) {
  return list.length
    ? `<div class="link-strip">${list.map((e) => actionByKey(e.key)).join("")}</div>`
    : "";
}
function getAreaData(cat) {
  return {
    commands: entries.filter((e) => e.type === "command" && e.category === cat),
    links: entries.filter((e) => e.type === "link" && e.category === cat),
    recipes: entries.filter((e) => e.type === "recipe" && e.category === cat),
  };
}
function extrasForArea(d, used = []) {
  const rest = d.commands.filter((e) => !used.includes(e.id) && e.risk !== "danger");
  const danger = d.commands.filter((e) => e.risk === "danger");
  return (
    commandCollection("Outras ações", rest) +
    recipeCollection(d.recipes) +
    (danger.length
      ? `<details class="risk-drawer"><summary>${icon("shield")}Operações com risco · ${danger.length}</summary>${commandCollection("Confira o alvo e o backup", danger)}</details>`
      : "")
  );
}
function demoTag(label = "Referência visual · não é status ao vivo") {
  return `<span class="demo-tag">${escapeHTML(label)}</span>`;
}
function renderGit(d) {
  const groups = [
    ["main", "Conferir / sincronizar", ["git-status", "git-diff", "git-fetch", "git-pull"]],
    ["feature", "Preparar mudança", ["git-branch", "git-add", "git-cached", "git-commit"]],
    ["pull request", "Enviar / revisar", ["git-push", "git-unstage"]],
  ];
  const used = groups.flatMap((x) => x[2]);
  return `<div class="git-workspace"><header class="git-top"><div>${compactTitle("Git", "Controle suas alterações sem perder o fio.", "git / local → remoto")}${linkStrip(d.links)}</div><div class="branch-preview" aria-label="Diagrama conceitual de branches">${demoTag("Diagrama de fluxo · exemplo")}<svg viewBox="0 0 340 120" aria-hidden="true"><path class="draw-line" d="M20 38H318M86 38C103 38 108 90 142 90H220Q255 90 274 38"/><g><circle cx="30" cy="38" r="6"/><circle cx="86" cy="38" r="6"/><circle cx="274" cy="38" r="6"/><circle cx="318" cy="38" r="6"/><circle cx="150" cy="90" r="6"/><circle cx="216" cy="90" r="6"/></g><text x="20" y="22">main</text><text x="150" y="114">feature → PR</text></svg></div></header><div class="commit-timeline">${groups.map(([branch, title, ids], i) => `<section class="commit-group reveal-group"><span class="commit-node" aria-hidden="true"></span><header><span class="branch-label">${escapeHTML(branch)}</span><h3>${title}</h3><span class="step-code">0${i + 1}</span></header><div class="commit-grid">${chosenCommands(ids).map(commandCard).join("")}</div></section>`).join("")}</div>${extrasForArea(d, used)}</div>`;
}
function renderLinux(d) {
  const quick = ["linux-path", "linux-list", "linux-cd", "host-space"];
  return `<div class="unix-workspace"><header class="unix-header"><span>host shell / Ubuntu</span>${demoTag("Prompt demonstrativo")}<div class="unix-prompt">mike@devhub:~/linux $ <b class="blink-cursor">_</b></div><h2>Linux</h2><p>Arquivos, diretórios e diagnóstico no servidor.</p></header><div class="unix-split"><aside class="file-explorer"><div class="explorer-label">filesystem / referência</div><button data-help-key="cmd:linux-cd" data-help-tab="where">${icon("terminal")} /home/ubuntu</button><button data-help-key="cmd:linux-cd" data-help-tab="how">${icon("code")} socialmei/</button><small>Caminho registrado em backup.sh; confirme no seu host.</small><div class="fs-tree"><span>├ compose.yaml</span><span>├ Caddyfile</span><span>├ database/</span><span>└ python-service/</span></div><div class="context-prompt">$ pwd → ação → saída</div></aside><div>${commandCollection("Orientar-se no host", chosenCommands(quick), "terminal-grid")}${commandCollection(
    "Ler e editar arquivos",
    d.commands.filter((e) => !quick.includes(e.id) && e.risk !== "danger"),
    "terminal-grid",
  )}</div></div>${recipeCollection(d.recipes)}${
    d.commands.some((e) => e.risk === "danger")
      ? `<details class="risk-drawer"><summary>${icon("shield")}Remoção de arquivos</summary>${commandCollection(
          "Operações com risco",
          d.commands.filter((e) => e.risk === "danger"),
        )}</details>`
      : ""
  }</div>`;
}
function renderPowerShell(d) {
  const ids = ["ps-pwd", "ps-dir", "cdpc", "ssh-connect", "scp", "git-status"];
  return `<div class="windows-console"><header class="windows-tabbar"><span>${icon("terminal")} PowerShell</span><span>Seu computador · Windows</span></header><div class="ps-intro"><div class="ps-prompt">PS C:\\Users\\Mike&gt; <span class="blink-cursor">_</span></div><h2>PowerShell</h2><p>Seu ponto de partida para arquivos, Git e VPS.</p>${demoTag("Prompt de exemplo; comandos não são executados aqui")}</div><div class="console-actions">${chosenCommands(ids).map(commandCard).join("")}</div>${extrasForArea(d, ids)}</div>`;
}
function localSSHStatus(p = config()) {
  const ip = p.vpsIp && !["IP_DO_SERVIDOR", "SEU_IP"].includes(p.vpsIp),
    pem = p.pemFile && !["SUA_CHAVE.pem", "CAMINHO_DA_CHAVE.pem"].includes(p.pemFile);
  return {
    ready: !!(ip && pem),
    label: !ip ? "Configure o servidor" : !pem ? "Configure sua chave" : "Pronto para conectar",
    note: "Configuração local · conexão não testada",
  };
}
function sshStatusHtml(p = config()) {
  const x = localSSHStatus(p);
  return `<div class="local-readiness${x.ready ? " is-ready" : ""}">${icon(x.ready ? "check" : "settings")}<span><strong>${x.label}</strong><small>${x.note}</small></span></div>`;
}
function renderSSH(d) {
  return `<div class="ssh-workspace"><header class="ssh-title"><div>${compactTitle("SSH", "Do seu computador ao servidor.", "secure connection")}${sshStatusHtml()}</div><button class="action" data-settings-focus="pemFile">${icon("settings")}Configurar SSH</button></header><div class="secure-tunnel" aria-label="Fluxo conceitual de conexão SSH"><div class="tunnel-end">${icon("terminal")}<strong>Seu PC</strong><small>PowerShell / chave local</small></div><div class="tunnel-line"><span class="tunnel-packet"></span><span>SSH · porta 22</span>${icon("shield")}</div><div class="tunnel-end">${icon("cloud")}<strong>VPS / EC2</strong><small>Shell Ubuntu</small></div></div><div class="ssh-main">${commandCard(commandById("ssh-connect"))}<div class="key-entry"><span class="key-symbol">${icon("shield")}</span><h3>O acesso começa pela chave.</h3><p>Descubra o Key Pair da instância e o caminho da sua PEM no PC.</p><button class="action" data-help-key="cmd:ssh-connect" data-help-tab="key">Qual chave usar? ${icon("arrow")}</button>${actionByKey("link:ec2", "Abrir EC2")}</div></div>${commandCollection("Arquivo da chave", chosenCommands(["pem-exists", "pem-acl-inspect"]))}${extrasForArea(d, ["ssh-connect", "pem-exists", "pem-acl-inspect"])}</div>`;
}
function renderAWS(d) {
  return `<div class="cloud-workspace"><header class="cloud-head"><span class="cloud-outline">${icon("cloud")}</span><div><h2>AWS</h2><p>Instância, chave e rede — encontre o acesso certo.</p></div>${linkStrip(d.links.filter((e) => ["aws", "ec2", "aws-resource"].includes(e.id)))}</header><div class="cloud-map"><div class="cloud-rail" role="tablist" aria-label="Fluxo de acesso AWS">${[
    ["ec2", "EC2", "Instância"],
    ["key", "Key Pair", "Identidade"],
    ["address", "IPv4", "Servidor"],
    ["network", "Security Group", "Rede"],
    ["connect", "SSH", "Conectar"],
  ]
    .map(
      ([id, a, z], i) =>
        `<button role="tab" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-aws-step="${id}" id="aws-step-${id}" aria-controls="aws-map-panel"><span class="cloud-node">${icon(id === "key" ? "shield" : id === "connect" ? "terminal" : "cloud")}</span><strong>${a}</strong><small>${z}</small></button>`,
    )
    .join(
      "",
    )}</div><section id="aws-map-panel" class="cloud-step-panel" role="tabpanel" aria-labelledby="aws-step-ec2">${awsStepContent("ec2")}</section></div><div class="cloud-runway">${commandCard(commandById("ssh-connect"))}<div class="key-summary">${sshStatusHtml()}<button class="action" data-help-key="cmd:ssh-connect" data-help-tab="key">${icon("shield")}Chave de acesso AWS</button><button class="action" data-settings-focus="vpsIp">${icon("settings")}Configurar servidor</button></div></div>${recipeCollection(d.recipes)}${section("Referências oficiais", linkStrip(d.links.filter((e) => !["aws", "ec2", "aws-resource"].includes(e.id))), "book")}</div>`;
}
function awsStepContent(id) {
  const x =
    {
      ec2: [
        "Selecione a instância",
        "Abra EC2 na região correta → Instances → selecione o servidor do projeto.",
        actionByKey("link:ec2", "Abrir EC2"),
      ],
      key: [
        "Identifique o Key Pair",
        "Details → Instance details → Key pair name. Esse nome identifica o par usado no lançamento; alterações posteriores em authorized_keys devem ser confirmadas com o responsável.",
        `<button class="action" data-help-key="cmd:ssh-connect" data-help-tab="key">Qual chave usar? ${icon("arrow")}</button>`,
      ],
      address: [
        "Copie o IP público",
        "Na instância, procure Public IPv4 address ou DNS público. O hub só guarda sua configuração local.",
        `<button class="action" data-settings-focus="vpsIp">${icon("settings")}Configurar IP / hostname</button>`,
      ],
      network: [
        "Confira a entrada SSH",
        "Security → Security Groups. Confira TCP 22 com origem no seu IP e os status checks da instância.",
        actionByKey("link:ec2", "Abrir Security Groups no EC2"),
      ],
      connect: [
        "Abra o terminal no PC",
        "Use a PEM correspondente e o usuário da AMI. Ubuntu normalmente usa ubuntu. Confirme o fingerprint na primeira conexão.",
        `<button class="action" data-help-key="cmd:ssh-connect" data-help-tab="how">${icon("terminal")}Como conectar</button>`,
      ],
    }[id] || [];
  return `<span class="demo-tag">Mapa de orientação · sem acesso à sua conta</span><h3>${x[0]}</h3><p>${x[1]}</p>${x[2]}`;
}
const SERVICE_REFERENCE = [
  ["n8n", "socialmei-n8n", "workflow"],
  ["postgres", "socialmei-postgres", "dados"],
  ["pgadmin", "socialmei-pgadmin", "administração"],
  ["caddy", "socialmei-caddy", "HTTPS"],
  ["python-api", "socialmei-python", "API interna"],
];
function renderDocker(d, compose = false) {
  const ids = compose
    ? [
        "compose-validate",
        "compose-services",
        "compose-up",
        "compose-ps",
        "compose-restart",
        "compose-logs",
      ]
    : ["docker-ps", "docker-all", "compose-ps", "n8n-restart", "compose-logs", "compose-build"];
  return `<div class="container-workspace"><header class="container-head"><div>${compactTitle(compose ? "Docker Compose" : "Docker", compose ? "Uma definição. Serviços coordenados." : "Containers e serviços, sem perder o alvo.", compose ? "compose.yaml + override" : "container host")}${demoTag("Serviços declarados no repositório · não é monitoramento")}</div>${actionByKey("link:compose-file", "Abrir Compose")}</header><div class="container-split"><aside class="service-stack">${compose ? '<div class="yaml-label">services:</div>' : '<div class="stack-label">stack do projeto</div>'}${SERVICE_REFERENCE.map(([service, name, purpose], i) => `<button class="service-block reveal-group" data-service="${service}" data-help-key="${service === "n8n" ? "cmd:n8n-restart" : service === "postgres" ? "cmd:psql-open" : service === "caddy" ? "cmd:caddy-logs" : service === "python-api" ? "cmd:api-health" : "link:pgadmin"}" data-help-tab="what"><span>${icon(service === "postgres" ? "database" : "docker")}</span><span><strong>${service}</strong><code>${name}</code></span><small>${purpose}</small></button>`).join("")}<small class="stack-hint">Clique para ver contexto. Estado real: docker compose ps.</small></aside><div class="container-command-rack">${chosenCommands(ids).map(commandCard).join("")}</div></div>${extrasForArea(d, ids)}</div>`;
}
function renderN8n(d) {
  const nodes = [
    ["webhook", "Evento", "Receber"],
    ["flow", "Workflow", "Processar"],
    ["database", "PostgreSQL", "Persistir"],
    ["arrow", "Resposta", "Retornar"],
  ];
  return `<div class="workflow-workspace"><header class="workflow-head"><div><span class="workflow-label">automação / workspace</span><h2>n8n</h2></div>${actionByKey("link:n8n", "Abrir n8n")}</header><div class="workflow-canvas">${demoTag("Fluxo conceitual · não representa uma execução ao vivo")}<div class="workflow-chain">${nodes.map(([ico, a, z], i) => `${i ? '<span class="node-connector" aria-hidden="true"><i></i></span>' : ""}<button class="workflow-node" data-action="${i === 0 || i === 1 ? "recipe" : "activate"}" data-key="${i === 0 ? "recipe:n8n-import" : i === 1 ? "recipe:n8n-execute" : i === 2 ? "cmd:psql-open" : "link:n8n"}"><span>${icon(ico)}</span><strong>${a}</strong><small>${z}</small><i class="port-in"></i><i class="port-out"></i></button>`).join("")}</div></div><div class="workflow-lanes"><section><header><i></i><h3>Editor / navegador</h3></header>${recipeCollection(d.recipes.filter((e) => e.id.startsWith("n8n-")))}${linkStrip(d.links.filter((e) => ["n8n", "workflow-file", "n8n-docs"].includes(e.id)))}</section><section><header><i></i><h3>Runtime / servidor SSH</h3></header><div class="node-card-grid">${chosenCommands(["n8n-restart", "n8n-logs", "compose-follow", "json-check"]).map(commandCard).join("")}</div></section></div>${extrasForArea(d, ["n8n-restart", "n8n-logs", "compose-follow", "json-check"])}</div>`;
}
function renderPostgres(d) {
  const tables = [
    ["clientes", "Clientes do atendimento"],
    ["conversas", "Contexto das conversas"],
    ["mensagens", "Histórico de mensagens"],
  ];
  const ids = [
    "psql-open",
    "psql-tables",
    "psql-select",
    "psql-describe",
    "psql-list",
    "psql-quit",
  ];
  return `<div class="database-workspace"><header class="database-head"><span>${icon("database")}</span><div><h2>PostgreSQL</h2><p>Explore a estrutura. Copie uma consulta.</p></div>${actionByKey("link:pgadmin", "Abrir pgAdmin")}</header><div class="database-split"><aside class="database-explorer"><div class="db-name">socialmei <span>schema</span></div>${tables.map(([name, desc]) => `<button class="schema-row" data-help-key="${name === "mensagens" ? "cmd:psql-describe" : "cmd:psql-tables"}" data-help-tab="what">${icon("grid")}<span>${name}<small>${desc}</small></span></button>`).join("")}<small>Estrutura versionada no projeto; presença no servidor ainda precisa ser conferida.</small><div class="query-preview"><span>query / somente leitura</span><code>SELECT COUNT(*)<br>FROM socialmei.mensagens;</code><small>Nenhum resultado ao vivo é exibido aqui.</small></div></aside><div class="query-grid">${chosenCommands(ids).map(commandCard).join("")}</div></div>${extrasForArea(d, ids)}</div>`;
}
function renderPython(d, api = false) {
  const ids = api ? ["uvicorn", "api-post", "api-health"] : ["python-version", "venv", "pip"];
  return `<div class="editor-workspace"><header class="editor-tabs"><span class="editor-tab active">${icon("code")}${api ? "app.py / FastAPI" : "workspace / Python"}</span><span>${api ? "PC / venv + host / Docker" : "local · venv"}</span></header><div class="editor-split"><aside class="editor-gutter"><span>EXPLORER</span><div>python-service/</div><small>├ app.py<br>├ requirements.txt<br>└ Dockerfile</small><div>.venv/</div>${linkStrip(d.links)}</aside><div><div class="editor-heading"><span class="line-no">01</span><h2>${api ? "FastAPI" : "Python"}</h2><p>${api ? "Endpoints e testes da API do projeto." : "Ambiente virtual antes de dependências."}</p></div>${api ? `<div class="endpoint-list"><span><b>GET</b> /health</span><span><b>POST</b> /processar</span><small>Processa texto; não implementa gravação CRM.</small></div>` : `<div class="indent-diagram"><span>project/</span><span>↳ .venv</span><span>↳ pip install</span><span>↳ executar</span></div>`}<div class="editor-command-list">${chosenCommands(ids).map(commandCard).join("")}</div></div></div>${extrasForArea(d, ids)}${api ? "" : `<button class="action" data-category="FastAPI">${icon("arrow")}Abrir workspace FastAPI</button>`}</div>`;
}
function renderCaddy(d) {
  return `<div class="proxy-workspace">${compactTitle("Caddy", "Uma entrada HTTPS. Destinos definidos no projeto.", "reverse_proxy")}<div class="proxy-map"><div class="proxy-internet">${icon("cloud")}<strong>Internet</strong><small>80 / 443</small></div><div class="proxy-arrow">${icon("arrow")} HTTPS</div><div class="proxy-core">${icon("shield")}<strong>Caddy</strong><code>Caddyfile</code></div><div class="proxy-targets"><button data-action="open" data-key="link:n8n"><b>n8n</b><code>n8n:5678</code></button><button data-action="open" data-key="link:pgadmin"><b>pgAdmin</b><code>pgadmin:80</code></button><span class="unrouted"><b>Python API</b><small>Interna; sem rota Caddy no arquivo atual.</small></span></div></div>${linkStrip(d.links)}${commandCollection("Validar → aplicar → conferir", d.commands, "proxy-commands")}${recipeCollection(d.recipes)}</div>`;
}
function renderDeploy(d) {
  const steps = [
    ["GitHub / PR", "Versão revisada", ["deploy-status"]],
    ["VPS / checkout", "Baixar a main limpa", ["deploy-pull"]],
    ["Compose", "Validar e aplicar", ["compose-validate", "compose-up", "compose-build"]],
    ["Serviços", "Conferir resultado", ["compose-ps", "compose-logs"]],
  ];
  return `<div class="deploy-workspace">${compactTitle("Deploy", "Da versão revisada aos serviços do servidor.", "release pipeline")}${demoTag("Aplicação manual; checks GitHub não fazem deploy na VPS")}<div class="deploy-pipeline">${steps.map(([a, z, ids], i) => `<section class="pipeline-stage reveal-group"><span class="pipeline-node">${i + 1}</span><header><h3>${a}</h3><small>${z}</small></header><div class="stage-actions">${chosenCommands(ids).map(commandCard).join("")}</div></section>`).join("")}</div>${extrasForArea(
    d,
    steps.flatMap((x) => x[2]),
  )}</div>`;
}
function renderDashboard(d) {
  return `<div class="dashboard-workspace"><header class="dashboard-head"><div><h2>Dashboard</h2><p>Edite, teste, compare e publique a versão revisada.</p></div>${actionByKey("link:dashboard", "Abrir Dashboard")}</header><div class="dashboard-desktop"><div class="preview-window"><div class="preview-browser"><i></i><i></i><span>HTML estático · representação do workspace</span></div><div class="preview-content"><div class="preview-sidebar"></div><div class="preview-blocks"><span></span><span></span><span></span><div></div></div></div><div class="preview-files"><code>frontend/socialmei-app.html</code>${icon("arrow")}<code>scripts/ · styles/</code></div></div><div class="dashboard-checklist">${recipeCollection(d.recipes)}${chosenCommands(["dashboard-compare", "serve"]).map(commandCard).join("")}</div></div>${linkStrip(d.links)}${extrasForArea(d, ["dashboard-compare", "serve"])}</div>`;
}
function renderProject(d) {
  return (
    compactTitle("Projeto", "Arquivos e ferramentas do seu workspace.", "SocialMEI.IA") +
    linkStrip(d.links) +
    recipeCollection(d.recipes) +
    commandCollection("Ações", d.commands)
  );
}
function renderCategory(cat) {
  const d = getAreaData(cat);
  const renderers = {
    Git: renderGit,
    Linux: renderLinux,
    PowerShell: renderPowerShell,
    SSH: renderSSH,
    AWS: renderAWS,
    Docker: (x) => renderDocker(x, false),
    "Docker Compose": (x) => renderDocker(x, true),
    n8n: renderN8n,
    PostgreSQL: renderPostgres,
    Python: (x) => renderPython(x, false),
    FastAPI: (x) => renderPython(x, true),
    Caddy: renderCaddy,
    Deploy: renderDeploy,
    Dashboard: renderDashboard,
    Projeto: renderProject,
  };
  return (
    internalSearch() + `<div class="area-wrapper">${(renderers[cat] || renderProject)(d)}</div>`
  );
}
function launchTile(e) {
  const url = linkUrl(e);
  return `<article class="launch-tile" data-entry="${e.key}"><button class="launch-main" data-action="open" data-key="${e.key}" aria-label="${escapeHTML(e.title)}"><span class="launch-icon">${icon(CATEGORY_INFO[e.category]?.icon || "link")}</span><span><strong>${escapeHTML(e.title.replace(/^Abrir /, ""))}</strong><small>${url ? escapeHTML(new URL(url).hostname) : "Configurar endereço"}</small></span><span class="launch-go">${icon(url ? "open" : "settings")}</span></button>${flags(e)}</article>`;
}
function renderLinks() {
  const groups = [...new Set(QUICK_LINKS.map((x) => x.group))];
  return (
    internalSearch() +
    `<div class="launchpad-workspace"><header class="launchpad-head"><span>${icon("grid")}</span><h2>Launchpad</h2><p>Seu desktop de links.</p><span class="launchpad-hint">abrir · favoritar · fixar</span></header>${groups
      .map(
        (group, i) =>
          `<section class="launch-zone reveal-group"><header><span class="zone-number">0${i + 1}</span><h3>${escapeHTML(group)}</h3><span class="zone-line"></span></header><div class="launch-grid">${entries
            .filter((e) => e.type === "link" && e.group === group)
            .map(launchTile)
            .join("")}</div></section>`,
      )
      .join("")}</div>`
  );
}
function renderCommands() {
  return (
    internalSearch() +
    `<div class="command-index">${compactTitle("Comandos", "Uma biblioteca organizada por contexto.", "command index")}<div class="context-switches">${[
      ["all", "Todos"],
      ["PowerShell", "PC / PowerShell"],
      ["SSH", "Servidor / SSH"],
      ["PostgreSQL", "Dentro do psql"],
      ["Container", "Container"],
    ]
      .map(
        ([id, label], i) =>
          `<button class="${i === 0 ? "active" : ""}" data-command-context="${id}" aria-pressed="${i === 0}">${label}</button>`,
      )
      .join(
        "",
      )}</div>${categoriesHtml()}<div id="commandIndexResults">${commandIndexHtml("all")}</div></div>`
  );
}
function commandIndexHtml(context) {
  const list = entries.filter(
    (e) =>
      e.type === "command" && e.risk !== "danger" && (context === "all" || e.context === context),
  );
  return `<div class="command-index-meta">${list.length} ações · risco destrutivo fica na categoria correspondente</div><div class="indexed-commands">${list.map((e) => `<div class="indexed-command">${commandCard(e)}</div>`).join("")}</div>`;
}
function renderRecipeIndex() {
  return (
    internalSearch() +
    `<div class="recipe-index">${compactTitle("Receitas", "Escolha o destino; siga passos curtos.", "action routes")}<div class="recipe-route-grid">${entries
      .filter((e) => e.type === "recipe")
      .map(
        (e, i) =>
          `<article class="recipe-route" data-entry="${e.key}"><header><span class="route-number">${String(i + 1).padStart(2, "0")}</span><span>${escapeHTML(e.category)}</span>${flags(e)}</header><h3>${escapeHTML(e.title)}</h3><p>${escapeHTML(e.description)}</p>${flowHtml(e.flow)}<footer><button class="action" data-action="recipe" data-key="${e.key}">Abrir receita ${icon("arrow")}</button><small>${e.steps.length} passos</small></footer></article>`,
      )
      .join("")}</div></div>`
  );
}
function pageHeader(title, desc) {
  return internalSearch() + compactTitle(title, desc);
}
function commandCard(e) {
  const dangerous = e.risk === "danger",
    visible = revealed.has(e.key),
    family = PAGE_THEMES[e.category]?.family || "terminal";
  return `<article class="card command-card family-${family}" data-entry="${e.key}" data-service-ref="${e.id.includes("n8n") || e.id === "docker-shell" ? "n8n" : e.id.includes("psql") ? "postgres" : e.id.includes("caddy") ? "caddy" : e.id.includes("api") || e.id === "compose-build" ? "python-api" : "all"}"><div class="family-kicker"><span>${family === "graph" ? icon("git") : family === "data" ? icon("database") : icon(CATEGORY_INFO[e.category]?.icon || "terminal")}${escapeHTML(e.category)}</span><details class="card-menu"><summary aria-label="Mais opções: ${escapeHTML(e.title)}" title="Ajuda contextual">${icon("more")}</summary><div class="context-menu">${[["how", "Como usar"], ["where", "Onde usar"], ["what", "Pra que serve"], ["errors", "Problemas comuns"], ...(e.id === "ssh-connect" || e.category === "SSH" ? [["key", "Qual chave usar?"]] : [])].map(([tab, label]) => `<button data-help-key="${e.key}" data-help-tab="${tab}">${label}</button>`).join("")}</div></details></div><div class="card-top"><div class="card-title"><h3>${escapeHTML(e.title)}</h3></div>${flags(e)}</div><p>${escapeHTML(e.description)}</p>${badges(e)}${dangerous ? `<p class="danger-note">${escapeHTML(e.warning || "Confira alvo e backup antes de usar.")}</p>` : ""}${!dangerous || visible ? `<pre><code>${escapeHTML(commandCode(e))}</code></pre>` : ""}<div class="card-bottom">${dangerous && !visible ? `<button class="action danger" data-action="reveal" data-key="${e.key}">${icon("shield")}Mostrar comando</button>` : `<button class="action${dangerous ? " danger" : ""}" data-action="copy" data-key="${e.key}">${icon("copy")}Copiar</button>`}<button class="help-inline" data-help-key="${e.key}" data-help-tab="how">Como usar</button>${e.id === "ssh-connect" ? `<button class="help-inline" data-help-key="${e.key}" data-help-tab="key">Qual chave?</button>` : ""}</div></article>`;
}
function render() {
  parkSearch();
  const titles = {
    home: "Início",
    links: "Links",
    favorites: "Favoritos",
    recents: "Recentes",
    commands: "Comandos",
    recipes: "Receitas",
    glossary: "Glossário rápido",
    category: state.category,
  };
  const title = titles[page] || "Início";
  $("breadcrumb").textContent = mainQuery && page !== "home" ? "Busca" : title;
  $("clearSearch").hidden = !mainQuery;
  setAreaTheme(title);
  $("view").innerHTML =
    page === "home"
      ? homeHtml()
      : mainQuery
        ? renderSearch()
        : page === "links"
          ? renderLinks()
          : page === "commands"
            ? renderCommands()
            : page === "category"
              ? renderCategory(state.category)
              : page === "recipes"
                ? renderRecipeIndex()
                : page === "favorites"
                  ? pageHeader("Favoritos", "Sua coleção de ações.") +
                    (state.favorites.length
                      ? cards(state.favorites.map((k) => ENTRY_MAP.get(k)))
                      : '<div class="empty">Use a estrela nos cards para montar sua coleção.</div>')
                  : page === "recents"
                    ? pageHeader("Usados recentemente", "Continue de onde estava trabalhando.") +
                      (state.recents.length
                        ? `<div class="list">${state.recents.map((x) => quickRow(ENTRY_MAP.get(x.key), x.time)).join("")}</div>`
                        : '<div class="empty">Copie um comando ou abra um link para começar.</div>')
                    : page === "glossary"
                      ? pageHeader("Glossário rápido", "Uma frase por termo.") +
                        `<div class="glossary">${QUICK_GLOSSARY.map((x) => `<div class="term"><strong>${escapeHTML(x.term)}</strong><p>${escapeHTML(x.definition)}</p></div>`).join("")}</div>`
                      : "";
  mountSearch();
  renderNav();
  if (page === "home") {
    hydrateIcons($("homeCockpit"));
    setupHomeExperience();
    firstHomeEntrance = false;
    try {
      sessionStorage.setItem("michael-dev-hub-home-seen", "1");
    } catch {}
  } else setupAreaMotion();
}
function renderNav() {
  let order = 0,
    html = `<div class="command-rail-line" aria-hidden="true"></div>${navButton("Início", "home", "home", "", "nav-home", ++order)}`;
  for (const group of NAV_GROUPS) {
    const rendered = navGroupHtml(group, order);
    html += rendered.html;
    order = rendered.order;
  }
  $("navigation").innerHTML = html;
  updateSidebarAccentMotion();
  requestAnimationFrame(updateNavScrollFade);
}

/* Ajuda contextual: explicações aparecem somente a pedido. */
let helpEntry = null,
  helpTab = "how",
  keyTask = "identify";
function helpTabs(e) {
  return [
    ["how", "Como usar"],
    ["where", "Onde usar"],
    ["what", "O que faz"],
    ["errors", "Erros"],
    ...(e.category === "SSH" || e.id === "ssh-connect" || e.category === "AWS"
      ? [["key", "Chave SSH"]]
      : []),
  ];
}
function openHelp(key, tab = "how") {
  const e = ENTRY_MAP.get(key);
  if (!e) return;
  helpEntry = e;
  helpTab = helpTabs(e).some((x) => x[0] === tab) ? tab : "how";
  keyTask = "identify";
  closeHomePanel();
  document.querySelectorAll(".card-menu[open]").forEach((x) => (x.open = false));
  renderHelp();
  if (!$("helpDialog").open) $("helpDialog").showModal();
}
function renderHelp() {
  if (!helpEntry) return;
  const e = helpEntry;
  $("helpDialog").innerHTML =
    `<div class="help-handle" aria-hidden="true"></div><header class="help-head"><span class="help-category">${icon(CATEGORY_INFO[e.category]?.icon || "terminal")}${escapeHTML(e.category)}</span><button class="icon-btn" data-close="helpDialog" aria-label="Fechar ajuda">${icon("close")}</button><h2 id="helpTitle">${escapeHTML(e.title)}</h2><p>Ajuda no contexto da ação.</p></header><div class="help-tabbar" role="tablist" aria-label="Ajuda da ação">${helpTabs(
      e,
    )
      .map(
        ([id, label]) =>
          `<button role="tab" id="help-tab-${id}" data-help-select="${id}" aria-controls="helpBody" aria-selected="${helpTab === id}" tabindex="${helpTab === id ? 0 : -1}">${label}</button>`,
      )
      .join(
        "",
      )}</div><section class="help-body" id="helpBody" role="tabpanel" aria-labelledby="help-tab-${helpTab}">${helpContent(e, helpTab)}</section>`;
}
function numberedSteps(lines) {
  return `<ol class="help-steps">${lines.map((x) => `<li>${escapeHTML(x)}</li>`).join("")}</ol>`;
}
function helpCode(e) {
  return e.type === "command" && e.risk !== "danger"
    ? `<div class="help-command">${badges(e)}<pre><code>${escapeHTML(commandCode(e))}</code></pre><button class="action" data-action="copy" data-key="${e.key}">${icon("copy")}Copiar</button></div>`
    : "";
}
function helpContent(e, tab) {
  const h =
    CONTEXT_HELP[e.category] || CONTEXT_HELP[e.context === "PowerShell" ? "PowerShell" : "Linux"];
  if (tab === "key") return keyAssistant();
  if (tab === "what")
    return `<h3>Pra que serve</h3><p>${escapeHTML(e.description)}</p>${e.result ? `<div class="help-result"><span>Resultado esperado</span><p>${escapeHTML(e.result)}</p></div>` : ""}${e.type === "command" ? badges(e) : ""}${e.risk === "danger" ? `<p class="danger-note">${escapeHTML(e.warning)}</p>` : ""}`;
  if (tab === "where") {
    let flow =
      e.id === "ssh-connect"
        ? ["Seu computador", "PowerShell", "SSH", "AWS / EC2", "Ubuntu"]
        : e.context === "PostgreSQL"
          ? ["VPS", "docker exec / psql", "Banco autorizado", "Prompt psql"]
          : e.context === "Container"
            ? ["VPS", "docker exec", "Shell do container"]
            : e.context === "PowerShell"
              ? ["Seu computador", "PowerShell", "Pasta do checkout"]
              : e.context === "SSH"
                ? [
                    "Seu computador",
                    "SSH",
                    "Host Ubuntu",
                    e.category === "Docker Compose" || ["n8n", "Caddy"].includes(e.category)
                      ? "Pasta do Compose"
                      : "Terminal do servidor",
                  ]
                : h.where;
    return `<h3>Onde executar</h3><div class="where-flow">${flow.map((x, i) => `${i ? icon("arrow") : ""}<span>${escapeHTML(x)}</span>`).join("")}</div><p>${e.id === "ssh-connect" ? "Comece no seu PC. Depois da conexão, comandos do host são executados no terminal remoto." : escapeHTML(e.when || "Use o contexto indicado na ação.")}</p>${e.id === "ssh-connect" ? '<div class="prompt-comparison"><div><span>Antes · exemplo</span><code>PS C:\Users\Mike&gt;</code></div><div><span>Depois · exemplo</span><code>ubuntu@ip-xxx-xxx:~$</code></div></div>' : ""}`;
  }
  if (tab === "errors") {
    const errors = h.errors || [];
    return `<h3>Problemas comuns</h3><div class="error-list">${errors.map(([a, b]) => `<article><h4>${escapeHTML(a)}</h4><p>${escapeHTML(b)}</p></article>`).join("")}</div>${e.category === "SSH" || e.id === "ssh-connect" ? `<button class="action" data-action="recipe" data-key="recipe:pem-permissions">${icon("recipe")}Permissões da chave no Windows</button>${sourceLink("troubleshoot", "Diagnóstico oficial AWS")}` : ""}`;
  }
  const special = {
    "ssh-connect": CONTEXT_HELP.SSH.use,
    "n8n-restart": [
      "Acesse o VPS usando sua PEM.",
      "Entre na pasta que contém compose.yaml.",
      "Confira a janela de manutenção: n8n terá breve interrupção.",
      "Cole o restart e pressione Enter.",
      "Confira docker compose ps e os logs n8n.",
    ],
    "psql-open": [
      "No host via SSH, confirme o container PostgreSQL.",
      "Ajuste role e banco em Configurações.",
      "Copie o comando; ele abre psql dentro do container.",
      "No prompt psql, use \\dt socialmei.*; \\q retorna ao host.",
    ],
    "git-pull": [
      "No checkout local, confira git status.",
      "Confirme main e preserve alterações locais.",
      "Cole git pull --ff-only origin main.",
      "Se houver divergência, pare e revise o histórico.",
    ],
    "compose-up": [
      "Na pasta do Compose, revise os arquivos e as variáveis locais.",
      "Valide com docker compose config --quiet.",
      "Cole o up -d; serviços podem ser recriados.",
      "Confira docker compose ps e os logs.",
    ],
    "pem-acl-fix": [
      "No PowerShell do PC, confira o caminho com Test-Path.",
      "Confira Owner/ACL e confirme que a PEM pertence a você.",
      "Copie o procedimento icacls para esse único arquivo.",
      "Se qualquer etapa retornar erro, pare e revise; não há /T nem alteração automática.",
      "Confira a ACL final antes de tentar SSH.",
    ],
  };
  const place = {
    PowerShell: "Abra o PowerShell no seu PC.",
    SSH: "Acesse o servidor via SSH.",
    PostgreSQL: "Abra psql no banco autorizado.",
    Container: "Entre no shell do container indicado.",
  }[e.context];
  const steps =
    e.type === "command"
      ? special[e.id] || [
          place || "Abra o ambiente indicado.",
          e.when || "Confira os caminhos e o alvo.",
          "Copie o comando, cole e confira a saída.",
        ]
      : e.type === "recipe"
        ? [
            "Abra a receita.",
            "Confira o contexto de cada passo.",
            "Copie e execute um passo de cada vez.",
          ]
        : ["Abra o endereço no navegador.", "Entre com sua conta autorizada, quando solicitado."];
  return `<h3>Como usar</h3>${numberedSteps(steps)}${helpCode(e)}${e.id === "ssh-connect" ? `<button class="action" data-help-select="key">${icon("shield")}Qual chave usar?</button><button class="action" data-settings-focus="pemFile">${icon("settings")}Configurar SSH</button>${sourceLink("connect", "Conexão SSH · AWS")}` : ""}${e.id === "pem-acl-fix" ? sourceLink("troubleshoot", "Procedimento Windows · AWS") : ""}`;
}
function sourceLink(id, label) {
  return `<a class="source-link" href="${escapeHTML(OFFICIAL_SOURCES[id])}" target="_blank" rel="noopener noreferrer">${icon("book")}${escapeHTML(label)}${icon("open")}</a>`;
}
function keyAssistant() {
  const p = config();
  const examplePath = "C:\\Users\\Mike\\Downloads\\socialmei-server.pem";
  const examples =
    keyTask === "file"
      ? `<div class="key-example"><span>Exemplo ilustrativo · não é a chave real</span><div><small>Key pair no EC2</small><strong>socialmei-server</strong></div><div><small>Arquivo no seu computador</small><code>${escapeHTML(examplePath)}</code></div><pre><code>${escapeHTML('ssh -i "' + examplePath + '" ubuntu@IP_DO_SERVIDOR')}</code></pre></div><p>Procure em Downloads, Documents ou na sua pasta de chaves. O nome do arquivo pode ter sido alterado: confirme a correspondência com a chave pública autorizada.</p>`
      : "";
  const contents = {
    identify: `<h3>Qual chave eu uso?</h3><p>Use a chave privada correspondente à chave pública autorizada na instância. Comece pelo Key Pair registrado no EC2.</p><div class="key-discovery">${[
      ["1", "AWS Console", "Abrir sua conta"],
      ["2", "EC2 → Instances", "Selecionar região e instância"],
      ["3", "Details → Instance details", "Procurar Key pair name"],
      ["4", "Seu computador", "Localizar a PEM correspondente"],
    ]
      .map(
        ([n, a, b]) =>
          `<div><b>${n}</b><span><strong>${a}</strong><small>${b}</small></span></div>`,
      )
      .join(
        "",
      )}</div>${actionByKey("link:ec2", "Abrir EC2")}<p class="help-note">O Key pair name mostra o par indicado no lançamento. Se o acesso foi alterado depois, confirme a chave autorizada com o responsável.</p>${sourceLink("identifyKey", "Identificar a chave · AWS")}`,
    file: `<h3>Onde fica a PEM?</h3><p>Ao criar um Key Pair pelo console EC2, a parte privada é baixada uma vez para o seu computador. OpenSSH usa o formato .pem.</p>${examples}<div class="key-current"><span>Seu ajuste local</span><strong>${escapeHTML(p.keyPairName || "Key Pair ainda não informado")}</strong><code>${escapeHTML(p.pemFile || "SUA_CHAVE.pem")}</code></div><button class="action" data-settings-focus="pemFile">${icon("settings")}Salvar só o caminho</button>${sourceLink("createKey", "Criação e download · AWS")}`,
    lost: `<h3>Perdi minha chave</h3><p class="key-important">A AWS não guarda uma cópia da chave privada original e não permite baixá-la novamente pelo EC2.</p>${numberedSteps(["Procure o arquivo nas suas pastas e cópias seguras.", "Confira o Key Pair da instância e o acesso autorizado.", "Considere EC2 Instance Connect ou Session Manager, se os pré-requisitos estiverem configurados.", "Peça ao responsável para adicionar/substituir a chave pública usando o procedimento oficial adequado."])}<p>Recuperação depende do ambiente e pode exigir manutenção. Criar um Key Pair novo, sozinho, não muda uma instância existente.</p>${sourceLink("troubleshoot", "Acesso com chave perdida · AWS")}${sourceLink("replaceKey", "Adicionar/substituir chave pública · AWS")}`,
    create: `<h3>Como criar uma chave nova</h3>${numberedSteps(["EC2 → Network & Security → Key Pairs.", "Escolha Create key pair.", "Dê um nome, por exemplo mike-devhub-key.", "Para uma instância Linux, escolha RSA ou ED25519 compatível com seu cliente; OpenSSH usa .pem.", "Crie e guarde o download em uma pasta segura."])}<p class="key-important">Uma nova Key Pair NÃO passa a funcionar automaticamente em uma instância existente. A chave pública precisa ser autorizada por um procedimento apropriado.</p>${actionByKey("link:ec2", "Abrir EC2")}${sourceLink("createKey", "Criar Key Pair · AWS")}${sourceLink("replaceKey", "Autorizar chave na instância · AWS")}`,
  };
  return `<div class="key-intro"><span>${icon("shield")}</span><div><h3>Chave de acesso AWS</h3><p>Arquivo privado que comprova seu acesso ao servidor. O hub guarda somente o caminho, nunca o conteúdo.</p></div></div><div class="key-taskbar" role="tablist" aria-label="Ajuda da chave">${[
    ["identify", "Qual chave?"],
    ["file", "Onde está?"],
    ["lost", "Perdi minha chave"],
    ["create", "Criar nova"],
  ]
    .map(
      ([id, label]) =>
        `<button role="tab" tabindex="${keyTask === id ? 0 : -1}" aria-selected="${keyTask === id}" data-key-task="${id}" id="key-task-${id}" aria-controls="keyTaskBody">${label}</button>`,
    )
    .join(
      "",
    )}</div><div id="keyTaskBody" role="tabpanel" aria-labelledby="key-task-${keyTask}">${contents[keyTask]}</div><div class="key-private-note">${icon("shield")}Não cole a chave aqui, não compartilhe a PEM e não envie seu conteúdo ao GitHub.</div>`;
}
function settingsPreview() {
  const p = { ...state.personal };
  CONFIG_FIELDS.forEach((f) => {
    const el = $("config-" + f.key);
    if (el) p[f.key] = el.value.trim() || PERSONAL_CONFIG[f.key];
  });
  const ssh = `ssh -i ${psQuote(p.pemFile || "SUA_CHAVE.pem")} ${p.sshUser || "ubuntu"}@${p.vpsIp || "IP_DO_SERVIDOR"}`;
  $("sshSettingsPreview").innerHTML =
    sshStatusHtml(p) +
    `<pre><code>${escapeHTML(ssh)}</code></pre><small>Preview local; salve para atualizar todos os comandos.</small>`;
}
function openSettings(focusKey) {
  $("settingsError").hidden = true;
  const sshKeys = ["sshUser", "vpsIp", "pemFile", "keyPairName"];
  const base = CONFIG_FIELDS.map(
    (f, i) =>
      `${i === 0 ? '<div class="settings-divider">SSH / acesso ao VPS</div>' : f.key === "serverPath" ? '<div class="settings-divider">Servidor / banco</div>' : f.key === "n8nUrl" ? '<div class="settings-divider">Seus links</div>' : ""}<label class="field${f.wide ? " wide" : ""}"><span>${escapeHTML(f.label)}</span><input id="config-${f.key}" name="${f.key}" type="${f.url ? "url" : "text"}" maxlength="${f.url ? 1000 : 250}" value="${escapeHTML(state.personal[f.key])}" placeholder="${escapeHTML(f.placeholder)}" autocomplete="off" ${!f.url && f.key !== "keyPairName" ? "required" : ""}>${f.help ? `<small>${escapeHTML(f.help)}</small>` : ""}</label>${f.key === "keyPairName" ? '<div id="sshSettingsPreview" class="settings-ssh-preview field wide"></div>' : ""}`,
  ).join("");
  const homePrefs = `<div class="settings-divider">Home / experiência</div><label class="field"><span>Intensidade de animação</span><select id="prefHomeMotion"><option value="reduced" ${state.homeMotion === "reduced" ? "selected" : ""}>Reduzida</option><option value="normal" ${state.homeMotion === "normal" ? "selected" : ""}>Normal</option><option value="high" ${state.homeMotion === "high" ? "selected" : ""}>Alta</option></select></label><label class="field"><span>Elementos visuais</span><select id="prefHomeParticles"><option value="1" ${state.homeParticles ? "selected" : ""}>Partículas ligadas</option><option value="0" ${!state.homeParticles ? "selected" : ""}>Partículas desligadas</option></select></label><label class="field"><span>Recentes na Home</span><select id="prefHomeRecents"><option value="1" ${state.homeRecents ? "selected" : ""}>Mostrar</option><option value="0" ${!state.homeRecents ? "selected" : ""}>Ocultar</option></select></label><label class="field"><span>Modo Showcase</span><select id="prefShowcase"><option value="0" ${!state.showcase ? "selected" : ""}>Produtividade</option><option value="1" ${state.showcase ? "selected" : ""}>Showcase</option></select></label>`;
  $("settingsFields").innerHTML = base + homePrefs;
  settingsPreview();
  if (!$("settingsDialog").open) $("settingsDialog").showModal();
  if (focusKey) $("config-" + focusKey)?.focus();
}
function validatePersonal(p) {
  for (const key of Object.keys(PERSONAL_CONFIG)) {
    if (typeof p[key] !== "string" || /[\r\n\x00-\x1f]/.test(p[key]))
      throw new Error("Use apenas valores de uma linha.");
    if (key.endsWith("Url") && p[key]) {
      const url = safeUrl(p[key]);
      if (!url) throw new Error("Informe uma URL http(s) sem credenciais.");
      const u = new URL(url);
      if (
        [...u.searchParams.keys()].some((k) =>
          /token|secret|password|api.?key|signature|credential|authorization/i.test(k),
        )
      )
        throw new Error("Não salve senhas ou tokens nos links.");
      if (u.protocol === "http:" && !["localhost", "127.0.0.1", "[::1]"].includes(u.hostname))
        throw new Error("Use HTTPS para os links remotos.");
    }
  }
  if (!/^[a-zA-Z0-9_.-]+$/.test(p.vpsIp) || p.vpsIp.startsWith("-"))
    throw new Error("IP/hostname inválido. Use IPv4 ou nome DNS.");
  if (!/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(p.sshUser)) throw new Error("Usuário SSH inválido.");
  if (!p.pemFile || !p.serverPath || !p.dbUser || !p.dbName)
    throw new Error("Preencha os caminhos, role e banco.");
  if (
    /-----BEGIN|PRIVATE KEY|\$\(|`/.test(p.pemFile) ||
    /-----BEGIN|PRIVATE KEY/.test(p.keyPairName)
  )
    throw new Error("Informe só o nome do Key Pair e o caminho do arquivo PEM.");
  return p;
}
function commandCode(e) {
  const p = config(),
    path = psQuote(p.pemFile);
  switch (e.template) {
    case "ssh":
      return `ssh -i ${path} ${p.sshUser}@${p.vpsIp}`;
    case "scp":
      return `scp -i ${path} "anotacao.txt" ${p.sshUser}@${p.vpsIp}:~/anotacao.txt`;
    case "serverPath":
      return `cd ${shQuote(p.serverPath)}`;
    case "psql":
      return `docker exec -it socialmei-postgres psql -U ${shQuote(p.dbUser)} -d ${shQuote(p.dbName)}`;
    case "dbConnect":
      return `\\c "${String(p.dbName).replace(/"/g, '""')}"`;
    case "pem-exists":
      return `Test-Path -LiteralPath ${path} -PathType Leaf`;
    case "pem-acl-inspect":
      return `$keyPath = ${path}\n(Get-Acl -LiteralPath $keyPath).Owner\nicacls.exe $keyPath`;
    case "pem-acl-fix":
      return `$keyPath = ${path}\nif (-not (Test-Path -LiteralPath $keyPath -PathType Leaf)) { throw "Confira o caminho da PEM" }\nicacls.exe $keyPath /reset\nif ($LASTEXITCODE -ne 0) { throw "Falha na ACL; revise o proprietario" }\nicacls.exe $keyPath /grant:r "$($env:USERNAME):(R)"\nif ($LASTEXITCODE -ne 0) { throw "Falha no grant; pare e revise" }\nicacls.exe $keyPath /inheritance:r\nif ($LASTEXITCODE -ne 0) { throw "Falha na heranca; pare e revise" }\nicacls.exe $keyPath`;
    default:
      return e.code;
  }
}
function homePanelEntryHtml(e) {
  if (!e) return "";
  const label =
    e.type === "command"
      ? e.risk === "danger"
        ? "revisar"
        : "copiar"
      : e.type === "link"
        ? linkUrl(e)
          ? "abrir"
          : "configurar"
        : "receita";
  return `<div class="quick-action-row"><button class="quick-action" data-action="activate" data-key="${e.key}"><span>${icon(e.type === "command" ? "terminal" : e.type === "link" ? "open" : "recipe")}</span><span><strong>${escapeHTML(e.title)}</strong><small>${escapeHTML(e.type === "command" ? (e.risk === "danger" ? "Comando protegido" : CONTEXT_LABELS[e.context] || e.context) : e.type === "link" ? e.category : `${e.steps.length} passos`)}</small></span><em>${label} →</em></button>${e.type === "command" ? `<button class="quick-key-help" data-help-key="${e.key}" data-help-tab="${e.id === "ssh-connect" ? "key" : "how"}">${e.id === "ssh-connect" ? "Qual chave?" : "Como usar"}</button>` : ""}</div>`;
}
function homeSearchStackHtml() {
  const q = mainQuery.trim();
  if (!q)
    return '<div class="hub-empty">Digite uma intenção, comando ou serviço. <b>/</b> também foca a busca.</div>';
  const list = searchEntries(q).slice(0, 5);
  return list.length
    ? list
        .map(
          (e) =>
            `<div class="hub-result-row"><button class="hub-result" data-action="activate" data-key="${e.key}"><span>${icon(e.type === "command" ? "terminal" : e.type === "link" ? "open" : "recipe")}</span><span><strong>${escapeHTML(e.title)}</strong><small>${escapeHTML(e.type === "command" ? (e.risk === "danger" ? "comando protegido" : commandCode(e)) : e.type === "link" ? e.category : e.description)}</small></span><span class="hub-go">${e.type === "command" ? "copiar" : e.type === "link" ? "abrir" : "ver"} →</span></button>${e.type === "command" ? `<button class="hub-key-help" data-help-key="${e.key}" data-help-tab="${e.id === "ssh-connect" ? "key" : "how"}">${e.id === "ssh-connect" ? "Qual chave?" : "Como usar"}</button>` : ""}</div>`,
        )
        .join("")
    : '<div class="hub-empty">Nada encontrado. Tente VPS, Docker, banco, n8n ou GitHub.</div>';
}
function refreshHomeLists() {
  if (page === "home") {
    const recent = document.querySelector(".home-recents");
    if (recent) {
      const replacement = document.createElement("div");
      replacement.innerHTML = homeRecentHtml();
      if (replacement.firstElementChild) recent.replaceWith(replacement.firstElementChild);
    }
    const dock = document.querySelector(".home-dock");
    if (dock) {
      const replacement = document.createElement("div");
      replacement.innerHTML = homeDockHtml();
      const next = replacement.firstElementChild;
      dock.replaceWith(next);
      hydrateIcons(next);
    }
  }
  renderNav();
}

/* Efeitos leves: um observer e um requestAnimationFrame pendente. */
let areaObserver = null,
  areaPointerFrame = 0,
  areaPointerTarget = null,
  areaPointerX = 0,
  areaPointerY = 0;
const reduceMotion = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches || state.homeMotion === "reduced";
function setAreaTheme(title) {
  const t = PAGE_THEMES[title];
  document.body.dataset.area = page === "home" ? "home" : t?.id || "utility";
  document.body.dataset.cardFamily = t?.family || "terminal";
  document.body.style.setProperty("--area-accent", t?.color || "var(--blue)");
  document.body.style.setProperty("--area-accent-light", t?.light || "var(--blue)");
  if (areaObserver) {
    areaObserver.disconnect();
    areaObserver = null;
  }
}
function setupAreaMotion() {
  const view = $("view");
  view.classList.remove("route-enter");
  void view.offsetWidth;
  view.classList.add("route-enter");
  if (reduceMotion()) return;
  const groups = [...view.querySelectorAll(".reveal-group")].slice(0, 18);
  if (!("IntersectionObserver" in window)) return;
  areaObserver = new IntersectionObserver(
    (items) => {
      let delay = 0;
      for (const item of items)
        if (item.isIntersecting) {
          item.target.style.setProperty("--reveal-delay", Math.min(delay++, 3) * 45 + "ms");
          item.target.classList.add("is-revealed");
          areaObserver.unobserve(item.target);
        }
    },
    { threshold: 0.12 },
  );
  groups.forEach((g) => areaObserver.observe(g));
}
const copyButtonStates = new WeakMap();
function copyFeedback(button) {
  if (!button?.isConnected) return;
  const old = copyButtonStates.get(button);
  if (old) clearTimeout(old.timer);
  const previous = old?.previous || button.innerHTML;
  button.innerHTML = icon("check") + "Copiado";
  button.classList.add("copied");
  const card = button.closest(".command-card");
  card?.classList.add("copy-flash");
  const timer = setTimeout(() => {
    if (button.isConnected) {
      button.innerHTML = previous;
      button.classList.remove("copied");
    }
    card?.classList.remove("copy-flash");
    copyButtonStates.delete(button);
  }, 2200);
  copyButtonStates.set(button, { previous, timer });
}

document.addEventListener(
  "pointermove",
  (e) => {
    if (page === "home" || reduceMotion() || !matchMedia("(pointer:fine)").matches) return;
    const card = e.target.closest(".command-card,.launch-tile");
    if (!card) return;
    areaPointerTarget = card;
    areaPointerX = e.clientX;
    areaPointerY = e.clientY;
    if (areaPointerFrame) return;
    areaPointerFrame = requestAnimationFrame(() => {
      areaPointerFrame = 0;
      if (!areaPointerTarget?.isConnected) return;
      const r = areaPointerTarget.getBoundingClientRect();
      areaPointerTarget.style.setProperty("--mouse-x", areaPointerX - r.left + "px");
      areaPointerTarget.style.setProperty("--mouse-y", areaPointerY - r.top + "px");
    });
  },
  { passive: true },
);
document.addEventListener(
  "pointerover",
  (e) => {
    if (!["docker", "compose"].includes(document.body.dataset.area)) return;
    const c = e.target.closest("[data-service-ref]");
    if (c)
      document
        .querySelectorAll(".service-block")
        .forEach((s) =>
          s.classList.toggle("service-highlight", s.dataset.service === c.dataset.serviceRef),
        );
  },
  { passive: true },
);
document.addEventListener(
  "pointerout",
  (e) => {
    if (e.target.closest("[data-service-ref]") && !e.relatedTarget?.closest("[data-service-ref]"))
      document
        .querySelectorAll(".service-highlight")
        .forEach((x) => x.classList.remove("service-highlight"));
  },
  { passive: true },
);

function homeWireHtml(node, i) {
  const line = `<line class="connection-line" data-wire="${node.id}" x1="50" y1="49" x2="${node.x}" y2="${node.y}"/>`;
  return (
    line +
    (reduceMotion()
      ? ""
      : `<circle class="data-packet" r=".55"><animateMotion dur="${5 + i * 0.45}s" begin="${(i * 0.7).toFixed(1)}s" repeatCount="indefinite" path="M50,49 L${node.x},${node.y}"/></circle>`)
  );
}

// Todas as ações usam IDs conhecidos e escapam conteúdo antes de renderizar.
document.addEventListener("click", (event) => {
  const b = event.target.closest("button");
  if (!b) return;
  if (b.dataset.homeNode) {
    openHomePanel(b.dataset.homeNode);
    return;
  }
  if (b.hasAttribute("data-home-close")) {
    closeHomePanel();
    return;
  }
  if (b.hasAttribute("data-home-showcase")) {
    toggleShowcase();
    return;
  }
  if (b.hasAttribute("data-home-terminal-next")) {
    homeTerminalIndex = (homeTerminalIndex + 1) % 4;
    const box = b.closest(".home-mini-terminal");
    if (box) {
      const replacement = document.createElement("div");
      replacement.innerHTML = homeTerminalHtml();
      const next = replacement.firstElementChild;
      box.replaceWith(next);
      hydrateIcons(next);
    }
    return;
  }
  if (b.dataset.close) {
    $(b.dataset.close)?.close();
    return;
  }
  if (b.dataset.category) {
    navigate("", b.dataset.category);
    return;
  }
  if (b.dataset.page) {
    navigate(b.dataset.page);
    return;
  }
  if (b.dataset.search) {
    mainQuery = b.dataset.search;
    $("mainSearch").value = mainQuery;
    kindFilter = "all";
    if (page === "home") {
      updateHomeSearchVisual();
      $("clearSearch").hidden = false;
    } else render();
    $("mainSearch").focus();
    return;
  }
  if (b.dataset.filter) {
    kindFilter = b.dataset.filter;
    render();
    return;
  }
  if (b.dataset.paletteIndex !== undefined) {
    choosePalette(Number(b.dataset.paletteIndex));
    return;
  }
  const action = b.dataset.action,
    key = b.dataset.key,
    e = ENTRY_MAP.get(key);
  if (action === "favorite") {
    toggleFlag("favorites", key);
    return;
  }
  if (action === "pin") {
    toggleFlag("pins", key);
    return;
  }
  if (action === "reveal" && e) {
    showDanger(e);
    return;
  }
  if (action === "confirm-reveal" && e) {
    revealed.add(key);
    $("dangerDialog").innerHTML =
      `<div class="dialog-head"><div><h2 id="dangerTitle">${escapeHTML(e.title)}</h2><p>Confirme o alvo no terminal antes de executar.</p></div><button class="icon-btn" data-close="dangerDialog" aria-label="Fechar">${icon("close")}</button></div><div class="dialog-body"><p class="danger-note">${escapeHTML(e.warning)}</p>${badges(e)}<pre><code>${escapeHTML(commandCode(e))}</code></pre><button class="action danger" style="margin-top:16px" data-action="copy" data-key="${key}">${icon("copy")}Copiar comando revisado</button></div>`;
    render();
    if (currentRecipe && $("recipeDialog").open) renderRecipe(currentRecipe);
    return;
  }
  if (action === "copy-group") {
    const g = recipeGroups[Number(b.dataset.group)];
    if (g) copyText(g.keys.map((k) => commandCode(ENTRY_MAP.get(k))).join("\n"), g.keys, b);
    return;
  }
  if (["activate", "copy", "open", "recipe"].includes(action)) activate(key, b);
});
$("mainSearch").addEventListener("input", () => {
  mainQuery = $("mainSearch").value.trim();
  kindFilter = "all";
  if (page === "home") updateHomeSearchVisual();
  else render();
});
$("clearSearch").addEventListener("click", () => {
  mainQuery = "";
  $("mainSearch").value = "";
  kindFilter = "all";
  if (page === "home") {
    updateHomeSearchVisual();
    $("clearSearch").hidden = true;
  } else render();
  $("mainSearch").focus();
});
const heroOpenPaletteBtn = $("heroOpenPalette");
if (heroOpenPaletteBtn) heroOpenPaletteBtn.addEventListener("click", openPalette);
const heroOpenSettingsBtn = $("heroOpenSettings");
if (heroOpenSettingsBtn) heroOpenSettingsBtn.addEventListener("click", () => openSettings());
const spotlightOpenSettingsBtn = $("spotlightOpenSettings");
if (spotlightOpenSettingsBtn)
  spotlightOpenSettingsBtn.addEventListener("click", () => openSettings());
$("sidebarPaletteToggle").addEventListener("click", openPalette);
$("sidebarSettingsToggle").addEventListener("click", () => openSettings());
$("sidebarCompactToggle").addEventListener("click", () => {
  state.sidebarCompact = !state.sidebarCompact;
  persist();
  applySidebarState();
  renderNav();
  toast(state.sidebarCompact ? "Sidebar compacta" : "Sidebar expandida");
});
$("navigation").addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-nav-group]");
  if (!toggle) return;
  const id = toggle.dataset.navGroup,
    group = NAV_GROUPS.find((g) => g.id === id),
    wrap = toggle.closest(".nav-group");
  if (!group || !wrap || navGroupActive(group)) return;
  const willOpen = wrap.classList.contains("collapsed");
  state.navGroups[id] = willOpen;
  persist();
  wrap.classList.toggle("collapsed", !willOpen);
  toggle.setAttribute("aria-expanded", String(willOpen));
  setTimeout(() => syncActiveNavIndicator(false), 210);
});
$("navigation").addEventListener(
  "scroll",
  () => {
    syncActiveNavIndicator(false);
    updateNavScrollFade();
  },
  { passive: true },
);
$("sidebar").addEventListener("mouseover", (event) => {
  const el = event.target.closest("[data-sidebar-tip]");
  if (el) showNavTooltip(el);
});
$("sidebar").addEventListener("mouseout", (event) => {
  const el = event.target.closest("[data-sidebar-tip]");
  if (el && !el.contains(event.relatedTarget)) hideNavTooltip();
});
$("sidebar").addEventListener("focusin", (event) => {
  const el = event.target.closest("[data-sidebar-tip]");
  if (el) showNavTooltip(el);
});
$("sidebar").addEventListener("focusout", (event) => {
  const el = event.target.closest("[data-sidebar-tip]");
  if (el) hideNavTooltip();
});
$("paletteToggle").addEventListener("click", openPalette);
$("closePalette").addEventListener("click", () => $("palette").close());
$("paletteSearch").addEventListener("input", () => {
  paletteIndex = 0;
  renderPalette();
});
$("paletteSearch").addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    if (paletteItems.length) {
      paletteIndex =
        (paletteIndex + (e.key === "ArrowDown" ? 1 : -1) + paletteItems.length) %
        paletteItems.length;
      renderPalette();
      $("palette-result-" + paletteIndex)?.scrollIntoView({ block: "nearest" });
    }
  }
  if (e.key === "Enter") {
    e.preventDefault();
    choosePalette(paletteIndex);
  }
});
document.addEventListener("keydown", (e) => {
  if (e.altKey && !e.ctrlKey && !e.metaKey && ["1", "2", "3"].includes(e.key) && page === "home") {
    e.preventDefault();
    openHomePanel(["vps", "docker", "n8n"][Number(e.key) - 1]);
    return;
  }
  if (
    e.key === "/" &&
    !e.ctrlKey &&
    !e.metaKey &&
    !e.altKey &&
    !document.querySelector("dialog[open]") &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)
  ) {
    e.preventDefault();
    if (page === "home") $("mainSearch").focus();
    else openPalette();
  }
  if (e.key === "Tab" && innerWidth <= 900 && $("sidebar").classList.contains("open")) {
    const controls = [...$("sidebar").querySelectorAll("button")];
    const first = controls[0],
      last = controls[controls.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if ($("palette").open) $("palette").close();
    else if (!document.querySelector("dialog[open]")) openPalette();
  }
  if (e.key === "Escape" && activeHomeNode) {
    closeHomePanel();
    return;
  }
  if (e.key === "Escape" && $("sidebar").classList.contains("open")) {
    closeDrawer();
    $("menuToggle").focus();
  }
});
$("menuToggle").addEventListener("click", () => {
  const open = $("sidebar").classList.toggle("open");
  $("drawerBackdrop").hidden = !open;
  $("menuToggle").setAttribute("aria-expanded", String(open));
  syncDrawerAccessibility();
  if (open) $("navigation").querySelector("button")?.focus();
});
$("drawerBackdrop").addEventListener("click", closeDrawer);
$("closeDrawer").addEventListener("click", () => {
  closeDrawer();
  $("menuToggle").focus();
});
$("themeToggle").addEventListener("click", () => {
  state.theme = { dark: "light", light: "auto", auto: "dark" }[state.theme];
  setTheme();
  persist();
});
matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
  if (state.theme === "auto") setTheme();
});
$("modeToggle").addEventListener("click", () => {
  state.mode = state.mode === "share" ? "personal" : "share";
  revealed.clear();
  setMode();
  persist();
  render();
  toast(
    state.mode === "personal"
      ? "Modo pessoal: seus ajustes locais"
      : "Modo compartilhável: placeholders ativos",
  );
});
$("settingsToggle").addEventListener("click", () => openSettings());
$("settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const next = {};
  CONFIG_FIELDS.forEach((f) => {
    next[f.key] = $("config-" + f.key).value.trim();
  });
  try {
    validatePersonal(next);
    state.personal = next;
    state.homeMotion = $("prefHomeMotion")?.value || "normal";
    state.homeParticles = $("prefHomeParticles")?.value !== "0";
    state.homeRecents = $("prefHomeRecents")?.value !== "0";
    state.showcase = $("prefShowcase")?.value === "1";
    state.mode = "personal";
    persist();
    setMode();
    applyHomePrefs();
    revealed.clear();
    render();
    if (currentRecipe && $("recipeDialog").open) renderRecipe(currentRecipe);
    if (helpEntry && $("helpDialog").open) renderHelp();
    $("settingsDialog").close();
    toast("Configurações salvas · modo pessoal ativo");
  } catch (error) {
    $("settingsError").textContent = error.message;
    $("settingsError").hidden = false;
  }
});
$("resetPersonal").addEventListener("click", () => {
  state.personal = { ...PERSONAL_CONFIG };
  state.mode = "share";
  persist();
  setMode();
  render();
  openSettings();
  toast("Placeholders restaurados");
});
$("exportFavorites").addEventListener("click", () => {
  downloadText(
    JSON.stringify(
      { format: "michael-devhub", version: 1, favorites: state.favorites, pins: state.pins },
      null,
      2,
    ),
    "mike-devhub-favoritos.json",
    "application/json",
  );
  toast("Favoritos exportados; dados pessoais ficam no navegador");
});
$("importFavorites").addEventListener("click", () => $("importFile").click());
$("importFile").addEventListener("change", async () => {
  const file = $("importFile").files[0];
  if (!file) return;
  try {
    if (file.size > 100000) throw Error("Arquivo grande demais.");
    const value = JSON.parse(await file.text());
    if (
      value.format !== "michael-devhub" ||
      value.version !== 1 ||
      !Array.isArray(value.favorites) ||
      !Array.isArray(value.pins)
    )
      throw Error("Formato de favoritos inválido.");
    state.favorites = [...new Set([...state.favorites, ...validKeys(value.favorites)])];
    state.pins = [...new Set([...state.pins, ...validKeys(value.pins)])];
    persist();
    render();
    toast("Favoritos e fixados importados");
  } catch (error) {
    $("settingsError").textContent = "Não foi possível importar: " + error.message;
    $("settingsError").hidden = false;
  }
  $("importFile").value = "";
});
function buildStandaloneDevHub(template, stylesheet, script) {
  // Evita encerrar a tag ao encontrar markup dentro de strings JavaScript.
  const safeScript = script.replace(/<\/script/gi, "<\\/script");
  return template
    .replace('<link rel="stylesheet" href="devhub.css">', () => `<style>${stylesheet}</style>`)
    .replace('<link rel="stylesheet" href="devhub.css" />', () => `<style>${stylesheet}</style>`)
    .replace('<script src="devhub.js"></script>', () => `<script>${safeScript}</script>`);
}

$("downloadHtml").addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const resources = await Promise.all([fetch("devhub.css"), fetch("devhub.js")]);
    if (resources.some((response) => !response.ok)) {
      throw new Error("Recursos indisponíveis");
    }
    const [stylesheet, script] = await Promise.all(resources.map((response) => response.text()));
    const html = buildStandaloneDevHub(SHAREABLE_HTML, stylesheet, script);
    downloadText(html, "mike-devhub.html", "text/html;charset=utf-8");
    toast("HTML único baixado com configurações compartilháveis");
  } catch (_) {
    toast("Não foi possível baixar. Abra o DevHub por um servidor HTTP e tente novamente.");
  }
});
$("manualCopied").addEventListener("click", () => {
  if (manualPending) {
    manualPending.keys.forEach(noteRecent);
    copyFeedback(manualPending.button);
    manualPending = null;
    refreshHomeLists();
  }
  $("manualCopyDialog").close();
  toast("Comando marcado nos recentes");
});
$("recipeDialog").addEventListener("close", () => {
  currentRecipe = null;
  recipeGroups = [];
});
for (const dialog of document.querySelectorAll("dialog"))
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        dialog.close();
    }
  });

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.helpKey) {
    openHelp(button.dataset.helpKey, button.dataset.helpTab);
    return;
  }
  if (button.dataset.helpSelect) {
    helpTab = button.dataset.helpSelect;
    renderHelp();
    $("help-tab-" + helpTab)?.focus();
    return;
  }
  if (button.dataset.keyTask) {
    keyTask = button.dataset.keyTask;
    renderHelp();
    $("key-task-" + keyTask)?.focus();
    return;
  }
  if (button.dataset.settingsFocus) {
    openSettings(button.dataset.settingsFocus);
    return;
  }
  if (button.dataset.awsStep) {
    const id = button.dataset.awsStep;
    document.querySelectorAll("[data-aws-step]").forEach((b) => {
      b.setAttribute("aria-selected", String(b === button));
      b.tabIndex = b === button ? 0 : -1;
    });
    $("aws-map-panel").innerHTML = awsStepContent(id);
    $("aws-map-panel").setAttribute("aria-labelledby", "aws-step-" + id);
    return;
  }
  if (button.dataset.commandContext) {
    document.querySelectorAll("[data-command-context]").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    $("commandIndexResults").innerHTML = commandIndexHtml(button.dataset.commandContext);
    return;
  }
});
$("settingsFields").addEventListener("input", (e) => {
  if (
    ["config-sshUser", "config-vpsIp", "config-pemFile", "config-keyPairName"].includes(e.target.id)
  )
    settingsPreview();
});
$("helpDialog").addEventListener("keydown", (e) => {
  const tab = e.target.closest("[role=tab]");
  if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
  e.preventDefault();
  const list = [...tab.parentElement.querySelectorAll("[role=tab]")],
    i = list.indexOf(tab),
    next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? list.length - 1
          : (i + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length;
  list[next].click();
});
$("view").addEventListener("keydown", (e) => {
  const tab = e.target.closest("[data-aws-step]");
  if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
  e.preventDefault();
  const list = [...tab.parentElement.querySelectorAll("[role=tab]")],
    i = list.indexOf(tab),
    next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? list.length - 1
          : (i + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length;
  list[next].focus();
  list[next].click();
});
matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", () => {
  applyHomePrefs();
  render();
});

try {
  validatePersonal(state.personal);
} catch {
  state.personal = { ...PERSONAL_CONFIG };
  state.mode = "share";
}
hydrateIcons();
setTheme();
setMode();
applyHomePrefs();
applySidebarState();
$("storageAlert").hidden = storageOK;
const LEGACY_CATEGORIES = {
  powershell: "PowerShell",
  ssh: "SSH",
  git: "Git",
  docker: "Docker",
  compose: "Docker Compose",
  linux: "Linux",
  n8n: "n8n",
  containers: "n8n",
  postgres: "PostgreSQL",
  python: "Python",
  fastapi: "FastAPI",
  caddy: "Caddy",
  deploy: "Deploy",
  aws: "AWS",
  dashboard: "Dashboard",
};
function routeFromHash() {
  const hash = location.hash.slice(1);
  if (LEGACY_CATEGORIES[hash]) {
    page = "category";
    state.category = LEGACY_CATEGORIES[hash];
  } else if (hash.startsWith("cat=")) {
    try {
      const cat = decodeURIComponent(hash.slice(4));
      if (CATEGORY_NAMES.includes(cat)) {
        page = "category";
        state.category = cat;
      } else page = "home";
    } catch {
      page = "home";
    }
  } else
    page = ["home", "links", "commands", "recipes", "favorites", "recents", "glossary"].includes(
      hash,
    )
      ? hash
      : "home";
  render();
}
page = "home";
mainQuery = "";
try {
  history.replaceState(null, "", "#home");
} catch {}
render();
syncDrawerAccessibility();
window.addEventListener("hashchange", () => {
  mainQuery = "";
  $("mainSearch").value = "";
  routeFromHash();
  closeDrawer();
});
window.addEventListener("resize", () => {
  if (innerWidth > 900) closeDrawer();
  else syncDrawerAccessibility();
  hideNavTooltip();
  requestAnimationFrame(() => syncActiveNavIndicator(false));
});
