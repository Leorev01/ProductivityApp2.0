'use client'

import { useState, useMemo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { TrophyIcon } from '@heroicons/react/24/outline'

// Sample habit completion data - in real app this would come from your database
const habitCompletions: { [date: string]: boolean } = {
  '2025-06-01': true,
  '2025-06-02': true,
  '2025-06-03': false,
  '2025-06-04': true,
  '2025-06-05': true,
  '2025-06-06': true,
  '2025-06-07': true,
  '2025-06-08': false,
  '2025-06-09': true,
  '2025-06-10': true,
  '2025-06-11': true,
  '2025-06-12': true,
  '2025-06-13': true,
  '2025-06-14': false,
  '2025-06-15': true,
  '2025-06-16': true,
  '2025-06-17': true,
  '2025-06-18': true,
  '2025-06-19': true,
  '2025-06-20': true,
  '2025-06-21': false,
  '2025-06-22': true,
  '2025-06-23': true,
  '2025-06-24': true,
  '2025-06-25': true,
  '2025-06-26': true,
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
const leaderboardUsers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 2450,
    rank: 1,
    streak: 28,
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 2380,
    rank: 2,
    streak: 21,
  },
  {
    id: 3,
    name: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 2290,
    rank: 3,
    streak: 15,
  },
  {
    id: 4,
    name: 'Alex Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 2180,
    rank: 4,
    streak: 12,
  },
  {
    id: 5,
    name: 'Jessica Wilson',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    score: 2050,
    rank: 5,
    streak: 9,
  },
]

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
          {leaderboardUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={classNames(
                    'flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold',
                    getRankColor(user.rank)
                  )}
                >
                  #{user.rank}
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.streak} day streak</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{user.score.toLocaleString()}</p>
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
