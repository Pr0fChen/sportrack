import React from 'react';
import { Trophy } from 'lucide-react';
import { mockPRs } from '../../data/mockData';

export default function RecentPRs() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Derniers records</h2>
      <div className="space-y-4">
        {mockPRs.map((pr) => (
          <div
            key={pr.id}
            className="flex items-center bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
          >
            <Trophy className="w-8 h-8 text-yellow-500 mr-4" />
            <div>
              <h3 className="font-medium">{pr.exercise}</h3>
              <p className="text-sm text-gray-400">
                {pr.value}{pr.unit} - {new Date(pr.date).toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}