# 🚀 GUIA DE DEPLOY — STOCKSYNC

Como fazer deploy do projeto em produção.

---

## **Option 1: Vercel (Recomendado — 5 minutos)**

### Passo 1: Push para GitHub
```bash
cd /home/claude/stocksync
git init
git add .
git commit -m "Initial commit: StockSync MVP"
git branch -M main
git remote add origin https://github.com/SEU_USER/stocksync.git
git push -u origin main
```

### Passo 2: Deploy na Vercel
1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione seu repositório `stocksync`
4. Clique em "Deploy"
5. Pronto! Site ao vivo em `stocksync-[random].vercel.app`

---

## **Option 2: Railway (Alternativa — 10 minutos)**

### Passo 1: Criar conta
- Acesse https://railway.app
- Login com GitHub

### Passo 2: Novo projeto
1. Clique em "New Project"
2. Selecione "Deploy from GitHub repo"
3. Conecte seu repositório `stocksync`
4. Railway detecta Next.js automaticamente
5. Deploy automático!

---

## **Option 3: Docker + AWS/DigitalOcean (Manual)**

### Criar Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000
```

### Build e run localmente
```bash
docker build -t stocksync .
docker run -p 3000:3000 stocksync
```

### Deploy em DigitalOcean
1. Crie um droplet com Docker
2. SSH e clone seu repositório
3. Build: `docker build -t stocksync .`
4. Run: `docker run -d -p 80:3000 stocksync`

---

## **Verificações Antes de Deploy**

```bash
# Build production
npm run build

# Testar build
npm run start

# Verificar se não há erros
npm run type-check (se configurado)
```

---

## **Variáveis de Ambiente (se houver)**

Criar arquivo `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.stocksync.com
DATABASE_URL=postgresql://...
```

No Vercel/Railway, adicionar em "Settings" → "Environment Variables".

---

## **Performance Post-Deploy**

### Verificar
- Lighthouse Score (deveria ser > 80)
- Core Web Vitals
- SEO score

### Otimizar
- Ativar compression em Next.js
- Cache headers
- Image optimization (Next.js já faz)

---

**Status**: MVP pronto para produção ✅
