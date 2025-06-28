export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900">Quick Stats</h2>
          <p className="mt-2 text-gray-600">Your productivity metrics at a glance.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <p className="mt-2 text-gray-600">Your latest habits and progress.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900">Goals</h2>
          <p className="mt-2 text-gray-600">Track your upcoming milestones.</p>
        </div>
      </div>
    </div>
  )
}
