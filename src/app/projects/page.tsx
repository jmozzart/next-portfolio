

import ProjectsList from "@/components/ProjectsList";


export default async function Home() {


  return (
    <main>
      <section className="h-16 splitbg"></section>
      <section >
        <div className="container mx-auto pt-20">

          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-mainaccent-700 text-slate">
            Projects
          </h1>

          <ProjectsList />

        </div>

      </section>


    </main>
  );
}

