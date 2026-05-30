'use client'

import Link from 'next/link'
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

export function Navbar() {
  const { t } = useLanguage()

  return (
    <aside className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 border-b border-[#e5e5e5] dark:border-[#262626]">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Pedro Lucas
          </Link>
          <div className="flex items-center gap-4">
            <nav className="flex gap-8 max-md:hidden">
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
          </div>
        </div>
        <nav className="flex gap-6 text-sm md:hidden mb-4 flex-wrap">
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

      </div>
    </aside>
  )
}
