# 🚀 Guia Completo: GitHub + Vercel Deployment

## PASSO 1: Criar Repositório no GitHub

### 1.1 Acesse github.com
- Faça login na sua conta GitHub
- Clique no "+" no topo direito → "New repository"

### 1.2 Configure o repositório
- **Repository name:** `stocksync`
- **Description:** `Sistema de Gestão de Estoque com Sincronização em Tempo Real`
- **Visibility:** Public (para Vercel detectar automaticamente)
- **Não marque** "Initialize this repository with"
- Clique em **Create repository**

## PASSO 2: Fazer Push do Projeto para GitHub

No terminal (na pasta do projeto):

```bash
# Adicionar o repositório remoto (copie a URL do seu repositório)
git remote add origin https://github.com/SEU_USUARIO/stocksync.git

# Renomear branch para main (opcional, mas recomendado)
git branch -M main

# Fazer push do código
git push -u origin main
```

**Resultado esperado:**
- Todo o código será enviado para GitHub
- Você verá a mensagem: `Branch 'main' set up to track 'origin/main'.`

## PASSO 3: Fazer Deploy no Vercel

### 3.1 Acesse Vercel
- Vá para [vercel.com](https://vercel.com)
- Clique em **Sign Up** → **Continue with GitHub**
- Autorize Vercel a acessar seus repositórios GitHub

### 3.2 Importar Projeto
- Clique em **Add New...** → **Project**
- Encontre o repositório `stocksync` na lista
- Clique em **Import**

### 3.3 Configurar Build Settings
Vercel detectará automaticamente:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

**Adicione Environment Variables (se necessário):**
- Neste projeto, não há variáveis secretas obrigatórias
- Mas você pode adicionar:
  - `NODE_ENV` = `production`

Clique em **Deploy**

### 3.4 Aguarde o Build
- O Vercel fará:
  1. Clone do repositório
  2. Instalação de dependências
  3. Build do projeto Next.js
  4. Deploy automático
- Isso leva cerca de 2-3 minutos

## PASSO 4: Pronto! 🎉

Após o build completar:
- Você receberá uma **URL pública** tipo: `https://stocksync.vercel.app`
- O projeto está **live e acessível**
- Qualquer push para a branch `main` fará redeploy automático

## CREDENCIAIS DE TESTE

Use estas credenciais para testar no deploy:

```
Email: demo@empresa.com
Senha: 123456

OU

Email: admin@empresa.com
Senha: admin123
```

## PASSO 5: Configurações Pós-Deploy (Opcional)

### Adicionar Domínio Customizado
1. No dashboard Vercel, vá para **Settings** → **Domains**
2. Adicione seu domínio (ex: stocksync.com.br)
3. Siga as instruções de DNS

### Analytics
- Vercel oferece analytics grátis
- Dashboard → **Analytics** para ver performance

### Environment Variables em Produção
- Se precisar adicionar variáveis de ambiente
- Vá em **Settings** → **Environment Variables**
- Faça push de novo para redeployer

## COMANDOS ÚTEIS

```bash
# Ver histórico de commits
git log --oneline

# Fazer novo commit após mudanças
git add .
git commit -m "Descrição da mudança"
git push

# Verificar status
git status

# Sincronizar com repositório remoto
git pull origin main
```

## TROUBLESHOOTING

### Build falha com erro de TypeScript
- Verifique se há `tsconfig.json` correto
- Use: `npm run build` localmente para testar

### Páginas retornam 404
- Middleware de autenticação pode estar bloqueando
- Verifique `middleware.ts`

### Problemas de CORS
- Ajuste as configurações em `next.config.ts`

## RECURSOS

- [Documentação Vercel + Next.js](https://vercel.com/docs/frameworks/nextjs)
- [GitHub Actions para CI/CD](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
