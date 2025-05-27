import React from 'react';
import { Menu, Bell, Dumbbell } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-800 border-b border-gray-700 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-700 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center ml-4">
            <Dumbbell className="w-8 h-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold">FitTrack</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-700 rounded-lg relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}