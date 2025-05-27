import React from 'react';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  BarChart2, 
  Users, 
  User, 
  Settings,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Accueil', active: true },
    { icon: Calendar, label: 'Séances' },
    { icon: BookOpen, label: 'Programmes' },
    { icon: BarChart2, label: 'Statistiques' },
    { icon: Users, label: 'Communauté' },
    { icon: User, label: 'Profil' },
    { icon: Settings, label: 'Paramètres' },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      ></div>
      
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-200 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white ${
                item.active ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="ml-3">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}