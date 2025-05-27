import React from 'react';
import { PlayCircle, FileText, PlusCircle } from 'lucide-react';

export default function ActionShortcuts() {
  const actions = [
    { icon: PlayCircle, label: 'Démarrer une séance', color: 'text-purple-500' },
    { icon: FileText, label: 'Créer un template', color: 'text-teal-500' },
    { icon: PlusCircle, label: 'Ajouter un exercice', color: 'text-blue-500' },
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
      <div className="grid grid-cols-1 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex items-center bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors w-full"
          >
            <action.icon className={`w-6 h-6 ${action.color} mr-3`} />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}