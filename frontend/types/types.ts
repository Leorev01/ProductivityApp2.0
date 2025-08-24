// Simple habit type
export interface Habit {
    id: number;
    userId: number;
    title: string;
    description: string;
    createdAt: string;
}
export interface User {
    id: number
    email: string
    password: string
    name: string
    username: string
    avatar?: string
    phone: string
    joinDate: string
    membershipType: string
    dayStreak: number
    completedTasks: number
    totalXP: number
    level: number
}

// Single unified Friend type
export interface Friend {
  id: number;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
  status: 'accepted' | 'pending' | 'suggested';
  onlineStatus?: 'online' | 'offline'; // Only for accepted friends
  
  // Fields only relevant for accepted friends
  level?: number;
  totalXP?: number;
  streak?: number;
  completedToday?: number;
  totalHabits?: number;
  
  // Fields only relevant for pending requests
  requestedAt?: string;
  
  // Fields only relevant for suggestions
  reason?: string;
}
