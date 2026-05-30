'use client'

import { useLanguage } from 'app/lib/i18n'

export function Contribute() {
  const { t } = useLanguage()

  return (
    <section id="contribute" className="border-b border-[#e5e5e5] dark:border-[#262626] px-8 py-16 scroll-mt-24">
      <div className="max-w-4xl">
        <h2 className="text-xl font-medium mb-2 text-neutral-900 dark:text-neutral-100">
          {t('section.contribute')}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          {t('section.contribute-desc')}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://ko-fi.com/pedrolucaslco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-[#e5e5e5] dark:border-[#262626] px-4 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#141414] transition-colors text-neutral-500 dark:text-neutral-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324 4.057 11.621c3.107 3.232 7.635 3.263 10.212 3.537 2.361.251 4.418 1.223 5.777 2.719 1.36 1.496 1.956 3.931 1.956 3.931s2.579-4.822.835-9.025c-.15-.362-.353-.706-.563-1.026 1.372-.606 2.879-1.363 3.615-3.158.398-.972.573-2.063.584-3.073.009-.761-.014-1.353-.351-1.841z" />
            </svg>
            Ko-fi
          </a>
          <a
            href="https://www.buymeacoffee.com/pedrolucaslco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-[#e5e5e5] dark:border-[#262626] px-4 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#141414] transition-colors text-neutral-500 dark:text-neutral-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.281 2H3.719C2.867 2 2.172 2.695 2.172 3.547v4.828c0 .851.695 1.546 1.547 1.546h1.062l.375 2.438c.093.554.578.953 1.14.953h5.095c.562 0 1.047-.399 1.14-.953l.375-2.438h1.062c.852 0 1.547-.695 1.547-1.546V3.547C21.515 2.695 20.82 2 20.281 2zm-4.5 7.875h-7.5l-.375 2.438H8.53l-.375-2.438H5.578V4.875h10.203v5zM20.063 4V2h1.297c.422 0 .766.344.766.766v1.469c0 .421-.344.765-.766.765h-1.297z" />
            </svg>
            Buy Me a Coffee
          </a>
          <a
            href="https://paypal.me/pedrolucaslco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-[#e5e5e5] dark:border-[#262626] px-4 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#141414] transition-colors text-neutral-500 dark:text-neutral-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z" />
            </svg>
            PayPal
          </a>
        </div>
      </div>
    </section>
  )
}
