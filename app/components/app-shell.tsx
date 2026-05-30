'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './nav'
import Footer from './footer'

export function AppShell({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let isLp = pathname.startsWith('/lp/')

  if (isLp) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main className="flex-auto min-w-0 flex flex-col w-full">
        {children}
      </main>
      <Footer />
    </>
  )
}
