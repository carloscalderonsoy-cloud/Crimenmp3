import { promises as fs } from 'fs';
import Header from '@/components/header';
import HeroSection from '@/components/heroSection';
import EpisodiosRecientes from '@/components/episodiosRecientes';
import TodosEpisodios from '@/components/todosEpisodios';
import NewsletterApuntate from '@/components/newsLetterApuntate';
import Shop from '@/components/shop';
import Plataformas from '@/components/plataformas';
import Footer from '@/components/footer';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/episodios.json', 'utf8');
  const data = JSON.parse(file);
  const episodios = data.episodios;
  const latestEpisode = episodios[episodios.length - 1];

  return (
    <main className="bg-carbon">
      <Header />
      <HeroSection latestEpisode={latestEpisode} />
      <EpisodiosRecientes />
      <TodosEpisodios />
      <NewsletterApuntate />
      <Shop />
      <Plataformas />
      <Footer />
    </main>
  );
}
