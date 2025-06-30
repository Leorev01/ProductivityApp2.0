// components/Home/CTASection.tsx
export default function CTASection() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Ready to level up your habits?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-600">
            Join thousands of users who have transformed their daily routines into an exciting journey of personal growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started for free
            </a>
            <a href="/demo" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
              Watch demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}