'use client'

import { useLanguage } from 'app/lib/i18n'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'pt-br' : 'en')}
      className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border border-[#e5e5e5] dark:border-[#262626] px-2 py-1"
      title={lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
    >
      {lang === 'en' ? 'PT' : 'EN'}
    </button>
  )
}
