
import Image from "next/image";
import Link from "next/link";
import client from "@/utils/sanityClient";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
//cache-control

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
    image: ProjectImg
}

function urlFor (source: SanityImageSource) {
    return imageUrlBuilder(client).image(source)
  }

  export async function getStaticProps() {
    const posts = await client.fetch(`*[_type == "projects"]`);
    //const posts = await res.json()
   
    return {
      props: {
        posts,
      },
    
      revalidate: 10, 
    }
  }

  export async function getServerSideProps() {
    const posts = await client.fetch(`*[_type == "projects"]`);
    //const posts = await res.json()
   
    return {
      props: {
        posts,
      },
      revalidate: 10,
    }
  }

  const query = `*[_type == "projects"]`;
  const queryUrl = "https://xle5b8xj.api.sanity.io/v2022-03-07/data/query/checkdataset?query=*%5B_type+%3D%3D+%22projects%22%5D&perspective=published";

export default async function ProjectsList() {

/* const x = await getServerSideProps()
const projects = x.props.posts */
const projects = await client.fetch(`*[_type == "projects"]`)
/* const fprojects = await fetch(queryUrl, { next: { revalidate: 60 } })
const projects = (await fprojects.json()).result */

console.log(projects)
    return (
        <>
        <h3>Featured Projects</h3>
            {projects.length > 0 && (
                <div className="flex flex-wrap justify-center">
                    {projects.map((project: Project) => (

                        <div key={project._id} className="m-5 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 max-w-80">
                            {/* <Link href={`/projects/${project._id}`}> */}
                                
                                    <Image
                                        src={urlFor(project.image.asset).url()}
                                        alt={project.name}
                                        width={400}
                                        height={400}
                                        className="rounded-lg border-2 border-gray-400 mb-2"
                                    />
                                
                                
                            <div className="text-center font-medium">{project?.name}</div>
                            <p className="hidden text-center text-xs mt-1">{project?.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </>

    );
};