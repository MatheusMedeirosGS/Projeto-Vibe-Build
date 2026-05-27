## 🚀 GUIA DE INÍCIO RÁPIDO — STOCKSYNC

Parabéns! O projeto **StockSync** foi criado com sucesso em React/Next.js com um **design system robusto e anti-alucinação**.

---

## 📂 O QUE FOI CRIADO

```
/home/claude/stocksync/
│
├── 📄 lib/design-tokens.ts
│   └─ 🎨 Sistema de design global (cores, tipografia, spacing, componentes)
│
├── 📄 components/
│   ├─ Button.tsx         (Botão reutilizável - 4 variantes)
│   ├─ Input.tsx          (Input reutilizável - com validação)
│   ├─ Card.tsx           (Card reutilizável - 4 variantes)
│   └─ Layout.tsx         (Layout com Sidebar + Header)
│
├── 📄 app/
│   ├─ page.tsx           (Home - link para login)
│   ├─ login/page.tsx     (Tela de Login - 01_login_screen)
│   └─ dashboard/page.tsx (Tela de Dashboard - 02_dashboard_main)
│
└── 📄 README_STOCKSYNC.md (Documentação completa)
```

---

## ⚡ RODAR O PROJETO (3 PASSOS)

### **Passo 1: Entrar na pasta**
```bash
cd /home/claude/stocksync
```

### **Passo 2: Instalar dependências**
```bash
npm install
```

### **Passo 3: Rodar em desenvolvimento**
```bash
npm run dev
```

**Resultado esperado:**
```
> ready on http://localhost:3000
```

---

## 🌐 ACESSAR AS TELAS

Após rodar `npm run dev`, abra seu navegador e acesse:

| Tela | URL | Status |
|------|-----|--------|
| **Home** | http://localhost:3000 | ✅ Pronto |
| **Login** | http://localhost:3000/login | ✅ Pronto |
| **Dashboard** | http://localhost:3000/dashboard | ✅ Pronto |

---

## 🎨 DESIGN SYSTEM IMPLEMENTADO

### **5 Cores Principais**
```
#8B6F47  → Marrom Terra (primário)
#E8DCC8  → Bege Caldo (secondary)
#6B7F6D  → Verde Musgo (success)
#4A6FA5  → Azul Retrô (info)
#3d2817  → Marrom Escuro (texto)
```

### **2 Fonts Apenas**
```
Georgia   → Headers (retrô)
Arial     → Body (funcional)
```

### **Componentes Prontos**
```
✅ Button (primary, secondary, alert, success)
✅ Input (text, email, password, number)
✅ Card (default, alert, success, critical)
✅ Layout (Sidebar + Header)
```

---

## 📝 COMO ADICIONAR NOVAS TELAS

### **Exemplo: Criar uma nova página "Inventário"**

1. **Criar arquivo**: `app/inventory/page.tsx`

2. **Copiar este template**:
```tsx
'use client';

import Layout from '@/components/Layout';
import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Card from '@/components/Card';

export default function InventoryPage() {
  return (
    <Layout currentPage="Inventário">
      <h1 style={{ color: COLORS.text.primary }}>
        Minha Página de Inventário
      </h1>
      
      {/* Use componentes aqui */}
      <Button variant="primary">Adicionar SKU</Button>
      <Input label="Buscar" placeholder="Digite SKU..." />
      <Card variant="default">Conteúdo</Card>
    </Layout>
  );
}
```

3. **Cores disponíveis**: Sempre use `COLORS.*` (ver `lib/design-tokens.ts`)

4. **Tipografia**: Sempre use `TYPOGRAPHY.*` (Georgia para headers, Arial para body)

5. **Spacing**: Use múltiplos de 8px

---

## ✅ CHECKLIST ANTES DE COMMITAR

- [ ] Todas as cores são da paleta (`COLORS.*`)?
- [ ] Tipografia usa apenas Georgia + Arial?
- [ ] Spacing é múltiplo de 8px?
- [ ] Nenhum gradient, shadow pesada ou efeito extra?
- [ ] Componentes usam `Button`, `Input`, `Card`, `Layout`?
- [ ] Testado em mobile (375px), tablet (768px), desktop (1440px)?

---

## 🔍 VALIDAR DESIGN SYSTEM

Para garantir que o código não viola o design system:

```bash
# Procurar por cores hardcoded (não devem existir)
grep -r "color:" app/ | grep -v COLORS

# Procurar por font-sizes diretos
grep -r "fontSize:" app/ | grep -v TYPOGRAPHY

# Procurar por padding/margin aleatório
grep -r "padding:\|margin:" app/ | grep -v SPACING
```

Se algum comando retornar resultados, corrija usando os tokens.

---

## 📚 ESTRUTURA DE COLORS

Todas as cores estão centralizadas em `lib/design-tokens.ts`:

```tsx
// Usar assim:
import { COLORS } from '@/lib/design-tokens';

// Background
background: COLORS.bg.default          // #F5F3F0
background: COLORS.bg.surface          // #FEFDFB

// Primário
background: COLORS.primary.main        // #8B6F47
background: COLORS.primary.dark        // #6B5437 (hover)

// Texto
color: COLORS.text.primary             // #3d2817
color: COLORS.text.secondary           // #8B6F47
color: COLORS.text.inverse             // #FEFDFB

// Status
background: COLORS.status.alert        // #FFF3E0
background: COLORS.status.success      // #E8F5E9
background: COLORS.status.critical     // #FFEBEE
```

---

## 📱 RESPONSIVIDADE

Todos os componentes já suportam:
- **Mobile**: 375px (celular)
- **Tablet**: 768px (tablet)
- **Desktop**: 1440px (desktop)

O `Layout` inclui hamburger menu automático em mobile.

---

## 🎯 PRÓXIMAS TAREFAS

Depois de rodar o projeto com sucesso:

1. [ ] Customizar cores (se necessário)
2. [ ] Adicionar integração com API (login real)
3. [ ] Criar Tela 3: Inventory List (com tabela)
4. [ ] Criar Tela 4: Add/Edit SKU Modal
5. [ ] Criar Tela 5: Settings
6. [ ] Criar Tela 6: Relatórios
7. [ ] Deploy em Vercel/Railway

---

## 🆘 PROBLEMAS COMUNS

### **"Cannot find module '@/components/Button'"**
→ Certificar que TypeScript está reconhecendo o alias `@/`
→ Ver `tsconfig.json` → `compilerOptions.paths`

### **Estilos não aplicando**
→ Certificar que usando `style={}` e não `className`
→ React inline styles (objeto) vs Tailwind classes

### **Cores diferentes do esperado**
→ Sempre usar `COLORS.*` de `design-tokens.ts`
→ Não hardcodear cores como `#fff` ou `rgb()`

---

## 📞 REFERÊNCIA RÁPIDA

| Arquivo | O Quê |
|---------|-------|
| `lib/design-tokens.ts` | Cores, tipografia, spacing, componentes |
| `components/Button.tsx` | Botão (copiar para custom) |
| `components/Input.tsx` | Input (copiar para custom) |
| `components/Card.tsx` | Card (copiar para custom) |
| `components/Layout.tsx` | Layout padrão (sempre usar) |
| `app/login/page.tsx` | Exemplo: Tela Login |
| `app/dashboard/page.tsx` | Exemplo: Tela Dashboard |

---

**Está pronto! Comece a rodar `npm run dev` e veja a magia acontecer.** 🚀

Qualquer dúvida, releia `README_STOCKSYNC.md` ou verifique os exemplos em `app/login/page.tsx` e `app/dashboard/page.tsx`.
