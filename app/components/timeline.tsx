'use client'

import { useState } from 'react'
import { useLanguage } from 'app/lib/i18n'

const workData = [
  {
    role: 'Full Stack Developer',
    company: 'EasySchool (Swisslink)',
    period: 'Jan 2023 – Present',
    description:
      'I work as a full stack developer at EasySchool, a Brazilian edtech with over 450,000 users, contributing to the continuous migration of the legacy system to Laravel, developing and maintaining large-scale features, optimizing academic and financial reports, and continuously improving the interface and user experience, with a focus on performance, usability, and operational efficiency.',
  },
  {
    role: 'UX Designer',
    company: 'EasySchool (Swisslink)',
    period: 'Nov 2022 – Feb 2025',
    description:
      "I restructured the company's institutional website, improving communication clarity and alignment with business goals, refined the visual identity to strengthen brand credibility, and contributed directly to increased lead generation and digital presence.",
  },
  {
    role: 'Graphic Designer',
    company: 'EasySchool (Swisslink)',
    period: 'Nov 2022 – Feb 2025',
    description:
      "I continued the development of EasySchool's visual identity, creating graphic materials and social media content that strengthened brand positioning and aligned visual communication with business objectives.",
  },
  {
    role: 'Graphic Designer',
    company: 'Freelance',
    period: 'Jul 2020 – Present',
    description:
      'I started by offering stationery and business card design services and evolved into visual identity development and social media management, creating content and strategies that increased digital presence and brand engagement.',
  },
  {
    role: 'Graphic Designer',
    company: 'Editora e Clube Rebouças',
    period: 'Jul 2022 – Apr 2023',
    description:
      "I defined and applied the visual aesthetics of monthly campaigns, aligning design with marketing goals, creating and optimizing social media posts and printed and digital materials, strengthening the brand's digital presence and increasing engagement.",
  },
  {
    role: 'User Interface Designer',
    company: 'Editora e Clube Rebouças',
    period: 'Jul 2022 – Apr 2023',
    description:
      'I worked on the design of landing pages for monthly book box launches, creating attractive and intuitive interfaces focused on conversion, strengthening my UI and UX skills.',
  },
  {
    role: 'Book Layout Designer',
    company: 'Editora e Clube Rebouças',
    period: 'Jul 2022 – Jan 2023',
    description:
      "I worked on the layout of books about Brazilian history, applying the club's visual identity and ensuring a pleasant reading experience in collaboration with the editorial team.",
  },
  {
    role: 'Art Director',
    company: 'Armação Propaganda',
    period: 'Sep 2021 – Dec 2022',
    description:
      "I worked on the creation of social media posts and visual assets, strengthening clients' digital presence and participating in strategic digital positioning meetings focused on engagement and reach.",
  },
]

export function Timeline() {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? workData : workData.slice(0, 3)

  return (
    <div>
      <div className="relative">
        {visible.map((item, i) => (
          <div key={i} className="relative pl-8 pb-10 last:pb-0">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e5e5e5] dark:bg-[#262626] last:hidden" />
            <div className="absolute left-[-3px] top-1.5 w-[7px] h-[7px] rounded-full border border-[#e5e5e5] dark:border-[#262626] bg-white dark:bg-neutral-950" />
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                {item.role}
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 shrink-0 tabular-nums">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-0.5">
              {item.company}
            </p>
            <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {workData.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1.5"
        >
          {showAll ? t('timeline.show-less') : t('timeline.show-more')}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
