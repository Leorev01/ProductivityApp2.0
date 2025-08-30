import { ChartBarIcon } from '@heroicons/react/24/outline'

const HabitBreakdown = () => {
  return (
    <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-6 h-6 text-blue-500" />
            Habit Breakdown
        </h2>
        <p className="text-gray-700 mb-2">See detailed analytics for each habit, including completion rates and trends.</p>
        {/* Placeholder for habits chart */}
        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            [Habits Chart Placeholder]
        </div>
    </div>
  )
}

export default HabitBreakdown