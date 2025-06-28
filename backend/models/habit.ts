

// Simple habit type for mock database
export interface Habit {
    id: number;
    userId: number;
    title: string;
    description: string;
    createdAt: string;
}

// Daily completion tracking
export interface DailyCompletion {
    date: string; // YYYY-MM-DD format
    completedHabits: number[]; // Array of completed habit IDs
    isGreenDay: boolean; // True when all habits completed
}

// Mock database structure
export interface MockDatabase {
    habits: Habit[];
    dailyCompletions: DailyCompletion[];
    lastUpdated: string;
}