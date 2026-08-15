'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ExternalLink } from 'lucide-react';
import VoltarLinkConteudo from '../components/VoltarLinkConteudo';

const artigos = [
  {
    title:
      'The loss of prey base may drive the jaguar (Panthera onca) toward extinction in the Atlantic Forest of South America',
    description:
      'Publicado na Global Ecology and Conservation. Autores: Katia M. P. M. de Barros Ferraz, Roberta M. Paolino, Roberto Fusco-Costa, Ricardo Sampaio, Ana Beatriz de Almeida, Juliano A. Bogoni, Vania Foster, Yara Barros, Adriano G. Chiarello.',
    image: '/conteudos/artigos-cientificos/artigo-1.png',
    link: 'https://drive.google.com/file/d/10WbD3gHDK3w6VNW97KpaMP0a500wTn6v/view?usp=sharing',
  },
  {
    title:
      'Sixty Degrees of Solutions: Field Techniques for Human–Jaguar Coexistence',
    description:
      'Publicado na revista Animals. Autores: John Polisar, Rafael Hoogesteijn, Almira Hoogesteijn, Diego Francis Passos Viana, Aline Kotz, Thiago Reginato, et al.',
    image: '/conteudos/artigos-cientificos/artigo-2.png',
    link: 'https://drive.google.com/file/d/1Gl7Ue9JA9Wl1Y03MwGbZ1ZcHn0SaI7Jk/view?usp=sharing',
  },
  {
    title:
      'First record of axis deer (Axis axis) in the State of Paraná, southern Brazil',
    description:
      'Registro documentado no periódico do EAZA Deer TAG. Autores: Vania C. Foster, Thiago Reginato, Aline Kotz, Jessica Dias e Yara Barros.',
    image: '/conteudos/artigos-cientificos/artigo-3.png',
    link: 'https://drive.google.com/file/d/1Lj1Nik9eoFt9Ezk8qZfJUXwbOY8YMfEK/view?usp=sharing',
  },
  {
    title: 'Center for Species Survival Brazil',
    description:
      'Publicado na revista Oryx. Detalha a criação do Centro de Sobrevivência de Espécies no Brasil. Autores: Fabiana Lopes Rocha, Eugenia Cordero-Schmidt, Rosana Subirá, Carmel Croukamp, Leandro Jerusalinsky, Silvio Marchini, Katia Ferraz, Yara Barros, Arnaud Desbiez, et al.',
    image: '/conteudos/artigos-cientificos/artigo-4.png',
    link: 'https://drive.google.com/file/d/1boTrS7SontJPfi8_eICdVuvTx2P72wLo/view?usp=sharing',
  },
  {
    title:
      'Stable population dynamics of the ocelot (Leopardus pardalis) in well-preserved Atlantic Forest areas',
    description:
      'Publicado no Journal of Mammalogy. Autores: Paula Cruz, Mario S. Di Bitetti, Sebastián Costa, Esteban Pizzio, Carlos D. De Angelo, Agustín Paviolo.',
    image: '/conteudos/artigos-cientificos/artigo-5.png',
    link: 'https://drive.google.com/file/d/1cs-Z4UrmU52-DM0aXnuz7ZBj8cCY5SJO/view?usp=sharing',
  },
  {
    title:
      'Stakeholder mapping as a transdisciplinary exercise for jaguar conservation in the Brazilian Atlantic Forest',
    description:
      'Mapeamento de atores sociais para a conservação. Autores: Laila Thomaz Sandroni, Katia M. P. M. de Barros Ferraz, Silvio Marchini, Alexandre Percequillo, Robert Coates, Roberta M. Paolino, Yara Barros, Mariana Landis, Yuri G. G. Ribeiro, Leticia P. Munhoes.',
    image: '/conteudos/artigos-cientificos/artigo-6.png',
    link: 'https://drive.google.com/file/d/1jYwKeGgN79hSStM9eKAfXq8ZEtlHHWNe/view?usp=sharing',
  },
  {
    title:
      'New records of threatened canids in southwestern Atlantic Forest, Brazil',
    description:
      'Publicado na Canid Biology & Conservation. Autores: Vania Foster, Carlos R. Brocardo, Rogério C. de Paula, Aline Kotz, Thiago Reginato, Jessica Dias, Ivan Baptiston, Marcelo Magioli, Yara Barros.',
    image: '/conteudos/artigos-cientificos/artigo-7.png',
    link: 'https://drive.google.com/file/d/1wz9xay2gJMg0bfp4t0KJ8s01QrJFmZQd/view?usp=sharing',
  },
  {
    title:
      'Unusual jaguar vocalizations: first recorded meowing in females associated with maternal behaviour in southeastern Brazil',
    description:
      'Publicado na revista Behaviour. Documentação inédita de vocalizações de onças-pintadas. Autores: V. Foster, M. Duarte, P. Gomes, T. Reginato, A. Kotz, V. Nascimento, A.C. Silva, Y. Viana, F. Feliciani e Y. Barros.',
    image: '/conteudos/artigos-cientificos/artigo-8.png',
    link: 'https://drive.google.com/file/d/1xbsN_huIwzsta0hHOKORubQf9_hPVnEs/view?usp=sharing',
  },
  {
    title: 'Center for Species Survival Brazil (Open Access)',
    description:
      'Versão de Acesso Aberto (Open Access) documentando o avanço e parcerias envolvendo o Center for Species Survival no Brasil.',
    image: '/conteudos/artigos-cientificos/artigo-9.png',
    link: 'https://drive.google.com/file/d/1zyLS0cGT4k3ehqvcZPeSK5F5QqjNXpZx/view?usp=sharing',
  },
];

export default function ArtigosCientificosPage() {
  return (
    <div className="bg-gray-50 text-onca-preto min-h-screen pb-10 selection:bg-onca-laranja selection:text-onca-preto">
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          <div className="relative z-10 hidden md:block md:w-[60%] min-h-125 shrink-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/conteudos/artigos-cientificos/hero-artigos-cientificos.jpg"
              alt="Capa de destaque dos Artigos Científicos"
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
                  <BookOpen className="w-4 h-4" /> Conteúdos
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                  Artigos <br />
                  <span className="text-onca-laranja">Científicos</span>
                </h1>
              </div>

              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/conteudos/artigos-cientificos/hero-artigos-cientificos.jpg"
                  alt="Capa de destaque dos Artigos Científicos"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                  A produção científica é um dos pilares do Projeto Onças do
                  Iguaçu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO DE VOLTA (TOP) */}
      <div className="w-full bg-white border-b border-gray-200 relative z-30">
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <VoltarLinkConteudo />
        </div>
      </div>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {artigos.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row bg-white rounded-3xl shadow-sm border border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-onca-laranja/30 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
            >
              <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto shrink-0 bg-gray-100 overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between w-full sm:w-3/5">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-onca-preto mb-3 line-clamp-3 group-hover:text-onca-laranja-escuro transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                  <span className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-all duration-300 hover:scale-105 hover:text-onca-laranja-escuro origin-left">
                    Ler Artigo
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-6 flex justify-center md:justify-start">
          <VoltarLinkConteudo />
        </div>
      </div>
    </div>
  );
}
