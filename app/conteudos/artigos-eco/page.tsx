'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import VoltarLinkConteudo from '../components/VoltarLinkConteudo';

const artigos = [
  {
    title: 'O que cai do mundo não volta mais',
    description:
      'Em um incidente ainda cheio de incertezas e indefinições, uma pessoa perdeu a vida. É devastador.',
    image: '/conteudos/artigos/artigo13.jpeg',
    link: 'https://oeco.org.br/analises/o-que-cai-do-mundo-nao-volta-mais/',
  },
  {
    title: 'Quando o medo não decide sozinho',
    description:
      'Coexistência não se sustenta apenas com boas técnicas de manejo, mas da construção de relações. Ela depende de confiança, e confiança leva tempo e esforço',
    image: '/conteudos/artigos/artigo14.jpeg',
    link: 'https://oeco.org.br/colunas/quando-o-medo-nao-decide-sozinho/',
  },
  {
    title: 'Acho que vi um gatinho',
    description:
      'O Projeto Onças do Iguaçu instala colar GPS no macho "Croissant" para monitorar seus deslocamentos.',
    image: '/conteudos/artigos/artigo1.webp',
    link: 'https://oeco.org.br/analises/acho-que-vi-um-gatinho/',
  },
  {
    title: 'Um é pouco, dois é bom, três é demais (de lindo)',
    description:
      'O Projeto Onças do Iguaçu registrou o nascimento inédito de três filhotes da onça Atiaia no Parque Nacional do Iguaçu.',
    image: '/conteudos/artigos/artigo2.webp',
    link: 'https://oeco.org.br/analises/um-e-pouco-dois-e-bom-tres-e-demais-de-lindo/',
  },
  {
    title: 'Onça-pintada: símbolo brasileiro de conservação da biodiversidade',
    description:
      'A Portaria MMA Nº 8/2018 oficializou a onça-pintada como símbolo brasileiro da conservação da biodiversidade.',
    image: '/conteudos/artigos/artigo3.webp',
    link: 'https://oeco.org.br/analises/onca-pintada-simbolo-brasileiro-de-conservacao-da-biodiversidade/',
  },
  {
    title: 'Lugar de bicho é no mato',
    description:
      'Campanha nacional "Deixe o Bicho no Mato" orienta a população a não recolher filhotes silvestres achados sozinhos.',
    image: '/conteudos/artigos/artigo4.webp',
    link: 'https://oeco.org.br/analises/lugar-de-bicho-e-no-mato/',
  },
  {
    title: 'Ao infinito e além?',
    description:
      'Censo revela que população de pantheras na região do Corredor Verde em Misiones e no Brasil tem crescido.',
    image: '/conteudos/artigos/artigo5.webp',
    link: 'https://oeco.org.br/analises/ao-infinito-e-alem/',
  },
  {
    title: 'Podemos falar sobre trevas ou apontar o caminho da luz',
    description:
      'Comunicação ambiental alarmista gera ansiedade e desesperança, sendo contraproducente para engajar as pessoas.',
    image: '/conteudos/artigos/artigo6.webp',
    link: 'https://oeco.org.br/analises/podemos-falar-sobre-trevas-ou-apontar-o-caminho-da-luz/',
  },
  {
    title: 'Conservação de onças-pintadas: prioridade mundial',
    description:
      'Congresso de Conservação da IUCN discutirá moção para priorizar a conservação da onça-pintada.',
    image: '/conteudos/artigos/artigo7.webp',
    link: 'https://oeco.org.br/analises/conservacao-de-oncas-pintadas-prioridade-mundial/',
  },
  {
    title: 'Uma força a mais para as onças-pintadas',
    description:
      'A onça-pintada foi oficialmente incluída nos Apêndices I e II da CMS durante sua 13ª COP na Índia.',
    image: '/conteudos/artigos/artigo8.webp',
    link: 'https://oeco.org.br/analises/uma-forca-a-mais-para-as-oncas-pintadas/',
  },
  {
    title: 'Trabalhar com conservação em tempos de pandemia',
    description:
      'Será que podemos eventualmente transmitir o vírus para as onças em uma campanha de captura?',
    image: '/conteudos/artigos/artigo9.webp',
    link: 'https://oeco.org.br/analises/trabalhar-com-conservacao-em-tempos-de-pandemia/',
  },
  {
    title: 'Cuidar das onças sem perder nossa humanidade',
    description:
      'A importância de abordar a caça e o abate de onças-pintadas sob a ótica da empatia e do diálogo.',
    image: '/conteudos/artigos/artigo10.webp',
    link: 'https://oeco.org.br/analises/cuidar-das-oncas-sem-perder-nossa-humanidade/',
  },
  {
    title: 'A conservação da onça-pintada',
    description:
      'Balanço sobre conquistas e graves ameaças enfrentadas pela onça-pintada.',
    image: '/conteudos/artigos/artigo11.webp',
    link: 'https://oeco.org.br/analises/e-longa-a-estrada-da-conservacao-da-onca-pintada/',
  },
  {
    title: 'As vidas do Leôncio',
    description:
      'Lições e aprendizados deixadas por uma jovem onça-parda, que viveu intensamente os últimos dias de liberdade.',
    image: '/conteudos/artigos/artigo12.webp',
    link: 'https://oeco.org.br/analises/as-vidas-do-leoncio/',
  },
];

export default function ArtigosPage() {
  return (
    <div className="bg-gray-50 text-onca-preto min-h-screen selection:bg-onca-laranja selection:text-onca-preto">
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          <div className="relative z-10 hidden md:block md:w-[60%] min-h-125 shrink-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/conteudos/artigos/artigos-hero.png"
              alt="Artigos e publicações do Projeto Onças do Iguaçu"
              fill
              priority
              className="object-cover object-center z-10"
              sizes="(max-width: 1280px) 60vw, 1500px"
            />
          </div>

          <div className="relative z-20 w-full md:w-[40%] flex flex-col justify-center shrink-0 py-12 md:py-32">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-onca-laranja/10 blur-[100px] rounded-full z-0 mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 mx-auto w-full px-0 md:px-6 lg:pr-12 lg:pl-8">
              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <span className="inline-flex items-center gap-2 text-onca-laranja text-sm font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">
                  <BookOpen className="w-4 h-4" /> Pesquisa & Reflexão
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                  Nossos <br />
                  <span className="text-onca-laranja">Artigos</span>
                </h1>
              </div>

              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/conteudos/artigos/artigos-hero.png"
                  alt="Artigos e publicações do Projeto Onças do Iguaçu"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                  Reflexões de campo, divulgação científica e histórias sobre a
                  nossa convivência com os grandes felinos da Mata Atlântica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white border-b border-gray-200 relative z-30">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <VoltarLinkConteudo />
        </div>
      </div>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-16 lg:pt-14 lg:pb-24">
        <div className="flex flex-col items-center md:items-start mb-12 pb-0 md:pb-4 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 mb-3">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-onca-preto leading-none">
              Artigos
            </h2>
            <div className="relative w-28 h-10 md:w-36 md:h-12">
              <Image
                src="/conteudos/artigos/oeco-logo.png"
                alt="O Eco"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
          </div>
          <p className="text-gray-500 text-center md:text-left text-sm md:text-base font-medium max-w-2xl">
            Análises, crônicas, notícias e reflexões publicadas em parceria com
            o portal de jornalismo ambiental O Eco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {artigos.map((artigo, index) => (
            <Link
              key={index}
              href={artigo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row bg-white rounded-3xl shadow-sm border border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-onca-laranja/30 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
            >
              <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto shrink-0 bg-gray-200 overflow-hidden">
                <Image
                  src={artigo.image}
                  alt={artigo.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-onca-preto mb-2 line-clamp-2 group-hover:text-onca-laranja-escuro transition-colors duration-300 leading-tight">
                    {artigo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {artigo.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                  <span className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-all duration-300 hover:scale-105 hover:text-onca-laranja-escuro origin-left">
                    Leia Mais
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full bg-gray-50 border-t border-gray-200 pt-0 lg:pt-12 pb-10 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 flex justify-center md:justify-start">
          <VoltarLinkConteudo />
        </div>
      </div>
    </div>
  );
}
