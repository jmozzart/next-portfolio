import Image from "next/image";
import * as Icons from "@/components/Icons";
import Link from "next/link";
import React from "react";

const s = 33;

const Skill = ({icon, name, isHidden}: {icon: JSX.Element, name: string, isHidden: boolean}) => (
  <div className={`${isHidden ? "hidden md:flex" : "flex"}  flex-col mb-10 px-3 items-center`}>
    <div>
      <svg width={70} height={70} className=" fill-gray-700">
        {icon}
      </svg>
    </div>
    <p className="text-center font-semibold  text-gray-700 dark:text-gray-100">{name}</p>
  </div>
);

const skills = [
  {
    "skill_name": "Frontend",
    "skills": [
      {"skill_name": "HTML", "icon": <Icons.HTML />, "is_hidden": true},
      {"skill_name": "CSS", "icon": <Icons.CSS />, "is_hidden": true},
      {"skill_name": "JavaScript", "icon": <Icons.JS />, "is_hidden": true},
      {"skill_name": "React", "icon": <Icons.React />, "is_hidden": false},
      {"skill_name": "Sass", "icon": <Icons.SASS />, "is_hidden": true},
      {"skill_name": "TypeScript", "icon": <Icons.TypeScript />, "is_hidden": false},
      {"skill_name": "TailwindCSS", "icon": <Icons.TailwindCSS />, "is_hidden": false},
      {"skill_name": "NextJS", "icon": <Icons.NextJS />, "is_hidden": false},
    ]
  },
  {
    "skill_name": "Backend",
    "skills": [
      {"skill_name": "NodeJS", "icon": <Icons.NodeJS />, "is_hidden": false},
      {"skill_name": "Firebase", "icon": <Icons.Firebase />, "is_hidden": false},
      {"skill_name": "REST API", "icon": <Icons.RESTAPI />, "is_hidden": true},
      {"skill_name": "Vercel", "icon": <Icons.Vercel />, "is_hidden": true},
      {"skill_name": "Netlify", "icon": <Icons.Netlify />, "is_hidden": true},
      {"skill_name": "Azure", "icon": <Icons.Azure />, "is_hidden": false},
    ]
  },
  {
    "skill_name": "Automation",
    "skills": [
      {"skill_name": "Zapier", "icon": <Icons.Zapier />, "is_hidden": false},
      {"skill_name": "Make", "icon": <Icons.Make />, "is_hidden": false},
      {"skill_name": "Power Automate", "icon": <Icons.PowerAutomate />, "is_hidden": true},
    ]
  },
  {
    "skill_name": "CMS & Web Builders",
    "skills": [
      {"skill_name": "Sanity.io", "icon": <Icons.Sanity />, "is_hidden": false},
      {"skill_name": "Shopify", "icon": <Icons.Shopify />, "is_hidden": false},
      {"skill_name": "Wordpress", "icon": <Icons.Wordpress />, "is_hidden": true},
      {"skill_name": "Wix / Velo", "icon": <Icons.Velo />, "is_hidden": false},
      //{"skill_name": "Bigcommerce", "icon": <Icons.Bigcommerce />, "is_hidden": false},
      //{"skill_name": "Wix", "icon": <Icons.Wix />, "is_hidden": false},
      //{"skill_name": "Webflow", "icon": <Icons.Webflow />, "is_hidden": false},
      
    ]
  }

];



export default function Home() {
  return (
    <main>
      <section className="">
        <div className="container mx-auto pt-32">
          <div className="flex justify-between">
            <div className="lg:pt-20 p-8 md:p-4">
              <p className="text-lg mt-4 font-mono text-gray-600">
                Hello, I am
              </p>
              <h1>
                Cyril Nicko Gaspar
              </h1>
              <p className="text-xl lg:text-2xl font-bold  mt-4 text-slate-700 text-slate">
                Web Developer
              </p>
              <p className="text-l lg:text-xl text-slate-700 text-slate mt-1">
                API | Automations Expert
              </p>

              <div className="contact-info mt-4 grid grid-cols-[40px_auto] gap-3 text-gray-500 text-sm md:text-base items-center">
                <span>
                  <svg>
                    <Icons.PhoneIcon />
                  </svg>
                </span><span>+639158087114</span>
                <span>
                  <svg>
                    <Icons.EmailIcon />
                  </svg></span>
                <span>cyrilnicko@gmail.com</span>
                <span>
                  <svg>
                    <Icons.UpworkIcon />
                  </svg></span>
                <span>
                  <Link
                    href="https://www.upwork.com/freelancers/~013f1afa3db163b9c1"
                    target="_blank"
                  >Upwork Profile Link</Link>
                </span>
                <span>
                  <svg>
                    <Icons.FiverrIcon />
                  </svg>
                </span>
                <span>
                  <Link
                    href="https://www.fiverr.com/cynick?public_mode=true"
                    target="_blank"
                  >Fiverr Profile Link</Link>
                </span>
              </div>

            </div>
            <div className="text-black hidden w-auto lg:w-1/2 lg:flex justify-center bg-slate-700">
              <Image
                src="/images/niksnew.webp"
                alt="Nick's Hero"
                
                width={502}
                height={480}
              />
            </div>

          </div>
        </div>
      </section>
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto pt-12 px-4 py-10 md:grid grid-cols-2">
          <h2 className="col-span-2">
            Summary
          </h2>
          <div className="mb-10">
            <h3>About Me</h3>
            <p>
              I specialize in web development, particularly focusing on E-commerce platforms such as Shopify, Woocommerce, Bigcommerce, and more. Proficient in Wordpress, Wix, and Webflow, I am dedicated to creating websites using cutting-edge methods to ensure the best user experience while keeping costs manageable. Whether it is upgrading your website to modern technologies or incorporating specific features, I am committed to enhancing your online presence. 
            </p>
            <p>
            Moreover, I excel in streamlining business operations by leveraging modern tools and scripting expertise, helping businesses automate their processes efficiently.
            </p>
          </div>
          <div className="md:px-12">
            <h3>Highlights </h3>

            <div className="highlights-list grid grid-cols-[50px_auto] items-center text-sm md:text-base gap-y-6">
              <span>
                <svg width={s} height={s} className="fill-gray-700">
                  <Icons.UWTopRated />
                </svg>
              </span>
              <span>
                Upwork Top Rated
              </span>
              <span>
                <svg width={s} height={s} className="fill-gray-700">
                  <Icons.UWJSS />
                </svg>
              </span>
              <span>
                100% Job Success Score in Upwork
              </span>
              <span>
                <svg width={s} height={s} className="fill-gray-700">
                  <Icons.ResponsiveIcon />
                </svg>
              </span>
              <span>
                Responsive Web Design
              </span>
              <span>
                <svg width={s} height={s} className="fill-gray-700">
                  <Icons.Gear />
                </svg>
              </span>
              <span>
                Automations (Zapier, Make)
              </span>
              <span>
                <svg width={s} height={s} className="fill-gray-700 hover:fill-slate-700">
                  <Icons.CRM />
                </svg>
              </span>
              <span>
                CRM Development (GoHIghLevel, Hubspot, Monday.com, Clickfunnels)
              </span>
              <span>
                <svg width={s} height={s} className="fill-gray-700">
                  <Icons.AI />
                </svg>
              </span>
              <span>
                AI Integrations (OpenAI, Mistral, Langchain)
              </span>
              <span>
                <svg width={s} height={s} className="fill-gray-700">
                  <Icons.Plug />
                </svg>
              </span>
              <span>
                API Development and Integrations
              </span>
              <span>
                <svg width={s} height={s} className="fill-gray-700">
                  <Icons.EcomLogo />
                </svg>
              </span>
              <span>
                Ecommerce Development (Shopify, Woocommerce, Wix, Webflow)
              </span>
            </div>

          </div>
        </div>
      </section>
      <section className="transition-all duration-700 ease-in ">
        <div className="container mx-auto m-10 p-4">
          <h2>
            Skills
          </h2>
          <p className="mb-10 hidden md:block">
           My skills are listed below. Click on the icons to view more details about the corresponding skill. To view all my skills, you may click the button in the bottommost part of this section.
          </p>
          {skills.map((skillCategory, index) => (
            <React.Fragment key={index}>
              <h3>{skillCategory.skill_name}</h3>
              <div className="skills-block flex flex-wrap justify-around leading-10">
                {skillCategory.skills.map((skill, skillIndex) => 
                  <Skill 
                    key={skillIndex} 
                    icon={skill.icon} 
                    name={skill.skill_name} 
                    isHidden={skill.is_hidden} 
                  />
                )}
              </div>
            </React.Fragment>
          ))}
          <div className="flex flex-row justify-center">
          <button className="bg-gray-600 hover:bg-slate-700 text-white p-2 m-2 rounded-md">
            <Link href="/skills">
              View All Skills
            </Link>
          </button>
        </div>
        </div>

      </section>
      <section>
        <div className="container mx-auto m-10 p-4">
          <h2>
            Stats
          </h2>
            
        </div>
      </section>
      <section>
        <div className="container mx-auto m-10 p-4">
          <h2>
            Work Experience
          </h2>
          <p>
            I have worked with various clients in creating and maintaining their websites. I have also worked with various clients in automating their business processes. I have also worked with various clients in creating and maintaining their E-commerce platforms. I have also worked with various clients in creating and maintaining their blogs and portfolios.
          </p>
        </div>
      </section>
    </main>
  );
}
