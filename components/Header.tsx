'use client';

import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image'
import Logo from '../public/logo.svg'
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { useRouter, usePathname } from '@/i18n/navigation';


const navItems = [
  { key: 'about', href: '/about' },
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/contact' }
];


export function Header() {
  const tHeader = useTranslations('header');    
  const pathname = usePathname();  
  const router = useRouter()  
  const locale = useLocale()  

  function handleSelectChangeLanguage( currentLocale: (typeof routing.locales)[number]){
    const query = Object.fromEntries(
      new URLSearchParams(window.location.search)
    )
    router.replace({pathname, query},{locale: currentLocale})
  }
  
  return (
    <header className="w-full border-b border-neutral-800 bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className='flex items-center gap-4 '>
            <Image src={Logo} alt={'Logo DevStack'}/>
            <span className="text-lg font-semibold text-white">DevStack</span>
        </div>

        <ul className="flex gap-6">
          {navItems.map((item) => {
            const localePath = `/${locale}${item.href}`;
            const isActive =
              pathname === item.href ||
              pathname === localePath ||
              pathname.startsWith(`${item.href}/`) ||
              pathname.startsWith(`${localePath}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                     'relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all',
                    isActive
                      ? 'text-primary font-medium hover:text-primary-hover'
                      : 'text-foreground hover:text-white'
                  )}
                >
                  {tHeader(item.key)}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <div className='flex flex-row justify-between gap-2'>

          <Link
            href="/contact"
            className="h-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {tHeader('hire')}
          </Link>

          <select 
            className='h-full rounded-md bg-background px-4 py-2 text-sm fornt-medium text-white border border-neutral-800'
            defaultValue={locale}
            onChange={(e) => handleSelectChangeLanguage(e.target.value as (typeof routing.locales)[number]) }
          >
            {routing.locales.map((currentLocale) => (
              <option 
              key={currentLocale} 
              value={currentLocale}>
                {currentLocale}
              </option>
            ))}
          </select>

        </div>
      </nav>
    </header>
  );
}
