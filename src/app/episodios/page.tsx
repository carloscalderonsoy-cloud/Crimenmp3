import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaAmazon, FaSpotify, FaYoutube } from "react-icons/fa";
import { promises as fs } from 'fs';
import Image from "next/image";

interface Episodio {
    podcast_number: number
    title: string
    spotify_url: string
    youtube_url: string
    amazon_url: string
}

export default async function Episodios() {
    const file = await fs.readFile(process.cwd() + '/src/data/episodios.json', 'utf8');
    const data = JSON.parse(file);
    const episodios: Episodio[] = data.episodios;

    return (
        <div
            className="min-h-screen bg-repeat bg-auto"
            style={{ backgroundImage: "url('/background-2.png')" }}
        >
            <Header />

            {/* Hero title */}
            <div className="relative flex flex-col justify-center items-center pt-10 md:pt-20 pb-14 animate-fade-in">
                <div className="absolute inset-0 bg-dark-purple opacity-55"></div>
                <span className="relative text-white text-4xl md:text-5xl font-comic tracking-wide [text-shadow:_0_3px_10px_rgb(0_0_0_/_70%)]">
                    Episodios
                </span>
            </div>

            {/* Episode cards */}
            <div className="max-w-3xl mx-auto px-4 md:px-0 py-10 pb-16 space-y-7">
                {[...episodios].reverse().map((episode, index) => (
                    <div
                        key={episode.podcast_number}
                        className="animate-fade-in-up bg-cream rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(150,64,161,0.35)] hover:scale-[1.012] transition-all duration-300 group"
                        style={{ animationDelay: `${Math.min(index * 0.055, 0.55)}s` }}
                    >
                        {/* Cover image with subtle zoom on hover */}
                        <div className="overflow-hidden">
                            <Image
                                src={`/full_covers/${episode.podcast_number}.jpeg`}
                                alt={`Episodio ${episode.podcast_number}: ${episode.title}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                            />
                        </div>

                        {/* Card footer */}
                        <div className="flex flex-row items-center justify-between px-6 md:px-10 py-5 md:py-6 border-t border-dark-purple/10">
                            <div className="flex flex-col gap-1">
                                <span className="font-comic text-xs md:text-sm text-light-purple italic tracking-wide">
                                    Ep. {episode.podcast_number}
                                </span>
                                <span className="font-comic text-lg md:text-2xl leading-snug">
                                    {episode.title}
                                </span>
                            </div>
                            <div className="flex flex-row space-x-5 md:space-x-8 items-center flex-shrink-0 ml-4">
                                <a
                                    href={episode.amazon_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Escuchar en Amazon Music"
                                    className="hover:text-light-purple hover:scale-110 transition-all duration-200 block"
                                >
                                    <FaAmazon className="h-7 w-7 md:h-10 md:w-10" />
                                </a>
                                <a
                                    href={episode.spotify_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Escuchar en Spotify"
                                    className="hover:text-light-purple hover:scale-110 transition-all duration-200 block"
                                >
                                    <FaSpotify className="h-7 w-7 md:h-10 md:w-10" />
                                </a>
                                <a
                                    href={episode.youtube_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Ver en YouTube"
                                    className="hover:text-light-purple hover:scale-110 transition-all duration-200 block"
                                >
                                    <FaYoutube className="h-8 w-8 md:h-11 md:w-11" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
