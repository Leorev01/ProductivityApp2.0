'use client';

import { useState, useEffect } from 'react';
import { 
  UserPlusIcon, 
  MagnifyingGlassIcon, 
  TrophyIcon, 
  FireIcon, 
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import FriendTabs from '@/components/Friends/FriendTabs';
import { Friend } from '@/types/types';

export default function FriendsPage(){
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'suggestions'>('friends');
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {

    const fecthFriends = async () => {
      try{
        const mockUserId = 1 //Fake user ID
        
        const response = await fetch(`http://localhost:4000/api/friends/?userId=${mockUserId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch friends data');
        }
        const data = await response.json();
        setFriends(data.data);

      }catch{
        console.error('Error fetching friends data');
      }
    }
    fecthFriends();
  }, [searchQuery]);

  // Filter friends by status
  const accepted = friends.filter(friend => friend.status === 'accepted');
  const requested = friends.filter(friend => friend.status === 'pending');
  const suggestions = friends.filter(friend => friend.status === 'suggested');

  function fetchAverageFriendStats(){
  if (accepted.length === 0) {
    return {
      averageStreak: 0,
      averageXP: 0,
      topFriendLevel: 0,
      topFriendUsername: '', // ✅ Added username
    };
  }
  
  const totalStreaks = accepted.reduce((sum, friend) => sum + (friend.streak || 0), 0);
  const totalXP = accepted.reduce((sum, friend) => sum + (friend.totalXP || 0), 0);
  const topFriend = accepted.reduce(
    (max, friend) => ((friend.level ?? 0) > (max.level ?? 0) ? friend : max),
    accepted[0]
  );
  
  return {
    averageStreak: Math.round(totalStreaks / accepted.length),
    averageXP: Math.round(totalXP / accepted.length),
    topFriendLevel: topFriend.level || 0,
    topFriendUsername: topFriend.username || 'Unknown', // ✅ Added username
  };
}

// ✅ Update the destructuring to include username
const { averageStreak, averageXP, topFriendLevel, topFriendUsername } = fetchAverageFriendStats();


  const tabs = [
    { id: 'friends' as const, name: 'Friends', count: accepted.length },
    { id: 'requests' as const, name: 'Requests', count: requested.length },
    { id: 'suggestions' as const, name: 'Suggestions', count: suggestions.length }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Friends</h1>
            <p className="text-gray-600 mt-1">Connect with friends and stay motivated together</p>
          </div>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <UserPlusIcon className="w-5 h-5" />
            <span>Add Friends</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <UserGroupIcon className="w-8 h-8 text-indigo-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{accepted.length}</p>
              <p className="text-gray-600 text-sm">Total Friends</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <TrophyIcon className="w-8 h-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{topFriendUsername}<span className='text-xl font-extralight'>:LV{topFriendLevel}</span></p>
              <p className="text-gray-600 text-sm">Top Ranked Friend</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <FireIcon className="w-8 h-8 text-orange-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{averageStreak}</p>
              <p className="text-gray-600 text-sm">Avg Friend Streak</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <ChartBarIcon className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{averageXP} XP</p>
              <p className="text-gray-600 text-sm">Avergae Friend XP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        
        <div className="px-6">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
                {tab.count > 0 && (
                  <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                    activeTab === tab.id
                      ? 'bg-indigo-100 text-indigo-600'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        <FriendTabs 
          activeTab={activeTab}
          friends={accepted}
          friendRequests={requested}
          suggestions={suggestions}
        />
      </div>

      {/* Empty State for when no results */}
      {((activeTab === 'friends' && accepted.length === 0) ||
        (activeTab === 'requests' && requested.length === 0) ||
        (activeTab === 'suggestions' && suggestions.length === 0)) && (
        <div className="text-center py-12">
          <UserGroupIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {activeTab === 'friends' && 'No friends yet'}
            {activeTab === 'requests' && 'No pending requests'}
            {activeTab === 'suggestions' && 'No suggestions available'}
          </h3>
          <p className="text-gray-500 mb-6">
            {activeTab === 'friends' && 'Start connecting with friends to make habit building more fun!'}
            {activeTab === 'requests' && 'Friend requests will appear here when someone wants to connect.'}
            {activeTab === 'suggestions' && 'We\'ll suggest friends based on your habits and interests.'}
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <UserPlusIcon className="w-5 h-5 inline mr-2" />
            Find Friends
          </button>
        </div>
      )}
    </div>
  );
};
