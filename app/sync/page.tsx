/**
 * Synchronization Page
 * Layout: Sidebar + Header + Sync Status Cards
 */

'use client';

import React, { useState } from 'react';
import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';
import Layout from '@/components/Layout';
import Button from '@/components/Button';

interface SyncChannel {
  id: string;
  name: string;
  status: 'synced' | 'syncing' | 'error' | 'pending';
  lastSync: string;
  nextSync: string;
  itemsSync: number;
  totalItems: number;
}

export default function SyncPage() {
  const [syncing, setSyncing] = useState(false);

  const syncChannels: SyncChannel[] = [
    {
      id: '1',
      name: 'Shopify',
      status: 'synced',
      lastSync: '2 minutos atrás',
      nextSync: 'em 28 minutos',
      itemsSync: 2340,
      totalItems: 2340,
    },
    {
      id: '2',
      name: 'Mercado Livre',
      status: 'syncing',
      lastSync: 'há 5 minutos',
      nextSync: 'em 25 minutos',
      itemsSync: 1850,
      totalItems: 1850,
    },
    {
      id: '3',
      name: 'WooCommerce',
      status: 'pending',
      lastSync: 'há 30 minutos',
      nextSync: 'em 10 minutos',
      itemsSync: 450,
      totalItems: 520,
    },
    {
      id: '4',
      name: 'Amazon',
      status: 'error',
      lastSync: 'há 2 horas',
      nextSync: 'aguardando ação',
      itemsSync: 0,
      totalItems: 1200,
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'synced':
        return {
          color: COLORS.success,
          label: 'Sincronizado',
          icon: 'fas fa-check-circle',
          bg: COLORS.status.success,
        };
      case 'syncing':
        return {
          color: COLORS.info,
          label: 'Sincronizando',
          icon: 'fas fa-spinner',
          bg: COLORS.bg.default,
        };
      case 'pending':
        return {
          color: COLORS.warning || '#F5A623',
          label: 'Pendente',
          icon: 'fas fa-hourglass-end',
          bg: COLORS.bg.default,
        };
      case 'error':
        return {
          color: COLORS.alert,
          label: 'Erro',
          icon: 'fas fa-exclamation-circle',
          bg: COLORS.status.alert,
        };
      default:
        return {
          color: COLORS.text.secondary,
          label: status,
          icon: 'fas fa-info-circle',
          bg: COLORS.bg.default,
        };
    }
  };

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

  const syncButtonsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    marginBottom: '40px',
  };

  const cardGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  };

  const cardStyles: (status: string) => React.CSSProperties = (status) => {
    const config = getStatusConfig(status);
    return {
      background: config.bg,
      border: `1px solid ${config.color}`,
      borderRadius: '8px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    };
  };

  const cardHeaderStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const channelNameStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.primary,
    fontSize: '18px',
    fontWeight: 600,
    margin: 0,
  };

  const statusBadgeStyles: (status: string) => React.CSSProperties = (
    status
  ) => {
    const config = getStatusConfig(status);
    return {
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 600,
      color: config.color,
      background: 'transparent',
      border: `1px solid ${config.color}`,
    };
  };

  const infoRowStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text.secondary,
    borderTop: `1px solid ${COLORS.border.main}`,
  };

  const progressBarStyles: React.CSSProperties = {
    width: '100%',
    height: '8px',
    background: COLORS.border.main,
    borderRadius: '4px',
    overflow: 'hidden',
  };

  const progressFillStyles: (percentage: number) => React.CSSProperties = (
    percentage
  ) => ({
    height: '100%',
    width: `${percentage}%`,
    background: COLORS.success,
    transition: 'width 0.3s ease',
  });

  return (
    <Layout currentPage="Sincronização">
      {/* Page Header */}
      <div style={pageHeaderStyles}>
        <h1 style={pageTitleStyles}>Sincronização</h1>
        <p style={pageSubtitleStyles}>
          Gerencie a sincronização de estoque entre múltiplos canais
        </p>

        {/* Action Buttons */}
        <div style={syncButtonsStyles}>
          <Button
            variant="primary"
            loading={syncing}
            onClick={() => {
              setSyncing(true);
              setTimeout(() => setSyncing(false), 3000);
            }}
          >
            <i className="fas fa-sync-alt" style={{ marginRight: '8px' }} />
            Sincronizar Tudo Agora
          </Button>
          <Button variant="secondary">
            <i className="fas fa-sliders-h" style={{ marginRight: '8px' }} />
            Configurar Canais
          </Button>
        </div>
      </div>

      {/* Sync Channels Grid */}
      <div style={cardGridStyles}>
        {syncChannels.map((channel) => {
          const config = getStatusConfig(channel.status);
          const percentage = (channel.itemsSync / channel.totalItems) * 100;

          return (
            <div key={channel.id} style={cardStyles(channel.status)}>
              {/* Header */}
              <div style={cardHeaderStyles}>
                <h3 style={channelNameStyles}>{channel.name}</h3>
                <span style={statusBadgeStyles(channel.status)}>
                  <i className={config.icon} style={{ marginRight: '6px' }} />
                  {config.label}
                </span>
              </div>

              {/* Progress */}
              <div>
                <div style={progressBarStyles}>
                  <div style={progressFillStyles(percentage)} />
                </div>
                <div
                  style={{
                    ...TYPOGRAPHY.caption,
                    color: COLORS.text.secondary,
                    marginTop: '8px',
                  }}
                >
                  {channel.itemsSync.toLocaleString('pt-BR')} de{' '}
                  {channel.totalItems.toLocaleString('pt-BR')} itens
                </div>
              </div>

              {/* Info Rows */}
              <div style={infoRowStyles}>
                <span>Última sincronização:</span>
                <strong>{channel.lastSync}</strong>
              </div>

              <div style={infoRowStyles}>
                <span>Próxima sincronização:</span>
                <strong>{channel.nextSync}</strong>
              </div>

              {/* Actions */}
              {channel.status === 'error' && (
                <Button variant="alert" size="small" fullWidth>
                  Tentar Novamente
                </Button>
              )}

              {channel.status === 'syncing' && (
                <Button variant="secondary" size="small" fullWidth disabled>
                  Sincronizando...
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
}
