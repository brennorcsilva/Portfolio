import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact(){
    return(
        <section id="contato" className="container mx-auto px-4 py-16">
            <form className="max-w-md mx-auto space-y-4">
                <Input placeholder="Escreva seu nome"/>
                <Input type="email" placeholder="Deixe o seu melhor email"/>
                <Textarea placeholder="Digite sua mensagem" className="min-h-[150px]"/>
                <Button variant="outline" className="rounded-full text-[#1E3D59]">Enviar mensagem</Button>
            </form>
        </section>
    );
}