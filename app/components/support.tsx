'use client'

import { useLanguage } from 'app/lib/i18n'

export function Support() {
  const { t } = useLanguage()

  return (
    <section id="support" className="border-b border-[#e5e5e5] dark:border-[#262626] px-8 py-16">
      <div className="max-w-4xl">
        <h2 className="text-xl font-medium mb-2 text-neutral-900 dark:text-neutral-100">
          {t('section.support')}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          {t('section.support-desc')}
        </p>
        {/* TODO: add support links */}
        <div className="flex flex-wrap gap-3"></div>
      </div>
    </section>
  )
}
