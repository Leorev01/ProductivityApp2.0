import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {Request, Response} from "express"
import { Habit } from 'src/models/habit';

//Get current file path and convert it to a file path
const __filename = fileURLToPath(import.meta.url)

//Get directory path of current file
const __dirname = path.dirname(__filename)

//filepath
const filePath = path.join(__dirname, '../data/habits.json');

//Fetch Habits function
const fetchAllHabits = async (req: Request, res: Response) => {
    try{
        const data = await fs.promises.readFile(filePath, 'utf-8');
        const habitsData = JSON.parse(data);
        res.status(200).json(habitsData.habits); // Return just the habits array
    }catch(error) {
        console.error('Error reading habits:', error);
        res.status(500).json({ 
            success: false,
            error: 'Failed to read habits' 
        });
    }
}

//Fetch Habits function
const fetchHabit = async (req: Request, res: Response) => {
    try{
        const habitId = parseInt(req.query.id as string);
        const data = await fs.promises.readFile(filePath, 'utf-8');
        const habitsData = JSON.parse(data);
        const habits: Habit[] = habitsData.habits.filter((habit: Habit) => habit.userId === habitId);
        res.status(200).json(habits);
    }catch(error) {
        console.error('Error reading habits:', error);
        res.status(500).json({ 
            success: false,
            error: 'Failed to read habits' 
        });
    }
}

export {fetchHabit, fetchAllHabits};