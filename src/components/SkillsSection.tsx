"use client";
import * as Icons from "@/components/Icons";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import * as fadein from "@/components/AnimatedBlock";
import { ProgressBar } from "@/components/Charts";


const skills = [
  {
    "skill_name": "Frontend",
    "skills": [
      { "skill_name": "HTML", "icon": <Icons.HTML />, "is_hidden": true, "description": "HTML is the standard markup language for documents designed to be displayed in a web browser." },
      { "skill_name": "CSS", "icon": <Icons.CSS />, "is_hidden": true, "description": "CSS is a style sheet language used for describing the presentation of a document written in HTML." },
      {
        "skill_name": "JavaScript",
        "icon": <Icons.JS />,
        "is_hidden": true,
        "description": "JavaScript is a programming language that is primarily used for adding interactivity to web pages on the client side."
      },
      {
        "skill_name": "React",
        "icon": <Icons.React />,
        "is_hidden": false,
        "description": "React is a JavaScript library for building user interfaces, primarily for single-page applications. It's used for handling the view layer in web and mobile apps."
      },
      {
        "skill_name": "Sass",
        "icon": <Icons.SASS />,
        "is_hidden": true,
        "description": "Sass is a preprocessor scripting language that is interpreted or compiled into CSS. It's a mature, stable, and powerful professional grade CSS extension."
      },
      {
        "skill_name": "TypeScript",
        "icon": <Icons.TypeScript />,
        "is_hidden": false,
        "description": "TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transcompiles to JavaScript."
      },
      {
        "skill_name": "TailwindCSS",
        "icon": <Icons.TailwindCSS />,
        "is_hidden": false,
        "description": "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
      },
      {
        "skill_name": "Next.js",
        "icon": <Icons.NextJS />,
        "is_hidden": false,
        "description": "Next.JS is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites."
      },
      // ... and so on for the rest of the skills
    ]
  },
  {
    "skill_name": "Backend",
    "skills": [
      {
        "skill_name": "NodeJS",
        "icon": <Icons.NodeJS />,
        "is_hidden": false,
        "description": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
      },
      {
        "skill_name": "Firebase",
        "icon": <Icons.Firebase />,
        "is_hidden": false,
        "description": "Firebase is a platform developed by Google for creating mobile and web applications. It provides tools and services to help developers build high-quality apps, grow their user base, and earn more money."
      },
      {
        "skill_name": "REST API",
        "icon": <Icons.RESTAPI />,
        "is_hidden": true,
        "description": "REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API is a way for two computer systems to communicate over HTTP in a similar way to web browsers and servers."
      },
      {
        "skill_name": "Vercel",
        "icon": <Icons.Vercel />,
        "is_hidden": true,
        "description": "Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration."
      },
      {
        "skill_name": "Netlify",
        "icon": <Icons.Netlify />,
        "is_hidden": true,
        "description": "Netlify is a web developer platform that multiplies productivity. By unifying the elements of the modern decoupled web, from local development to advanced edge logic, Netlify enables a 10x faster path to much more performant, secure, and scalable websites and apps."
      },
      {
        "skill_name": "Azure",
        "icon": <Icons.Azure />,
        "is_hidden": false,
        "description": "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers."
      }
    ]
  },
  {
    "skill_name": "Automation",
    "skills": [
      {
        "skill_name": "Zapier",
        "icon": <Icons.Zapier />,
        "is_hidden": false,
        "description": "Zapier is an online automation tool that connects your favorite apps, such as Gmail, Slack, Mailchimp, and more. You can connect two or more apps to automate repetitive tasks without coding or relying on developers to build the integration."
      },
      {
        "skill_name": "Make.com",
        "icon": <Icons.Make />,
        "is_hidden": false,
        "description": "GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files. It allows you to automate parts of the build process."
      },
      {
        "skill_name": "Power Automate",
        "icon": <Icons.PowerAutomate />,
        "is_hidden": true,
        "description": "Power Automate, formerly known as Microsoft Flow, is a cloud-based service that allows employees to create and automate workflows and tasks across multiple applications and services without help from developers."
      }
    ]
  },
  {
    "skill_name": "CMS & Web Builders",
    "skills": [
      {
        "skill_name": "Sanity.io",
        "icon": <Icons.Sanity />,
        "is_hidden": false,
        "description": "Sanity.io is a platform for structured content that comes with an open-source editor that you can customize with React.js."
      },
      {
        "skill_name": "Shopify",
        "icon": <Icons.Shopify />,
        "is_hidden": false,
        "description": "Shopify is a subscription to a software service that offers you to create a website and use their shopping cart solution to sell, ship, and manage your products."
      },
      {
        "skill_name": "Wordpress",
        "icon": <Icons.Wordpress />,
        "is_hidden": true,
        "description": "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes."
      },
      {
        "skill_name": "Wix / Velo",
        "icon": <Icons.Velo />,
        "is_hidden": false,
        "description": "Wix.com is a cloud-based web development platform that allows users to create HTML5 websites and mobile sites through the use of online drag and drop tools. Velo by Wix is a full-stack development platform that empowers you to rapidly build, manage and deploy professional web apps."
      }
    ]
  },
  {
    "skill_name": "CRM & Marketing",
    "skills": [
      {
        "skill_name": "HubSpot",
        "icon": <Icons.HubSpot />,
        "is_hidden": false,
        "description": "HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses grow better."
      },
      {
        "skill_name": "GoHighLevel",
        "icon": <Icons.GoHighLevel />,
        "is_hidden": false,
        "description": "GoHighLevel is an all-in-one sales and marketing platform that helps businesses manage their sales, marketing, and operations in one place. It includes tools for email marketing, SMS marketing, CRM, and more."
      },
      {
        "skill_name": "ClickFunnels",
        "icon": <Icons.ClickFunnels />,
        "is_hidden": true,
        "description": "ClickFunnels is a website and sales funnel builder for entrepreneurs. ClickFunnels allows you to build landing pages, sales pages, and complete sales funnels."
      },
      {
        "skill_name": "Monday.com",
        "icon": <Icons.Monday />,
        "is_hidden": false,
        "description": "Monday.com is a cloud-based work operating system that powers teams to run processes, projects, and everyday work their way."
      }


    ]
  }

];

const hskills = [
  { name: 'Analytical', percentage: 92 },
  { name: 'Grit', percentage: 90 },
  { name: 'Artistry', percentage: 75 },
  { name: 'Organization', percentage: 48 },
  { name: 'English', percentage: 69 },
  { name: 'Problem solving', percentage: 95 },
  { name: 'Attention to detail', percentage: 85 },
];

interface SkillProps {
  icon: JSX.Element;
  name: string;
  isHidden: boolean;
  viewMore: () => void;
}

const Skill = ({ icon, name, isHidden, viewMore }: SkillProps) => (
  <div className={`${isHidden ? "hidden md:flex" : "flex"}
        flex-col mb-10 px-3 items-center cursor-pointer`}
    onClick={viewMore}
  >
    <div>
      <svg width={70} height={70} className=" fill-gray-700 dark:fill-gray-300">
        {icon}
      </svg>
    </div>
    <p className="text-center font-semibold  text-gray-700 dark:text-gray-100">{name}</p>
  </div>
);

export default function SkillsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  return (
    <div className="container mx-auto m-10 p-4">

      <fadein.h2 >
        My Skills
      </fadein.h2>
      {/*         <fadein.p className="mb-10 hidden md:block">
          My skills are listed below. Click on the icons to view more details about the corresponding skill. To view all my skills, you may click the button in the bottommost part of this section.
        </fadein.p> */}
      <div className="mb-10">

        {hskills.map((skill) => (
          <fadein.div key={skill.name} className="flex mb-4">
            <div className="text-sm md:text-base font-light md:font-medium dark:text-white w-56 text-right mr-3">{skill.name}</div>
            <ProgressBar percentage={skill.percentage} />
          </fadein.div>
        ))}

      </div>
      {skills.map((skillCategory, index) => (
        <React.Fragment key={index}>
          <fadein.h3>{skillCategory.skill_name}</fadein.h3>
          <fadein.div className="skills-block flex flex-wrap justify-around leading-10">
            {skillCategory.skills.map((skill, skillIndex) =>
              <Skill
                key={skillIndex}
                icon={skill.icon}
                name={skill.skill_name}
                isHidden={skill.is_hidden}
                viewMore={() => {
                  setSelectedSkill(skill);
                  setIsModalOpen(true);
                }}
              />
            )}
          </fadein.div>
        </React.Fragment>
      ))}
      <fadein.div className="flex flex-row justify-center">
        <button className="bg-gray-600 hover:bg-mainaccent-700 text-white p-2 m-2 rounded-md">
          <Link href="/skills">
            View All Skills
          </Link>
        </button>
      </fadein.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <h3>
            {selectedSkill?.skill_name}
          </h3>
          <p>
            {selectedSkill?.description}
          </p>
        </div>
      </Modal>


    </div>
  );
}