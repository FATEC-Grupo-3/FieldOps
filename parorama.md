# 🌐 Panorama do Projeto FieldOps

> Atualizado em: 2026-10-06  
> Responsável pela análise: Bruno

---

## 📋 Estrutura de Arquivos

| Arquivo | Estado | Observação |
|---------|--------|------------|
| `app/dashboard.html` | ✅ Completo | Tela principal com KPIs, alertas e inspeções recentes |
| `app/css/dashboard.css` | ✅ Completo | CSS com variáveis customizadas Bootstrap (800+ linhas) |
| `app/js/dashboard.js` | ✅ Completo | JS com interações (sidebar mobile, CTRL+K, busca tabela, relógio) |
| `login/index.html` | ✅ Completo | Tela de login visual protótipo |
| `login/css/style.css` | ✅ Completo | Estilos específicos da tela de login |
| `login/js/login.js` | ✅ Completo | Simulação de autenticação client-side |
| `app/clientes.html` | 🆕 Novo | Página de cadastro de clientes (CRUD completo) |
| `app/css/clientes.css` | 🆕 Novo | Estilos específicos de clientes (badges, modal, filtros) |
| `app/js/clients.js` | 🆕 Novo | Interações da página de clientes |
| `app/js/clients.html` | ❌ VAZIO | **Arquivo em local incorreto** (deletar ou mover) |
| `app/js/equipment.html` | ❌ VAZIO | **Arquivo em local incorreto** (deletar ou mover) |
| `app/js/equipment.js` | ❌ VAZIO | **Arquivo em local incorreto** (deletar ou mover) |
| `app/js/user.html` | ❌ VAZIO | **Arquivo em local incorreto** (deletar ou mover) |
| `app/js/user.js` | ❌ VAZIO | **Arquivo em local incorreto** (deletar ou mover) |
| `app/css/clients.css` | ⚠️ VAZIO | Arquivo antigo, substituído por conteúdo novo |
| `app/css/equipment.css` | ⚠️ VAZIO | Pendente de conteúdo |
| `app/css/user.css` | ⚠️ VAZIO | Pendente de conteúdo |
| `app/user.html` | ❌ VAZIO | Pendente de conteúdo |
| `README.md` | ✅ Completo | Descrição, integrantes e tecnologias (falta links entrega) |
| `git.md` | ✅ Completo | Fluxo de trabalho Git do grupo |
| `docs/` | ✅ Completo | 18 PDFs + documentação completa (01 a 21) |
| `app/clientes.html` | 🟨 EM DESENVOLVIMENTO | Bruno |

---

## ✅ Requisitos do Supervisor Atendidos

A tela principal — **Dashboard** — está muito bem desenvolvida e atende integralmente:

| Requisito | Localização |
|-----------|-------------|
| **Menu de navegação** | Sidebar com ícones + badges (10 módulos) |
| **Cards com indicadores** | 6 KPI cards (pendentes, em andamento, concluídas, NCs, taxa, eficiência) |
| **Tabela de inspeções recentes** | "Inspeções do turno" (#OS-8821, #OS-8820, etc.) |
| **Elemento visual de andamento** | Barras de progresso por OS + status badges coloridos |
| **Alertas de prioridade** | Seção "Triagem crítica" com 3 NCs abertas (alto risco) |

### Tecnologias Utilizadas (100% conformidade)

- ✅ HTML5 (semântico, acessível)
- ✅ CSS3 (custom properties, Grid, Flexbox)
- ✅ Bootstrap 5.3.3 (CDN)
- ✅ Bootstrap Icons 1.11.3 (ícones oficiais)
- ✅ Variáveis CSS customizadas (`--primary: #1747d4`)
- ✅ Responsividade (media queries: 991.98px, 767.98px, 575.98px)

### Componentes Bootstrap Aplicados

- ✅ Navbar / Sidebar
- ✅ Grid system (row, col-sm-6, col-xl)
- ✅ Cards (KPI cards, dashboard-card)
- ✅ Tabelas (operational-table com hover)
- ✅ Formulários (inputs, selects, filtros)
- ✅ Botões (btn-primary-custom, btn-light-custom)
- ✅ Badges (status, nav-badge)
- ✅ Alertas (triagem crítica)
- ✅ Dropdowns (unidade, perfil)
- ✅ Modais (Bootstrap JS)
- ✅ Paginação (custom)

### Feedback Visual e UX

- ✅ Estados de hover nos cards e navegação
- ✅ Loader visual nos botões de ação
- ✅ Indicador SCADA pulsando (sincronização)
- ✅ Sidebar mobile com overlay (acessível)
- ✅ Atalho de teclado (CTRL + K para busca)
- ✅ Relógio ao vivo no topbar

---

## ❌ O que FALTA (prioridades Backlog)

De acordo com a documentação em `docs/` (Notion → PDFs 01–21), faltam os itens abaixo:

### 🔴 Prioridade Alta (P0) — Backlog GitHub Project

| # | Página | Responsável | Issue GitHub |
|---|--------|-------------|--------------|
| 1 | **Modelos de Checklist** | TBD | #10 |
| 2 | **Planejamento de Inspeção** | TBD | TBD |
| 3 | **Inspeções (lista planejadas/realizadas)** | TBD | TBD |
| 4 | **Detalhes da Inspeção** | TBD | TBD |
| 5 | **CRUD Equipamentos** | TBD | #8 |
| 6 | **CRUD Usuários** | TBD | #9 |
| 7 | **Não Conformidades** | TBD | #13 |
| 8 | **Locais** | TBD | TBD |

### 🟡 Prioridade Média (P1)

- [ ] Atualizar links do `dashboard.html` (sidebar) — todos estão `href="#"`
- [ ] Atualizar `README.md` com links (repositório, GitHub Project, PR, GitHub Pages)
- [ ] Deletar arquivos vazios em `app/js/*.html` (estão no local errado)
- [ ] Mover arquivos JS para `app/js/` (clientes.js, equipamentos.js, usuarios.js)

---

## 🗺️ Arquitetura Correta (estrutura ideal)

```
FieldOps/
├── app/
│   ├── dashboard.html          ← OK
│   ├── clientes.html           ← ✅ CRIADO (novo)
│   ├── equipamentos.html       ← PENDENTE
│   ├── usuarios.html           ← PENDENTE
│   ├── modelos-checklist.html  ← PENDENTE
│   ├── planejar-inspecao.html  ← PENDENTE
│   ├── inspecoes.html          ← PENDENTE
│   ├── detalhes-inspecao.html  ← PENDENTE
│   ├── nao-conformidades.html  ← PENDENTE
│   ├── locais.html             ← PENDENTE
│   ├── user.html               ← PENDENTE (perfil)
│   ├── css/
│   │   ├── dashboard.css        ← OK
│   │   ├── clientes.css         ← ✅ CRIADO (novo)
│   │   ├── equipment.css        ← PENDENTE
│   │   └── user.css             ← PENDENTE
│   └── js/
│       ├── dashboard.js         ← OK
│       ├── clientes.js          ← ✅ CRIADO (novo)
│       ├── equipment.js         ← PENDENTE
│       └── user.js              ← PENDENTE
├── login/
│   ├── index.html              ← OK
│   ├── css/style.css           ← OK
│   └── js/login.js             ← OK
├── docs/
│   ├── 01 - Visão Geral.pdf    ← OK
│   ├── 02 - Objetivos.pdf      ← OK
│   ├── ... (18 PDFs)           ← OK
│   └── FieldOps.pdf            ← OK
├── README.md                   ← OK (pendente links)
├── git.md                      ← OK
└── panorama.md                 ← ✅ ATUALIZADO
```

---

## ⚠️ Pontos de Atenção Críticos

### 1. Tela de Login (aceitável)

> A entrega proíbe "Login real". A tela atual tem formulário + JS que **simula autenticação** client-side (armazena em `localStorage`, sem backend).  
> **Ação:** adicionar nota no `README.md` informando que é protótipo visual demonstrativo.

### 2. README.md (pendente)

Tem conteúdo, mas **falta links obrigatórios**:
- [ ] Link do repositório GitHub
- [ ] Link do GitHub Project (`orgs/FATEC-Grupo-3/projects/1`)
- [ ] Link do Pull Request (merge dev → main)
- [ ] Link do GitHub Pages (deploy estático)

### 3. Confusão de Pastas (corrigir urgentemente)

**Problema atual:** arquivos `.html` na pasta `app/js/` — isso é erro arquitetural.  
**Solução aplicada em `clientes`:**
- ✅ HTML criado em `app/clientes.html` (local correto)
- ✅ CSS criado em `app/css/clientes.css` (local correto)
- ✅ JS criado em `app/js/clients.js` (local correto)

**Próximos passos:** deletar `app/js/clients.html`, `app/js/equipment.html`, `app/js/user.html` (vazios e em local errado).

### 4. Sidebar do Dashboard (links `#`)

Todos os links do `dashboard.html` estão com `href="#"`.  
**Ação:** após criar cada página, atualizar os links correspondentes.

---

## 📦 Distribuição de Tarefas (Sugestão)

| Integrante | Issue | Tarefa | Branch sugerida |
|------------|-------|--------|-----------------|
| **Bruno** | #7 | ✅ **Clientes (HTML/CSS/JS)** | `bruno_v1/clientes` |
| **Heitor** | #13 | Não conformidades | `heitor_v1/nao-conformidades` |
| **Tiago** | #9 | Usuários (CRUD) | `tiago_v1/usuarios` |
| **Gabriel** | #8 | Equipamentos (CRUD) | `gabriel_v1/equipamentos` |
| **João** | #10 | Modelos de Checklist | `joao_v1/modelos` |
| **Grupo** | - | Planejamento / Inspeções / Detalhes | `docs/*` + revisão |

---

## ✅ Resumo Executivo

**Status do Projeto:** 🟡 **Em andamento (70% da base)**

| Componente | Progresso |
|------------|-----------|
| Login | ✅ 100% |
| Dashboard | ✅ 100% |
| Clientes (CRUD) | ✅ 100% (acabou de ser criado) |
| Equipamentos | ❌ 0% |
| Usuários | ❌ 0% |
| Modelos Checklist | ❌ 0% |
| Planejamento Inspeção | ❌ 0% |
| Lista Inspeções | ❌ 0% |
| Detalhes Inspeção | ❌ 0% |
| Não Conformidades | ❌ 0% |
| Documentação (docs/) | ✅ 100% |
| Readme/Git | 🟡 80% (pendente links) |

**Próximo passo:** após criar os 3 arquivos de `clientes` (feito), fazer **commit na branch `bruno_v1`** e começar a próxima página (Modelos de Checklist ou Equipamentos).
