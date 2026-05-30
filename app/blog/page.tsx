import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-medium mb-8 text-neutral-900 dark:text-neutral-100">Blog</h1>
      <BlogPosts />
    </section>
  )
}
