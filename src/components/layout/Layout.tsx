import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from '../dashboard/Dashboard';

export default function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header onMenuClick={() => setSidebarExpanded(!sidebarExpanded)} />
      <Sidebar isExpanded={sidebarExpanded} onClose={() => setSidebarExpanded(false)} />
      <main className={`pt-16 ${sidebarExpanded ? 'md:pl-64' : 'md:pl-20'} transition-all duration-200 ease-in-out`}>
        <div className="container mx-auto px-4 py-8">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}