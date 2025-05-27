import React from 'react';
import { Award, MessageSquare, Bell } from 'lucide-react';
import { mockNotifications } from '../../data/mockData';

export default function ActivityFeed() {
  const getIcon = (type: string) => {
    // All icons are now text-sky-600 for consistency with the new theme
    switch (type) {
      case 'achievement':
        return <Award className="w-5 h-5 text-sky-600" />;
      case 'comment':
        return <MessageSquare className="w-5 h-5 text-sky-600" />;
      default:
        return <Bell className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <div className="bg-white border border-slate-300 shadow-md rounded-lg p-6">
      <h2 className="text-slate-800 text-xl font-semibold mb-4">Activité récente</h2>
      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors"
          >
            {getIcon(notification.type)}
            <div className="ml-4">
              <p className="text-sm text-slate-700">{notification.message}</p>
              <p className="text-xs text-slate-500 mt-1">
                {new Date(notification.date).toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}