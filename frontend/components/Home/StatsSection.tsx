// components/Home/StatsSection.tsx
export default function StatsSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join thousands building better habits
            </h2>
            <p className="mt-4 text-lg/8 text-gray-600">
              Our community is growing every day with people committed to personal growth
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-white p-8">
              <dt className="text-sm/6 font-semibold text-gray-600">Active Users</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">15,000+</dd>
            </div>
            <div className="flex flex-col bg-white p-8">
              <dt className="text-sm/6 font-semibold text-gray-600">Habits Completed</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">2.5M+</dd>
            </div>
            <div className="flex flex-col bg-white p-8">
              <dt className="text-sm/6 font-semibold text-gray-600">Average Streak</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">28 days</dd>
            </div>
            <div className="flex flex-col bg-white p-8">
              <dt className="text-sm/6 font-semibold text-gray-600">Success Rate</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">85%</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}