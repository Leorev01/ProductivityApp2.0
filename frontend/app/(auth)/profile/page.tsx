'use client';

import { useState } from 'react';
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  CalendarIcon,
  TrophyIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Leonardo Revrenna',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024',
    bio: 'Passionate about building better habits and achieving personal growth through gamification.',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time (PT)'
  });

  const [editData, setEditData] = useState(profileData);

  const stats = [
    { name: 'Habits Completed', value: '247', icon: CheckIcon, color: 'text-green-600' },
    { name: 'Current Streak', value: '15 days', icon: ChartBarIcon, color: 'text-indigo-600' },
    { name: 'Total XP', value: '3,420', icon: TrophyIcon, color: 'text-yellow-600' },
    { name: 'Level', value: '12', icon: TrophyIcon, color: 'text-purple-600' },
  ];

  const achievements = [
    { name: 'First Week', description: 'Complete 7 days in a row', earned: true },
    { name: 'Habit Master', description: 'Maintain 10 habits simultaneously', earned: true },
    { name: 'Early Bird', description: 'Complete morning routine 30 times', earned: false },
    { name: 'Social Butterfly', description: 'Invite 5 friends to the app', earned: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
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
                
                {isEditing ? (
                  <div className="mt-4 space-y-4">
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({...editData, name: e.target.value})}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center text-xl font-bold"
                    />
                    <textarea
                      value={editData.bio}
                      onChange={(e) => setEditData({...editData, bio: e.target.value})}
                      rows={3}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center"
                    />
                  </div>
                ) : (
                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-gray-900">{profileData.name}</h2>
                    <p className="mt-2 text-sm text-gray-600">{profileData.bio}</p>
                  </div>
                )}

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
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.phone}
                      onChange={(e) => setEditData({...editData, phone: e.target.value})}
                      className="text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  ) : (
                    <span className="text-sm text-gray-600">{profileData.phone}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-900">Location</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) => setEditData({...editData, location: e.target.value})}
                      className="text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  ) : (
                    <span className="text-sm text-gray-600">{profileData.location}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Cog6ToothIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-900">Timezone</span>
                  </div>
                  {isEditing ? (
                    <select
                      value={editData.timezone}
                      onChange={(e) => setEditData({...editData, timezone: e.target.value})}
                      className="text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option>Pacific Time (PT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Central Time (CT)</option>
                      <option>Eastern Time (ET)</option>
                    </select>
                  ) : (
                    <span className="text-sm text-gray-600">{profileData.timezone}</span>
                  )}
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

            {/* Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive updates about your habits and achievements</p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  >
                    <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Push Notifications</h4>
                    <p className="text-sm text-gray-600">Get reminded about your daily habits</p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  >
                    <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}