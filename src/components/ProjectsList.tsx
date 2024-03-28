
import Image from "next/image";
import Link from "next/link";
import client from "@/utils/sanityClient";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProjectImg {
    _type: string;
    asset: {
        _type: string;
        _ref: string;
    }
}


interface Project {
    _id: string;
    name: string;
    description: string;
    image: ProjectImg;
    relatedSkills: string[];
    featured: boolean;
}

function urlFor (source: SanityImageSource) {
    return imageUrlBuilder(client).image(source)
  }

export default async function ProjectsList() {


const projects = await client.fetch(`*[_type == "projects"][featured] { _id, name, description, image, relatedSkills, featured }`)


    return (
        <>
      
            {projects.length > 0 && (
                <div className="flex flex-wrap justify-center">
                    {projects.map((project: Project) => (

                        <div key={project._id} className="m-5 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 max-w-60 flex flex-col justify-start">
                            {/* <Link href={`/projects/${project._id}`}> */}
                             
                                    <Image
                                        src={urlFor(project.image.asset).url()}
                                        alt={project.name}
                                        width={320}
                                        height={320}
                                        className="rounded-lg border-2 border-mainaccent-700 mb-2"
                                     
                                        quality={50}
                                    />
                          
                            <div className="text-center font-medium">{project?.name}</div>
                        </div>
                    ))}
                </div>
            )}
        </>

    );
};