# Changelog

## Polimento visual do GitHub e superfícies públicas — 2026-10-10

- README ganhou apresentação visual, navegação curta e visão rápida do produto.
- Banner SVG foi redesenhado para refletir a identidade atual do SocialMEI: azul, amarelo e interface do produto, removendo referências antigas de Sprint/cyber visual.
- Metadados Open Graph/Twitter passaram a apontar para o banner visual atualizado.
- Landing removeu prova social e preços fictícios/pendentes; a seção comercial foi substituída por uma apresentação honesta da demonstração.
- Rodapé público deixou de exibir contatos, links legais e redes sociais inexistentes; agora mostra apenas destinos reais do projeto e o estado atual da demonstração.
- Mike DevHub preservou o conceito de cockpit, mas recebeu menos glow, menos ruído, paleta mais próxima do SocialMEI e nomenclatura mais direta em português.
- Nenhuma lógica de backend, n8n, WAHA, banco, CRUD ou contratos de armazenamento foi alterada nesta rodada.

## Revisão técnica — 2026-10-10

- Adotado o `socialmei-app.html` aprovado como fonte oficial; V3.14 duplicada substituída por entradas de compatibilidade.
- Separados scripts e CSS do frontend e do Mike DevHub, sem framework/build obrigatório.
- Extraídos ícone/fonte sem alterar seus bytes; preservada a licença Inter no HTML.
- Centralizada configuração pública em `frontend/config.js`; corrigidos canonical e imagens de compartilhamento para o endereço adotado pelo repositório.
- Consolidada a definição dos seis serviços Compose; corrigida indentação WAHA, removidas opções que desativavam autenticação e mantido bind localhost.
- Preservados schema, nomes de volumes, rotas e contratos JSON/localStorage; nomes internos Python e normalização n8n em inglês.
- Workflows de teste/experimento organizados; exports inativos sem credenciais de instância, dados fixados ou Authorization literal.
- Backup usa diretório configurável/volume real, inclui configuração do override e relata falha de restart.
- Atualizados guias, inventário, roadmap e CI; acrescentados testes de dados/temas/contratos/backup e regressão de navegador.
- Ajustado o comando de testes para compatibilidade com o Node 22 do CI após a primeira execução remota.

O histórico anterior permanece nos commits Git. Esta revisão não aplica alterações na VPS nem ativa workflows.
