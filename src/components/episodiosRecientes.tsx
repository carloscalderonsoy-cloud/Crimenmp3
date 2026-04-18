import EpisodioTarjeta from "./episodioTarjeta";
import { promises as fs } from 'fs';

interface Episodio {
    podcast_number: number
    title: string
    spotify_url: string
    youtube_url: string
    amazon_url: string
}

const RECENT_COUNT = 6;

export default async function EpisodiosRecientes() {
    const file = await fs.readFile(process.cwd() + '/src/data/episodios.json', 'utf8');
    const data = JSON.parse(file);
    const episodios: Episodio[] = data.episodios;

    const recientes = [...episodios].reverse().slice(0, Math.min(RECENT_COUNT, episodios.length));
    const fila1 = recientes.slice(0, 3);
    const fila2 = recientes.slice(3, 6);

    return (
        <div className="flex flex-col items-center w-full px-4 md:px-0">
            <span className="text-white text-3xl font-comic [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Episodios Recientes</span>
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-14 pt-10">
                {fila1.map((ep) => (
                    <div key={ep.podcast_number} className="mx-auto">
                        <EpisodioTarjeta
                            podcast_number={ep.podcast_number}
                            title={ep.title}
                            spotify_url={ep.spotify_url}
                            youtube_url={ep.youtube_url}
                            amazon_url={ep.amazon_url}
                        />
                    </div>
                ))}
            </div>
            {fila2.length > 0 && (
                <div className="hidden md:block">
                    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-14 pt-10">
                        {fila2.map((ep) => (
                            <div key={ep.podcast_number} className="mx-auto">
                                <EpisodioTarjeta
                                    podcast_number={ep.podcast_number}
                                    title={ep.title}
                                    spotify_url={ep.spotify_url}
                                    youtube_url={ep.youtube_url}
                                    amazon_url={ep.amazon_url}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}