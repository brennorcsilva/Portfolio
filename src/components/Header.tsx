export default function Header() {
    const navItems = ["Home", "Projetos", "Sobre", "Contato"]

    return(
        <header className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                <div className="text-2xl font-mono text-[#1E3D59]">&lt;brcs/&gt;</div>
                <div className="hidden md:flex gap-6">
                    {navItems.map((item)=> (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-[#1E3D59] hover:text-[#1E3D59]/80">
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}