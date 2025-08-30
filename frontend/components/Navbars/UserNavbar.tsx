'use client'
import {useRouter} from 'next/navigation'
import {toast} from 'react-hot-toast'
import { Disclosure } from '@headlessui/react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function UserNavbar() {

  const router = useRouter()

  const signOutHandler = () => {
    localStorage.removeItem('user');
    router.push('/')
    toast.success("Logged out successfully!")
  }

  const userNavigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Sign out', href: '#', onClick: signOutHandler },
  ]

  return (
    <Disclosure as="nav" className="absolute inset-x-0 top-0 z-50"> {/* Made it transparent and positioned absolutely */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <img
              alt="Productivity App"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <span className="hidden sm:block text-xl font-bold text-gray-900">ProductiveLife</span>
          </div>

          {/* Auth Buttons - Desktop */}
          <Menu as="div" className="relative">
              <MenuButton className="relative flex items-center">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHkICFwtKrgxg/profile-displayphoto-shrink_800_800/B4EZYfr_gEHgAc-/0/1744288351996?e=1756339200&v=beta&t=LX_vMZ3vUZ7CwBCbMvQuDyhmQKfhuxAhaOMmjlWEbds"
                  className="size-8 rounded-full bg-gray-50"
                />
                <span className="hidden lg:flex lg:items-center">
                  <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                    Leonardo Revrenna
                  </span>
                  <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                </span>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                      onClick={item.onClick}
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
        </div>
      </div>

    </Disclosure>
  )
}