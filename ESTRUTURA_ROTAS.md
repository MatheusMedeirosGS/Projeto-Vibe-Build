# Estrutura de Rotas Next.js - StockSync

## 📂 Arquitetura do App Router

```
app/
├── layout.tsx                  # Root Layout (HTML base)
├── page.tsx                    # / - Home/Landing Page
├── login/
│   └── page.tsx               # /login - Login Page
├── dashboard/
│   └── page.tsx               # /dashboard - Dashboard Page
├── api/
│   └── login/
│       └── route.ts           # /api/login - POST endpoint
├── globals.css                # Estilos globais
└── favicon.ico                # Favicon
```

## 🛣️ Mapa Completo de Rotas

### Rotas Renderizadas (Page Routes)

| Rota | Tipo | Arquivo | 'use client' | Autenticação | Status |
|------|------|---------|-------------|--------------|--------|
| `/` | Pública | `app/page.tsx` | ❌ (SSR) | ❌ Não | ✅ Ativo |
| `/login` | Pública | `app/login/page.tsx` | ✅ (Client) | ❌ Não | ✅ Ativo |
| `/dashboard` | Protegida | `app/dashboard/page.tsx` | ✅ (Client) | ✅ Requerida | ✅ Ativo |
| `/inventory` | Protegida | (Não criado) | - | ✅ Requerida | 🔲 TODO |
| `/sync` | Protegida | (Não criado) | - | ✅ Requerida | 🔲 TODO |
| `/reports` | Protegida | (Não criado) | - | ✅ Requerida | 🔲 TODO |
| `/settings` | Protegida | (Não criado) | - | ✅ Requerida | 🔲 TODO |

### API Routes (Route Handlers)

| Rota | Método | Arquivo | Autenticação | Status |
|------|--------|---------|--------------|--------|
| `/api/login` | POST | `app/api/login/route.ts` | ❌ Não | ✅ Ativo |

## 📋 Detalhes de Cada Rota

### 1. **`/` (Home)**
- **Arquivo:** `app/page.tsx`
- **Tipo:** Server Component
- **Descrição:** Landing page inicial com apresentação do StockSync
- **Componentes:** Link para `/login`
- **Autenticação:** Não requerida
- **Status:** ✅ Implementado

### 2. **`/login` (Login)**
- **Arquivo:** `app/login/page.tsx`
- **Tipo:** Client Component (`'use client'`)
- **Descrição:** Tela de autenticação com split layout (branding left, form right)
- **Features:**
  - Validação de email e senha
  - Estado de loading durante requisição
  - Exibição de erros
  - Checkbox "Lembrar-me"
  - Link "Esqueceu senha?" (decorativo)
  - Link "Crie uma conta agora" (decorativo)
- **Autenticação:** Não requerida (qualquer um pode acessar)
- **Status:** ✅ Implementado com API integration

### 3. **`/dashboard` (Dashboard)**
- **Arquivo:** `app/dashboard/page.tsx`
- **Tipo:** Client Component (`'use client'`)
- **Descrição:** Painel principal com KPIs, alertas e gráficos
- **Features:**
  - Layout com Sidebar + Header
  - 4 KPI Cards (Total SKUs, Produtos Críticos, Em Estoque, Zerados)
  - Widget de alerta
  - Gráfico de tendência (7 dias)
  - Botão "Repor Agora"
- **Autenticação:** Requerida (protegida por middleware)
- **Status:** ✅ Implementado

### 4. **`/api/login` (POST)**
- **Arquivo:** `app/api/login/route.ts`
- **Tipo:** Route Handler
- **Método:** POST
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string",
    "remember": "boolean"
  }
  ```
- **Response Success (200):**
  ```json
  {
    "success": true,
    "user": {
      "email": "demo@empresa.com",
      "name": "João Silva"
    }
  }
  ```
- **Response Error (401):**
  ```json
  {
    "error": "Credenciais inválidas"
  }
  ```
- **Cookies:** Define `user` cookie com JSON do usuário
- **Autenticação:** Não requerida para chamar (endpoint público)
- **Status:** ✅ Implementado

## 🔐 Proteção de Rotas

### Middleware (`middleware.ts`)
- Verifica cookie `user` em rotas protegidas
- Redireciona para `/login` se não autenticado
- Rotas públicas: `/`, `/login`, `/api/login`
- Padrão de matcher: `/((?!_next/static|_next/image|favicon.ico).*)`

## 🎯 Fluxo de Navegação

```
┌─────────────┐
│   Home (/)  │
└──────┬──────┘
       │ Click "Acessar Sistema"
       ▼
┌──────────────┐
│  Login (/login) │
└──────┬──────────┘
       │ Submit form
       ▼
┌──────────────────┐
│ /api/login POST  │
└──────┬───────────┘
       │ Validar credenciais
       ├─ Sucesso (200)
       │   └─ Redirecionar
       │      para /dashboard
       │
       └─ Erro (401)
           └─ Exibir mensagem
              de erro

┌────────────────────┐
│ Dashboard(/dashboard) │
└──────┬──────────────┘
       │ Click Logout
       ▼
       ├─ Deletar cookie
       └─ Redirecionar
          para /login
```

## 📝 Componentes Utilizados

### `Layout` (para `/dashboard`)
- Localizado em: `components/Layout.tsx`
- Props: `children`, `currentPage`, `userName`
- Features:
  - Sidebar com menu de navegação
  - Header com breadcrumb e user info
  - Logout button
  - Responsive design

### `Button` (para formulários e ações)
- Localizado em: `components/Button.tsx`
- Props: `variant`, `size`, `loading`, `fullWidth`, `onClick`

### `Input` (para formulários)
- Localizado em: `components/Input.tsx`
- Props: `label`, `type`, `name`, `value`, `onChange`, `placeholder`, `error`

## 🚀 Como Adicionar Novas Rotas

### 1. Nova Página Pública
```bash
mkdir -p app/nova-pagina
# Criar app/nova-pagina/page.tsx
```

### 2. Nova Página Protegida
```bash
mkdir -p app/nova-pagina-protegida
# Criar app/nova-pagina-protegida/page.tsx
# (Middleware automaticamente a protege)
```

### 3. Novo Endpoint API
```bash
mkdir -p app/api/novo-endpoint
# Criar app/api/novo-endpoint/route.ts
```

## ⚠️ Notas Importantes

1. **Rotas dinâmicas não implementadas** - Não há slugs dinâmicos (`[id]`, etc.)
2. **Apenas RSC e Client Components** - Sem Pages Router legado
3. **Sem grupos de rotas** - Estrutura plana
4. **Middleware simples** - Sem lógica complexa de autorização
5. **Sem cache estratégico** - Todos os dados carregam em tempo real

## 📊 Resumo de Rotas

- **Total de rotas de página:** 4 (implementadas) + 4 (planejadas)
- **Total de API routes:** 1
- **Rotas públicas:** 3
- **Rotas protegidas:** 4
- **Middleware ativo:** ✅ Sim
