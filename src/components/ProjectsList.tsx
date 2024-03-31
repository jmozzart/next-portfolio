

import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import client from "@/utils/sanityClient";
import {Mdiv} from "@/components/AnimatedBlock";
import urlFor from "@/utils/imgBuilder";

const query = `*[_type == "projects"] { _id, name, description, image, relatedSkills, featured, slug }`




export default async function FeaturedProjects() {

    const projects = await client.fetch<SanityDocument[]>(query);

    return (
        <>
            {projects.length > 0 && (
                <Mdiv className="flex flex-wrap justify-center">
                    {projects.map((project) => (

                        <div key={project._id} className="m-5 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 max-w-60 flex flex-col justify-start">
                            <Link href={`/projects/${project?.slug?.current}`}>
                                
                                    <Image
                                        src={urlFor(project?.image?.asset).url()}
                                        alt={project.name}
                                        width={320}
                                        height={320}
                                        className="rounded-lg border-2 border-mainaccent-700 mb-2"
                                        quality={50}
                                    />
                                


                                <div className="text-center font-medium">{project?.name}</div>
                            </Link>
                        </div>
                    ))}
                </Mdiv>
            )}
        </>

    );
};