'use client';

import { useState, useEffect } from 'react';
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  CalendarIcon,
  TrophyIcon,
  ChartBarIcon,
  PencilIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    id: 1,
    name: 'Alex Johnson',
    username: 'alexjohnson',
    avatar: 'https://example.com/avatar1',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024',
    membershipType: 'Standard',
    dayStreak: 0,
    completedTasks: 0,
    totalXP: 0,
    level: 0,
  });

  const [editData, setEditData] = useState(profileData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        // Changed from https to http and updated endpoint
        const response = await fetch('http://localhost:4000/api/user?id=1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add authorization header if you have authentication
            // 'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProfileData({
          id: data.id || 1,
          name: data.name || 'Alex Johnson',
          username: data.username || 'alexjohnson',
          avatar: data.avatar || 'https://example.com/avatar1',
          email: data.email || 'alex.johnson@example.com',
          phone: data.phone || '+1 (555) 123-4567',
          joinDate: data.joinDate || 'January 2024',
          membershipType: data.membershipType || 'Standard',
          dayStreak: data.dayStreak || 0,
          completedTasks: data.completedTasks || 0,
          totalXP: data.totalXP || 0,
          level: data.level || 0,
        });
        setEditData(profileData);
      } catch (error: any) {
        console.error('Error fetching user data:', error);
        setError(error.message);
        // Keep default data on error
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const stats = [
    { name: 'Habits Completed', value: profileData.completedTasks.toString(), icon: CheckIcon, color: 'text-green-600' },
    { name: 'Current Streak', value: `${profileData.dayStreak} days`, icon: ChartBarIcon, color: 'text-indigo-600' },
    { name: 'Total XP', value: profileData.totalXP.toString(), icon: TrophyIcon, color: 'text-yellow-600' },
    { name: 'Level', value: profileData.level.toString(), icon: TrophyIcon, color: 'text-purple-600' },
  ];

  const achievements = [
    { name: 'First Week', description: 'Complete 7 days in a row', earned: profileData.dayStreak >= 7 },
    { name: 'Habit Master', description: 'Maintain 10 habits simultaneously', earned: profileData.completedTasks >= 10 },
    { name: 'Early Bird', description: 'Complete morning routine 30 times', earned: false },
    //{ name: 'Social Butterfly', description: 'Invite 5 friends to the app', earned: profileData.friends.length >= 5 },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error: {error}</p>
          <p className="text-gray-600 mt-2">Using default profile data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Rest of your component stays the same */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
                    <UserIcon className="h-12 w-12 text-indigo-600" />
                  </div>
                  <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-gray-900">{profileData.name}</h2>
                  <p className="mt-2 text-sm text-gray-600">Level {profileData.level} • {profileData.membershipType}</p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <EnvelopeIcon className="h-4 w-4" />
                    <span className="text-sm">{profileData.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <CalendarIcon className="h-4 w-4" />
                    <span className="text-sm">Joined {profileData.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-900">Phone</span>
                  </div>
                  <span className="text-sm text-gray-600">{profileData.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Achievements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Statistics */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Your Statistics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.name} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`p-4 rounded-lg border-2 ${
                      achievement.earned
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          achievement.earned
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        <TrophyIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className={`font-medium ${
                          achievement.earned ? 'text-green-900' : 'text-gray-900'
                        }`}>
                          {achievement.name}
                        </h4>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}