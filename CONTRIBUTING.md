# Guia de contribuição — Protótipo FieldOps

Como criar uma tela nova do painel sem quebrar o padrão visual do projeto.

## O padrão existe e é a fonte de verdade

O `app/dashboard.html` é a referência de layout. Toda tela nova copia **dois blocos** dele:

1. **Sidebar** (menu lateral) — bloco `<aside class="sidebar">...</aside>`
2. **Topbar** (busca, unidade, perfil) — bloco `<header class="topbar">...</header>`

Nunca monte um menu do zero. Nunca invente ícone ou ordem de item.

## Receita: tela nova em 4 passos

1. Copie o `dashboard.html` inteiro como ponto de partida
2. Troque:
   - `<title>FieldOps | Nome da Tela</title>`
   - breadcrumb (`<div class="breadcrumb-custom">`)
   - título e subtítulo da página (`<h1>` / `<p>` dentro de `page-header`)
   - item do menu: no link da sua tela, troque `class="nav-item"` por `class="nav-item active"`
3. Substitua o conteúdo de `<main class="dashboard">` pelo conteúdo da sua tela
4. Apague tudo que não usar (KPIs, tabelas de exemplo do dashboard)

## Regras de menu (fixas)

| Item | Destino |
|---|---|
| Visão geral | `dashboard.html` |
| Inspeções | `acompanhamento.html` |
| Agenda | `planejamento.html` |
| Modelos | `modelos.html` |
| Equipamentos | `equipamentos.html` |
| Clientes | `clientes.html` |
| Locais | `locais.html` |
| Não conformidades | `#` (sem tela ainda) |
| Histórico | `#` (sem tela ainda) |
| Usuários | `#` (sem tela ainda) |

- Item sem tela ainda = `href="#"`. Não aponte pra arquivo que não existe (dá 404)
- Badges (`14` inspeções, `3` NCs) são parte do padrão, mantenha
- Rodapé da sidebar (`v4.8.2-PROD / SEC-OK`) também

## Estilo de código (iguar ao dashboard)

- Indentação de 4 espaços, HTML quebrado em linhas curtas
- Comentários de seção no formato `<!-- ================= NOME ================= -->`
- Classes CSS: use as classes existentes no `dashboard.css` (`dashboard-card`, `operational-table`, `status-badge`, `page-header`, `kpi-card`, etc.). Só crie CSS novo se o `dashboard.css` não tiver o componente
- CSS novo (se inevitável) vai no `app/css/` com nome da tela

## Status visuais (badges)

Use a classe `status-badge` com uma das variações:

| Status da inspeção | Classe |
|---|---|
| Planejada | `status-badge pending` |
| Em andamento | `status-badge running` |
| Aguardando revisão | `status-badge pending` |
| Aprovada | `status-badge completed` |
| Reprovada | `status-badge stopped` |
| Cancelada | `status-badge stopped` |

## Restrições do enunciado (importante)

- Só HTML5 + CSS3 + Bootstrap 5 + Bootstrap Icons
- **Sem JavaScript próprio** — telas novas não incluem `js/*.js`. O único script permitido é o bundle do Bootstrap:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

- Dados fictícios direto no HTML (tabelas, cards, formulários estáticos)
- Sem backend, banco, API, login real

## Fluxo de trabalho (branch + PR)

1. Crie sua branch a partir da `dev`: `git checkout dev && git pull && git checkout -b feat/tela-<nome>`
2. Commit com nome descritivo e seu usuário configurado (`git config user.name / user.email`)
3. Push e abra o **Pull Request para `dev`** (não faça merge direto)
4. Outro integrante revisa e aprova; depois faça o merge

## Antes do PR, cheque

- [ ] Menu idêntico ao dashboard (10 itens, mesmos hrefs, só o ativo muda)
- [ ] Title, breadcrumb e h1 da tela preenchidos
- [ ] Nenhum `<script src="js/...">` além do bundle do Bootstrap
- [ ] Links do menu não apontam pra arquivo inexistente
- [ ] Testou a página no navegador (desktop e largura mobile)
