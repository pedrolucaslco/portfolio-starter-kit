import Link from 'next/link'
import { formatDate } from 'app/blog/utils'

type Post = {
  slug: string
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image?: string
  }
}

export function BlogPreview({ posts }: { posts: Post[] }) {
  let latest = posts
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1
      }
      return 1
    })
    .slice(0, 3)

  if (latest.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {latest.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block border border-[#e5e5e5] dark:border-[#262626] p-5 transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#141414] group"
        >
          <h3 className="text-base font-medium mb-1.5 text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
            {post.metadata.title}
          </h3>
          {post.metadata.summary && (
            <p className="text-sm leading-relaxed mb-3 text-neutral-700 dark:text-neutral-300">
              {post.metadata.summary}
            </p>
          )}
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt, false)}
          </p>
        </Link>
      ))}
    </div>
  )
}
