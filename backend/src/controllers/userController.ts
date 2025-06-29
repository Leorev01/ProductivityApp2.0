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
    try{
        const filePath = path.join(__dirname, '../data/user.json')
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const userData: User = JSON.parse(data)
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