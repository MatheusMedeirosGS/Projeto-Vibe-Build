/**
 * Reports Page
 * Layout: Sidebar + Header + Report Cards + Charts
 */

'use client';

import React from 'react';
import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';
import Layout from '@/components/Layout';
import Button from '@/components/Button';

interface Report {
  id: string;
  title: string;
  description: string;
  type: 'kpi' | 'chart' | 'table';
  icon: string;
}

export default function ReportsPage() {
  const reports: Report[] = [
    {
      id: '1',
      title: 'Movimentação de Estoque',
      description: 'Entradas e saídas do mês',
      type: 'chart',
      icon: 'fas fa-arrow-trend-up',
    },
    {
      id: '2',
      title: 'Produtos Mais Vendidos',
      description: 'Top 10 produtos por volume',
      type: 'table',
      icon: 'fas fa-crown',
    },
    {
      id: '3',
      title: 'Análise de Estoque',
      description: 'Distribuição por categoria',
      type: 'chart',
      icon: 'fas fa-chart-pie',
    },
    {
      id: '4',
      title: 'Alertas Críticos',
      description: 'Histórico de produtos em falta',
      type: 'table',
      icon: 'fas fa-triangle-exclamation',
    },
  ];

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
    marginBottom: '24px',
  };

  const filterButtonsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  };

  const reportGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  };

  const reportCardStyles: React.CSSProperties = {
    background: COLORS.bg.surface,
    border: `1px solid ${COLORS.border.main}`,
    borderRadius: '8px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    ':hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transform: 'translateY(-2px)',
    },
  };

  const reportIconStyles: React.CSSProperties = {
    fontSize: '32px',
  };

  const reportTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.primary,
    fontSize: '16px',
    fontWeight: 600,
    margin: 0,
  };

  const reportDescriptionStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
    margin: 0,
  };

  const chartContainerStyles: React.CSSProperties = {
    background: COLORS.bg.surface,
    border: `1px solid ${COLORS.border.main}`,
    borderRadius: '8px',
    padding: '40px',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    gap: '20px',
  };

  const chartTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h2,
    color: COLORS.text.primary,
    marginBottom: '20px',
  };

  const chartBarsStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',
    height: '200px',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '600px',
  };

  const barStyles: (height: number, color: string) => React.CSSProperties = (
    height,
    color
  ) => ({
    flex: 1,
    height: `${height}px`,
    background: color,
    borderRadius: '4px 4px 0 0',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    minWidth: '40px',
  });

  const monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  const monthData = [65, 78, 72, 85, 92, 88];

  return (
    <Layout currentPage="Relatórios">
      {/* Page Header */}
      <div style={pageHeaderStyles}>
        <h1 style={pageTitleStyles}>Relatórios</h1>
        <p style={pageSubtitleStyles}>
          Acompanhe métricas e indicadores de desempenho
        </p>

        {/* Filter Buttons */}
        <div style={filterButtonsStyles}>
          <Button variant="primary" size="small">
            <i className="fas fa-calendar" style={{ marginRight: '6px' }} />
            Este Mês
          </Button>
          <Button variant="secondary" size="small">
            <i className="fas fa-calendar-week" style={{ marginRight: '6px' }} />
            Últimos 3 Meses
          </Button>
          <Button variant="secondary" size="small">
            <i className="fas fa-calendar-year" style={{ marginRight: '6px' }} />
            Últimos 12 Meses
          </Button>
          <Button variant="secondary" size="small">
            <i className="fas fa-download" style={{ marginRight: '6px' }} />
            Exportar
          </Button>
        </div>
      </div>

      {/* Report Cards Grid */}
      <div style={reportGridStyles}>
        {reports.map((report) => (
          <div
            key={report.id}
            style={{
              ...reportCardStyles,
              onHover: {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              },
            }}
          >
            <i style={{ ...reportIconStyles, fontSize: '32px' }} className={report.icon as string} />
            <h3 style={reportTitleStyles}>{report.title}</h3>
            <p style={reportDescriptionStyles}>{report.description}</p>
          </div>
        ))}
      </div>

      {/* Sample Chart */}
      <div style={chartContainerStyles}>
        <h2 style={chartTitleStyles}>
          <i className="fas fa-chart-line" style={{ marginRight: '12px' }} />
          Movimentação de Estoque - Últimos 6 Meses
        </h2>
        <div style={chartBarsStyles}>
          {monthData.map((data, i) => (
            <div
              key={i}
              style={barStyles(data * 2, COLORS.primary.main)}
              title={`${monthLabels[i]}: ${data} unidades`}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '1';
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {monthLabels.map((label, i) => (
            <div
              key={label}
              style={{
                textAlign: 'center',
                ...TYPOGRAPHY.caption,
                color: COLORS.text.secondary,
              }}
            >
              <div>{label}</div>
              <div style={{ fontWeight: 600, color: COLORS.text.primary }}>
                {monthData[i]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="display: flex"] {
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}
