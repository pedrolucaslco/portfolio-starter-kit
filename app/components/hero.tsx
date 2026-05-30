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
          {['IA', 'Laravel', 'MySQL', 'UX', 'UI Design', 'Problem Solving', 'Product Strategy'].map((tag) => (
            <span
              key={tag}
              className="text-sm border border-[#e5e5e5] dark:border-[#262626] px-3 py-1 text-neutral-500 dark:text-neutral-400"
            >
              {tag}
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
