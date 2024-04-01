
import Link from "next/link";


type TestFetch = {
 scope: string;
};


export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const testfetch = await fetch("https://eo5uj3jnhjq5lyv.m.pipedream.net");
  const data = await testfetch.json();
  const {
    scope,
  } = data;



  return (
    <main>
      <section className="h-16 splitbg"></section>
      <section className="pt-20">
        <div className="container mx-auto p-4">
          <Link href="/projects">Back</Link>
          <div className="flex justify-between">


            <h2>{scope}</h2>
            </div>
            {/* <PortableText blocks={longDescription} /> */}
          </div>
        
      </section>

    </main>

  );
}
