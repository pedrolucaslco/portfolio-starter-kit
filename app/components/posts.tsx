import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="divide-y divide-[#e5e5e5] dark:divide-[#262626] border-y border-[#e5e5e5] dark:border-[#262626]">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block py-4 px-4 transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#141414] group"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-sm font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums shrink-0">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
