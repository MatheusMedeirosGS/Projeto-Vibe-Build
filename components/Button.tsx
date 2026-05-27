/**
 * Button Component
 * Variantes: Primary (default), Secondary, Alert
 * Estados: Normal, Hover, Active, Disabled
 */

import React from 'react';
import { COLORS, SPACING } from '@/lib/design-tokens';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'alert' | 'success';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      children,
      loading = false,
      icon,
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Size mappings
    const sizeStyles = {
      small: {
        height: '36px',
        padding: '8px 16px',
        fontSize: '13px',
        fontWeight: 500,
      },
      medium: {
        height: '48px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 600,
      },
      large: {
        height: '56px',
        padding: '16px 32px',
        fontSize: '18px',
        fontWeight: 600,
      },
    };

    // Variant mappings
    const variantStyles = {
      primary: {
        background: COLORS.primary.main,
        color: COLORS.text.inverse,
        border: 'none',
        '&:hover': {
          background: COLORS.primary.dark,
        },
      },
      secondary: {
        background: COLORS.secondary.main,
        color: COLORS.text.primary,
        border: `2px solid ${COLORS.primary.main}`,
        '&:hover': {
          background: COLORS.secondary.light,
        },
      },
      alert: {
        background: COLORS.alert,
        color: COLORS.text.inverse,
        border: 'none',
        '&:hover': {
          background: '#B8534A',
        },
      },
      success: {
        background: COLORS.success,
        color: COLORS.text.inverse,
        border: 'none',
        '&:hover': {
          background: '#5A6F5C',
        },
      },
    };

    const currentSize = sizeStyles[size];
    const currentVariant = variantStyles[variant];

    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      borderRadius: '6px',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: '"Arial", sans-serif',
      fontWeight: 600,
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.5 : 1,
      ...currentSize,
      ...currentVariant,
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        style={baseStyles}
        {...props}
        onMouseDown={(e) => {
          if (!disabled && !loading) {
            const btn = e.currentTarget as HTMLElement;
            btn.style.transform = 'scale(0.98)';
          }
        }}
        onMouseUp={(e) => {
          const btn = e.currentTarget as HTMLElement;
          btn.style.transform = 'scale(1)';
        }}
        onMouseLeave={(e) => {
          const btn = e.currentTarget as HTMLElement;
          btn.style.transform = 'scale(1)';
        }}
      >
        {loading ? (
          <>
            <span
              style={{
                width: '16px',
                height: '16px',
                border: `2px solid ${COLORS.text.inverse}`,
                borderTop: `2px solid transparent`,
                borderRadius: '50%',
                animation: 'spin 0.6s linear infinite',
              }}
            />
            Carregando...
          </>
        ) : (
          <>
            {icon && <span>{icon}</span>}
            {children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
