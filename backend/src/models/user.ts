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
    daysCompleted: string[]
    completedTasks: number
    totalXP: number
    level: number
}