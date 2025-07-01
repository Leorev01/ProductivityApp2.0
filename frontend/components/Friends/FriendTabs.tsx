import { Friend } from "@/types/types";
import FriendCard from "./FriendCard";

interface FriendTabsProps {
  activeTab: 'friends' | 'requests' | 'suggestions';
  friends: Friend[];
  friendRequests: Friend[];
  suggestions: Friend[];
}

const FriendTabs = ({ activeTab, friends, friendRequests, suggestions }: FriendTabsProps) => {
  switch (activeTab) {
    case 'friends':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      );
    
    case 'requests':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {friendRequests.map((request) => (
            <FriendCard key={request.id} friend={request} />
          ))}
        </div>
      );
    
    case 'suggestions':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {suggestions.map((suggestion) => (
            <FriendCard key={suggestion.id} friend={suggestion} />
          ))}
        </div>
      );
    
    default:
      return null;
  }
}

export default FriendTabs;