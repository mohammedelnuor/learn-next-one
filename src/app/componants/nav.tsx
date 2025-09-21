import { Disclosure, DisclosureButton, DisclosurePanel,  } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: ' Home', href: '#', current: true },
  { name: ' About', href: '#', current: false },
  { name: 'Our Services', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="relative bg-cyan-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Image
              alt="Your Company"
              src="/logee.jpeg"
              width={45}
              height={45}
              className="h-8 w-auto rounded-full"
            />
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-cyan-100 hover:bg-cyan-700 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 transition">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Center navigation */}
          <div className="flex flex-1 items-center justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-cyan-700 text-white'
                        : 'text-cyan-50 hover:bg-cyan-500 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium transition'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-cyan-700 text-white'
                  : 'text-cyan-50 hover:bg-cyan-500 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium transition'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
