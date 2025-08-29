'use client';

import { useState } from 'react';
import { ChartBarIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<'summary' | 'habits' | 'progress'>('summary');

  const tabs = [
    { id: 'summary', name: 'Summary' },
    { id: 'habits', name: 'Habits' },
    { id: 'progress', name: 'Progress' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <DocumentChartBarIcon className="w-8 h-8 text-indigo-600" />
              Reports
            </h1>
            <p className="text-gray-600 mt-1">View your productivity analytics and habit progress</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="px-6 pt-6">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedReport(tab.id as typeof selectedReport)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedReport === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        {selectedReport === 'summary' && (
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
        )}
        {selectedReport === 'habits' && (
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
        )}
        {selectedReport === 'progress' && (
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
        )}
      </div>
    </div>
  );
}