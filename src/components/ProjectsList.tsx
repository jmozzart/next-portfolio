

import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import client from "@/utils/sanityClient";
import {Mdiv} from "@/components/AnimatedBlock";
import urlFor from "@/utils/imgBuilder";

const query = `*[_type == "projects"] { _id, name, description, image, relatedSkills, featured, slug }`







export default async function ProjectsList() {

    const projects = await client.fetch<SanityDocument[]>(query);

    return (
        <>
            {projects.length > 0 && (
                <Mdiv className="flex flex-wrap justify-center">
                    {projects.map((project, index) => (

                        <div key={project._id} className="m-5 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 max-w-60 flex flex-col justify-start">
                            <Link href={`/projects/${project?.slug?.current}`}>
                                
                                    <Image
                                        src={urlFor(project?.image?.asset).url()}
                                        alt={project.name}
                                        width={320}
                                        height={320}
                                        className="rounded-lg border-2 border-mainaccent-700 mb-2"
                                        quality={50}
                                        loading={index < 9 ? "eager" : "lazy"}
                                    />
                                
                                <div className="flex items-center justify-center text-center font-medium min-h-14 h-auto py-0.5">{project?.name}</div>

                                <div className="flex flex-wrap items-center justify-center">
                                    {project.relatedSkills && project?.relatedSkills.map((skill: any) => (
                                        <span key={skill} className="text-xs bg-mainaccent-700 text-white rounded-full px-2 py-1 m-1 whitespace-nowrap">{skill}</span>
                                    )).slice(0, 4)
                                    }
                                </div>
                            </Link>
                        </div>
                    ))}
                </Mdiv>
            )}
        </>

    );
};