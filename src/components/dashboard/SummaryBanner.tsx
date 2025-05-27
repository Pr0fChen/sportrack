import React from 'react';
import { Calendar, TrendingUp, Weight } from 'lucide-react';

export default function SummaryBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1: Prochaine séance */}
      <div className="bg-white border border-slate-300 shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-500 text-sm">Prochaine séance</h3>
            <p className="text-slate-800 text-xl font-semibold mt-1">Push - Aujourd'hui</p>
            <p className="text-slate-500 text-sm mt-1">14:00 - Salle de sport</p>
          </div>
          <Calendar className="w-10 h-10 text-sky-600" />
        </div>
        <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-lg transition-colors">
          Démarrer
        </button>
      </div>

      {/* Card 2: Progression hebdomadaire */}
      <div className="bg-white border border-slate-300 shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-500 text-sm">Progression hebdomadaire</h3>
            <p className="text-slate-800 text-xl font-semibold mt-1">3 / 4 séances</p>
          </div>
          <TrendingUp className="w-10 h-10 text-sky-600" />
        </div>
        <div className="mt-4 bg-slate-200 h-2 rounded-full">
          <div className="bg-sky-500 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Card 3: Volume total */}
      <div className="bg-white border border-slate-300 shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-500 text-sm">Volume total</h3>
            <p className="text-slate-800 text-xl font-semibold mt-1">24,500 kg</p>
            <p className="text-slate-500 text-sm mt-1">Cette semaine</p>
          </div>
          <Weight className="w-10 h-10 text-sky-600" />
        </div>
      </div>
    </div>
  );
}