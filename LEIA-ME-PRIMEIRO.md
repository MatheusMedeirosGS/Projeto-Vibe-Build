# 🚀 StockSync - Sistema de Gestão de Estoque

Bem-vindo ao **StockSync**! Este é um sistema moderno de gerenciamento de inventário com sincronização em tempo real entre múltiplos canais de venda.

## 📋 Conteúdo

### 📚 Documentação Principal

1. **`PITCH_APRESENTACAO_5MIN.md`** ⭐
   - Discurso pronto para apresentação
   - 5 minutos de conteúdo estruturado
   - Inclui timesheet e dicas de apresentação

2. **`GUIA_DEPLOY_GITHUB_VERCEL.md`** 🚀
   - Passo a passo: GitHub → Vercel
   - Instruções detalhadas para cada etapa
   - Troubleshooting incluído

3. **`README.md`**
   - Documentação técnica
   - Como rodar localmente
   - Estrutura do projeto

### 💻 Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
# Acesso: http://localhost:3000

# Build para produção
npm run build
npm run start
```

## 🔑 Credenciais de Teste

```
Email: demo@empresa.com
Senha: 123456

OU

Email: admin@empresa.com
Senha: admin123
```

## ⚡ Quick Start para Deploy

### 1️⃣ GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/stocksync.git
git branch -M main
git push -u origin main
```

### 2️⃣ Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Sign Up com GitHub
3. Clique "Add New Project"
4. Selecione `stocksync`
5. Clique "Deploy"
6. Pronto! ✅

**Seu site estará em: `https://stocksync.vercel.app`**

## 📊 Funcionalidades

✅ **Dashboard** - Visão geral do estoque em tempo real  
✅ **Inventário** - Gerenciamento completo de produtos  
✅ **Sincronização** - Multi-canal (Shopify, Mercado Livre, etc)  
✅ **Relatórios** - Análises e métricas de performance  
✅ **Configurações** - Personalização da empresa  
✅ **Autenticação** - Sistema seguro de login  

## 🎨 Design System

- **Cores**: Marrom terra (#8B6F47) + Bege (#F5F3F0)
- **Tipografia**: Georgia (headers) + Arial (body)
- **Componentes**: Button, Input, Card, Layout
- **Icons**: Font Awesome

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 + React + TypeScript
- **Styling**: CSS-in-JS (React.CSSProperties)
- **Auth**: Middleware + Cookies
- **Deployment**: Vercel
- **Design Tokens**: Centralizados em `lib/design-tokens.ts`

## 📁 Estrutura do Projeto

```
stocksync/
├── app/
│   ├── api/login/         # API de autenticação
│   ├── dashboard/         # Dashboard principal
│   ├── inventory/         # Gerenciamento de estoque
│   ├── sync/              # Sincronização de canais
│   ├── reports/           # Relatórios
│   ├── settings/          # Configurações
│   └── layout.tsx         # Layout global
├── components/            # Componentes reutilizáveis
├── lib/                   # Utilitários (design-tokens)
├── middleware.ts          # Proteção de rotas
├── next.config.ts         # Config Next.js
└── package.json           # Dependências
```

## 🔐 Segurança

- ✅ Autenticação com validação
- ✅ Middleware protege rotas autenticadas
- ✅ Cookies seguros
- ✅ TypeScript previne erros
- ✅ HTTPS por padrão no Vercel

## 📞 Suporte

- **Problemas com build?** Veja `GUIA_DEPLOY_GITHUB_VERCEL.md` → Troubleshooting
- **Quer customizar?** Código é open-source, sinta-se livre
- **Bug encontrado?** Abra uma issue no GitHub

## 🎯 Próximos Passos

1. ✅ **Repo Git**: Criar repositório no GitHub (veja guia)
2. ✅ **Deploy**: Conectar ao Vercel (5 minutos)
3. ✅ **Customizar**: Adicione suas features
4. ✅ **Expandir**: Integre com sua API/banco de dados

## 📈 Roadmap Futuro

- [ ] Integração com APIs reais (Shopify, Mercado Livre)
- [ ] Dashboard com mais gráficos
- [ ] Notificações por email
- [ ] Backup automático de dados
- [ ] Mobile app (React Native)
- [ ] Dark mode
- [ ] Suporte multi-idioma

## 📄 Licença

Código aberto para aprendizado e uso comercial.

---

**Boa sorte na apresentação! 🚀**

Para dúvidas sobre o pitch, veja: `PITCH_APRESENTACAO_5MIN.md`  
Para dúvidas sobre deploy, veja: `GUIA_DEPLOY_GITHUB_VERCEL.md`
