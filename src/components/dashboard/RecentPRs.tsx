import React from 'react';
import { Trophy } from 'lucide-react';
import { mockPRs } from '../../data/mockData';

export default function RecentPRs() {
  return (
    <div className="bg-white border border-slate-300 shadow-md rounded-lg p-6">
      <h2 className="text-slate-800 text-xl font-semibold mb-4">Derniers records</h2>
      <div className="space-y-4">
        {mockPRs.map((pr) => (
          <div
            key={pr.id}
            className="flex items-center bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors"
          >
            <Trophy className="w-8 h-8 text-sky-600 mr-4" />
            <div>
              <h3 className="text-slate-800 font-medium">{pr.exercise}</h3>
              <p className="text-sm text-slate-500">
                {pr.value}{pr.unit} - {new Date(pr.date).toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}