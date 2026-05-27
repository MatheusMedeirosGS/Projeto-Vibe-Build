/**
 * StockSync Design System
 * Paleta de cores retrô 70s-80s + funcional moderno
 * Fonte: Georgia (headers), Arial (body)
 */

// ============================================
// 🎨 CORES GLOBAIS (Primitivas)
// ============================================

export const COLORS = {
  // Primary
  primary: {
    main: '#8B6F47', // Marrom Terra - confiança, estabilidade
    dark: '#6B5437', // 10% mais escuro (para hover)
    light: '#A88B5F', // 10% mais claro
  },

  // Secondary
  secondary: {
    main: '#E8DCC8', // Bege Caldo - calor, acolhimento
    light: '#F5F3F0', // Bege muito claro (background padrão)
    lighter: '#FEFDFB', // Branco suave (cards, inputs)
  },

  // Semantic
  success: '#6B7F6D', // Verde Musgo - sucesso, segurança
  info: '#4A6FA5', // Azul Retrô - informação, confiança
  alert: '#C9634F', // Terracota - urgência, alerta
  danger: '#C9634F', // Mesmo que alert (para erros)

  // Text
  text: {
    primary: '#3d2817', // Marrom Escuro - texto principal
    secondary: '#8B6F47', // Marrom Terra - labels, descrições
    tertiary: '#C9A877', // Bege escuro - dicas, muted
    inverse: '#FEFDFB', // Branco - texto em fundos escuros
  },

  // Backgrounds
  bg: {
    default: '#F5F3F0', // Bege claro (páginas inteiras)
    surface: '#FEFDFB', // Branco suave (cards, inputs)
    dark: '#3d2817', // Marrom Escuro (sidebar, headers)
    hover: '#E8DCC8', // Bege - hover states
  },

  // Borders
  border: {
    main: '#E8DCC8', // Bege (default)
    warm: '#C9A877', // Bege escuro (inputs)
    dark: '#6B5437', // Marrom escuro (dividers)
  },

  // Status badges
  status: {
    success: '#E8F5E9', // Verde claro (background)
    successBorder: '#6B7F6D', // Verde (border)
    successText: '#2B5F3F', // Verde escuro (text)

    alert: '#FFF3E0', // Bege alert (background)
    alertBorder: '#C9634F', // Terracota (border)
    alertText: '#8B3A1F', // Marrom alert (text)

    critical: '#FFEBEE', // Rosa claro (background)
    criticalBorder: '#C9634F', // Terracota (border)
    criticalText: '#8B3A1F', // Marrom (text)

    neutral: '#F5F3F0', // Bege neutro (background)
    neutralBorder: '#C9A877', // Bege escuro (border)
    neutralText: '#3d2817', // Marrom escuro (text)
  },

  // Opacity
  opacity: {
    disabled: 0.6,
    hover: 0.85,
    active: 0.95,
  },
} as const;

// ============================================
// 📝 TIPOGRAFIA
// ============================================

export const TYPOGRAPHY = {
  // Fonts
  fonts: {
    header: '"Georgia", serif', // Retrô, elegância
    body: '"Arial", sans-serif', // Funcional, limpo
    mono: '"Courier New", monospace', // Code, data
  },

  // Tamanhos e pesos
  h1: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: 1.2,
    font: 'Georgia, serif',
    letterSpacing: '-0.5px',
  },
  h2: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1.3,
    font: 'Georgia, serif',
  },
  h3: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1.4,
    font: 'Georgia, serif',
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    font: 'Arial, sans-serif',
  },
  bodySmall: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
    font: 'Arial, sans-serif',
  },
  label: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: 1.4,
    font: 'Arial, sans-serif',
  },
  caption: {
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: 1.4,
    font: 'Arial, sans-serif',
  },
} as const;

// ============================================
// 🎯 SPACING (Sistema 8px)
// ============================================

export const SPACING = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
} as const;

// ============================================
// 🔘 COMPONENTES (Dimensões e Styling)
// ============================================

export const COMPONENTS = {
  // Buttons
  button: {
    primary: {
      height: '48px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '6px',
      background: COLORS.primary.main,
      color: COLORS.text.inverse,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '&:hover': {
        background: COLORS.primary.dark,
      },
      '&:active': {
        transform: 'scale(0.98)',
      },
      '&:disabled': {
        background: '#D3C9B8',
        color: COLORS.primary.main,
        opacity: COLORS.opacity.disabled,
        cursor: 'not-allowed',
      },
    },
    secondary: {
      height: '48px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '6px',
      background: COLORS.secondary.main,
      color: COLORS.text.primary,
      border: `2px solid ${COLORS.primary.main}`,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '&:hover': {
        background: COLORS.secondary.light,
      },
      '&:active': {
        transform: 'scale(0.98)',
      },
    },
    alert: {
      height: '48px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '6px',
      background: COLORS.alert,
      color: COLORS.text.inverse,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '&:hover': {
        background: '#B8534A',
      },
      '&:active': {
        transform: 'scale(0.98)',
      },
    },
  },

  // Inputs
  input: {
    height: '44px',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: 400,
    borderRadius: '6px',
    border: `1.5px solid ${COLORS.border.warm}`,
    background: COLORS.bg.surface,
    color: COLORS.text.primary,
    transition: 'all 0.2s ease',
    '&:focus': {
      outline: 'none',
      borderColor: COLORS.primary.main,
      boxShadow: `0 0 0 3px rgba(139, 111, 71, 0.1)`,
    },
    '&::placeholder': {
      color: COLORS.text.tertiary,
      opacity: 0.6,
    },
    '&:disabled': {
      background: COLORS.secondary.light,
      cursor: 'not-allowed',
      opacity: COLORS.opacity.disabled,
    },
  },

  // Cards
  card: {
    padding: '20px',
    borderRadius: '8px',
    border: `1px solid ${COLORS.border.main}`,
    background: COLORS.bg.surface,
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: COLORS.primary.main,
      backgroundColor: COLORS.secondary.light,
    },
  },

  // Sidebar
  sidebar: {
    width: '240px',
    background: COLORS.bg.dark,
    color: COLORS.text.inverse,
    padding: '20px',
    height: '100vh',
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: 100,
  },

  // Header
  header: {
    height: '60px',
    background: COLORS.primary.main,
    color: COLORS.text.inverse,
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${COLORS.border.dark}`,
    position: 'relative',
    zIndex: 99,
  },
} as const;

// ============================================
// 🎬 Breakpoints (Responsive)
// ============================================

export const BREAKPOINTS = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1200px',
  wide: '1440px',
} as const;

// ============================================
// 🎨 Tailwind Config (se usar Tailwind)
// ============================================

export const TAILWIND_CONFIG = {
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    success: COLORS.success,
    info: COLORS.info,
    alert: COLORS.alert,
    text: COLORS.text,
    bg: COLORS.bg,
    border: COLORS.border,
  },
  spacing: SPACING,
  fontFamily: {
    header: TYPOGRAPHY.fonts.header,
    body: TYPOGRAPHY.fonts.body,
    mono: TYPOGRAPHY.fonts.mono,
  },
} as const;

export default COLORS;
