import { PlusIcon, ChartBarIcon, TrophyIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Create Your Habits',
    description: 'Set up daily, weekly, or custom habits with smart reminders and difficulty levels.',
    icon: PlusIcon,
    step: '01'
  },
  {
    name: 'Track Your Progress',
    description: 'Mark habits as complete and watch your streaks grow with detailed analytics.',
    icon: ChartBarIcon,
    step: '02'
  },
  {
    name: 'Earn Rewards',
    description: 'Gain XP, unlock achievements, and compete on leaderboards with friends.',
    icon: TrophyIcon,
    step: '03'
  },
]

export default function HowItWorksSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Simple Process</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            How it works
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Get started with habit tracking in three simple steps
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <step.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <dt className="text-base/7 font-semibold text-gray-900">
                  <span className="text-sm text-indigo-600 font-mono">{step.step}</span>
                  <br />
                  {step.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}