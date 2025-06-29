import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import { Request, Response } from "express"
import {User} from "../models/user"

//Get current file path and convert it to a file path
const __filename = fileURLToPath(import.meta.url)

//Get directory path of current file
const __dirname = path.dirname(__filename)

//Fetch User function
const fetchUser = async (req: Request, res: Response) => {
    const userId = req.query.id as string;
    if (!userId) {
        return res.status(400).json({ 
            success: false, 
            error: 'User ID is required' 
        });
    }
    try{
        const filePath = path.join(__dirname, '../data/users.json')
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const users: User[] = JSON.parse(data)
        const userData = users.find(user => user.id === parseInt(userId))
        if (!userData) {
            return res.status(404).json({ 
                success: false, 
                error: 'User not found' 
            });
        }
        res.status(200).json(userData)
    }catch(error){
        console.error('Error fetching user:', error);
        res.status(500).json({ 
            success: false,
            error: 'Failed to fetch user' 
        });
    }
}

export {fetchUser}