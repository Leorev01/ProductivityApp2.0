'use client'
import { User } from '@/types/types';
import { useState, useEffect } from 'react';

const LeaderboardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch('http://localhost:4000/api/user/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error("Unable to fetch Users: " + response.status);
      }
      const users = await response.json();
      users.sort((a: User, b: User) => b.totalXP - a.totalXP);
      setLeaderboardData(users);
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Global Leaderboard
        </h1>
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-3 px-4 text-gray-700 font-semibold">Rank</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">User</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">Level</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">XP</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">Streak</th>
              </tr>
            </thead>
            <tbody>
              {loading 
              ? 
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-400">
                  Loading...
                </td>
              </tr>
              : leaderboardData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">
                    No users found.
                  </td>
                </tr>
              ) : (
                leaderboardData.map((user, idx) => (
                  <tr
                    key={user.id}
                    className={`hover:bg-blue-50 transition-colors ${idx === 0 ? 'bg-yellow-100 font-bold' : idx === 1 ? 'bg-gray-200 font-semibold' : idx === 2 ? 'bg-yellow-200 font-semibold' : ''}`}
                  >
                    <td className="py-2 px-4">{idx + 1}</td>
                    <td className="py-2 px-4 flex items-center gap-3">
                      <img
                        src={user.avatar || '/default-avatar.png'}
                        alt={user.name}
                        className="w-8 h-8 rounded-full border border-gray-200"
                      />
                      <span>{user.name}</span>
                    </td>
                    <td className="py-2 px-4">{user.level ?? '-'}</td>
                    <td className="py-2 px-4">{user.totalXP ?? 0}</td>
                    {/* <td className="py-2 px-4">{user.streak ?? user.dayStreak ?? 0}</td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;