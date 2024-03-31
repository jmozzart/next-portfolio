

import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import client from "@/utils/sanityClient";
import {Mdiv} from "@/components/AnimatedBlock";
import urlFor from "@/utils/imgBuilder";



const testq = { "query": "*[_type == \"projects\"]", "result": [{ "link": "https://blackislandaudio.com", "_id": "89dd4b51-c999-44aa-91df-d4043609a991", "_rev": "zlcb33ps9nDnWVV33eqlow", "_type": "projects", "name": "Black Island Audio Website", "_updatedAt": "2024-03-28T09:03:49Z", "image": { "_type": "image", "asset": { "_ref": "image-6cbdf9f2b1e88a2f09a7491f64734ccdfcf7bafe-892x892-png", "_type": "reference" } }, "featured": true, "_createdAt": "2024-03-27T13:19:20Z" }, { "image": { "_type": "image", "asset": { "_ref": "image-905478304c209281869b28dd7b57f9952ec0c9b7-927x927-png", "_type": "reference" } }, "_rev": "T3AQNSwlglsfdG648Zqk80", "name": "Integration of Spotify API to Wix Website", "relatedSkills": ["Wix Velo", "Spotify API", "Javascript"], "featured": true, "_createdAt": "2024-03-28T09:43:44Z", "_type": "projects", "link": "https://www.dusktilldawn.online/test1", "_id": "933e0958-ff55-4b0e-9a0c-cd5d639e0f31", "_updatedAt": "2024-03-28T09:43:44Z" }, { "_createdAt": "2024-03-26T10:26:32Z", "_rev": "zlcb33ps9nDnWVV33eiSRV", "_type": "projects", "name": "Spellsology Conversations App", "description": "A fork from Twilio conversations app.", "_id": "ad5c6d78-b49e-40cf-8945-4828914a7884", "_updatedAt": "2024-03-28T06:52:23Z", "image": { "_type": "image", "asset": { "_ref": "image-ee07889d093529161f5829d108dc6915cecd0cf3-979x979-png", "_type": "reference" } }, "featured": true, "link": "https://spellsology-chat.netlify.app", "relatedSkills": ["Twilio API", "React", "REST API"] }, { "image": { "_type": "image", "asset": { "_ref": "image-22a2400a05c7d67fd31523387ac3a0029ead2a03-893x893-png", "_type": "reference" } }, "_createdAt": "2024-03-26T10:25:48Z", "_type": "projects", "link": "https://demo.sokrateque.ai", "description": "Conversations and document analysis of large texts processing integration to OpenAI involve the meticulous examination and examination of various textual sources, along with comprehensive discussions, to seamlessly incorporate them into the OpenAI platform.", "_id": "c9ccb5d2-9ed1-45d6-874d-d6ef51d39f49", "relatedSkills": ["OpenAI API", "TypeScript", "Azure", "CodeIgniter", "Box API"], "featured": true, "_rev": "jlUVpQJP35gpvLV4n1wxGY", "name": "Sokrateque OpenAI Integration", "_updatedAt": "2024-03-28T09:40:07Z" }, { "_rev": "T3AQNSwlglsfdG648ZqsO8", "_type": "projects", "link": "https://www.myclearopinioninsightshub.com/", "name": "Integration of Snipcart to Next.js Website", "_updatedAt": "2024-03-28T09:45:04Z", "image": { "_type": "image", "asset": { "_ref": "image-4c57a1c3f11f825b60746e9900bf5777152cd01f-894x894-png", "_type": "reference" } }, "_createdAt": "2024-03-27T07:37:18Z", "description": "This project involves integrating Snipcart into a website built in Next.js website to utilize its strong e-commerce features for smooth online transactions. I also add Stripe integration to improve the website's payment processing, ensuring secure and efficient transactions for users.", "_id": "e27cd35e-1f21-43d7-821f-17769cbbf7bb", "featured": true }, { "_rev": "jlUVpQJP35gpvLV4n1Qh8C", "_type": "projects", "link": "https://www.comicool.ph", "name": "Comicool.ph Website", "_id": "f4238724-7ee2-4e97-b571-3542c90370d3", "_updatedAt": "2024-03-27T17:59:58Z", "image": { "_type": "image", "asset": { "_ref": "image-3aee1e24908930e086215af08a66329f16aa0378-1057x1057-png", "_type": "reference" } }, "_createdAt": "2024-03-27T11:12:24Z" }], "ms": 4 }

const query = `*[_type == "projects"][featured] { _id, name, description, image, relatedSkills, featured, slug }`




export default async function FeaturedProjects() {

    const projects = await client.fetch<SanityDocument[]>(query);

    return (
        <>
            {projects.length > 0 && (
                <Mdiv className="flex flex-wrap justify-center">
                    {projects.map((project) => (

                        <div key={project._id} className="m-5 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 max-w-60 flex flex-col justify-start">
                            <Link href={`/projects/${project?.slug.current}`}>
                                
                                    <Image
                                        src={urlFor(project.image.asset).url()}
                                        alt={project.name}
                                        width={296}
                                        height={296}
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