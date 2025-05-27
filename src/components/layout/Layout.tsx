import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from '../dashboard/Dashboard';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-16 lg:pl-64">
        <div className="container mx-auto px-4 py-8">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}