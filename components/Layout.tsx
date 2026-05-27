/**
 * Layout Component
 * Estrutura: Sidebar (240px fixed) + Header (60px) + Content
 * Usado em todas as telas autenticadas (Dashboard, Inventory, etc)
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COLORS, COMPONENTS } from '@/lib/design-tokens';
import Button from './Button';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  userName?: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: 'fas fa-chart-line' },
  { label: 'Inventário', href: '/inventory', icon: 'fas fa-box' },
  { label: 'Sincronização', href: '/sync', icon: 'fas fa-sync-alt' },
  { label: 'Relatórios', href: '/reports', icon: 'fas fa-chart-bar' },
  { label: 'Configurações', href: '/settings', icon: 'fas fa-cog' },
];

const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage = 'Dashboard',
  userName: initialUserName = 'João Silva',
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userName, setUserName] = useState(initialUserName);

  useEffect(() => {
    // Recuperar nome do usuário do cookie
    const cookies = document.cookie.split(';');
    const userCookie = cookies.find(c => c.trim().startsWith('user='));
    if (userCookie) {
      try {
        const user = JSON.parse(decodeURIComponent(userCookie.split('=')[1]));
        setUserName(user.name || initialUserName);
      } catch (e) {
        // Cookie parsing error, usar padrão
      }
    }
  }, [initialUserName]);

  const sidebarStyles: React.CSSProperties = {
    ...COMPONENTS.sidebar,
    transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
    '@media (max-width: 768px)': {
      position: 'fixed',
      width: '240px',
    },
  };

  const headerStyles: React.CSSProperties = {
    ...COMPONENTS.header,
    marginLeft: sidebarOpen ? '240px' : '0',
    transition: 'margin-left 0.3s ease',
    background: COLORS.primary.main,
    color: COLORS.text.inverse,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
  };

  const contentStyles: React.CSSProperties = {
    marginLeft: sidebarOpen ? '240px' : '0',
    padding: '40px',
    minHeight: 'calc(100vh - 60px)',
    background: COLORS.bg.default,
    transition: 'margin-left 0.3s ease',
    flex: 1,
  };

  const logoStyles: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 600,
    color: COLORS.text.inverse,
    background: COLORS.primary.main,
    padding: '12px 16px',
    borderRadius: '6px',
    textAlign: 'center',
    marginBottom: '32px',
    fontFamily: '"Georgia", serif',
    cursor: 'pointer',
  };

  const navItemStyles = (active: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    marginBottom: '12px',
    borderRadius: '6px',
    background: active ? COLORS.primary.main : 'transparent',
    color: active ? COLORS.text.inverse : COLORS.primary.main,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: active ? 600 : 400,
    fontFamily: '"Arial", sans-serif',
    border: 'none',
  });

  const logoutButtonStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    width: 'calc(100% - 40px)',
  };

  const userMenuStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginLeft: 'auto',
  };

  const avatarStyles: React.CSSProperties = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: COLORS.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 600,
    color: COLORS.text.primary,
    fontFamily: '"Arial", sans-serif',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* SIDEBAR */}
      <aside
        style={sidebarStyles}
        className="sidebar"
      >
        <div style={logoStyles}>StockSync</div>

        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={navItemStyles(currentPage === item.label)}
            >
              <i style={{ width: '16px' }} className={item.icon as string} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div style={logoutButtonStyles}>
          <Button
            variant="alert"
            size="small"
            fullWidth
            onClick={async () => {
              // Limpar cookie e redirecionar para login
              document.cookie = 'user=; Max-Age=0; path=/;';
              window.location.href = '/login';
            }}
          >
            Logout
          </Button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* HEADER */}
        <header style={headerStyles}>
          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              display: 'none',
              '@media (max-width: 768px)': { display: 'flex' },
              background: 'transparent',
              border: 'none',
              color: COLORS.text.inverse,
              fontSize: '24px',
              cursor: 'pointer',
              marginRight: '16px',
            }}
          >
            ☰
          </button>

          {/* Breadcrumb */}
          <div
            style={{
              fontSize: '13px',
              color: COLORS.secondary.main,
              fontFamily: '"Arial", sans-serif',
            }}
          >
            {currentPage}
          </div>

          {/* User Menu */}
          <div style={userMenuStyles}>
            <span style={{ fontSize: '13px', color: COLORS.secondary.main }}>
              {userName}
            </span>
            <div style={avatarStyles}>{getInitials(userName)}</div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div style={contentStyles}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
