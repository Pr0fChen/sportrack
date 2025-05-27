import React from 'react';
import SummaryBanner from './SummaryBanner';
import SessionsChart from './SessionsChart';
import RecentPRs from './RecentPRs';
import ActionShortcuts from './ActionShortcuts';
import ActivityFeed from './ActivityFeed';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <SummaryBanner />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SessionsChart />
        <div className="space-y-6">
          <RecentPRs />
          <ActionShortcuts />
        </div>
      </div>
      <ActivityFeed />
    </div>
  );
}