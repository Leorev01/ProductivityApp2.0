// Backend Friend model should match your frontend type
export interface Friend {
    id: number
    requesterId: number    // Who sent the request
    addresseeId: number    // Who received the request
    status: 'pending' | 'accepted' | 'rejected' | 'blocked' | 'suggested'
    createdAt: string
    acceptedAt?: string
    updatedAt: string
}