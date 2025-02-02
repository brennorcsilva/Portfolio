import ProjectCard from "../ProjectCard";

export default function Projects(){
    const projects = [
        {
            title: "Portfólio",
            image: "/placeholder.svg?height=200&width=250",
            href: "#",
          },
          {
            title: "Jogo em Javascript",
            image: "/placeholder.svg?height=200&width=250",
            href: "#",
          },
          {
            title: "Gerador de resumos com IA",
            image: "/placeholder.svg?height=200&width=250",
            href: "#",
          },
          {
            title: "E-commerce",
            image: "/placeholder.svg?height=200&width=250",
            href: "#",
          },
          {
            title: "Plataforma de Recomendações para Cursos e Estudos",
            image: "/placeholder.svg?height=200&width=250",
            href: "#",
            fullWidth: true,
          },
    ]

    return(
        <section id="projetos" className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-6">
                {projects.slice(0, 4).map((project)=>(
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
            <div className="mt-6">
                {projects.slice(4).map((project)=> (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

