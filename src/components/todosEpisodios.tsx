'use client'
import { useRouter } from 'next/navigation'

export default function TodosEpisodios() {

    const router = useRouter()

    return (
        <div className='py-14'>
            <button
                onClick={() => router.push(`/episodios`)} 
                className="rounded-md bg-dark-purple text-white px-8 py-2 font-neue hover:scale-105 transition-all"
            >
                Lista de Episodios
            </button>
        </div>
    )
}