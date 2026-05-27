/**
 * Login Page (01_login_screen)
 * Layout: Split 50/50 (Branding + Form)
 * Cores: Marrom (#8B6F47) + Bege (#F5F3F0)
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COLORS, TYPOGRAPHY, SPACING } from '@/lib/design-tokens';
import Button from '@/components/Button';
import Input from '@/components/Input';

interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<LoginForm> = {};

    if (!form.email) newErrors.email = 'Email é obrigatório';
    if (!form.password) newErrors.password = 'Senha é obrigatória';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ email: data.error });
        setLoading(false);
        return;
      }

      // Redirecionar para dashboard após login bem-sucedido
      window.location.href = '/dashboard';
    } catch (error) {
      setErrors({ email: 'Erro ao conectar com o servidor' });
      setLoading(false);
    }
  };

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    height: '100vh',
    width: '100%',
  };

  // LEFT SIDE - BRANDING (50%)
  const leftSideStyles: React.CSSProperties = {
    flex: 1,
    background: COLORS.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    color: COLORS.text.inverse,
  };

  const logoCircleStyles: React.CSSProperties = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    background: COLORS.secondary.main,
    opacity: 0.1,
    position: 'absolute',
    top: '120px',
  };

  const logoTextStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h1,
    color: COLORS.text.inverse,
    textAlign: 'center',
    marginBottom: '24px',
    position: 'relative',
    zIndex: 1,
  };

  const brandingTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h2,
    color: COLORS.text.inverse,
    textAlign: 'center',
    marginBottom: '8px',
  };

  const brandingSubtitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.secondary.main,
    textAlign: 'center',
    marginBottom: '48px',
  };

  const featureListStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '40px',
  };

  const featureItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const featureBulletStyles: React.CSSProperties = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: COLORS.success,
    flexShrink: 0,
  };

  const featureTextStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.inverse,
  };

  // RIGHT SIDE - FORM (50%)
  const rightSideStyles: React.CSSProperties = {
    flex: 1,
    background: COLORS.bg.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  };

  const formContainerStyles: React.CSSProperties = {
    width: '100%',
    maxWidth: '400px',
    background: COLORS.bg.surface,
    border: `1px solid ${COLORS.border.main}`,
    borderRadius: '12px',
    padding: '40px',
  };

  const formHeaderStyles: React.CSSProperties = {
    marginBottom: '32px',
    textAlign: 'center',
  };

  const formTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h2,
    color: COLORS.text.primary,
    marginBottom: '8px',
  };

  const formSubtitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
  };

  const formFieldsStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '24px',
  };

  const checkboxContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
  };

  const checkboxWrapperStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const checkboxStyles: React.CSSProperties = {
    width: '16px',
    height: '16px',
    border: `1px solid ${COLORS.primary.main}`,
    borderRadius: '3px',
    background: COLORS.bg.surface,
    cursor: 'pointer',
    accentColor: COLORS.primary.main,
  };

  const checkboxLabelStyles: React.CSSProperties = {
    ...TYPOGRAPHY.label,
    color: COLORS.text.primary,
    cursor: 'pointer',
  };

  const forgotPasswordLinkStyles: React.CSSProperties = {
    ...TYPOGRAPHY.label,
    color: COLORS.info,
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 600,
  };

  const dividerStyles: React.CSSProperties = {
    height: '1px',
    background: COLORS.border.main,
    margin: '24px 0',
  };

  const dividerTextStyles: React.CSSProperties = {
    ...TYPOGRAPHY.label,
    color: COLORS.text.secondary,
    textAlign: 'center',
    margin: '20px 0',
  };

  const signupLinkStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.info,
    textAlign: 'center',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyles}>
      {/* LEFT SIDE - BRANDING */}
      <div style={leftSideStyles}>
        <div style={logoCircleStyles} />

        <div style={logoTextStyles}>StockSync</div>

        <h2 style={brandingTitleStyles}>Gestão de Estoque</h2>
        <p style={brandingSubtitleStyles}>Sem Planilha. Sem Erro.</p>

        <ul style={featureListStyles}>
          <li style={featureItemStyles}>
            <div style={featureBulletStyles} />
            <span style={featureTextStyles}>Sincronização em Tempo Real</span>
          </li>
          <li style={featureItemStyles}>
            <div style={featureBulletStyles} />
            <span style={featureTextStyles}>
              Múltiplos Canais (Shopify, Mercado Livre, etc)
            </span>
          </li>
          <li style={featureItemStyles}>
            <div style={featureBulletStyles} />
            <span style={featureTextStyles}>Alertas Inteligentes de Estoque</span>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div style={rightSideStyles}>
        <div style={formContainerStyles}>
          {/* Form Header */}
          <div style={formHeaderStyles}>
            <h1 style={formTitleStyles}>Acessar</h1>
            <p style={formSubtitleStyles}>Faça login com sua conta</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div style={formFieldsStyles}>
              <Input
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu.email@empresa.com"
                error={errors.email}
              />

              <Input
                label="Senha"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                error={errors.password}
              />
            </div>

            {/* Remember + Forgot Password */}
            <div style={checkboxContainerStyles}>
              <div style={checkboxWrapperStyles}>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  style={checkboxStyles}
                />
                <label htmlFor="remember" style={checkboxLabelStyles}>
                  <i className="fas fa-check" style={{ marginRight: '6px' }} />
                  Lembrar-me
                </label>
              </div>
              <Link href="/forgot-password" style={forgotPasswordLinkStyles}>
                <i className="fas fa-key" style={{ marginRight: '6px' }} />
                Esqueceu senha?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
              style={{ marginBottom: '24px' }}
            >
              Fazer Login
            </Button>
          </form>

          {/* Divider */}
          <div style={dividerStyles} />
          <p style={dividerTextStyles}>Não tem conta?</p>

          {/* Signup Link */}
          <Link href="/signup" style={signupLinkStyles}>
            Crie uma conta agora →
          </Link>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          div[style*="display: flex"] {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
