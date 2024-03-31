
import FeaturedProjects from "@/components/FeaturedProjects";
import Link from "next/link";


export default function ProjectsSection() {
    return (
        <div className="container mx-auto m-10 p-4">
        <h2>
          Projects
        </h2>
        
        <div>
        <FeaturedProjects />
        </div>
        <div className="text-center my-8">
          <Link href="/projects" className="primary-btn">View All Projects</Link>
        </div>
      </div>
    )
}