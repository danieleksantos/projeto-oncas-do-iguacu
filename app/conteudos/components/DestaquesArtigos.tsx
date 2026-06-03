import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';

const destaquesArtigos = [
  {
    title: 'Acho que vi um gatinho',
    description:
      'Após inúmeras tentativas frustradas, conseguimos capturar uma onça, um macho. Ele recebeu um colar que nos permite acompanhar sua movimentação, tanto por GPS quanto VHS. Onças-pintadas são figuras meio mágicas e que mexem com emoções e imaginação...',
    image: '/conteudos/artigos/artigo1.webp',
    link: 'https://oeco.org.br/analises/acho-que-vi-um-gatinho/',
  },
  {
    title: 'Um é pouco, dois é bom, três é demais (de lindo)',
    description:
      'O nascimento de três filhotes de onça-pintada no Parque Nacional do Iguaçu precisa ser comemorado. É um acontecimento a ser celebrado, especialmente quando isso acontece na Mata Atlântica, bioma onde a espécie está criticamente ameaçada...',
    image: '/conteudos/artigos/artigo2.webp',
    link: 'https://oeco.org.br/analises/um-e-pouco-dois-e-bom-tres-e-demais-de-lindo/',
  },
];

export default function DestaquesArtigos() {
  return (
    <section className="w-full py-20 lg:py-32 bg-white flex justify-center pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span className="flex items-center justify-center md:justify-start gap-2 text-onca-preto text-sm font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4 text-onca-laranja" /> Pesquisa &
            Reflexão
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-onca-preto">
            Artigos O Eco
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {destaquesArtigos.map((artigo, index) => (
            <Link
              key={index}
              href={artigo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row bg-gray-50 rounded-3xl shadow-sm border border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-onca-preto/20 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
            >
              <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto shrink-0 bg-gray-200 overflow-hidden">
                <Image
                  src={artigo.image}
                  alt={artigo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-onca-preto mb-3 line-clamp-3 group-hover:text-onca-laranja-escuro transition-colors duration-300 leading-tight">
                    {artigo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                    {artigo.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200 flex items-center">
                  <span className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-all duration-300 hover:scale-105 hover:text-onca-laranja-escuro origin-left">
                    Leia Mais
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            href="/conteudos/artigos"
            className="inline-flex items-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:bg-onca-laranja hover:text-onca-preto hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
