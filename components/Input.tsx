/**
 * Input Component
 * Tipos: text, email, password, number
 * Estados: Normal, Focus, Error, Disabled
 */

import React from 'react';
import { COLORS } from '@/lib/design-tokens';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      icon,
      fullWidth = true,
      type = 'text',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const containerStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: fullWidth ? '100%' : 'auto',
    };

    const labelStyles: React.CSSProperties = {
      fontSize: '12px',
      fontWeight: 600,
      color: COLORS.text.primary,
      fontFamily: '"Arial", sans-serif',
    };

    const inputWrapperStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      gap: '8px',
    };

    const inputStyles: React.CSSProperties = {
      flex: 1,
      height: '44px',
      padding: '12px 16px',
      fontSize: '14px',
      fontWeight: 400,
      borderRadius: '6px',
      border: `1.5px solid ${
        error
          ? COLORS.alert
          : isFocused
            ? COLORS.primary.main
            : COLORS.border.warm
      }`,
      background: disabled ? COLORS.secondary.light : COLORS.bg.surface,
      color: COLORS.text.primary,
      fontFamily: '"Arial", sans-serif',
      transition: 'all 0.2s ease',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'text',
      boxShadow:
        isFocused && !error
          ? `0 0 0 3px rgba(139, 111, 71, 0.1)`
          : 'none',
    };

    const errorStyles: React.CSSProperties = {
      fontSize: '12px',
      color: COLORS.alert,
      fontFamily: '"Arial", sans-serif',
      fontWeight: 500,
    };

    const helperStyles: React.CSSProperties = {
      fontSize: '11px',
      color: COLORS.text.tertiary,
      fontFamily: '"Arial", sans-serif',
    };

    return (
      <div style={containerStyles}>
        {label && <label style={labelStyles}>{label}</label>}

        <div style={inputWrapperStyles}>
          {icon && <span style={{ color: COLORS.text.tertiary }}>{icon}</span>}
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            style={inputStyles}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </div>

        {error && <div style={errorStyles}>⚠ {error}</div>}
        {helperText && !error && (
          <div style={helperStyles}>{helperText}</div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
