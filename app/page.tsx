import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pedro Lucas
      </h1>
      <p className="mb-4">
        {`I’m a full stack developer at EasySchool, building and improving systems that impact over 450,000 users in the education sector. I work primarily with Laravel, combining my background in programming, graphic design, and UX/UI to create digital solutions that streamline processes, make technology more accessible, and deliver experiences that are functional, intuitive, and visually engaging.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
