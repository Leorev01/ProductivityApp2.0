import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {Request, Response} from "express"

//Get current file path and convert it to a file path
const __filename = fileURLToPath(import.meta.url)

//Get directory path of current file
const __dirname = path.dirname(__filename)

//Fetch Habits function
const fetchHabits = async (req: Request, res: Response) => {
    try{
        const filePath = path.join(__dirname, '../data/habits.json');
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

export {fetchHabits};