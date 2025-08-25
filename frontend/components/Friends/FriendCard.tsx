import {Friend} from "@/types/types" 
import { 
  UserPlusIcon, 
  ChartBarIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline';
import { 
  TrophyIcon as TrophySolidIcon,
  FireIcon as FireSolidIcon 
} from '@heroicons/react/24/solid';

export const FriendCard = ({ friend }: { friend: Friend }) => {
    
    const getStatusColor = (onlineStatus?: string) => {
        return onlineStatus === 'online' ? 'bg-green-400' : 'bg-gray-400';
    };

    return(
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {friend.status === 'accepted' && friend.onlineStatus && (
              <span className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(friend.onlineStatus)} rounded-full border-2 border-white`}></span>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{friend.name}</h3>
            <p className="text-sm text-gray-500">@{friend.username}</p>
            {friend.mutualFriends > 0 && (
              <p className="text-xs text-indigo-600 mt-1">
                {friend.mutualFriends} mutual friend{friend.mutualFriends > 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {friend.status === 'accepted' && (
            <>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <ChartBarIcon className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <EllipsisVerticalIcon className="w-4 h-4" />
              </button>
            </>
          )}
          
          {friend.status === 'pending' && (
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                Accept
              </button>
              <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300">
                Decline
              </button>
            </div>
          )}
          
          {friend.status === 'suggested' && (
            <button className="flex items-center space-x-1 px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
              <UserPlusIcon className="w-4 h-4" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
      
      {friend.status === 'accepted' && friend.level && (
        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <TrophySolidIcon className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-900">{friend.level}</span>
            </div>
            <p className="text-xs text-gray-500">Level</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <FireSolidIcon className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-900">{friend.daysCompleted?.length}</span>
            </div>
            <p className="text-xs text-gray-500">Streak</p>
          </div>
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-900">{friend.completedToday}/{friend.totalHabits}</span>
            <p className="text-xs text-gray-500">Today</p>
          </div>
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-900">{friend.xp?.toLocaleString()}</span>
            <p className="text-xs text-gray-500">XP</p>
          </div>
        </div>
      )}
      
      {friend.status === 'pending' && friend.requestedAt && (
        <div className="mt-3 text-xs text-gray-500">
          Requested {friend.requestedAt}
        </div>
      )}
      
      {friend.status === 'suggested' && friend.reason && (
        <div className="mt-3 text-xs text-indigo-600">
          {friend.reason}
        </div>
      )}
    </div>
    )
};

export default FriendCard;