import TechStack from "../TechStack";

export default function About(){
    return(
        <section id="sobre" className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-[#1E3D59] mb-12 text-center">Sobre Mim</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-[#1E3D59] mb-4">Me conheça!</h3>
                    <p className="text-gray-600">
                        Sou desenvolvedor fullstack entusiasta de tecnologia e inovação.
                        Além da programação, sou músico, o que me ajuda a manter um olhar criativo para os
                        desafios e o trabalhar bem em equipe. Meu foco é desenvolver aplicações modernas, 
                        intuitivas e de alto desempenho
                    </p>
                    <p className="mt-4 text-gray-600">
                        Se quiser trocar uma ideia sobretecnologia ou oportunidades de trabalho, entre em contato!
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#1E3D59] mb-4">Minhas habilidades</h3>
                    <TechStack />
                </div>
            </div>
        </section>
    );
}