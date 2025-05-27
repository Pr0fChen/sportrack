import React from 'react';
import { mockSessions } from '../../data/mockData';

export default function SessionsChart() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Dernières séances</h2>
        <div className="flex space-x-2">
          <select className="bg-gray-700 text-sm rounded-lg px-3 py-1.5 border border-gray-600">
            <option>7 jours</option>
            <option>30 jours</option>
          </select>
          <select className="bg-gray-700 text-sm rounded-lg px-3 py-1.5 border border-gray-600">
            <option>Tous les lieux</option>
            <option>Maison</option>
            <option>Salle</option>
          </select>
        </div>
      </div>
      
      <div className="h-64 flex items-end space-x-2">
        {mockSessions.map((session) => (
          <div
            key={session.id}
            className="flex-1 bg-purple-500 bg-opacity-20 hover:bg-opacity-30 transition-all rounded-t-lg relative group"
            style={{ height: `${(session.volume / 6000) * 100}%` }}
          >
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-xs py-1 px-2 rounded">
              {session.volume}kg
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        {mockSessions.map((session) => (
          <div key={session.id} className="text-center">
            {new Date(session.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' })}
          </div>
        ))}
      </div>
    </div>
  );
}