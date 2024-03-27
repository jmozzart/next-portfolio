
import ProjectsList from "@/components/ProjectsList";


export default function ProjectsSection() {
    return (
        <div className="container mx-auto m-10 p-4">
        <h2>
          Projects
        </h2>
        <p>
          I have worked with various clients in creating and maintaining their websites. I have also worked with various clients in automating their business processes. I have also worked with various clients in creating and maintaining their E-commerce platforms. I have also worked with various clients in creating and maintaining their blogs and portfolios.
        </p>
        <div>
        <ProjectsList />
        </div>
      </div>
    )
}