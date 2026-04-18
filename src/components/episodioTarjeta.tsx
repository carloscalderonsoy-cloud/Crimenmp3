import { FaAmazon, FaSpotify, FaYoutube } from "react-icons/fa";
import Image from "next/image";

interface EpisodioTarjetaProps {
    podcast_number: number
    title: string
    spotify_url: string
    youtube_url: string
    amazon_url: string
}

function EpisodioTarjeta({ podcast_number, title, spotify_url, youtube_url, amazon_url }: EpisodioTarjetaProps) {
    return (
        <div className="flex flex-col rounded-b-xl shadow-md hover:scale-105 transition-transform duration-200 w-64">
            <Image
                src={`/covers/${podcast_number}.jpeg`}
                alt={`Episodio ${podcast_number}: ${title}`}
                width={256}
                height={256}
                className="rounded-tr-xl rounded-tl-xl object-cover w-full"
            />
            <div className="flex flex-col items-center bg-cream rounded-br-xl rounded-bl-xl">
                <span className="pt-2 px-2 text-center font-comic text-sm">{title}</span>
                <div className="flex flex-row items-center space-x-5 p-2">
                    <a href={amazon_url} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${title} en Amazon Music`}>
                        <FaAmazon className="h-9 w-9 hover:text-light-purple transition-all duration-200" />
                    </a>
                    <a href={spotify_url} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${title} en Spotify`}>
                        <FaSpotify className="h-8 w-8 hover:text-light-purple transition-all duration-200" />
                    </a>
                    <a href={youtube_url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${title} en YouTube`}>
                        <FaYoutube className="h-10 w-10 hover:text-light-purple transition-all duration-200" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default EpisodioTarjeta;
