export interface User {
    id: number
    email: string
    password: string
    name: string
    avatar: string
    phone: string
    joinDate: string
    membershipType: string
    dayStreak: number
    completedTasks: number
    totalXP: number
    level: number
    friends: number[]
}