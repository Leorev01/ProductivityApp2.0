import path from "path"
import fs from "fs"
import { fileURLToPath } from "url";
import { Request, Response } from "express";
import { Friend } from "src/models/friend";

//Get current file path and convert it to a file path
const __filename = fileURLToPath(import.meta.url)

//Get directory path of current file
const __dirname = path.dirname(__filename)

//Fetch Friends function
const fetchFriends = async (req: Request, res: Response) => {
    const userId = Number(req.query.userId);
    if(!userId){
        return res.status(400).json({
            success:false,
            error: "User ID is required"
        });
    }
    try{
        const filePath = path.join('../data/friends.json')
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const friends: Friend[] = JSON.parse(data)
        if(!friends){
            return res.status(404).json({
                success:false,
                error: "No friends found"
            })
        }
        const userFriends = friends.filter((friend) => 
            friend.requesterId === userId || friend.addresseeId === userId
        );

        return res.status(200).json(userFriends)
    }catch{
        res.status(500).json({
            success: false,
            error: "Error fetching friends"
        })
    }
}