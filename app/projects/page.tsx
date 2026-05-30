import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Get to Know some of my work',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-medium mb-8 text-neutral-900 dark:text-neutral-100">Projects</h1>
      <Projects />
    </section>
  )
}
