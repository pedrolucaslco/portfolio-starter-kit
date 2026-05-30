'use client'

import { useLanguage } from 'app/lib/i18n'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-[#e5e5e5] dark:border-[#262626] px-8 py-6">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} Pedro Lucas. {t('footer.copyright')}
      </p>
    </footer>
  )
}
