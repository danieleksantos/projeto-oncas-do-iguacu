'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import VoltarLinkConteudo from '../components/VoltarLinkConteudo'; // Ajuste o caminho se necessário

const artigos = [
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
  {
    title: 'Onça-pintada: símbolo brasileiro de conservação da biodiversidade',
    description:
      'A ideia da criação do dia da onça é para que possa ser feita, todos os anos, uma reflexão e discussão sobre a conservação do maior felino das Américas no país. Como predador de topo de cadeia em um mundo cada vez mais desmatado, está ameaçada.',
    image: '/conteudos/artigos/artigo3.webp',
    link: 'https://oeco.org.br/analises/onca-pintada-simbolo-brasileiro-de-conservacao-da-biodiversidade/',
  },
  {
    title: 'Lugar de bicho é no mato',
    description:
      'Campanha orienta as pessoas a não resgatar filhotes de animais silvestres sem necessidade. A prática não apenas priva os filhotes do convívio com a mãe como lota os zoos e centros de triagens à toa.',
    image: '/conteudos/artigos/artigo4.webp',
    link: 'https://oeco.org.br/analises/lugar-de-bicho-e-no-mato/',
  },
  {
    title: 'Ao infinito e além?',
    description:
      'Censo revela que população de pantheras na região do Corredor Verde em Misiones e no Brasil tem crescido. E podemos ter esperança de alcançar a capacidade de suporte da região.',
    image: '/conteudos/artigos/artigo5.webp',
    link: 'https://oeco.org.br/analises/ao-infinito-e-alem/',
  },
  {
    title: 'Podemos falar sobre trevas ou apontar o caminho da luz',
    description:
      'Uma boa reflexão para começar o ano é se estamos contando “histórias de amor”, inspirando e construindo uma conexão pessoal entre as pessoas e a natureza para provocar a tão necessária mudança de comportamento.',
    image: '/conteudos/artigos/artigo6.webp',
    link: 'https://oeco.org.br/analises/podemos-falar-sobre-trevas-ou-apontar-o-caminho-da-luz/',
  },
  {
    title: 'Conservação de onças-pintadas: prioridade mundial',
    description:
      'Congresso de Conservação da IUCN discutirá moção para priorizar a conservação da onça-pintada. É tempo de lutar pelo maior felino das Américas em eventos que reúnem líderes e tomadores de decisões.',
    image: '/conteudos/artigos/artigo7.webp',
    link: 'https://oeco.org.br/analises/conservacao-de-oncas-pintadas-prioridade-mundial/',
  },
  {
    title: 'Uma força a mais para as onças-pintadas',
    description:
      'A espécie foi incluída no apêndice I e II da Convenção sobre Espécies Migratórias (CMS), mais um passo para a proteção do maior felino das américas, fornecendo uma plataforma global para a conservação.',
    image: '/conteudos/artigos/artigo8.webp',
    link: 'https://oeco.org.br/analises/uma-forca-a-mais-para-as-oncas-pintadas/',
  },
  {
    title: 'Trabalhar com conservação em tempos de pandemia',
    description:
      'Será que podemos eventualmente transmitir o vírus para as onças em uma campanha de captura, onde existe contato muito próximo com os animais? Tenho recebido perguntas sobre como está sendo trabalhar em meio à pandemia...',
    image: '/conteudos/artigos/artigo9.webp',
    link: 'https://oeco.org.br/analises/trabalhar-com-conservacao-em-tempos-de-pandemia/',
  },
  {
    title: 'Cuidar das onças sem perder nossa humanidade',
    description:
      'Conciliar a necessidade da conservação das onças – e da fauna como um todo – com as necessidades de populações carentes, e sem perder a empatia, é um desafio para os projetos de conservação.',
    image: '/conteudos/artigos/artigo10.webp',
    link: 'https://oeco.org.br/analises/cuidar-das-oncas-sem-perder-nossa-humanidade/',
  },
  {
    title: 'É longa a estrada da conservação da onça-pintada',
    description:
      'No Dia Nacional da Onça-Pintada, relembramos os projetos e instituições que trabalham pela conservação do felino e os desafios dessa iniciativa, resgatando a articulação do CENAP/ICMBio e parceiros.',
    image: '/conteudos/artigos/artigo11.webp',
    link: 'https://oeco.org.br/analises/e-longa-a-estrada-da-conservacao-da-onca-pintada/',
  },
  {
    title: 'As vidas do Leôncio',
    description:
      'Lições e aprendizados deixadas por uma jovem onça-parda, que viveu intensamente os 40 dias de liberdade antes de falecer na natureza após ser atropelada e reabilitada.',
    image: '/conteudos/artigos/artigo12.webp',
    link: 'https://oeco.org.br/analises/as-vidas-do-leoncio/',
  },
];

export default function ArtigosPage() {
  return (
    <div className="bg-gray-50 text-onca-preto min-h-screen selection:bg-onca-laranja selection:text-onca-preto">
      {/* HERO SECTION */}
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          {/* LADO ESQUERDO: Imagem Desktop */}
          <div className="relative z-10 hidden md:block md:w-[60%] min-h-[500px] shrink-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/conteudos/hero-conteudo.png"
              alt="Artigos e publicações do Projeto Onças do Iguaçu"
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
                  <BookOpen className="w-4 h-4" /> Pesquisa & Reflexão
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                  Nossos <br />
                  <span className="text-onca-laranja">Artigos</span>
                </h1>
              </div>

              {/* Imagem Mobile (escondida no desktop) */}
              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/conteudos/hero-conteudo.png"
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

      {/* BARRA SUPERIOR - VOLTAR (Agora posicionada logo após o Hero) */}
      <div className="w-full bg-white border-b border-gray-200 relative z-30">
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <VoltarLinkConteudo />
        </div>
      </div>

      {/* GRID DE ARTIGOS */}
      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-16 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-8">
          {artigos.map((artigo, index) => (
            <Link
              key={index}
              href={artigo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row bg-white rounded-3xl shadow-sm border border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-onca-laranja/30 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
            >
              {/* Contêiner da Imagem */}
              <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto shrink-0 bg-gray-200 overflow-hidden">
                <Image
                  src={artigo.image}
                  alt={artigo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Contêiner de Texto */}
              <div className="p-6 md:p-8 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-6">
                  {/* Título muda de cor com o hover do card */}
                  <h3 className="text-2xl font-bold text-onca-preto mb-3 line-clamp-3 group-hover:text-onca-laranja-escuro transition-colors duration-300 leading-tight">
                    {artigo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                    {artigo.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                  {/* Hover isolado apenas no texto "Leia Mais" */}
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

      {/* BARRA INFERIOR - VOLTAR */}
      <div className="w-full bg-gray-50 border-t border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-6 flex justify-center md:justify-start">
          <VoltarLinkConteudo />
        </div>
      </div>
    </div>
  );
}
