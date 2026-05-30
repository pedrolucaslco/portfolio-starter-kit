'use client'

import { useLanguage } from 'app/lib/i18n'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const socialLinks = [
  { href: 'https://www.linkedin.com/in/pedrolucaslco', label: 'linkedin' },
  { href: 'https://github.com/pedrolucaslco', label: 'github' },
  { href: 'https://instagram.com/pedrolucaslco', label: 'instagram' },
  { href: 'https://instagram.com/_studiosevendesign', label: 'design' },
  { href: 'mailto:pedrolucaslcosta@gmail.com', label: 'e-mail' },
  { href: '/rss', label: 'rss' },
]

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-b border-[#e5e5e5] dark:border-[#262626] px-8 py-20 scroll-mt-24">
      <div className="max-w-4xl">
        <h1 className="text-6xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-neutral-100">
          Pedro Lucas
        </h1>
        <p className="text-base font-medium mb-6 text-neutral-500 dark:text-neutral-400">
          {t('hero.subtitle')}
        </p>
        <p className="text-base leading-relaxed max-w-prose mb-10 text-neutral-800 dark:text-neutral-200">
          {t('hero.bio')}
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { label: 'IA', icon: 'sparkle' },
            { label: 'Laravel', icon: 'code' },
            { label: 'MySQL', icon: 'database' },
            { label: 'UX', icon: 'layout' },
            { label: 'UI Design', icon: 'brush' },
            { label: 'Problem Solving', icon: 'puzzle' },
            { label: 'Product Strategy', icon: 'target' },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-sm border border-[#e5e5e5] dark:border-[#262626] px-3 py-1 text-neutral-500 dark:text-neutral-400"
            >
              {icon === 'sparkle' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.5L7.2 4.3L11 5.5L7.2 6.7L6 10.5L4.8 6.7L1 5.5L4.8 4.3L6 0.5Z" fill="currentColor" />
                </svg>
              )}
              {icon === 'code' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2.5L1 6L4 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 2.5L11 6L8 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {icon === 'database' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="6" cy="3.5" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M2 3.5V8.5C2 9.328 3.79 10 6 10C8.21 10 10 9.328 10 8.5V3.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M2 6C2 6.828 3.79 7.5 6 7.5C8.21 7.5 10 6.828 10 6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              )}
              {icon === 'layout' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1.5" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 4.5H11" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4 4.5V10.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              )}
              {icon === 'brush' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 1.5L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M7.5 2L6.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M2.5 10C2.5 10 1 9.5 1 8C1 7 2.5 6.5 3.5 6.5L5.5 8.5C5.5 9.5 5 11 4 11C3.5 11 2.5 10.5 2.5 10Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              )}
              {icon === 'puzzle' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5.5V4C8 3.447 7.553 3 7 3H6.5C6.5 2.172 5.828 1.5 5 1.5C4.172 1.5 3.5 2.172 3.5 3H3C2.447 3 2 3.447 2 4V5.5H3.5C4.328 5.5 5 6.172 5 7C5 7.828 4.328 8.5 3.5 8.5H2V10C2 10.553 2.447 11 3 11H10C10.553 11 11 10.553 11 10V5.5H8Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              )}
              {icon === 'target' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="6" cy="6" r="1" fill="currentColor" />
                </svg>
              )}
              {label}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-base text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <ArrowIcon />
            {t('hero.cta.projects')}
          </a>
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-base text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <ArrowIcon />
            {t('hero.cta.blog')}
          </a>
          <a
            href="mailto:pedrolucaslcosta@gmail.com"
            className="inline-flex items-center gap-1.5 text-base text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <ArrowIcon />
            {t('hero.cta.contact')}
          </a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 text-neutral-500 dark:text-neutral-400"
            >
              <ArrowIcon />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
