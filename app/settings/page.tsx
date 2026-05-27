/**
 * Settings Page
 * Layout: Sidebar + Header + Settings Form
 */

'use client';

import React, { useState } from 'react';
import { COLORS, TYPOGRAPHY } from '@/lib/design-tokens';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import Input from '@/components/Input';

interface SettingsForm {
  companyName: string;
  email: string;
  timezone: string;
  currency: string;
  autoSync: boolean;
  syncInterval: string;
  notifications: boolean;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsForm>({
    companyName: 'Minha Empresa Ltda',
    email: 'admin@empresa.com',
    timezone: 'America/Sao_Paulo',
    currency: 'BRL',
    autoSync: true,
    syncInterval: '30',
    notifications: true,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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

  const settingsContainerStyles: React.CSSProperties = {
    maxWidth: '600px',
    background: COLORS.bg.surface,
    border: `1px solid ${COLORS.border.main}`,
    borderRadius: '8px',
    padding: '32px',
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: '32px',
    paddingBottom: '32px',
    borderBottom: `1px solid ${COLORS.border.main}`,
  };

  const sectionTitleStyles: React.CSSProperties = {
    ...TYPOGRAPHY.h3,
    color: COLORS.text.primary,
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '20px',
    margin: '0 0 20px 0',
  };

  const formGroupStyles: React.CSSProperties = {
    marginBottom: '20px',
  };

  const labelStyles: React.CSSProperties = {
    ...TYPOGRAPHY.label,
    color: COLORS.text.primary,
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    border: `1px solid ${COLORS.border.main}`,
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
  };

  const selectStyles: React.CSSProperties = {
    ...inputStyles,
  };

  const checkboxContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const checkboxStyles: React.CSSProperties = {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
    accentColor: COLORS.primary.main,
  };

  const actionButtonsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    marginTop: '32px',
  };

  const successMessageStyles: React.CSSProperties = {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.success,
    marginBottom: '20px',
    padding: '12px 16px',
    background: COLORS.status.success,
    borderRadius: '6px',
    border: `1px solid ${COLORS.success}`,
  };

  return (
    <Layout currentPage="Configurações">
      {/* Page Header */}
      <div style={pageHeaderStyles}>
        <h1 style={pageTitleStyles}>Configurações</h1>
        <p style={pageSubtitleStyles}>
          Gerencie as configurações da sua conta e da aplicação
        </p>
      </div>

      {/* Settings Form */}
      <div style={settingsContainerStyles}>
        {saved && (
          <div style={successMessageStyles}>
            ✓ Configurações salvas com sucesso!
          </div>
        )}

        {/* Company Information Section */}
        <div style={sectionStyles}>
          <h3 style={sectionTitleStyles}>Informações da Empresa</h3>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Nome da Empresa</label>
            <input
              type="text"
              name="companyName"
              value={settings.companyName}
              onChange={handleChange}
              style={inputStyles}
            />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Email de Contato</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              style={inputStyles}
            />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Fuso Horário</label>
            <select
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              style={selectStyles}
            >
              <option value="America/Sao_Paulo">
                São Paulo (UTC -3)
              </option>
              <option value="America/New_York">Nova York (UTC -5)</option>
              <option value="Europe/London">Londres (UTC +0)</option>
              <option value="Asia/Tokyo">Tóquio (UTC +9)</option>
            </select>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Moeda Padrão</label>
            <select
              name="currency"
              value={settings.currency}
              onChange={handleChange}
              style={selectStyles}
            >
              <option value="BRL">Real (R$)</option>
              <option value="USD">Dólar ($)</option>
              <option value="EUR">Euro (€)</option>
              <option value="GBP">Libra (£)</option>
            </select>
          </div>
        </div>

        {/* Synchronization Section */}
        <div style={sectionStyles}>
          <h3 style={sectionTitleStyles}>Sincronização</h3>

          <div style={formGroupStyles}>
            <div style={checkboxContainerStyles}>
              <input
                type="checkbox"
                id="autoSync"
                name="autoSync"
                checked={settings.autoSync}
                onChange={handleChange}
                style={checkboxStyles}
              />
              <label
                htmlFor="autoSync"
                style={{ ...labelStyles, margin: 0, cursor: 'pointer' }}
              >
                Ativar sincronização automática
              </label>
            </div>
          </div>

          {settings.autoSync && (
            <div style={formGroupStyles}>
              <label style={labelStyles}>Intervalo de Sincronização (minutos)</label>
              <input
                type="number"
                name="syncInterval"
                value={settings.syncInterval}
                onChange={handleChange}
                style={inputStyles}
                min="5"
                max="360"
              />
            </div>
          )}
        </div>

        {/* Notifications Section */}
        <div
          style={{
            marginBottom: '32px',
          }}
        >
          <h3 style={sectionTitleStyles}>Notificações</h3>

          <div style={formGroupStyles}>
            <div style={checkboxContainerStyles}>
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                style={checkboxStyles}
              />
              <label
                htmlFor="notifications"
                style={{ ...labelStyles, margin: 0, cursor: 'pointer' }}
              >
                Ativar notificações por email
              </label>
            </div>
          </div>

          <div style={formGroupStyles}>
            <div style={checkboxContainerStyles}>
              <input
                type="checkbox"
                id="notifyAlerts"
                defaultChecked
                style={checkboxStyles}
              />
              <label
                htmlFor="notifyAlerts"
                style={{
                  ...TYPOGRAPHY.bodySmall,
                  color: COLORS.text.primary,
                  cursor: 'pointer',
                  margin: 0,
                }}
              >
                Notificar sobre produtos críticos
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={actionButtonsStyles}>
          <Button variant="primary" onClick={handleSave}>
            <i className="fas fa-save" style={{ marginRight: '8px' }} />
            Salvar Configurações
          </Button>
          <Button variant="secondary">
            <i className="fas fa-times" style={{ marginRight: '8px' }} />
            Cancelar
          </Button>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="max-width: 600px"] {
            padding: 20px !important;
          }
        }
      `}</style>
    </Layout>
  );
}
