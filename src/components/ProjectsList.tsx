
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

export default async function ProjectsList() {

/* const x = await getServerSideProps()
const projects = x.props.posts */
const projects = await client.fetch(`*[_type == "projects"]`);
    return (
        <>
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