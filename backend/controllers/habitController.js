import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fetchHabits = async (req, res) => {
    try{
        const filePath = path.join(__dirname, '../data/habits.json');
        const data = await fs.promises.readFile(filePath, 'utf-8');
        const habitsData = JSON.parse(data);
        res.status(200).json(habitsData.habits); // Return just the habits array
    }catch(error) {
        console.error('Error reading habits:', error);
        return res.status(500).json({ 
            success: false,
            error: 'Failed to read habits' 
        });
    }
}

export default fetchHabits;