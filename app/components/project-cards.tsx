'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatDate } from 'app/lib/utils'

type Project = {
  slug: string
  metadata: {
    title: string
    publishedAt: string
    type?: string
    summary: string
    image?: string
  }
}

const FILTERS = ['all', 'development', 'design', 'linux', 'tools']

export function ProjectCards({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.metadata.type === active)

  const sorted = filtered.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-sm font-mono uppercase tracking-wider px-3 py-1.5 border transition-colors ${
              active === f
                ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900'
                : 'border-[#e5e5e5] dark:border-[#262626] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sorted.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block border border-[#e5e5e5] dark:border-[#262626] p-5 transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#141414] group"
          >
            <h3 className="text-base font-medium mb-1.5 text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
              {project.metadata.title}
            </h3>
            {project.metadata.summary && (
              <p className="text-sm leading-relaxed mb-3 text-neutral-700 dark:text-neutral-300">
                {project.metadata.summary}
              </p>
            )}
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {formatDate(project.metadata.publishedAt, false)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
