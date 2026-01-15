import { BlogPosts } from "./components/posts";
import { Projects } from "./components/projects";

export default function Page() {
  return (
    <>
      <section>
        <div className="box">
          <h1 className=" font-semibold">
            Pedro Lucas
          </h1>
          <p className='mb-8 font-medium'>Fullstack developer @ EasySchool | Laravel & Javascript</p>
        </div>
        <div className="font-medium">
          <p className="mb-4">
            {`I'm`} a Fullstack Developer at <a href="https://www.easyschool.com.br" target="_blank" className='underline'>EasySchool</a>, a school management system by <a href="https://swisslink.com.br/" target="_blank" className='underline'>Swisslink</a> used by over 450,000 users across Brazil. I design and build soluctions focused on user experience and process optimization, making daily school operations more agile and efficient.
          </p>
          <p className="mb-4">
            I also have over 5 years of experience in graphic design and UX/UI, working with visual identities, digital products, and communication strategies at <a href="https://www.instagram.com/_studiosevendesign/" target="_blank" className='underline'>Studio Seven</a>, my own business.
          </p>
          <p>
            I combine technology and design to deliver functional, fast, and visually consistent solutions aligned with business goals, generating real value and a cohesive user experience for the end-users.
          </p>
        </div>
      </section>
      <section className="mt-8">
        <h1 className="font-semibold">Projects</h1>
        <hr className="border-neutral-700 mb-8" />
        <Projects />
      </section>
      <section className="mt-8">
        <h1 className="font-semibold">Work Experience</h1>
        <hr className="border-neutral-700" />
        <p>
          <br /><br /><b>Full Stack Developer at EasySchool (Swisslink)</b><br />
          Jan 2023 – Present · Full-time  <br />
          <span>I work as a full stack developer at EasySchool, a Brazilian edtech with over 450,000 users, contributing to the continuous migration of the legacy system to Laravel, developing and maintaining large-scale features, optimizing academic and financial reports, and continuously improving the interface and user experience, with a focus on performance, usability, and operational efficiency.</span>

          <br /><br /><b>UX Designer at EasySchool (Swisslink)</b><br />
          Nov 2022 – Feb 2025 · Freelance  <br />
          <span>I restructured the company’s institutional website, improving communication clarity and alignment with business goals, refined the visual identity to strengthen brand credibility, and contributed directly to increased lead generation and digital presence.</span>

          <br /><br /><b>Graphic Designer at EasySchool (Swisslink)</b><br />
          Nov 2022 – Feb 2025 · Freelance  <br />
          <span>I continued the development of EasySchool’s visual identity, creating graphic materials and social media content that strengthened brand positioning and aligned visual communication with business objectives.</span>

          <br /><br /><b>Graphic Designer (Freelance)</b><br />
          Jul 2020 – Present · Freelance  <br />
          <span>I started by offering stationery and business card design services and evolved into visual identity development and social media management, creating content and strategies that increased digital presence and brand engagement, with autonomous project management, performance tracking, and strategic adjustments focused on results and client satisfaction.</span>

          <br /><br /><b>Graphic Designer at Editora e Clube Rebouças</b><br />
          Jul 2022 – Apr 2023 · Freelance  <br />
          <span>I defined and applied the visual aesthetics of monthly campaigns, aligning design with marketing goals, creating and optimizing social media posts and printed and digital materials, strengthening the brand’s digital presence, increasing engagement, and deepening my expertise in results-driven design and digital marketing.</span>

          <br /><br /><b>User Interface Designer at Editora e Clube Rebouças</b><br />
          Jul 2022 – Apr 2023 · Freelance  <br />
          <span>I worked on the design of landing pages for monthly book box launches, creating attractive and intuitive interfaces focused on conversion, strengthening my UI and UX skills and my understanding of the impact of design on campaign performance.</span>

          <br /><br /><b>Book Layout Designer at Editora e Clube Rebouças</b><br />
          Jul 2022 – Jan 2023 · Freelance  <br />
          <span>I worked on the layout of books about Brazilian history, applying the club’s visual identity and ensuring a pleasant reading experience in collaboration with the editorial team, strengthening my technical skills and understanding of book production, aesthetics, and readability in content communication.</span>

          <br /><br /><b>Art Director at Armação Propaganda</b><br />
          Sep 2021 – Dec 2022 · Full-time  <br />
          <span>I worked on the creation of social media posts and visual assets, strengthening clients’ digital presence, participating in strategic digital positioning meetings focused on engagement and reach, which consolidated my creative, visual, and strategic skills in digital marketing.</span>
        </p>
      </section>
    </>
  )
}
