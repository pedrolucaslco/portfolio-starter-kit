'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from 'app/lib/i18n'

export function LanguageToggle() {
  const { lang, setLang, mounted } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (!mounted) {
    return <div className="w-8 h-5" />
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border border-[#e5e5e5] dark:border-[#262626] px-2 py-1 min-w-[2.5rem]"
      >
        {lang === 'en' ? 'EN' : 'PT'}
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1 z-50 bg-white dark:bg-neutral-950 border border-[#e5e5e5] dark:border-[#262626] min-w-[4.5rem]">
          <button
            onClick={() => { setLang('en'); setOpen(false) }}
            className={`block w-full text-left text-sm px-3 py-1.5 transition-colors ${lang === 'en' ? 'text-neutral-900 dark:text-neutral-100 bg-[#f2f2f2] dark:bg-[#141414]' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-[#f2f2f2] dark:hover:bg-[#141414]'}`}
          >
            EN
          </button>
          <button
            onClick={() => { setLang('pt-br'); setOpen(false) }}
            className={`block w-full text-left text-sm px-3 py-1.5 transition-colors ${lang === 'pt-br' ? 'text-neutral-900 dark:text-neutral-100 bg-[#f2f2f2] dark:bg-[#141414]' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-[#f2f2f2] dark:hover:bg-[#141414]'}`}
          >
            PT
          </button>
        </div>
      )}
    </div>
  )
}
