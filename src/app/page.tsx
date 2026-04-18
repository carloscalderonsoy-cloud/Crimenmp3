import EpisodioTarjeta from "@/components/episodioTarjeta";
import TodosEpisodios from "@/components/todosEpisodios";
import Header from "@/components/header";
import NewsletterApuntate from "@/components/newsLetterApuntate";
import Plataformas from "@/components/plataformas";
import Shop from "@/components/shop";
import Footer from "@/components/footer";
import EpisodiosRecientes from "@/components/episodiosRecientes";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="relative w-full h-full md:h-screen">
                <Image
                    src="/main-compressed.png"
                    alt="Crimen.mp3 - fondo principal"
                    fill
                    className="object-cover z-0"
                    priority
                />
                <Header />
                <div className="relative flex h-full items-center justify-center z-10">
                    <Image
                        src="/logo.png"
                        alt="Crimen.mp3 logo"
                        width={480}
                        height={480}
                        className="w-80 xl:w-6/12 pb-36 md:pt-0 pt-28"
                        priority
                    />
                </div>
            </div>
            <div className="flex flex-col w-full bg-cream items-center">
                <span className="text-black text-5xl pt-20 text-center md:px-0 px-4 font-comic">Crímenes reales, canciones reales</span>
                <p className="text-2xl w-full md:w-3/5 text-center pt-8 md:px-0 px-4 font-neue">
                    En <span className="text-light-purple">Crimen.mp3</span>, escuchamos las notas ocultas en cada historia de crimen real. A través de canciones cuidadosamente seleccionadas, te llevamos al corazón de los casos criminales más intrigantes en la historia de la humanidad. Cada episodio es una mezcla de investigación, música y visuales que crean una experiencia única.
                </p>
                <span className="text-xl pt-8 pb-20 text-center md:px-0 px-4 font-neue">¡Prepárate para escuchar <span className="text-light-purple">Crimen.mp3!</span> Donde cada delito tiene su propio soundtrack.</span>
            </div>
            <div className="w-full h-full" style={{ backgroundImage: "url('/background-2.png')", backgroundRepeat: "repeat", backgroundSize: "auto" }}>
                <div className="flex flex-col items-center pt-10">
                    <EpisodiosRecientes />
                    <TodosEpisodios />
                    <NewsletterApuntate />
                    <div className="md:pb-10"></div>
                </div>
            </div>
            <Shop />
            <Plataformas />
            <div className="bg-cream pb-16"></div>
            <Footer />
        </div>
    )
}
