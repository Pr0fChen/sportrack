import React from 'react';
import { Award, MessageSquare, Bell } from 'lucide-react';
import { mockNotifications } from '../../data/mockData';

export default function ActivityFeed() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Award className="w-5 h-5 text-yellow-500" />;
      case 'comment':
        return <MessageSquare className="w-5 h-5 text-blue-500" />;
      default:
        return <Bell className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Activité récente</h2>
      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
          >
            {getIcon(notification.type)}
            <div className="ml-4">
              <p className="text-sm">{notification.message}</p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(notification.date).toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}