
import Image from "next/image";
import * as Icons from "@/components/Icons";
import Link from "next/link";
import SkillsSection from "@/components/SkillsSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import React from 'react';
import * as fadein from '@/components/AnimatedBlock';
//import dynamic from "next/dynamic";
import ServiceCard from "@/components/ServiceCard";
import SectionButton from "@/components/SectionButton";
import ModalButton from "@/components/ModalButton";

//const DynamicComponentWithNoSSR = dynamic(

const contacts = [
  { icon: <Icons.PhoneIcon />, text: '+639158087114' },
  { icon: <Icons.EmailIcon />, text: 'cyrilnicko@gmail.com' }
];
const highlights = [
  { icon: <Icons.UWTopRated />, text: 'Upwork Top Rated' },
  { icon: <Icons.UWJSS />, text: '100% Job Success Score in Upwork' },
  { icon: <Icons.ResponsiveIcon />, text: 'Responsive Web Design' },
  { icon: <Icons.Gear />, text: 'Automations (Zapier, Make)' },
  { icon: <Icons.CRM />, text: 'CRM Development (GoHIghLevel, Hubspot, Monday.com, Clickfunnels)' },
  { icon: <Icons.AI />, text: 'AI Integrations (OpenAI, Mistral, Langchain)' },
  { icon: <Icons.Plug />, text: 'API Development and Integrations' },
  { icon: <Icons.EcomLogo />, text: 'Ecommerce Development (Shopify, Woocommerce, Wix, Webflow)' },
];

export default function Home() {

  return (
    <main>
      <section className="splitbg">
        <div className="container mx-auto pt-32">
          <div className="flex justify-between">
            <div className="lg:pt-20 p-8 md:p-4 overflow-visible">
              <p className="text-lg mt-4 font-mono text-gray-600 dark:text-gray-400">
                Hello, I am
              </p>
              <h1>
                Cyril Nicko Gaspar
              </h1>
              <p className="text-xl lg:text-2xl font-bold  mt-4 text-mainaccent-700 text-slate">
                Web Developer
              </p>
              <p className="text-l lg:text-xl text-mainaccent-700 text-slate mt-1 dark:text-cyan-500">
                API | Automations Expert
              </p>

              <div className="contact-info mt-4 text-gray-500 text-sm md:text-base items-center">

                <div className="py-2 flex flex-row space-x-4 mt-4">
                  <fadein.xdiv from="left" delay={0.6}>
                    <Link href="https://www.upwork.com/freelancers/~013f1afa3db163b9c1" target="_blank"
                      aria-label="Upwork Profile"
                    ><svg className="fill-gray-700 hover:fill-mainaccent-700 w-6 h-6 dark:fill-gray-400">
                        <Icons.UpworkIcon /></svg>
                    </Link>
                  </fadein.xdiv>
                  <fadein.xdiv from="left" delay={0.4}>
                    <Link href="https://www.fiverr.com/cynick?public_mode=true" target="_blank"
                      aria-label="Fiverr Profile"
                    ><svg className="fill-gray-700 hover:fill-mainaccent-700 w-6 h-6 dark:fill-gray-400">
                        <Icons.FiverrIcon /></svg>
                    </Link>
                  </fadein.xdiv>
                  <fadein.xdiv from="left" delay={0.2}>
                    <Link href="https://www.linkedin.com/in/cyrilnicko/" target="_blank"
                      aria-label="LinkedIn Profile"
                    ><svg className="fill-gray-700 hover:fill-mainaccent-700 w-6 h-6 dark:fill-gray-400">
                        <Icons.LinkedInIcon /></svg>
                    </Link>
                  </fadein.xdiv>
                  <fadein.xdiv from="left" delay={0}>
                    <Link href="https://www.github.com/jmozzart" target="_blank"
                      aria-label="GitHub Profile"
                    ><svg className="fill-gray-700 hover:fill-mainaccent-700 w-6 h-6 dark:fill-gray-400">
                        <Icons.GitHubIcon /></svg>
                    </Link>
                  </fadein.xdiv>


                </div>
                <div className="py-2 flex flex-row space-x-4 mt-3">
                  <fadein.xdiv from="left" delay={0.2} className="">
                    <ModalButton buttonClass="primary-btn" buttonLabel="Contact">
                      <div>Contact Me</div>
                    </ModalButton>
                  </fadein.xdiv>
                  <fadein.xdiv from="left" className="hidden md:block">
                    <SectionButton url="#projects" text="Portfolio" className="secondary-btn" />
                  </fadein.xdiv>
                </div>
              </div>

            </div>
            <fadein.div className="text-black hidden w-auto lg:w-1/2 lg:flex justify-center" from="right">
              <Image
                src="/images/niksnew.webp"
                alt="Nick's Hero"

                width={502}
                height={480}
              />
            </fadein.div>

          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto pt-12 px-4 py-10 md:grid grid-cols-2">
          <fadein.xh2 className="col-span-2">
            Summary
          </fadein.xh2>
          <div className="mb-10">
            <fadein.h3>About Me</fadein.h3>
            <fadein.p>
              I specialize in web development, particularly focusing on E-commerce platforms such as Shopify, Woocommerce, Bigcommerce, and more. Proficient in Wordpress, Wix, and Webflow, I am dedicated to creating websites using cutting-edge methods to ensure the best user experience while keeping costs manageable. Whether it is upgrading your website to modern technologies or incorporating specific features, I am committed to enhancing your online presence.
            </fadein.p>
            <fadein.p>
              Moreover, I excel in streamlining business operations by leveraging modern tools and scripting expertise, helping businesses automate their processes efficiently.
            </fadein.p>
          </div>
          <div className="md:px-12">
            <fadein.h3>Highlights </fadein.h3>

            <div className="highlights-list items-center text-sm md:text-base">
              {highlights.map((highlight, index) => (
                <fadein.div key={index} className="flex flex-row py-3">
                  <span className="pr-3">
                    <svg width={33} height={33} className="fill-gray-700 dark:fill-gray-400">
                      {highlight.icon}
                    </svg>
                  </span>
                  {highlight.text}
                </fadein.div>
              ))}
            </div>


          </div>
        </div>
      </section>
      <section id="skills">

        <SkillsSection />

      </section>
      <section id="stats" className="bg-gray-200 dark:bg-gray-900 py-4">
        <div className="container mx-auto m-10 p-4">
          <fadein.h2>
            Stats
          </fadein.h2>
          <div>
            <StatsSection />
          </div>
        </div>
      </section>
      <section id="projects">
        <ProjectsSection />

      </section>
      <section id="services" className="bg-gray-200 py-12 dark:bg-gray-900">

        <div className="container mx-auto p-4">
          <fadein.h2 className="mb-0">
            Services
          </fadein.h2>
          <div className="flex flex-wrap">


            <ServiceCard
              icon={<Icons.WebDevIcon />}
              title="Web Development"
              description="Custom Websites, E-commerce, Landing Pages, Blogs, and more."
            />
            <ServiceCard
              icon={<Icons.Gear />}
              title="Automations"
              description="Integrate your apps and automate your business processes."
            />
            <ServiceCard
              icon={<Icons.CRM />}
              title="CRM Development"
              description="Custom CRM solutions for your business."
            />



          </div>
        </div>
      </section>

    </main>
  );
}
