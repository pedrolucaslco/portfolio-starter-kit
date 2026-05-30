import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { LanguageProvider } from './lib/i18n'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Pedro Lucas',
    template: '%s | Pedro Lucas',
  },
  description:
    'Fullstack developer and UX/UI designer. I build functional, fast, and visually consistent digital solutions.',
  openGraph: {
    title: 'Pedro Lucas',
    description:
      'Fullstack developer and UX/UI designer. I build functional, fast, and visually consistent digital solutions.',
    url: baseUrl,
    siteName: 'Pedro Lucas',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme')
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } catch(e) {}
  })()
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        'text-neutral-800 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-950',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 min-h-screen border-x border-[#e5e5e5] dark:border-[#262626] max-w-7xl mx-auto bg-white/95 dark:bg-neutral-950/95">
          <LanguageProvider>
            <Navbar />
            <main className="flex-auto min-w-0 flex flex-col w-full">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
