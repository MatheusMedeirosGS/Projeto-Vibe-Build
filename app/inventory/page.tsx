/**
 * Inventory Page
 * Layout: Sidebar + Header + Table/List
 */

'use client';

import React from 'react';
import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';
import Layout from '@/components/Layout';
import Button from '@/components/Button';

interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  status: 'in-stock' | 'low' | 'critical';
  lastUpdated: string;
}

export default function InventoryPage() {
  const inventoryData: InventoryItem[] = [
    {
      id: '1',
      sku: 'SKU-001',
      name: 'Produto A - Premium',
      quantity: 450,
      status: 'in-stock',
      lastUpdated: '2 horas atrás',
    },
    {
      id: '2',
      sku: 'SKU-002',
      name: 'Produto B - Standard',
      quantity: 12,
      status: 'low',
      lastUpdated: '30 minutos atrás',
    },
    {
      id: '3',
      sku: 'SKU-003',
      name: 'Produto C - Economy',
      quantity: 2,
      status: 'critical',
      lastUpdated: '5 minutos atrás',
    },
    {
      id: '4',
      sku: 'SKU-004',
      name: 'Produto D - Deluxe',
      quantity: 890,
      status: 'in-stock',
      lastUpdated: '1 hora atrás',
    },
    {
      id: '5',
      sku: 'SKU-005',
      name: 'Produto E - Basic',
      quantity: 45,
      status: 'low',
      lastUpdated: '15 minutos atrás',
    },
  ];

  const pageHeaderStyles: React.CSSProperties = {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  const tableContainerStyles: React.CSSProperties = {
    background: COLORS.bg.surface,
    border: `1px solid ${COLORS.border.main}`,
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const tableStyles: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyles: React.CSSProperties = {
    ...TYPOGRAPHY.label,
    background: COLORS.bg.default,
    color: COLORS.text.secondary,
    padding: '16px',
    textAlign: 'left',
    borderBottom: `1px solid ${COLORS.border.main}`,
    fontWeight: 600,
  };

  const tdStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.primary,
    padding: '16px',
    borderBottom: `1px solid ${COLORS.border.main}`,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock':
        return COLORS.success;
      case 'low':
        return COLORS.warning;
      case 'critical':
        return COLORS.alert;
      default:
        return COLORS.text.secondary;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'Em Estoque';
      case 'low':
        return 'Baixo';
      case 'critical':
        return 'Crítico';
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'fas fa-check-circle';
      case 'low':
        return 'fas fa-exclamation-triangle';
      case 'critical':
        return 'fas fa-times-circle';
      default:
        return 'fas fa-info-circle';
    }
  };

  const badgeStyles = (status: string): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 600,
    backgroundColor: getStatusColor(status),
    color: COLORS.text.inverse,
  });

  return (
    <Layout currentPage="Inventário">
      {/* Page Header */}
      <div style={pageHeaderStyles}>
        <div>
          <h1 style={pageTitleStyles}>Inventário</h1>
          <p style={pageSubtitleStyles}>
            Gerencie seus produtos e níveis de estoque
          </p>
        </div>
        <Button variant="primary">
          <i className="fas fa-plus" style={{ marginRight: '8px' }} />
          Adicionar Produto
        </Button>
      </div>

      {/* Inventory Table */}
      <div style={tableContainerStyles}>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>SKU</th>
              <th style={thStyles}>Nome do Produto</th>
              <th style={thStyles}>Quantidade</th>
              <th style={thStyles}>Status</th>
              <th style={thStyles}>Última Atualização</th>
              <th style={thStyles}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td style={tdStyles}>
                  <span style={{ fontWeight: 600, color: COLORS.primary.main }}>
                    {item.sku}
                  </span>
                </td>
                <td style={tdStyles}>{item.name}</td>
                <td style={tdStyles}>
                  <span style={{ fontWeight: 600 }}>
                    {item.quantity.toLocaleString('pt-BR')} un.
                  </span>
                </td>
                <td style={tdStyles}>
                  <span style={badgeStyles(item.status)}>
                    <i className={getStatusIcon(item.status)} />
                    {getStatusLabel(item.status)}
                  </span>
                </td>
                <td style={tdStyles}>{item.lastUpdated}</td>
                <td style={tdStyles}>
                  <button
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: COLORS.info,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      fontSize: '13px',
                    }}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          table {
            font-size: 12px;
          }
          td, th {
            padding: 12px !important;
          }
        }
      `}</style>
    </Layout>
  );
}
