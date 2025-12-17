import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="text-xl text-neutral-300 font-semibold tracking-tighter">
        Pedro Lucas
      </h1>
      <p className='mb-8 text-gray-500 font-medium'>Full stack developer at EasySchool</p>
      <div className="text-neutral-400 font-medium">
      <p className="mb-4">
        I am a full stack developer at <a href="https://www.easyschool.com.br" class='underline text-neutral-200'>EasySchool</a>, a school management system by Swisslink used by over 450,000 users across Brazil. I work on developing solutions focused on user experience and process optimization, making daily school operations more agile and efficient.
      </p>
      <p>I have over 5 years of experience in graphic design and UX/UI, working with visual identities, digital products, and communication strategies. I combine technology and design to deliver functional, fast, and visually consistent solutions aligned with business goals, generating real value and a cohesive user experience.
      </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
