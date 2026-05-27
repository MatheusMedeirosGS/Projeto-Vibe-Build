/**
 * Card Component
 * Container básico com padding, border e background
 */

import React from 'react';
import { COLORS } from '@/lib/design-tokens';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'alert' | 'success' | 'critical';
  hoverable?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = 'default', hoverable = false, children, ...props },
    ref
  ) => {
    const variantStyles = {
      default: {
        background: COLORS.bg.surface,
        border: `1px solid ${COLORS.border.main}`,
      },
      alert: {
        background: COLORS.status.alert,
        border: `1.5px solid ${COLORS.status.alertBorder}`,
      },
      success: {
        background: COLORS.status.success,
        border: `1.5px solid ${COLORS.status.successBorder}`,
      },
      critical: {
        background: COLORS.status.critical,
        border: `2px solid ${COLORS.status.criticalBorder}`,
      },
    };

    const currentVariant = variantStyles[variant];

    const cardStyles: React.CSSProperties = {
      padding: '20px',
      borderRadius: '8px',
      ...currentVariant,
      transition: 'all 0.2s ease',
      cursor: hoverable ? 'pointer' : 'default',
    };

    return (
      <div
        ref={ref}
        style={cardStyles}
        onMouseEnter={(e) => {
          if (hoverable) {
            const elem = e.currentTarget as HTMLElement;
            elem.style.borderColor = COLORS.primary.main;
            elem.style.backgroundColor = COLORS.secondary.light;
          }
        }}
        onMouseLeave={(e) => {
          if (hoverable) {
            const elem = e.currentTarget as HTMLElement;
            elem.style.borderColor = currentVariant.border.split('solid')[1].trim();
            elem.style.backgroundColor = currentVariant.background;
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
