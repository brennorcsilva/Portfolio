import Image from "next/image";

interface ProjectCardProps {
    title: string
    image: string
    href: string
    fullWidth?: boolean
}

export default function ProjectCard({ title, image, href, fullWidth }: ProjectCardProps) {
    return(
        <a 
            href={href} 
            className={`block overflow-hidden rounded-3xl border bg-white shadow-sm transition-transform hover:-translate-y-1
            ${ fullWidth ? "md:col-span-2" : ""}`}
        >
            <div className="relative aspect-[4/3]">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-">{title}</h3>
            </div>
        </a>
    );
}