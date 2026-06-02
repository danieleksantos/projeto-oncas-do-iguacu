import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap } from 'lucide-react';

const destaquesArtigos = [
  {
    title: 'Estimativa populacional de onças-pintadas no Corredor Verde',
    description:
      'Estudo científico detalhado sobre a metodologia e os resultados do censo populacional na região fronteiriça entre Brasil e Argentina.',
    image: '/conteudos/artigos/artigo1.webp',
    journal: 'Journal of Mammalogy',
  },
  {
    title: 'Padrões de movimentação de pumas em paisagens fragmentadas',
    description:
      'Análise de dados de telemetria revelando como a onça-parda utiliza os corredores ecológicos em áreas agrícolas.',
    image: '/conteudos/artigos/artigo2.webp',
    journal: 'Biological Conservation',
  },
];

export default function DestaquesArtigos() {
  return (
    <section className="w-full py-20 bg-white flex justify-center pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span className="flex items-center justify-center md:justify-start gap-2 text-onca-preto text-sm font-bold uppercase tracking-widest mb-3">
            <GraduationCap className="w-4 h-4 text-onca-laranja" /> Pesquisa
            Aplicada
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-onca-preto">
            Artigos Científicos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {destaquesArtigos.map((artigo, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl shadow-sm border border-gray-300 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-onca-preto/20"
            >
              <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto shrink-0 bg-gray-200 overflow-hidden">
                <Image
                  src={artigo.image}
                  alt={artigo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Etiqueta Laranja */}
                <div className="absolute bottom-4 left-4 bg-onca-laranja/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase text-onca-preto shadow-sm">
                  {artigo.journal}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-onca-preto mb-3 line-clamp-3 group-hover:text-onca-laranja-escuro transition-colors">
                    {artigo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {artigo.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-colors">
                    Acessar Publicação
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO CALL TO ACTION CENTRALIZADO */}
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
