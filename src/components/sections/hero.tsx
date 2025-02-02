import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero(){
    return(
        <section className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1E3D59] mb-4">Olá, sou o Brenno!</h1>
            <p className="text-lg text-gray-600 mb-8">Desenvolvedor Fullstack aficionado por criar soluções inovadoras.</p>
            <Button variant="outline" className="rounded-full text-[#1E3D59] hover">Download Currículo</Button>
            <div className="mt-12">
                <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-[#1E3D59]" />
            </div>
        </section>
    );
}