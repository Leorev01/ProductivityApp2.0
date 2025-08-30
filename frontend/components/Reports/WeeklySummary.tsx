import { ChartBarIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const WeeklySummary = () => {

    const [summary, setSummary] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')!);
        setSummary(user);
    },[])

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ChartBarIcon className="w-6 h-6 text-green-500" />
                Weekly Summary
            </h2>
            <p className="text-gray-700 mb-2">Your productivity summary will appear here. Track your completed habits, streaks, and XP earned this week.</p>
            {/* Placeholder for summary chart */}
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                [Summary Chart Placeholder]
            </div>
        </div>
    )
}

export default WeeklySummary