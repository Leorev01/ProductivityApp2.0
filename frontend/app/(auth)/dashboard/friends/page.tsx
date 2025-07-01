'use client';

import React, { useState } from 'react';
import { 
  UserPlusIcon, 
  MagnifyingGlassIcon, 
  TrophyIcon, 
  FireIcon, 
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import {Friend} from '@/types/types'; // Assuming you have a types file for Friend type
import FriendCard from '@/components/Friends/FriendCard';

const FriendsPage = () => {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'suggestions'>('friends');
  const [searchQuery, setSearchQuery] = useState('');

  // All friends data in one array
  const allFriends: Friend[] = [
    // Accepted friends
    {
      id: 1,
      name: 'Sarah Chen',
      username: 'sarahchen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'accepted',
      onlineStatus: 'online',
      level: 15,
      xp: 4250,
      streak: 23,
      completedToday: 8,
      totalHabits: 12,
      mutualFriends: 3
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      username: 'mrodriguez',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'accepted',
      onlineStatus: 'offline',
      level: 12,
      xp: 3100,
      streak: 15,
      completedToday: 5,
      totalHabits: 8,
      mutualFriends: 2
    },
    {
      id: 3,
      name: 'Emily Johnson',
      username: 'emjohnson',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'accepted',
      onlineStatus: 'online',
      level: 18,
      xp: 5670,
      streak: 31,
      completedToday: 10,
      totalHabits: 15,
      mutualFriends: 5
    },
    {
      id: 4,
      name: 'David Kim',
      username: 'davidkim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'accepted',
      onlineStatus: 'online',
      level: 10,
      xp: 2890,
      streak: 7,
      completedToday: 3,
      totalHabits: 6,
      mutualFriends: 1
    },
    
    // Pending friend requests
    {
      id: 5,
      name: 'Alex Thompson',
      username: 'alexthompson',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'pending',
      mutualFriends: 2,
      requestedAt: '2 days ago'
    },
    {
      id: 6,
      name: 'Jessica Torres',
      username: 'jessicatorres',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'pending',
      mutualFriends: 1,
      requestedAt: '1 week ago'
    },
    
    // Friend suggestions
    {
      id: 7,
      name: 'Lisa Park',
      username: 'lisapark',
      avatar: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'suggested',
      mutualFriends: 4,
      reason: 'Similar habits'
    },
    {
      id: 8,
      name: 'James Wilson',
      username: 'jameswilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'suggested',
      mutualFriends: 2,
      reason: 'Productivity enthusiast'
    }
  ];

  // Filter friends by status
  const friends = allFriends.filter(friend => friend.status === 'accepted');
  const friendRequests = allFriends.filter(friend => friend.status === 'pending');
  const suggestions = allFriends.filter(friend => friend.status === 'suggested');

  const tabs = [
    { id: 'friends' as const, name: 'Friends', count: friends.length },
    { id: 'requests' as const, name: 'Requests', count: friendRequests.length },
    { id: 'suggestions' as const, name: 'Suggestions', count: suggestions.length }
  ];

  const renderContent = () => {
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
  };

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
              <p className="text-2xl font-bold text-gray-900">{friends.length}</p>
              <p className="text-gray-600 text-sm">Total Friends</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <TrophyIcon className="w-8 h-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-gray-600 text-sm">Active Challenges</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <FireIcon className="w-8 h-8 text-orange-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-gray-600 text-sm">Avg Group Streak</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <ChartBarIcon className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">85%</p>
              <p className="text-gray-600 text-sm">Success Rate</p>
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
        {renderContent()}
      </div>

      {/* Empty State for when no results */}
      {((activeTab === 'friends' && friends.length === 0) ||
        (activeTab === 'requests' && friendRequests.length === 0) ||
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

export default FriendsPage;