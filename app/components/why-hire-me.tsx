'use client'

import { useLanguage } from 'app/lib/i18n'

function StackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="2" width="14" height="3" rx="1" />
      <rect x="2" y="7.5" width="14" height="3" rx="1" />
      <rect x="2" y="13" width="14" height="3" rx="1" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2L10.5 7.5L16 9L10.5 10.5L9 16L7.5 10.5L2 9L7.5 7.5L9 2Z" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="9" cy="9" r="7" />
      <circle cx="9" cy="9" r="2.5" />
      <path d="M9 2V4" />
      <path d="M9 14V16" />
      <path d="M2 9H4" />
      <path d="M14 9H16" />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="2" width="14" height="10" rx="1" />
      <path d="M6 14H12" />
      <path d="M9 12V14" />
    </svg>
  )
}

const cards = [
  { key: 'fullstack-scale', icon: StackIcon },
  { key: 'ai-augmented', icon: SparkleIcon },
  { key: 'product-vision', icon: CompassIcon },
  { key: 'ux-ui-dev', icon: MonitorIcon },
]

export function WhyHireMe() {
  const { t } = useLanguage()

  return (
    <section className="bg-neutral-100/50 dark:bg-neutral-900/30 border-y border-[#e5e5e5] dark:border-[#262626] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-medium mb-8 text-neutral-900 dark:text-neutral-100">
          {t('hire.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="border border-[#e5e5e5] dark:border-[#262626] p-5 bg-white dark:bg-neutral-950"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 mt-0.5 text-neutral-500 dark:text-neutral-400">
                  <Icon />
                </span>
                <div>
                  <h3 className="text-base font-medium mb-1.5 text-neutral-900 dark:text-neutral-100">
                    {t(`hire.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {t(`hire.${key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
