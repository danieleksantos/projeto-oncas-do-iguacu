'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

export default function CoexistenciaAtuacao() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="coexistencia"
        className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 space-y-16 min-[2000px]:space-y-32">
          <div className="max-w-3xl min-[2000px]:max-w-6xl mx-auto text-center space-y-6 min-[2000px]:space-y-12">
            <span className="inline-block text-onca-laranja text-sm min-[2000px]:text-3xl font-bold uppercase tracking-[0.3em]">
              Humanos e Felinos em Harmonia
            </span>
            <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
              Coexistência
            </h2>
            <p className="text-xl min-[2000px]:text-4xl text-gray-600 leading-relaxed min-[2000px]:leading-normal font-medium">
              A coexistência entre pessoas e grandes felinos é essencial para a
              conservação da onça-pintada. Atuamos junto às comunidades do
              entorno para reduzir conflitos, promover segurança e fortalecer
              relações de confiança, com base no diálogo e na presença constante
              no território.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 min-[2000px]:gap-40 items-center">
            <div className="space-y-6 min-[2000px]:space-y-12">
              <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                Atuação no território
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg min-[2000px]:text-3xl min-[2000px]:leading-normal text-justify lg:text-left">
                O trabalho é realizado em contato direto com moradores, por meio
                de visitas, orientação técnica e acompanhamento contínuo. Em
                casos de predação, a equipe investiga cada ocorrência para
                identificar corretamente o predador e orientar medidas mais
                eficazes, evitando conflitos desnecessários.
              </p>
              <div className="bg-gray-50 p-6 min-[2000px]:p-12 rounded-3xl min-[2000px]:rounded-[3rem] border border-gray-100 italic text-gray-500 min-[2000px]:text-3xl min-[2000px]:leading-normal">
                "A confiança é construída visitando cada propriedade e falando a
                linguagem do produtor rural."
              </div>
            </div>

            <div className="space-y-4 min-[2000px]:space-y-8">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl group"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/equipe-em-campo.png',
                    caption:
                      'Equipe do projeto prestando orientação técnica em propriedade rural',
                  })
                }
              >
                <Image
                  src="/atuacao/equipe-em-campo.png"
                  alt="Entrega de material para moradores lindeiros ao Parque Nacional do Iguaçu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs min-[2000px]:text-2xl text-gray-500 text-center italic">
                Visita técnica e diálogo constante com moradores do entorno
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-gray-100 text-onca-preto border-y border-gray-200 flex justify-center">
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 space-y-24 min-[2000px]:space-y-48">
          <div className="grid lg:grid-cols-2 gap-16 min-[2000px]:gap-32 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6 min-[2000px]:gap-12">
              <div className="space-y-3 min-[2000px]:space-y-6">
                <div
                  className="relative w-full aspect-square cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-lg group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/orientacao-a-moradores-lindeiros-2.png',
                      caption: 'Orientação à moradores',
                    })
                  }
                >
                  <Image
                    src="/atuacao/orientacao-a-moradores-lindeiros-2.png"
                    alt="Orientação à moradores"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] min-[2000px]:text-xl text-gray-500 text-center italic leading-tight">
                  Orientação à moradores
                </p>
              </div>

              <div className="space-y-3 min-[2000px]:space-y-6">
                <div
                  className="relative w-full aspect-square cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-lg group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/armadilhas-fotograficas-2.webp',
                      caption: 'Instalação de armadilhas fotográficas',
                    })
                  }
                >
                  <Image
                    src="/atuacao/armadilhas-fotograficas-2.webp"
                    alt="Instalação de Armadilha fotográfica"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] min-[2000px]:text-xl text-gray-500 text-center italic leading-tight">
                  Instalação de armadilhas fotográficas
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8 min-[2000px]:space-y-16">
              <div className="space-y-4 min-[2000px]:space-y-8">
                <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                  Prevenção e monitoramento
                </h3>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  As propriedades são avaliadas para identificar
                  vulnerabilidades e implementar soluções práticas, como
                  melhorias no manejo e medidas de proteção. Além disso,
                  utilizamos armadilhas fotográficas para compreender a dinâmica
                  dos predadores e antecipar riscos.
                </p>
              </div>

              <div className="space-y-4 min-[2000px]:space-y-8">
                <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                  Resposta a conflitos
                </h3>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  Atuamos em situações sensíveis, como avistamentos e momentos
                  de tensão, seguindo protocolos que orientam respostas rápidas
                  e seguras, reduzindo riscos para as pessoas e para a fauna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-onca-preto text-white relative overflow-hidden flex justify-center">
        <div className="absolute top-0 right-0 w-150 h-150 min-[2000px]:w-200 min-[2000px]:h-200 bg-onca-laranja/5 rounded-full blur-[120px] min-[2000px]:blur-[240px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 min-[2000px]:gap-32 items-center">
            <div className="lg:col-span-6 space-y-8 min-[2000px]:space-y-16">
              <div className="space-y-6 min-[2000px]:space-y-12">
                <h3 className="text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tight text-onca-laranja">
                  Pesquisa Social
                </h3>
                <p className="text-gray-300 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  A conservação depende de pessoas. Por isso, realizamos
                  pesquisas com questionários estruturados junto às comunidades
                  para entender percepções, medos e desafios relacionados às
                  onças.
                </p>
                <div className="bg-white/5 border border-white/10 p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] backdrop-blur-sm space-y-4 min-[2000px]:space-y-8">
                  <h4 className="text-xl min-[2000px]:text-4xl font-bold flex items-center gap-3 min-[2000px]:gap-6">
                    <span className="text-2xl min-[2000px]:text-5xl">📊</span>{' '}
                    Ciência de Dados Sociais
                  </h4>
                  <p className="text-gray-400 min-[2000px]:text-2xl min-[2000px]:leading-relaxed">
                    Estes dados são fundamentais para orientar nossas ações de
                    engajamento e fortalecer a tomada de decisão estratégica do
                    projeto.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 min-[2000px]:space-y-8">
              <div
                className="relative w-full aspect-video cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-2xl border border-white/10 group"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/pesquisa-moradores.png',
                    caption:
                      'Equipe realizando aplicação de questionários socioambientais',
                  })
                }
              >
                <Image
                  src="/atuacao/pesquisa-moradores.png"
                  alt="Pesquisa Social"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs min-[2000px]:text-2xl text-gray-500 text-center italic">
                Entrevistas estruturadas para compreender as Dimensões Humanas
                da Conservação
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
