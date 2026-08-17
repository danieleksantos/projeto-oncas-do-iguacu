import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';

const destaquesBoletins = [
  {
    title: 'Boletim A Voz da Onça - Julho 2022',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim1.png',
    href: 'https://drive.google.com/file/d/1w7SElcnONaWrCMd7thTXj7YcSQYiJrNd/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Março 2022',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim2.png',
    href: 'https://drive.google.com/file/d/1F7jdEsI5lSn8ysHvtQ8Cxrc5Di39h-3T/view?usp=sharing',
  },
];

export default function DestaquesBoletins() {
  return (
    <section className="w-full py-20 bg-gray-50 flex justify-center border-b border-gray-200">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span className="flex items-center justify-center md:justify-start gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4" /> Informativo Periódico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-onca-preto">
            Boletim "A Voz da Onça"
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {destaquesBoletins.map((boletim, index) => (
            <Link
              key={index}
              href={boletim.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-sm border border-gray-300 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-onca-laranja/30 focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none"
            >
              <div className="relative w-full sm:w-2/5 min-h-62.5 shrink-0 bg-gray-100 overflow-hidden">
                <Image
                  src={boletim.image}
                  alt={boletim.title}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-onca-preto mb-3 line-clamp-2 group-hover:text-onca-laranja-escuro transition-colors">
                    {boletim.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                    {boletim.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto group-hover:text-onca-laranja-escuro transition-colors">
                    Ler Edição Completa
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            href="/conteudos/boletins"
            className="inline-flex items-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group"
          >
            Ver todos os boletins
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
