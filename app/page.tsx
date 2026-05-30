import { Hero } from "./components/hero";
import { WhyHireMe } from "./components/why-hire-me";
import { ProjectCards } from "./components/project-cards";
import { BlogPreview } from "./components/blog-preview";
import { Timeline } from "./components/timeline";
import { Contribute } from "./components/contribute";
import { Trans } from "./lib/i18n";
import { getProjects } from "app/section-template/utils";
import { getBlogPosts } from "app/blog/utils";

export default function Page() {
  let projects = getProjects();
  let posts = getBlogPosts();

  return (
    <>
      <Hero />
      <WhyHireMe />

      <section id="projects" className="border-b border-[#e5e5e5] dark:border-[#262626] px-8 py-16 scroll-mt-24">
        <div className="max-w-4xl">
          <h2 className="text-xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
            <Trans en="Projects" pt="Projetos" />
          </h2>
          <ProjectCards projects={projects} />
        </div>
      </section>

      <section id="blog" className="border-b border-[#e5e5e5] dark:border-[#262626] px-8 py-16 scroll-mt-24">
        <div className="max-w-4xl">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
              <Trans en="Latest Posts" pt="Últimos Posts" />
            </h2>
            <a
              href="/blog"
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1.5"
            >
              <Trans en="Open full blog" pt="Abrir blog completo" />
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <BlogPreview posts={posts} />
        </div>
      </section>

      <Contribute />

      <section id="work" className="px-8 py-16 scroll-mt-24">
        <div className="max-w-4xl">
          <h2 className="text-xl font-medium mb-6 text-neutral-900 dark:text-neutral-100">
            <Trans en="Full Experience" pt="Experiência Completa" />
          </h2>
          <Timeline />
        </div>
      </section>
    </>
  )
}
