import React from 'react';
import { PlayCircle, FileText, PlusCircle } from 'lucide-react';

export default function ActionShortcuts() {
  const actions = [
    { icon: PlayCircle, label: 'Démarrer une séance', color: 'text-sky-600' },
    { icon: FileText, label: 'Créer un template', color: 'text-sky-600' },
    { icon: PlusCircle, label: 'Ajouter un exercice', color: 'text-sky-600' },
  ];

  return (
    <div className="bg-white border border-slate-300 shadow-md rounded-lg p-6">
      <h2 className="text-slate-800 text-xl font-semibold mb-4">Actions rapides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex items-center bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-lg p-4 transition-colors w-full"
          >
            <action.icon className={`w-6 h-6 ${action.color} mr-3`} />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}