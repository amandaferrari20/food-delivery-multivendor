/* eslint-disable react-hooks/exhaustive-deps */
'use client';

// Core
import { useContext } from 'react';

// Context
import { LayoutContext } from '@/lib/context/global/layout.context';

// Components
import AppTopbar from '@/lib/ui/screen-components/protected/layout/super-admin-layout/app-bar';
import SuperAdminSidebar from '@/lib/ui/screen-components/protected/layout/super-admin-layout/side-bar';

// Interface
import { IProvider, LayoutContextProps } from '@/lib/utils/interfaces';

const Layout = ({ children }: IProvider) => {
  const { isSuperAdminSidebarVisible } =
    useContext<LayoutContextProps>(LayoutContext);
  return (
    <div className="layout-main">
      <div className="layout-top-container">
        <AppTopbar />
      </div>
      <div className="layout-main-container">
        <div className="relative left-0 z-50">
          <SuperAdminSidebar />
        </div>
        <div
          className={`lg:ml-45 h-auto w-full md:ml-${isSuperAdminSidebarVisible ? 64 : 20}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
