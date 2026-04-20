'use client'
import { useRouter } from 'next/navigation';

export default function TodosEpisodios() {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-carbon pb-2">
      <button
        onClick={() => router.push('/episodios')}
        className="border border-magenta text-magenta font-bebas tracking-widest px-8 py-3 mt-12 mx-auto hover:bg-magenta hover:text-carbon transition-all duration-200"
      >
        VER TODOS LOS EPISODIOS
      </button>
    </div>
  );
}
