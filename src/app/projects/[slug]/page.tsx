import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "@/utils/sanityClient";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/utils/imgBuilder";

const PROJECT_QUERY = `*[
    _type == "projects" &&
    slug.current == $slug
  ][0]`;

//const { projectId, dataset } = client.config();


export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await client.fetch<SanityDocument>(PROJECT_QUERY, params);
  const {
    name,
    description,
    longDescription,
    image,
  } = project;



  return (
<main>
        <section className="pt-20">
            <div className="container mx-auto p-4">
            <Link href="/projects">Back</Link>
                <div className="flex justify-between">

            
            <h2>{name}</h2>
            <div className="w-60 h-60 relative">
            <Image src={urlFor(image.asset).url()}
            alt={name}
            fill={true}
            
            className="rounded-lg border-2 border-mainaccent-700 mb-2 w-7"
            quality={50} />
</div>
            {/* <PortableText blocks={longDescription} /> */}
            </div>
            </div>
        </section>
     
        </main>
      
    );
}
