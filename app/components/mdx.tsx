import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`
  return Heading
}

function PhoneFrame() {
  return (
    <svg viewBox="0 0 280 568" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[260px] h-auto mx-auto">
      <rect x="4" y="4" width="272" height="560" rx="34" stroke="currentColor" strokeWidth="6" className="text-neutral-400 dark:text-neutral-500" />
      <rect x="16" y="22" width="248" height="520" rx="18" fill="currentColor" className="text-neutral-100 dark:text-neutral-800" />
      <rect x="108" y="10" width="64" height="6" rx="3" fill="currentColor" className="text-neutral-500" />
      <rect x="108" y="548" width="64" height="4" rx="2" fill="currentColor" className="text-neutral-500" />
      <rect x="24" y="32" width="100" height="10" rx="3" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" />
      <rect x="190" y="32" width="66" height="10" rx="3" fill="currentColor" className="text-neutral-400" />
      <rect x="24" y="50" width="232" height="40" rx="6" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
      <rect x="28" y="56" width="80" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="28" y="66" width="60" height="6" rx="2" fill="currentColor" className="text-neutral-500" />
      <rect x="210" y="56" width="40" height="7" rx="2" fill="currentColor" className="text-emerald-500" opacity="0.3" />
      <rect x="24" y="96" width="232" height="1" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="24" y="104" width="12" height="12" rx="3" fill="currentColor" className="text-emerald-500" opacity="0.4" />
      <rect x="42" y="106" width="60" height="6" rx="2" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" />
      <rect x="42" y="116" width="40" height="4" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="210" y="106" width="40" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="24" y="126" width="12" height="12" rx="3" fill="currentColor" className="text-amber-500" opacity="0.4" />
      <rect x="42" y="128" width="50" height="6" rx="2" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" />
      <rect x="42" y="138" width="35" height="4" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="210" y="128" width="40" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="24" y="148" width="12" height="12" rx="3" fill="currentColor" className="text-sky-500" opacity="0.4" />
      <rect x="42" y="150" width="70" height="6" rx="2" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" />
      <rect x="42" y="160" width="45" height="4" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="210" y="150" width="40" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="24" y="170" width="12" height="12" rx="3" fill="currentColor" className="text-violet-500" opacity="0.4" />
      <rect x="42" y="172" width="55" height="6" rx="2" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" />
      <rect x="42" y="182" width="30" height="4" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="210" y="172" width="40" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="24" y="192" width="12" height="12" rx="3" fill="currentColor" className="text-emerald-500" opacity="0.4" />
      <rect x="42" y="194" width="45" height="6" rx="2" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" />
      <rect x="42" y="204" width="25" height="4" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="210" y="194" width="40" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="24" y="218" width="232" height="1" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="24" y="228" width="140" height="8" rx="3" fill="currentColor" className="text-neutral-500" />
      <rect x="24" y="244" width="232" height="40" rx="6" fill="currentColor" className="text-emerald-500" opacity="0.12" />
      <rect x="30" y="252" width="100" height="6" rx="2" fill="currentColor" className="text-emerald-600" opacity="0.5" />
      <rect x="30" y="262" width="70" height="4" rx="2" fill="currentColor" className="text-emerald-600" opacity="0.3" />
      <rect x="24" y="292" width="232" height="40" rx="6" fill="currentColor" className="text-amber-500" opacity="0.12" />
      <rect x="30" y="300" width="90" height="6" rx="2" fill="currentColor" className="text-amber-600" opacity="0.5" />
      <rect x="30" y="310" width="60" height="4" rx="2" fill="currentColor" className="text-amber-600" opacity="0.3" />
      <rect x="24" y="340" width="232" height="40" rx="6" fill="currentColor" className="text-sky-500" opacity="0.12" />
      <rect x="30" y="348" width="110" height="6" rx="2" fill="currentColor" className="text-sky-600" opacity="0.5" />
      <rect x="30" y="358" width="80" height="4" rx="2" fill="currentColor" className="text-sky-600" opacity="0.3" />
      <rect x="24" y="390" width="232" height="1" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="24" y="410" width="50" height="8" rx="3" fill="currentColor" className="text-neutral-800 dark:text-neutral-200" />
      <rect x="24" y="426" width="232" height="48" rx="6" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
      <rect x="28" y="434" width="80" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="28" y="444" width="60" height="4" rx="2" fill="currentColor" className="text-neutral-500" />
      <rect x="150" y="434" width="100" height="6" rx="2" fill="currentColor" className="text-neutral-400" />
      <rect x="24" y="482" width="232" height="1" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="24" y="496" width="24" height="24" rx="4" fill="currentColor" className="text-neutral-400" />
      <rect x="62" y="496" width="24" height="24" rx="4" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="100" y="496" width="24" height="24" rx="4" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="160" y="496" width="24" height="24" rx="4" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="198" y="496" width="24" height="24" rx="4" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
      <rect x="236" y="496" width="24" height="24" rx="4" fill="currentColor" className="text-neutral-300 dark:text-neutral-600" />
    </svg>
  )
}

function ProductHero({ title, description, ctaHref, ctaText, ghHref }: { title: string; description: string; ctaHref: string; ctaText: string; ghHref: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 not-prose">
      <div>
        <h2 className="text-3xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-neutral-100">{title}</h2>
        <p className="text-base leading-relaxed mb-8 text-neutral-600 dark:text-neutral-400">{description}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-5 py-2.5 hover:opacity-80 transition-opacity"
          >
            {ctaText}
          </a>
          <a
            href={ghHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-[#e5e5e5] dark:border-[#262626] px-5 py-2.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-[#f2f2f2] dark:hover:bg-[#141414] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
            GitHub
          </a>
        </div>
      </div>
      <PhoneFrame />
    </div>
  )
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  table: Table,
  ProductHero,
  PhoneFrame,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
