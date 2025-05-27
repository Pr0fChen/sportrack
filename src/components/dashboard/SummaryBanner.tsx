import React from 'react';
import { Calendar, TrendingUp, Weight } from 'lucide-react';

export default function SummaryBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm">Prochaine séance</h3>
            <p className="text-xl font-semibold mt-1">Push - Aujourd'hui</p>
            <p className="text-gray-400 text-sm mt-1">14:00 - Salle de sport</p>
          </div>
          <Calendar className="w-10 h-10 text-purple-500" />
        </div>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
          Démarrer
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm">Progression hebdomadaire</h3>
            <p className="text-xl font-semibold mt-1">3 / 4 séances</p>
          </div>
          <TrendingUp className="w-10 h-10 text-teal-500" />
        </div>
        <div className="mt-4 bg-gray-700 h-2 rounded-full">
          <div className="bg-teal-500 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm">Volume total</h3>
            <p className="text-xl font-semibold mt-1">24,500 kg</p>
            <p className="text-gray-400 text-sm mt-1">Cette semaine</p>
          </div>
          <Weight className="w-10 h-10 text-purple-500" />
        </div>
      </div>
    </div>
  );
}