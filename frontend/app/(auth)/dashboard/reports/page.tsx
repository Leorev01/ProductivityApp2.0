'use client';

import { useState } from 'react';
import { DocumentChartBarIcon } from '@heroicons/react/24/outline';
import WeeklySummary from '@/components/Reports/WeeklySummary';
import HabitBreakdown from '@/components/Reports/HabitBreakdown';
import ProgressOverTime from '@/components/Reports/ProgressOverTime';

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
          <WeeklySummary />
        )}
        {selectedReport === 'habits' && (
          <HabitBreakdown />
        )}
        {selectedReport === 'progress' && (
          <ProgressOverTime />
        )}
      </div>
    </div>
  );
}