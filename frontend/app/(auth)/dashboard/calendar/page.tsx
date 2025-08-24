'use client'

import { useState, useMemo, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { TrophyIcon } from '@heroicons/react/24/outline'
import { Friend, User } from '@/types/types'

// Sample habit completion data - in real app this would come from your database
const habitCompletions: { [date: string]: boolean } = {
  '2025-08-01': true,
  '2025-08-02': true,
  '2025-08-03': false,
  '2025-08-04': true,
  '2025-08-05': true,
  '2025-08-06': true,
  '2025-08-07': true,
  '2025-08-08': false,
  '2025-08-09': true,
  '2025-08-10': true,
  '2025-08-11': true,
  '2025-08-12': true,
  '2025-08-13': true,
  '2025-08-14': false,
  '2025-08-15': true,
  '2025-08-16': true,
  '2025-08-17': true,
  '2025-08-18': true,
  '2025-08-19': true,
  '2025-08-20': true,
  '2025-08-21': false,
  '2025-08-22': true,
  '2025-08-23': true,
  '2025-08-24': true,
  '2025-08-25': true,
  '2025-08-26': true,
  // Today (27th) is incomplete - work in progress
}

function generateCalendarDays(year: number, month: number) {
  const today = new Date()
  const todayString = today.toISOString().split('T')[0]
  
  // Get first day of the month and last day
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  
  // Get the day of week for first day (0 = Sunday, but we want Monday = 0)
  const firstDayOfWeek = (firstDay.getDay() + 6) % 7 // Convert to Monday = 0
  
  // Days from previous month to fill the first week
  const daysFromPrevMonth = []
  const prevMonth = new Date(year, month, 0)
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate() - i)
    daysFromPrevMonth.push({
      date: date.toISOString().split('T')[0],
      isCurrentMonth: false,
      isToday: false,
      completed: undefined
    })
  }
  
  // Days of current month
  const currentMonthDays = []
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day)
    const dateString = date.toISOString().split('T')[0]
    currentMonthDays.push({
      date: dateString,
      isCurrentMonth: true,
      isToday: dateString === todayString,
      completed: habitCompletions[dateString] || false
    })
  }
  
  // Days from next month to fill the last week
  const totalDaysShown = daysFromPrevMonth.length + currentMonthDays.length
  const remainingDays = 42 - totalDaysShown // Show 6 weeks (42 days)
  const daysFromNextMonth = []
  const nextMonthStart = new Date(year, month + 1, 1)
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(nextMonthStart.getFullYear(), nextMonthStart.getMonth(), day)
    daysFromNextMonth.push({
      date: date.toISOString().split('T')[0],
      isCurrentMonth: false,
      isToday: false,
      completed: undefined
    })
  }
  
  return [...daysFromPrevMonth, ...currentMonthDays, ...daysFromNextMonth]
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

function getRankColor(rank: number) {
  switch (rank) {
    case 1:
      return 'text-yellow-600 bg-yellow-50'
    case 2:
      return 'text-gray-600 bg-gray-50'
    case 3:
      return 'text-amber-600 bg-amber-50'
    default:
      return 'text-blue-600 bg-blue-50'
  }
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [leaderboard, setLeaderboard] = useState<User[]>();
  const [mainUser, setUser] = useState<User | undefined>();
  
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const days = useMemo(() => generateCalendarDays(currentYear, currentMonth), [currentYear, currentMonth])
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  useEffect(() => {
    const mockUserId = 1;
    const fecthLeaderboard = async () => {
      const response = await fetch(`http://localhost:4000/api/friends/?userId=${mockUserId}`, {
        method: 'GET',
        headers: {
          'Content-Type':'application/json'
        }
      })
      if(!response.ok) throw new Error("Failed to fetch friends");
      const response2 = await fetch(`http://localhost:4000/api/user/?id=${mockUserId}`);
      if(!response2.ok) throw new Error("Failed to fetch user");
      const friends = await response.json();
      const friendsData = friends.data.filter((friend:Friend) => friend.status === 'accepted');
      const you = await response2.json();
      const final = [...friendsData, you];
      final.sort((a,b) => b.totalXP - a.totalXP);
      setLeaderboard(final);
      setUser(you);
      console.log(final);
    }
    fecthLeaderboard();
  },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calendar Section - Left Side */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <h2 className="flex-auto text-lg font-semibold text-gray-900">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button
            type="button"
            onClick={goToPreviousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNextMonth}
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 text-center text-xs/6 text-gray-500 mb-2">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        
        <div className="grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div key={day.date} className={classNames(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
              <button
                type="button"
                className={classNames(
                  // Today styling
                  day.isToday && 'ring-2 ring-indigo-500 ring-offset-1',
                  // Completed days (streak)
                  day.completed && day.isCurrentMonth && 'bg-green-500 text-white',
                  // Incomplete days
                  !day.completed && day.isCurrentMonth && 'text-gray-900 hover:bg-gray-200',
                  // Days outside current month
                  !day.isCurrentMonth && 'text-gray-400',
                  // Today and completed
                  day.isToday && day.completed && 'bg-green-600',
                  // Today but not completed
                  day.isToday && !day.completed && 'text-indigo-600 bg-indigo-50',
                  // Base styling
                  'mx-auto flex size-8 items-center justify-center rounded-full font-medium transition-colors',
                )}
                title={
                  day.completed && day.isCurrentMonth 
                    ? 'All habits completed ✓' 
                    : day.isCurrentMonth && !day.completed 
                    ? 'Habits incomplete'
                    : undefined
                }
              >
                <time dateTime={day.date}>{day.date.split('-').pop()?.replace(/^0/, '')}</time>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Section - Right Side */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Productivity Leaderboard</h2>
          <TrophyIcon className="h-6 w-6 text-yellow-500" />
        </div>
        
        <div className="space-y-4">
          {leaderboard && leaderboard.slice(0, 1).map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors${mainUser && user.id === mainUser.id ? ' bg-green-400 hover:bg-green-500' : ''}`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={classNames(
                    'flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold',
                    getRankColor(index+1)
                  )}
                >
                  #{index+1}
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  {/* <p className="text-sm text-gray-500">{user.streak} day streak</p> */}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{user.totalXP}</p>
                <p className="text-sm text-gray-500">points</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="w-full text-center text-indigo-600 hover:text-indigo-500 font-medium">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </div>
  )
}
