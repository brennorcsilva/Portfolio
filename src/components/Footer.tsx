import { Github, Linkedin, Mail } from "lucide-react";


export default function Footer(){
    return(
        <footer className="bg-[#1E3D59] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-2xl font-mono">&lt;brcs/&gt;</div>
                    <div className="text-sm">Brenno Ribeiro Cardoso da Silva</div>
                    <div className="flex gap-4">
                        <a href="#">
                            <Linkedin className="w-5 h-5"/>
                        </a>
                        <a href="#">
                            <Github className="w-5 h-5"/>
                        </a>
                        <a href="mailto:example@gmail.com" className="hover:text-white/80">
                            <Mail className="w-5 h-5"/> 
                        </a>
                    </div>
                </div>
                <div className="text-center text-sm mt-8">© Copyright 2025. feito por brennorcsilva.</div>
            </div>
        </footer>
    );
}