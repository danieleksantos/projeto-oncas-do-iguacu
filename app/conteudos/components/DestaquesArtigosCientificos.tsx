import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

const artigosCientificos = [
  {
    title:
      'The loss of prey base may drive the jaguar (Panthera onca) toward extinction in the Atlantic Forest of South America',
    resumo:
      'Publicado na revista Global Ecology and Conservation. Autores: Katia Maria Paschoaletto Micchi de Barros Ferraz, Roberta Montanheiro Paolino, Roberto Fusco-Costa, Ricardo Sampaio, Ana Beatriz de Almeida, Juliano André Bogoni, Vania Foster, Yara Barros, Adriano Garcia Chiarello.',
    image: '/conteudos/artigos-cientificos/artigo-1.png',
    link: 'https://drive.google.com/file/d/10WbD3gHDK3w6VNW97KpaMP0a500wTn6v/view?usp=sharing',
  },
  {
    title:
      'Sixty Degrees of Solutions: Field Techniques for Human–Jaguar Coexistence',
    resumo:
      'Publicado na revista Animals. Autores: John Polisar, Rafael Hoogesteijn, Almira Hoogesteijn, Diego Francis Passos Viana, Aline Kotz, Thiago Reginato, et al.',
    image: '/conteudos/artigos-cientificos/artigo-2.png',
    link: 'https://drive.google.com/file/d/1Gl7Ue9JA9Wl1Y03MwGbZ1ZcHn0SaI7Jk/view?usp=sharing',
  },
];

export default function DestaquesArtigosCientificos() {
  return (
    <section className="w-full py-20 bg-gray-50 flex justify-center border-b border-gray-200">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mb-12 lg:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span className="flex items-center justify-center md:justify-start gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4" /> Artigos Publicados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-onca-preto mb-6">
            Artigos Científicos
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            A produção científica é um dos pilares do Projeto Onças do Iguaçu.
            As pesquisas desenvolvidas pela equipe e por seus parceiros geram
            conhecimento sobre ecologia, comportamento, saúde, coexistência e
            conservação da onça-pintada e de outros componentes da
            biodiversidade. Nesta página, reunimos os principais artigos
            científicos produzidos a partir dessas iniciativas, contribuindo
            para a disseminação do conhecimento e o fortalecimento da
            conservação baseada em evidências.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {artigosCientificos.map((artigo, index) => (
            <Link
              key={index}
              href={artigo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-sm border border-gray-300 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-onca-laranja/30 focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none"
            >
              <div className="relative w-full sm:w-2/5 min-h-70 shrink-0 bg-gray-100 overflow-hidden flex items-center justify-center">
                <Image
                  src={artigo.image}
                  alt={artigo.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-onca-preto mb-3 line-clamp-3 group-hover:text-onca-laranja-escuro transition-colors">
                    {artigo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                    {artigo.resumo}
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto group-hover:text-onca-laranja-escuro transition-colors">
                    Ler Artigo
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            href="/conteudos/artigos-cientificos"
            className="inline-flex items-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group"
          >
            Acessar todos os artigos
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
