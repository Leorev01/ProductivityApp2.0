import { ChartBarIcon } from "@heroicons/react/24/outline"

const ProgressOverTime = () => {
  return (
    <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-6 h-6 text-purple-500" />
            Progress Over Time
        </h2>
        <p className="text-gray-700 mb-2">Track your long-term progress and visualize your growth.</p>
        {/* Placeholder for progress chart */}
        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            [Progress Chart Placeholder]
        </div>
    </div>
  )
}

export default ProgressOverTime