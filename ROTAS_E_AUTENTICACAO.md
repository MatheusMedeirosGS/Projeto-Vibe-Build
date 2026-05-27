# Rotas e Autenticação - StockSync

## 🔐 Credenciais de Teste

### Usuário Demo
- **Email:** `demo@empresa.com`
- **Senha:** `123456`

### Usuário Admin
- **Email:** `admin@empresa.com`
- **Senha:** `admin123`

---

## 📍 Rotas da Aplicação

### Rotas Públicas (Sem Autenticação)
| Rota | Descrição | Arquivo |
|------|-----------|---------|
| `/` | Home - Landing page com botão "Acessar Sistema" | `app/page.tsx` |
| `/login` | Página de login | `app/login/page.tsx` |
| `/api/login` | Endpoint POST para autenticação | `app/api/login/route.ts` |

### Rotas Protegidas (Requer Autenticação)
| Rota | Descrição | Arquivo | Status |
|------|-----------|---------|--------|
| `/dashboard` | Dashboard principal com KPIs | `app/dashboard/page.tsx` | ✅ Implementado |
| `/inventory` | Gestão de Inventário | (Não criado) | 🔲 TODO |
| `/sync` | Sincronização | (Não criado) | 🔲 TODO |
| `/reports` | Relatórios | (Não criado) | 🔲 TODO |
| `/settings` | Configurações | (Não criado) | 🔲 TODO |

---

## 🔒 Sistema de Autenticação

### Fluxo de Login
1. Usuário preenche email e senha em `/login`
2. Formulário envia POST para `/api/login`
3. API valida credenciais contra lista hardcoded
4. Se válido:
   - Cria cookie `user` com JSON: `{ email, name }`
   - Retorna sucesso (status 200)
   - Cliente redireciona para `/dashboard`
5. Se inválido:
   - Retorna erro (status 401)
   - Mensagem de erro exibida no formulário

### Middleware de Proteção
- Arquivo: `middleware.ts`
- Verifica cookie `user` em todas as rotas protegidas
- Se não autenticado: redireciona para `/login`

### Fluxo de Logout
1. Usuário clica botão "Logout" na sidebar
2. Cookie `user` é deletado
3. Redireciona para `/login`

---

## 📦 Componentes Utilizados

| Componente | Localização | Descrição |
|------------|------------|-----------|
| `Layout` | `components/Layout.tsx` | Sidebar + Header para telas autenticadas |
| `Button` | `components/Button.tsx` | Componente de botão reutilizável |
| `Input` | `components/Input.tsx` | Campo de input com label e validação |
| `Card` | `components/Card.tsx` | Card para exibição de conteúdo |

---

## 🎨 Design Tokens

Localização: `lib/design-tokens.ts`
- **Cores**: Primary (#8B6F47), Secondary (#C9B8A3), etc.
- **Tipografia**: H1, H2, Body, Label, Caption
- **Espaçamento**: Padrão em múltiplos de 8px
- **Componentes**: Configurações de sidebar, header, etc.

---

## 🌐 Como Testar

### 1. Navegar para Home
```
http://localhost:3000/
```

### 2. Clicar em "Acessar Sistema"
Redireciona para `/login`

### 3. Fazer Login
- Email: `demo@empresa.com`
- Senha: `123456`
- Clica "Fazer Login"

### 4. Ver Dashboard
- Dashboard carrega com dados de KPI
- Header mostra "João Silva" (nome do usuário)
- Avatar com iniciais "JS"

### 5. Fazer Logout
- Clica botão vermelho "Logout" na sidebar
- Redireciona para `/login`
- Cookie é deletado

---

## 🚀 Próximos Passos

- [ ] Criar páginas: Inventory, Sync, Reports, Settings
- [ ] Implementar backend real com banco de dados
- [ ] Adicionar validações mais robustas
- [ ] Implementar reset de senha
- [ ] Implementar registro de usuários
- [ ] Adicionar refresh token para sessões
- [ ] Implementar CSRF protection

---

## ⚠️ Notas de Desenvolvimento

- Credenciais estão hardcoded em `app/api/login/route.ts` (APENAS PARA DEMO)
- Cookies são armazenados em texto plano (APENAS PARA DEMO)
- Sem criptografia de senha (APENAS PARA DEMO)
- Em produção, usar banco de dados + JWT/OAuth + HTTPS
