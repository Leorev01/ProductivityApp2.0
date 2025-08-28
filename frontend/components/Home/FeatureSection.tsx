import { ChartBarIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Smart Habit Tracking',
    description: 'Track daily habits with intelligent reminders and progress visualization. Never miss a day with our adaptive scheduling system.',
    icon: ChartBarIcon,
  },
  {
    name: 'Gamified Progress',
    description: 'Earn XP, unlock achievements, and level up as you build better habits. Turn your personal growth into an engaging game.',
    icon: TrophyIcon,
  },
  {
    name: 'Social Accountability',
    description: 'Connect with friends, join challenges, and climb leaderboards. Stay motivated through friendly competition and support.',
    icon: UserGroupIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Transform habits into achievements. Start your journey today.
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                Join thousands of users who have revolutionized their daily routines with our gamified habit tracking system. Build lasting habits that actually stick.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start building habits
                </Link>
              </div>
            </div>
            <Image
              alt="ProductiveLife app dashboard screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-500" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:-bottom-48 lg:top-auto lg:translate-y-0 lg:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
            />
          </div>
        </div>
      </div>
    </div>
  )
}