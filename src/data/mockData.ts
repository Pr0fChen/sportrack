export interface Session {
  id: string;
  date: string;
  type: 'Push' | 'Pull' | 'Legs';
  location: 'Home' | 'Gym';
  volume: number;
}

export interface PersonalRecord {
  id: string;
  exercise: string;
  value: number;
  unit: string;
  date: string;
}

export interface Notification {
  id: string;
  type: 'achievement' | 'comment' | 'system';
  message: string;
  date: string;
}

export const mockSessions: Session[] = [
  { id: '1', date: '2024-03-10', type: 'Push', location: 'Gym', volume: 5000 },
  { id: '2', date: '2024-03-08', type: 'Pull', location: 'Home', volume: 4500 },
  { id: '3', date: '2024-03-06', type: 'Legs', location: 'Gym', volume: 6000 },
  { id: '4', date: '2024-03-04', type: 'Push', location: 'Gym', volume: 4800 },
  { id: '5', date: '2024-03-02', type: 'Pull', location: 'Home', volume: 4200 },
];

export const mockPRs: PersonalRecord[] = [
  { id: '1', exercise: 'Bench Press', value: 100, unit: 'kg', date: '2024-03-10' },
  { id: '2', exercise: 'Deadlift', value: 180, unit: 'kg', date: '2024-03-08' },
  { id: '3', exercise: 'Squat', value: 140, unit: 'kg', date: '2024-03-06' },
];

export const mockNotifications: Notification[] = [
  { id: '1', type: 'achievement', message: 'New badge: 100kg Bench Press Club', date: '2024-03-10' },
  { id: '2', type: 'comment', message: 'Alex commented on your workout', date: '2024-03-09' },
  { id: '3', type: 'system', message: 'Weekly summary available', date: '2024-03-08' },
];