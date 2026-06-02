'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import VoltarLinkConteudo from '../components/VoltarLinkConteudo';

const materiais = [
  {
    title: 'Cuidando dos cães e das onças do Iguaçu',
    description:
      'Nosso objetivo é ajudar você a criar um ambiente onde seus cães possam prosperar, proporcionando-lhes os cuidados e a atenção que eles merecem.',
    image: '/conteudos/downloads/download1.png',
    link: 'https://drive.google.com/file/d/1dyO9VuVBhNZ4YLjWuTtHbB1B0cIHGGF_/view',
  },
  {
    title: 'Guia Atendimento a Predação',
    description:
      'O guia é dividido em etapas claras e objetivas, que vão desde o atendimento inicial até o monitoramento pós-intervenção, garantindo a segurança tanto dos animais domésticos quanto dos grandes felinos.',
    image: '/conteudos/downloads/download2.png',
    link: 'https://drive.google.com/file/d/1rv_CAnR_syo-RyQk3yrjT57FPF1jk_tU/view',
  },
  {
    title: 'Folder sobre Segurança',
    description: 'Orientações sobre encontro com grandes felinos.',
    image: '/conteudos/downloads/download3.png',
    link: 'https://drive.google.com/file/d/1Eeu9TFE-DmGEkzMeTA6kRJ4wlEKs83Ug/view',
  },
  {
    title: 'Guia de Coexistência',
    description: 'Onças e o Homem podem viver em harmonia?',
    image: '/conteudos/downloads/download4.png',
    link: 'https://drive.google.com/file/d/1IKm4Wlm9Lf-XIhpcPpMpg8UXPP49IVxe/view',
  },
  {
    title: 'Manual Peçonhentos',
    description:
      'Animais venenosos e peçonhentos na região do Iguaçu: prevenção e cuidados.',
    image: '/conteudos/downloads/download5.png',
    link: 'https://drive.google.com/file/d/1Wobp9wn8CqRxActk8Cah4k4NhIghXSFZ/view',
  },
  {
    title: 'Guia de identificação de felinos',
    description:
      'Saiba como identificar felinos a partir de suas caraterísticas mais marcantes.',
    image: '/conteudos/downloads/download6.png',
    link: 'https://drive.google.com/file/d/1MwGGSY_YbbpyfRVTzuFZdqmEjhYSsbbo/view',
  },
  {
    title: 'Bichos do Parque Nacional do Iguaçu',
    description:
      '“Nós devemos proteger os desprotegidos, cuidar daqueles que precisam de cuidados e falar por aqueles que não têm voz. Devemos dar a todos os animais a chance de viver a vida.” – Anthony Douglas Williams',
    image: '/conteudos/downloads/download7.png',
    link: 'https://drive.google.com/file/d/1sAqDbufBm3eNuZhbzx_OgIC-8epTfMDF/view',
  },
  {
    title: 'Manual Carcaças',
    description:
      'Um guia para o descarte adequado de carcaças em pequenas e médias propriedades.',
    image: '/conteudos/downloads/download8.png',
    link: 'https://drive.google.com/file/d/1_Wy60yaLu9bESnFaYeJQKLPiWH_qnfVL/view',
  },
];

export default function DownloadsPage() {
  return (
    <div className="bg-gray-50 text-onca-preto min-h-screen pb-24 selection:bg-onca-laranja selection:text-onca-preto">
      {/* HERO SECTION MODELO PADRÃO */}
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          {/* LADO ESQUERDO: Imagem Desktop */}
          <div className="relative z-10 hidden md:block md:w-[60%] min-h-[500px] shrink-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/conteudos/downloads/hero-downloads.png"
              alt="Capa de destaque dos materiais para download"
              fill
              priority
              className="object-cover object-center z-10"
              sizes="(max-width: 1280px) 60vw, 1500px"
            />
          </div>

          {/* LADO DIREITO: Texto e Imagem Mobile */}
          <div className="relative z-20 w-full md:w-[40%] flex flex-col justify-center shrink-0 py-12 md:py-32">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-onca-laranja/10 blur-[100px] rounded-full z-0 mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 mx-auto w-full px-0 md:px-6 lg:pr-12 lg:pl-8">
              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <span className="inline-flex items-center gap-2 text-onca-laranja text-sm font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">
                  <Download className="w-4 h-4" /> Conteúdos
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                  Materiais para <br />
                  <span className="text-onca-laranja">Download</span>
                </h1>
              </div>

              {/* Imagem Mobile (escondida no desktop) */}
              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/conteudos/downloads/hero-downloads.png"
                  alt="Capa de destaque dos materiais para download"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                  Acesse e baixe nossos guias, manuais e cartilhas. A informação
                  é a nossa maior aliada na conservação dos felinos e na
                  convivência harmônica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE MATERIAIS */}
      <div className="w-full bg-white border-b border-gray-200 relative z-30">
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <VoltarLinkConteudo />
        </div>
      </div>
      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {materiais.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row bg-white rounded-3xl shadow-sm border border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-onca-laranja/30 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
            >
              {/* Contêiner da Imagem com object-cover e object-top */}
              <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto shrink-0 bg-gray-200 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Contêiner de Texto */}
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
      </section>
      <div className="w-full bg-gray-50 border-t border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-6 flex justify-center md:justify-start">
          <VoltarLinkConteudo />
        </div>
      </div>
    </div>
  );
}
