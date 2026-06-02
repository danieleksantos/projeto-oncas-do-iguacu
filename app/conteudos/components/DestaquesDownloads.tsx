import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';

const destaquesDownloads = [
  {
    title: 'Cuidando dos cães e das onças do Iguaçu',
    description:
      'Nosso objetivo é ajudar você a criar um ambiente onde seus cães possam prosperar, proporcionando-lhes os cuidados e a atenção que eles merecem.',
    image: '/conteudos/downloads/download1.png',
    href: 'https://drive.google.com/file/d/1dyO9VuVBhNZ4YLjWuTtHbB1B0cIHGGF_/view',
  },
  {
    title: 'Guia Prático para Atendimento a Predação',
    description:
      'O guia é dividido em etapas claras e objetivas, que vão desde o atendimento inicial até o monitoramento pós-intervenção, garantindo a segurança tanto dos animais domésticos quanto dos grandes felinos.',
    image: '/conteudos/downloads/download2.png',
    href: 'https://drive.google.com/file/d/1rv_CAnR_syo-RyQk3yrjT57FPF1jk_tU/view',
  },
];

export default function DestaquesDownloads() {
  return (
    <section className="w-full py-20 bg-gray-50 flex justify-center border-b border-gray-200">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span className="flex items-center justify-center md:justify-start gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-widest mb-3">
            <Download className="w-4 h-4" /> Guias e Manuais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-onca-preto">
            Materiais para Download
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {destaquesDownloads.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row bg-white rounded-3xl shadow-sm border border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-onca-laranja/30 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
            >
              <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto shrink-0 bg-gray-200 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-onca-preto mb-3 line-clamp-2 group-hover:text-onca-laranja-escuro transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                  <span className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-all duration-300 hover:scale-105 hover:text-onca-laranja-escuro origin-left">
                    Baixar
                    <Download className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            href="/conteudos/downloads"
            className="inline-flex items-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:bg-onca-laranja hover:text-onca-preto hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group"
          >
            Acessar todos os materiais
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
