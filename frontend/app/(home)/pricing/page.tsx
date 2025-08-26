'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import Navbar from '@/components/Navbars/Navbar'

const pricing = {
  tiers: [
    {
      name: 'Free',
      id: 'free',
      price: { monthly: '$0', annually: '$0' },
      description: 'Perfect for getting started with habit tracking and gamification.',
      features: [
        'Up to 5 habits',
        'Basic progress tracking',
        'Social features & leaderboards',
        'Friend challenges',
        'Achievement badges',
        'Streak tracking',
        'Mobile responsive design',
        'Email reminders'
      ],
      featured: true,
    },
    {
      name: 'Personal',
      id: 'personal',
      price: { monthly: 'Coming Soon', annually: 'Coming Soon' },
      description: 'Enhanced features for dedicated habit builders.',
      features: [
        'Everything in Free',
        'Unlimited habits',
        'Advanced analytics',
        'Calendar integration',
        'Daily/weekly reports',
        'Custom habit templates',
        'Priority support'
      ],
      featured: false,
      comingSoon: true,
    },
    {
      name: 'Pro',
      id: 'pro',
      price: { monthly: 'Coming Soon', annually: 'Coming Soon' },
      description: 'Advanced features for serious productivity enthusiasts.',
      features: [
        'Everything in Personal',
        'Advanced habit insights',
        'Productivity coaching',
        'Goal setting & tracking',
        'Data export & backup',
        'API access',
        'Beta feature access'
      ],
      featured: false,
      comingSoon: true,
    },
    {
      name: 'Team',
      id: 'team',
      price: { monthly: '$49', annually: '$489' },
      description: 'Perfect for teams and organizations building habits together.',
      features: [
        'Everything in Pro',
        'Up to 10 team members',
        'Team leaderboards',
        'Group challenges',
        'Admin dashboard',
        'Team analytics',
        'Custom integrations',
        'Dedicated support'
      ],
      featured: false,
    },
  ],
}

const faqs = [
  {
    question: "Is the app really free with gamification features?",
    answer:
      "Yes! Our free plan includes social leaderboards, friend challenges, achievement badges, and streak tracking. We believe gamification should be accessible to everyone building better habits.",
  },
  {
    question: "When will the Personal and Pro plans be available?",
    answer:
      "We're currently focused on perfecting our core gamification features. Personal and Pro plans with advanced analytics and unlimited habits are planned for later this year.",
  },
  {
    question: "What's included in the Team plan?",
    answer:
      "Our Team plan is available now for organizations wanting to build productive habits together. It includes everything in our roadmap plus team-specific features like group challenges and admin dashboards.",
  },
  {
    question: "Can I upgrade from Free to Team directly?",
    answer:
      "Absolutely! You can upgrade to our Team plan anytime. Your habit data and achievements will be preserved when you upgrade.",
  },
  {
    question: "How do the gamification features work?",
    answer:
      "Build habits, earn points, unlock achievements, and compete with friends on leaderboards. Complete daily habits to maintain streaks and climb the rankings!",
  },
  {
    question: "What devices are supported?",
    answer:
      "Our web app works on all modern browsers and devices. Native mobile apps for iOS and Android are coming soon as part of our roadmap.",
  },
]

const footerNavigation = {
  solutions: [
    { name: 'Habit Tracking', href: '#' },
    { name: 'Gamification', href: '#' },
    { name: 'Team Challenges', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Integrations', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

export default function Example() {

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        {/* Pricing section */}
        <form className="group/tiers bg-white pt-24 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-base/7 font-semibold text-indigo-600">Pricing</h1>
              <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                Start free, upgrade when ready
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
              Start building better habits with our free gamification features. Advanced plans and team collaboration coming soon.
            </p>
            <div className="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200">
                  <label className="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-indigo-600">
                    <input
                      defaultValue="monthly"
                      defaultChecked
                      name="frequency"
                      type="radio"
                      className="absolute inset-0 appearance-none rounded-full"
                    />
                    <span className="text-gray-500 group-has-[:checked]:text-white">Monthly</span>
                  </label>
                  <label className="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-indigo-600">
                    <input
                      defaultValue="annually"
                      name="frequency"
                      type="radio"
                      className="absolute inset-0 appearance-none rounded-full"
                    />
                    <span className="text-gray-500 group-has-[:checked]:text-white">Annually</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.id}
                  data-featured={tier.featured ? 'true' : undefined}
                  className={`group/tier rounded-3xl p-8 ring-1 ring-gray-200 data-[featured]:ring-2 data-[featured]:ring-indigo-600 ${
                    tier.comingSoon ? 'opacity-75' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={`tier-${tier.id}`}
                      className="text-lg/8 font-semibold text-gray-900 group-data-[featured]/tier:text-indigo-600"
                    >
                      {tier.name}
                    </h3>
                    {tier.featured && (
                      <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                        Most popular
                      </p>
                    )}
                    {tier.comingSoon && (
                      <p className="rounded-full bg-amber-600/10 px-2.5 py-1 text-xs/5 font-semibold text-amber-600">
                        Coming Soon
                      </p>
                    )}
                  </div>
                  <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
                  
                  {/* Price display for regular tiers */}
                  {!tier.comingSoon && (
                    <>
                      <p className="mt-6 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=monthly]:checked))]/tiers:hidden">
                        <span className="text-4xl font-semibold tracking-tight text-gray-900">{tier.price.monthly}</span>
                        {tier.price.monthly !== '$0' && <span className="text-sm/6 font-semibold text-gray-600">/month</span>}
                      </p>
                      <p className="mt-6 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
                        <span className="text-4xl font-semibold tracking-tight text-gray-900">{tier.price.annually}</span>
                        {tier.price.annually !== '$0' && <span className="text-sm/6 font-semibold text-gray-600">/year</span>}
                      </p>
                    </>
                  )}
                  
                  {/* Price display for coming soon tiers */}
                  {tier.comingSoon && (
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-semibold tracking-tight text-amber-600">Coming Soon</span>
                    </p>
                  )}

                  <button
                    value={tier.id}
                    name="tier"
                    type="submit"
                    disabled={tier.comingSoon}
                    aria-describedby={`tier-${tier.id}`}
                    className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold ${
                      tier.comingSoon
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : tier.featured
                        ? 'bg-indigo-600 text-white shadow-sm ring-0 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    }`}
                  >
                    {tier.comingSoon ? 'Coming Soon' : tier.id === 'free' ? 'Get Started' : 'Buy Plan'}
                  </button>
                  
                  <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Logo cloud */}
        <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
              <span className="hidden md:inline">
                Join thousands of users building better habits with gamification.
              </span>
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" /> Start your journey{' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-24 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
              className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg"
                className="h-12 w-auto"
              />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>
                    &quot;The gamification features completely changed how our team approaches habit building. The leaderboards and challenges make productivity fun and competitive!&quot;
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="mt-1">Team Lead at TechCorp</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              alt="Productivity App"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-9"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}