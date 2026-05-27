# 🎨 StockSync — Design System + MVP

**Sistema de Gestão de Estoque em Tempo Real**  
Paleta retrô 70s-80s + Design System funcional moderno  
Desenvolvido com Next.js, React, TypeScript e Design Tokens

---

## 📋 Estrutura do Projeto

```
stocksync/
├── lib/
│   └── design-tokens.ts         # 🎨 Paleta de cores, tipografia, spacing, componentes
├── components/
│   ├── Button.tsx               # Botão (variantes: primary, secondary, alert, success)
│   ├── Input.tsx                # Input (text, email, password, number)
│   ├── Card.tsx                 # Card reutilizável (variantes: default, alert, success)
│   └── Layout.tsx               # Layout com Sidebar + Header (usado em telas autenticadas)
├── app/
│   ├── page.tsx                 # Home (redireciona para login)
│   ├── login/
│   │   └── page.tsx             # Tela de Login (01_login_screen)
│   ├── dashboard/
│   │   └── page.tsx             # Tela de Dashboard (02_dashboard_main)
│   └── layout.tsx               # Root layout
└── README_STOCKSYNC.md          # Este arquivo
```

---

## 🎯 Design System — Tokens Globais

### **5 Cores Primárias (Retrô 70s-80s)**

```
Marrom Terra       #8B6F47  → Headers, buttons primários, elementos principais
Bege Caldo        #E8DCC8  → Hover states, backgrounds secundários
Verde Musgo       #6B7F6D  → Sucesso, segurança, "OK"
Azul Retrô        #4A6FA5  → Informações, links, confiança
Marrom Escuro     #3d2817  → Texto principal, sidebar
```

### **Tipografia (2 fonts apenas)**

```
Headers: Georgia, serif       → Retrô, elegância, 28px/24px/18px, weight 600
Body:    Arial, sans-serif    → Funcional, limpo, 16px/14px/13px, weight 400
```

### **Spacing (Sistema 8px)**

```
8px, 16px, 24px, 32px, 40px, etc
Todos os components respeitam este sistema
```

---

## 🚀 Como Rodar

### **1. Instalar Dependências**
```bash
cd stocksync
npm install
```

### **2. Rodar em Desenvolvimento**
```bash
npm run dev
```

Acesse: `http://localhost:3000`

### **3. Build para Produção**
```bash
npm run build
npm start
```

---

## 📱 Telas Implementadas

### **✅ Tela 1: Login (01_login_screen)**
- **Arquivo**: `app/login/page.tsx`
- **Layout**: Split 50/50 (Branding + Form)
- **Componentes**: Input × 2, Button, Checkbox, Link
- **Cores**: `#8B6F47` (esquerda) + `#F5F3F0` (direita)

**Acessar**: [http://localhost:3000/login](http://localhost:3000/login)

### **✅ Tela 2: Dashboard (02_dashboard_main)**
- **Arquivo**: `app/dashboard/page.tsx`
- **Layout**: Sidebar (240px) + Header (60px) + Content (full)
- **Componentes**: 4 KPI Cards, Alert Widget, Chart (ilustrativo)
- **Cores**: Paleta completa com status (alert, success, critical)

**Acessar**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

---

## 🔧 Componentes Reutilizáveis

### **Button** — `components/Button.tsx`

```tsx
import Button from '@/components/Button';

<Button variant="primary" size="medium" fullWidth>
  Fazer Login
</Button>

// Variantes: primary, secondary, alert, success
// Tamanhos: small (36px), medium (48px), large (56px)
```

### **Input** — `components/Input.tsx`

```tsx
import Input from '@/components/Input';

<Input
  label="Email"
  type="email"
  error={errors.email}
  helperText="Digite seu email corporativo"
  placeholder="seu.email@empresa.com"
/>
```

### **Card** — `components/Card.tsx`

```tsx
import Card from '@/components/Card';

<Card variant="alert" hoverable>
  Conteúdo do card
</Card>

// Variantes: default, alert, success, critical
```

### **Layout** — `components/Layout.tsx`

```tsx
import Layout from '@/components/Layout';

export default function MyPage() {
  return (
    <Layout currentPage="Dashboard">
      {/* Conteúdo da página aqui */}
    </Layout>
  );
}

// Inclui automaticamente:
// - Sidebar com navegação
// - Header com breadcrumb + user menu
// - Responsividade (hamburger menu em mobile)
```

---

## 🎨 Como Usar Design Tokens

### **Em Componentes**

```tsx
import { COLORS, TYPOGRAPHY, SPACING } from '@/lib/design-tokens';

const buttonStyles: React.CSSProperties = {
  background: COLORS.primary.main,        // #8B6F47
  color: COLORS.text.inverse,             // #FEFDFB
  fontSize: TYPOGRAPHY.bodySmall.fontSize, // 14px
  padding: SPACING[4],                     // 16px
};
```

### **Cores Disponíveis**

```
COLORS.primary.main              // #8B6F47 (Marrom)
COLORS.secondary.main            // #E8DCC8 (Bege)
COLORS.success                   // #6B7F6D (Verde)
COLORS.info                      // #4A6FA5 (Azul)
COLORS.alert                     // #C9634F (Terracota)
COLORS.text.primary              // #3d2817 (Texto principal)
COLORS.bg.default                // #F5F3F0 (Background padrão)
COLORS.bg.surface                // #FEFDFB (Cards, inputs)
```

---

## ✅ Checklist de Validação

Ao adicionar novas telas/componentes, garantir que:

- [ ] **Cores**: Apenas da paleta definida em `design-tokens.ts`
- [ ] **Tipografia**: Apenas Georgia (headers) + Arial (body)
- [ ] **Spacing**: Múltiplos de 8px
- [ ] **Componentes**: Usam `Button`, `Input`, `Card`, `Layout`
- [ ] **Estados**: Componentes têm estados (hover, active, disabled, error)
- [ ] **Responsive**: Testado em mobile (375px), tablet (768px), desktop (1440px)
- [ ] **Nenhum**: Gradients, shadows pesadas, efeitos decorativos
- [ ] **Nenhum**: Fonts extras, cores aleatórias, componentes não planejados

---

## 📚 Próximas Telas a Implementar

### **Tela 3: Inventory List (03_inventory_list)**
- [ ] Tabela com SKUs (colunas: SKU, Nome, Categoria, Qtd, Status, Ações)
- [ ] Filtros (categoria, status, search)
- [ ] Paginação
- [ ] Usar `Layout` como wrapper

### **Tela 4: Add/Edit SKU Modal (04_add_sku_modal)**
- [ ] Form com inputs (SKU, Nome, Categoria, Qtd, Preço)
- [ ] Validação
- [ ] Buttons (Cancel, Add/Save)

### **Tela 5: Settings (05_settings_page)**
- [ ] Seções: Integrações, Notificações, Plano, Segurança
- [ ] Toggles, Inputs, Selects
- [ ] Usar `Layout`

### **Tela 6: Relatórios (06_reports_page)**
- [ ] KPI Cards
- [ ] Gráficos (simples ou placeholders)
- [ ] Filters por data
- [ ] Export button

---

## 🎬 Padrão para Novas Telas

1. **Criar arquivo**: `app/[nome]/page.tsx`
2. **Importar componentes**: `Button`, `Input`, `Card`, `Layout`
3. **Importar tokens**: `COLORS`, `TYPOGRAPHY`, `SPACING`
4. **Estrutura base**:
   ```tsx
   'use client';
   import Layout from '@/components/Layout';
   import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';

   export default function MyPage() {
     return (
       <Layout currentPage="Página Name">
         {/* Conteúdo aqui */}
       </Layout>
     );
   }
   ```
5. **Validar**: Cores, tipografia, spacing, responsividade
6. **Commit**: `feat: adicionada tela [nome]`

---

**Versão**: 1.0.0  
**Última Atualização**: 26 de Maio de 2026  
**Status**: MVP pronto para desenvolvimento
