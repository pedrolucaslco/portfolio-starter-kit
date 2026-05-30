'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from 'app/lib/i18n'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'

const sections = [
  { href: '/', key: 'nav.home' },
  { href: '/#about', key: 'nav.about' },
  { href: '/#projects', key: 'nav.projects' },
  { href: '/#blog', key: 'nav.blog' },
  // { href: '/#support', key: 'nav.support' },
  { href: '/#work', key: 'nav.work' },
]

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <aside className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 border-b border-[#e5e5e5] dark:border-[#262626]">
      <div className="px-6 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Pedro Lucas
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <nav className="hidden md:flex gap-8">
              {sections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {t(s.key)}
                </Link>
              ))}
            </nav>
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#e5e5e5] dark:border-[#262626] md:hidden">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {t(s.key)}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </aside>
  )
}
