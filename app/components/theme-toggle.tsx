'use client'

import { useEffect, useState } from 'react'

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 0.5V2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 11.5V13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.5 7H11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2.5 7H0.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11.2426 2.75732L9.82845 4.17154" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4.17157 9.82843L2.75736 11.2426" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11.2426 11.2426L9.82845 9.82843" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4.17157 4.17154L2.75736 2.75732" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 8.5C11.5 11.5 7.5 12.5 5 11C2.5 9.5 1.5 5.5 3 3C3.5 2 5.5 1 5.5 1C3.5 2 2.5 4.5 3.5 7C4.5 9.5 7 10.5 9.5 10C10 9.5 12.5 8.5 12.5 8.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggle}
      className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
