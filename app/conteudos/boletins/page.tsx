'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ExternalLink } from 'lucide-react';
import VoltarLinkConteudo from '../components/VoltarLinkConteudo';

const boletins = [
  {
    title: 'Boletim A Voz da Onça - Julho 2022',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim1.png',
    link: 'https://drive.google.com/file/d/1w7SElcnONaWrCMd7thTXj7YcSQYiJrNd/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Março 2022',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim2.png',
    link: 'https://drive.google.com/file/d/1F7jdEsI5lSn8ysHvtQ8Cxrc5Di39h-3T/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Novembro 2021',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim3.png',
    link: 'https://drive.google.com/file/d/1imBjhcG_dznASRRQRist_yXzbRocqHQU/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Setembro 2021',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim4.png',
    link: 'https://drive.google.com/file/d/1v3C0GPw_TblA9D_ybWAU4FzFE49hLS_W/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Julho 2021',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim21.png',
    link: 'https://drive.google.com/file/d/1RXqdSMO11qfsLw-NRiId_EuWk_Sk6Dp7/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Maio 2021',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim5.png',
    link: 'https://drive.google.com/file/d/1l8RYk7GBmjwvPgXFo0SQjaoFVznqrtTi/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Março 2021',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim6.png',
    link: 'https://drive.google.com/file/d/1WoCbBGuc7F6MgwxlfFiKQW-kqLjBb8iu/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Janeiro 2021',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim7.png',
    link: 'https://drive.google.com/file/d/1RejMSRYNLGipC5ZPFPGD2fYAU3wcj4yy/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Novembro 2020',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim8.png',
    link: 'https://drive.google.com/file/d/1PBY72-TEhcBLFS_gjtUH_LSlAfZbSurM/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Setembro 2020',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim9.png',
    link: 'https://drive.google.com/file/d/1sZZTgL_rAVrMTG73QrFHQRXEy-iimS0p/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Julho 2020',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim10.png',
    link: 'https://drive.google.com/file/d/1RESqDks255ELxYwMXKIPEAgj9imiMGSn/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Maio 2020',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim11.png',
    link: 'https://drive.google.com/file/d/1nfHrm0PCBph85BIEg7zZqGQuGpF9lbOn/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Janeiro 2020',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim12.png',
    link: 'https://drive.google.com/file/d/1B16dMVjUlH4JYKzDyZTuoegjapNpf3Vo/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Novembro 2019',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim13.png',
    link: 'https://drive.google.com/file/d/1cZ4RWpWu9QvBPOQtY96l7hKnV3cp_7FE/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Setembro 2019',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim14.png',
    link: 'https://drive.google.com/file/d/1WoCbBGuc7F6MgwxlfFiKQW-kqLjBb8iu/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Março 2019',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim15.png',
    link: 'https://drive.google.com/file/d/1ElWJYZtNlM-Tt_SCDAjMtQ_pQoFjqgjX/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Janeiro 2019',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim16.png',
    link: 'https://drive.google.com/file/d/1pbZqwuRbCiMbOl5bYk4zC5njVCtCwwFk/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Novembro 2018',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim17.png',
    link: 'https://drive.google.com/file/d/1-DXOmyW3hLeGomGclvNXqN0iSi8du9B0/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Setembro 2018',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim18.png',
    link: 'https://drive.google.com/file/d/1OUEPclyOgNel1qfvzk5puWDvp3B5oqS8/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Julho 2018',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim19.png',
    link: 'https://drive.google.com/file/d/1Gs4j7gcFVb17CE6tqZSrD6j41WW8bJIs/view?usp=sharing',
  },
  {
    title: 'Boletim A Voz da Onça - Maio 2018',
    description:
      'Acompanhe as últimas novidades do projeto, resgates marcantes e os resultados das nossas ações de conservação nesta edição.',
    image: '/conteudos/boletins/boletim20.png',
    link: 'https://drive.google.com/file/d/1nLqW70f3YdTZTnwYPFRBTYQ2oXml25QQ/view?usp=sharing',
  },
];

export default function BoletinsPage() {
  return (
    <div className="bg-gray-50 text-onca-preto min-h-screen pb-10 selection:bg-onca-laranja selection:text-onca-preto">
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          <div className="relative z-10 hidden md:block md:w-[60%] min-h-125 shrink-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/conteudos/boletins/hero-boletins.png"
              alt="Capa de destaque dos Boletins"
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
                  Boletim <br />
                  <span className="text-onca-laranja text-4xl md:text-5xl">
                    A Voz da Onça
                  </span>
                </h1>
              </div>

              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/conteudos/boletins/hero-boletins.png"
                  alt="Capa de destaque dos Boletins"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                  Acompanhe as últimas novidades do projeto, resgates marcantes
                  e os resultados das nossas ações de conservação nos nossos
                  boletins informativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white border-b border-gray-200 relative z-30">
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <VoltarLinkConteudo />
        </div>
      </div>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {boletins.map((item, index) => (
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
                    Ler Edição Completa
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
