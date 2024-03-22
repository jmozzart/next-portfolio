import Image from "next/image";
import * as Icons from "@/components/Icons";
import Link from "next/link";

const s = 33;



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

              <div className="mt-4 grid grid-cols-[40px_auto] gap-3 text-gray-500 text-sm md:text-base items-center">
                <span>
                  <svg width={s} height={s} className="fill-gray-700">
                    <Icons.PhoneIcon />
                  </svg>
                </span><span>+639158087114</span>
                <span>
                  <svg width={s} height={s} className="fill-gray-700">
                    <Icons.EmailIcon />
                  </svg></span>
                <span>cyrilnicko@gmail.com</span>
                <span>
                  <svg width={s} height={s} className="fill-gray-700">
                    <Icons.UpworkIcon />
                  </svg></span>
                <span>
                  <Link
                    href="https://www.upwork.com/freelancers/~013f1afa3db163b9c1"
                    target="_blank"
                  >Upwork Profile Link</Link>
                </span>
                <span>
                  <svg width={s} height={s} className="fill-gray-700">
                    <Icons.FiverrIcon />
                  </svg>
                </span>
                <span className="">
                  <Link
                    href="https://www.fiverr.com/cynick?public_mode=true"
                    target="_blank"
                  >Fiverr Profile Link</Link>
                </span>
              </div>

            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/niksnew.webp"
                alt="Nick's Hero"
                width={600}
                height={37}
                loading='lazy'
              />
            </div>

          </div>
        </div>
      </section>
      <section className="bg-gray-300/30">
        <div className="container mx-auto m-10 px-4 py-10 md:grid grid-cols-2">
          <h2 className="col-span-2">
            Summary
          </h2>
          <div className="mb-10">
            <h3>About Me</h3>
            <p >
              I specialize in web development, particularly focusing on E-commerce platforms such as Shopify, Woocommerce, Bigcommerce, and more. Proficient in Wordpress, Wix, and Webflow, I am dedicated to creating websites using cutting-edge methods to ensure the best user experience while keeping costs manageable. Whether it is upgrading your website to modern technologies or incorporating specific features, I am committed to enhancing your online presence.  Moreover, I excel in streamlining business operations by leveraging modern tools and scripting expertise, helping businesses automate their processes efficiently.
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
          <p className="mb-10">
            I have worked with various clients in creating and maintaining their websites. I have also worked with various clients in automating their business processes. I have also worked with various clients in creating and maintaining their E-commerce platforms. I have also worked with various clients in creating and maintaining their blogs and portfolios.
          </p>
          <h3>Frontend Development Skills</h3>
          <div className="skills-block flex flex-wrap justify-around leading-10">
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.HTML />
                </svg>
              </div>
              <p>
                HTML
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.CSS />
                </svg>
              </div>
              <p>
                CSS
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.JS />
                </svg>
              </div>
              <p>
                JavaScript
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.React />
                </svg>
              </div>
              <p>
                React
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.SASS />
                </svg>
              </div>
              <p>
                Sass
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.TypeScript />
                </svg>
              </div>
              <p>
                TypeScript
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.TailwindCSS />
                </svg>
              </div>
              <p>
                TailwindCSS
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.NextJS />
                </svg>
              </div>
              <p>
                NextJS
              </p>
            </div>
          </div>
          <h3>Backend / Server Setup Skills</h3>
          <div className="skills-block flex flex-wrap justify-around leading-10">
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.NodeJS />
                </svg>
              </div>
              <p>
                NodeJS
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.Vercel />
                </svg>
              </div>
              <p>
                Vercel
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.Firebase />
                </svg>
              </div>
              <p>
                Firebase
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.Netlify />
                </svg>
              </div>
              <p>
                Netlify
              </p>
            </div>
            <div>
              <div>
                <svg width={100} height={100}>
                  <Icons.Azure />
                </svg>
              </div>
              <p>
                Azure
              </p>
            </div>
          </div>

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
