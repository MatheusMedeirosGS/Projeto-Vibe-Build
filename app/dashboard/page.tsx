/**
 * Dashboard Page (02_dashboard_main)
 * Layout: Sidebar + Header + KPI Cards + Alert + Chart
 */

'use client';

import React from 'react';
import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface KPIData {
  label: string;
  value: number;
  trend?: {
    direction: 'up' | 'down';
    percentage: number;
  };
  status?: 'normal' | 'alert' | 'critical' | 'success';
}

export default function DashboardPage() {
  // KPI Data
  const kpiData: KPIData[] = [
    {
      label: 'Total de SKUs',
      value: 2340,
      trend: { direction: 'up', percentage: 12 },
      status: 'normal',
    },
    {
      label: 'Produtos Críticos',
      value: 45,
      status: 'alert',
    },
    {
      label: 'Em Estoque',
      value: 1850,
      status: 'success',
    },
    {
      label: 'Zerados',
      value: 8,
      status: 'normal',
    },
  ];

  // Styles
  const pageHeaderStyles: React.CSSProperties = {
    marginBottom: '40px',
  };

  const pageTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h1,
    color: COLORS.text.primary,
    marginBottom: '8px',
  };

  const pageSubtitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
  };

  const kpiGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '32px',
    marginBottom: '40px',
  };

  const kpiCardStyles: (status: string) => React.CSSProperties = (status) => {
    const statusConfig = {
      normal: {
        bg: COLORS.bg.surface,
        border: COLORS.border.main,
      },
      alert: {
        bg: COLORS.status.alert,
        border: COLORS.status.alertBorder,
      },
      critical: {
        bg: COLORS.status.critical,
        border: COLORS.status.criticalBorder,
      },
      success: {
        bg: COLORS.status.success,
        border: COLORS.status.successBorder,
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];

    return {
      padding: '20px',
      borderRadius: '8px',
      background: config.bg,
      border: `1px solid ${config.border}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    };
  };

  const kpiLabelStyles: (status: string) => React.CSSProperties = (status) => {
    const labelConfig = {
      normal: COLORS.text.secondary,
      alert: COLORS.status.alertText,
      critical: COLORS.status.criticalText,
      success: COLORS.status.successText,
    };

    return {
      ...TYPOGRAPHY.label,
      color: labelConfig[status as keyof typeof labelConfig],
    };
  };

  const kpiValueStyles: (status: string) => React.CSSProperties = (status) => {
    const valueConfig = {
      normal: COLORS.text.primary,
      alert: COLORS.alert,
      critical: COLORS.alert,
      success: COLORS.success,
    };

    return {
      fontSize: '36px',
      fontWeight: 600,
      color: valueConfig[status as keyof typeof valueConfig],
      fontFamily: '"Georgia", serif',
    };
  };

  const kpiTrendStyles: React.CSSProperties = {
    ...TYPOGRAPHY.caption,
    color: COLORS.success,
  };

  // Alert Widget
  const alertWidgetStyles: React.CSSProperties = {
    background: COLORS.status.alert,
    border: `1.5px solid ${COLORS.status.alertBorder}`,
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const alertContentStyles: React.CSSProperties = {
    flex: 1,
  };

  const alertTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    fontWeight: 600,
    color: COLORS.status.alertText,
    marginBottom: '8px',
  };

  const alertDescriptionStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.status.alertText,
    marginBottom: '4px',
  };

  const alertMetaStyles: React.CSSProperties = {
    ...TYPOGRAPHY.caption,
    color: COLORS.status.alertText,
    opacity: 0.8,
  };

  // Chart Area
  const chartContainerStyles: React.CSSProperties = {
    background: COLORS.bg.surface,
    border: `1px solid ${COLORS.border.main}`,
    borderRadius: '8px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    gap: '20px',
  };

  const chartTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
  };

  const chartBarsStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '12px',
    height: '150px',
    justifyContent: 'center',
  };

  const barStyles: (height: number) => React.CSSProperties = (height) => ({
    width: '30px',
    height: `${height}px`,
    background: COLORS.primary.main,
    borderRadius: '4px 4px 0 0',
    opacity: 0.7,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  });

  return (
    <Layout currentPage="Dashboard">
      {/* Page Header */}
      <div style={pageHeaderStyles}>
        <h1 style={pageTitleStyles}>Visão Geral</h1>
        <p style={pageSubtitleStyles}>
          Acompanhe o status do seu estoque em tempo real
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div style={kpiGridStyles}>
        {kpiData.map((kpi, index) => (
          <div
            key={index}
            style={kpiCardStyles(kpi.status || 'normal')}
          >
            <div style={kpiLabelStyles(kpi.status || 'normal')}>
              {kpi.label}
            </div>
            <div style={kpiValueStyles(kpi.status || 'normal')}>
              {kpi.value.toLocaleString('pt-BR')}
            </div>
            {kpi.trend && (
              <div style={kpiTrendStyles}>
                {kpi.trend.direction === 'up' ? '↑' : '↓'}{' '}
                {kpi.trend.percentage}% vs mês anterior
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Alert Widget */}
      <div style={alertWidgetStyles}>
        <div style={alertContentStyles}>
          <div style={alertTitleStyles}>
            ⚠ Alerta: 45 produtos em nível crítico
          </div>
          <div style={alertDescriptionStyles}>
            Estes produtos precisam ser repostos em breve.
          </div>
          <div style={alertMetaStyles}>
            Última sincronização: há 2 horas | Próxima: em 2 horas
          </div>
        </div>
        <Button variant="alert" size="small">
          Repor Agora
        </Button>
      </div>

      {/* Chart Area */}
      <div style={chartContainerStyles}>
        <div style={chartTitleStyles}>
          📊 Gráfico de Tendência (7 dias) — Sincronização em Tempo Real
        </div>
        <div style={chartBarsStyles}>
          {[60, 80, 70, 90, 100, 80, 120].map((height, i) => (
            <div
              key={i}
              style={barStyles(height)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '0.7';
              }}
              title={`Dia ${i + 1}: ${height} unidades`}
            />
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }

          div[style*="justify-content: space-between"] {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </Layout>
  );
}
