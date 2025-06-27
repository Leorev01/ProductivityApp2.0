import { Habit, MockDatabase } from '../types/habit';
import habitsJsonData from './habits.json';

// Import data from JSON file as initial database
const initialDatabase: MockDatabase = habitsJsonData as MockDatabase;

// Helper to get today's date as string
export const getTodayString = (): string => {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
};

// Get all habits
export const getAllHabits = (): Habit[] => {
    return initialDatabase.habits;
};

// Simple daily tracking in memory (resets on page refresh)
let todaysCompletedHabits: number[] = [];

// Check if habit is completed today
export const isHabitCompleted = (habitId: number): boolean => {
    return todaysCompletedHabits.includes(habitId);
};

// Toggle habit completion
export const toggleHabitCompletion = (habitId: number): boolean => {
    const isCompleted = todaysCompletedHabits.includes(habitId);
    
    if (isCompleted) {
        // Remove from completed
        todaysCompletedHabits = todaysCompletedHabits.filter(id => id !== habitId);
    } else {
        // Add to completed
        todaysCompletedHabits = [...todaysCompletedHabits, habitId];
    }
    
    return !isCompleted;
};

// Check if all habits are completed today (green day)
export const areAllHabitsCompleted = (): boolean => {
    return todaysCompletedHabits.length === initialDatabase.habits.length;
};

// Get all completed habits for today
export const getTodaysCompletedHabits = (): number[] => {
    return todaysCompletedHabits;
};