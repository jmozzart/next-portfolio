

import ProjectsList from "@/components/ProjectsList";


export default async function Home() {


  return (
    <main>
      <section className="h-16 splitbg"></section>
      <section >
        <div className="container mx-auto pt-20">

          <ProjectsList />

        </div>

      </section>


    </main>
  );
}

