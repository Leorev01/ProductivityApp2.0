import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { User } from '../models/user'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// Get the current file's URL and convert it to a file path (ES modules equivalent of __filename)
const __filename = fileURLToPath(import.meta.url)

// Get the directory path of the current file (ES modules equivalent of __dirname)
const __dirname = path.dirname(__filename)

// Build the absolute path to the users.json file in the data folder
const filePath = path.join(__dirname, '../data/users.json')

// Helper function to read users data
const getUsersData = async (): Promise<User[]> => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        // If file doesn't exist, return empty array
        return []
    }
}

// Helper function to write users data
const saveUsersData = async (users: User[]): Promise<void> => {
    await fs.promises.writeFile(filePath, JSON.stringify(users, null, 2))
}

// Register user function
const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body
    
    // Validate input
    if (!email || !password) {
        res.status(400).json({ message: 'Email and password are required' })
        return
    }
    
    try {
        const userData = await getUsersData()
        const userExists = userData.find((user) => user.email === email)
        
        if (userExists) {
            res.status(400).json({ message: 'User already exists' })
            return 
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser: User = {
            id: userData.length + 1,
            email,
            password: hashedPassword,
            name: 'User', // Default name, can be changed later
            phone: '', // Default phone, can be changed later
            joinDate: new Date().toISOString().split('T')[0], // Current date
            membershipType: 'standard', // Default membership type
            dayStreak: 0, // Default day streak
            completedTasks: 0, // Default completed tasks
            totalXP: 0, // Default total XP
            level: 1 // Default level
        }
        userData.push(newUser)
        
        // Save the updated users data back to file
        await saveUsersData(userData)
        
        res.status(201).json({ 
            message: 'User registered successfully',
            user: { id: newUser.id, email: newUser.email } // Don't send password back
        })
        
    } catch (error) {
        console.error('Registration error:', error)
        res.status(500).json({ message: 'Server error' })
    }
}

// Login user function
const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body
    
    // Validate input
    if (!email || !password) {
        res.status(400).json({ message: 'Email and password are required' })
        return
    }
    
    try {
        const userData = await getUsersData()
        const user = userData.find((user) => user.email === email)
        
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' })
            return
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' })
            return 
        }
        
        // Use environment variable for JWT secret
        const jwtSecret = process.env.JWT_SECRET || 'fallback-secret-key'
        const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '24h' })
        
        // Send token and user data
        res.status(200).json({ 
            token,
            user: user
        })
        
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ message: 'Server error' })
    }
}

export { registerUser, loginUser }