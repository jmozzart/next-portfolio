import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import Carousel from "@/components/Carousel";
import client from "@/utils/sanityClient";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/utils/imgBuilder";
import BackButton from "@/components/BackButton";

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
    link,
    longDescription,
    image,
    imageGallery,
  } = project;

  let mappedImages = [];

  if (imageGallery && imageGallery.length > 0) {
    imageGallery.unshift(image);

    mappedImages = imageGallery.map((item: any) => {
      return urlFor(item.asset).url()
    });
  }
  else
  {
    mappedImages = [urlFor(image.asset).url()];
  }

  return (
    <main>
      <section className="h-16 splitbg mb-8"></section>
      <section className="">
        <div className="container mx-auto p-4">
          <div className="w-full pb-8 text-right">
            <BackButton buttonText="Go Back" className=" text-gray-200 py-1 px-3 bg-mainaccent-700 whitespace-nowrap" />
          </div>
          <div className="block lg:flex">
            <div>

            
                <Carousel images={mappedImages} /> 
   

            </div>

            <div className="ml-auto lg:ml-10">

              <h2 className="text-left">{name}</h2>
              <p>{description}</p>
              {link && <div className="my-5 text-sm overflow-hidden whitespace-nowrap">Link: &nbsp;
                <Link href={link} target="_blank" className=" ">{link}</Link></div>}
                {project.relatedSkills && <div className="flex flex-wrap items-center justify-left">
                                    {project?.relatedSkills.map((skill: any) => (
                                        <span key={skill} className="text-xs bg-mainaccent-700 text-white rounded-full px-2 py-1 m-1 whitespace-nowrap">{skill}</span>
                                    )).slice(0, 4)
                                    }
                                </div>}
            </div>
          </div>

          <div>

          </div>

          <div className="pt-10">
            {longDescription && <PortableText value={longDescription} />}
          </div>
        </div>
      </section>

    </main>

  );
}
