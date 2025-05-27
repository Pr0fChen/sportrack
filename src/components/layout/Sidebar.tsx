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
  isExpanded: boolean;
  onClose: () => void;
}

export default function Sidebar({ isExpanded, onClose }: SidebarProps) {
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
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${
          isExpanded ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      ></div>
      
      <aside
        className={`fixed top-0 left-0 h-full ${isExpanded ? 'w-64' : 'w-20'} bg-white border-r border-slate-300 transform transition-all duration-200 ease-in-out z-50 ${
          isExpanded ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg text-slate-800">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center py-3 text-slate-600 hover:bg-slate-100 hover:text-sky-600 ${
                item.active ? 'bg-sky-50 text-sky-600' : ''
              } ${isExpanded ? 'px-6' : 'px-4 justify-center'}`}
            >
              <item.icon className="w-5 h-5" /> {/* Icon color will inherit from text color */}
              <span className={`ml-3 origin-left duration-200 ${isExpanded ? 'inline' : 'hidden'}`}>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}