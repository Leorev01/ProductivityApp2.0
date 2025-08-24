import path from "path"
import fs from "fs"
import { fileURLToPath } from "url";
import { Request, Response } from "express";
import { Friend } from "../models/friend.js";
import { User } from "../models/user.js";

//Get current file path and convert it to a file path
const __filename = fileURLToPath(import.meta.url)

//Get directory path of current file
const __dirname = path.dirname(__filename)

//Fetch Friends function
const fetchFriends = async (req: Request, res: Response) => {
    try {
        const userId = Number(req.query.userId);
        if (!userId || isNaN(userId)) {
            return res.status(400).json({
                success: false,
                error: "Valid User ID is required"
            });
        }
        
        // Get friends relationships
        const friendsPath = path.join(__dirname, '../data/friends.json');
        const usersPath = path.join(__dirname, '../data/users.json');
        
        // Check if files exist
        if (!fs.existsSync(friendsPath) || !fs.existsSync(usersPath)) {
            return res.status(200).json({
                success: true,
                data: []
            });
        }
        
        const friendsData = await fs.promises.readFile(friendsPath, 'utf-8');
        const usersData = await fs.promises.readFile(usersPath, 'utf-8');
        
        const friends: Friend[] = JSON.parse(friendsData);
        const users: User[] = JSON.parse(usersData);
        
        // Find user's relationships
        const userFriendships = friends.filter(friend => 
            friend.requesterId === userId || friend.addresseeId === userId
        );
        
        // Transform to frontend format
        const friendsWithUserData = userFriendships.map(friendship => {
            const otherUserId = friendship.requesterId === userId 
                ? friendship.addresseeId 
                : friendship.requesterId;
            
            const otherUser = users.find(user => user.id === otherUserId);
            if (!otherUser) return null;
            
            return {
                id: otherUser.id,
                name: otherUser.name,
                username: otherUser.username,
                avatar: otherUser.avatar || 'https://example.com/default.jpg',
                status: friendship.status,
                mutualFriends: 0, // Calculate this if needed
                onlineStatus: 'offline',
                
                // Only for accepted friends
                ...(friendship.status === 'accepted' && {
                    level: otherUser.level,
                    totalXP: otherUser.totalXP,
                    streak: otherUser.dayStreak,
                    completedToday: Math.floor(Math.random() * 10),
                    totalHabits: Math.floor(Math.random() * 15) + 5,
                }),
                
                // Only for pending requests
                ...(friendship.status === 'pending' && {
                    requestedAt: friendship.createdAt,
                })
            };
        }).filter(friend => friend !== null);
        
        return res.status(200).json({
            success: true,
            data: friendsWithUserData
        });
        
    } catch(error) {
        console.error('Error fetching friends:', error);
        return res.status(500).json({
            success: false,
            error: "Error fetching friends"
        });
    }
}

export {fetchFriends}