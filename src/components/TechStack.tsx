export default function TechStack(){
    const technologies = {
        Frontend:[
            { name: "HTML" },
            { name: "CSS" },
            { name: "Javascript" },
            { name: "React" },
            { name: "Next.js" }
        ],
        Backend: [
            { name: "Java" },
            { name: "Python" },
            { name: "Spring Boot" },
            { name: "Flask" },
            { name: "MySQL" },
            { name: "MongoDB" }
        ],
        "Outras ferramentas": [
            { name: "Git" },
            { name: "Postman" },
            { name: "Figma" },
            { name: "Adobe Illustrator" },
            { name: "Adobe Photoshop" },
            { name: "Microsoft Office" }
        ],
    }

    return (
        <div className="space-y-6">
            {Object.entries(technologies).map(([category, techs])=>(
                <div key={category}>
                    <h4 className="text-lg font-semibold text-[#1E3D59] mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                        {techs.map((tech)=> (
                            <div key={tech.name} className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100">
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}