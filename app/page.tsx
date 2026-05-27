import Link from 'next/link';
import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';

export default function Home() {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: COLORS.bg.default,
    padding: '40px',
  };

  const contentStyles: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '500px',
  };

  const titleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h1,
    color: COLORS.text.primary,
    marginBottom: '16px',
  };

  const subtitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
    marginBottom: '40px',
  };

  const linkStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '12px 24px',
    background: COLORS.primary.main,
    color: COLORS.text.inverse,
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <h1 style={titleStyles}>StockSync</h1>
        <p style={subtitleStyles}>
          Sistema de Gestão de Estoque em Tempo Real
        </p>
        <Link href="/login" style={linkStyles}>
          Acessar Sistema →
        </Link>
      </div>
    </div>
  );
}
