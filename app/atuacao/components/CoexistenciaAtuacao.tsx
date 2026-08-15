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
        className="w-full py-24 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-onca-laranja text-sm font-bold uppercase tracking-[0.3em]">
              Pessoas e onças dividindo essa terra
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto">
              Coexistência
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Atuamos junto às comunidades do entorno do Parque Nacional do
              Iguaçu para reduzir conflitos, promover segurança e fortalecer
              relações de confiança, com base no diálogo e na presença constante
              no território.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                Atuação no território
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg text-justify lg:text-left">
                O trabalho é realizado em contato direto com moradores, por meio
                de visitas, orientação técnica e acompanhamento contínuo. Em
                casos de predação, a equipe investiga cada ocorrência para
                identificar corretamente o predador e orientar medidas mais
                eficazes, evitando conflitos desnecessários.
              </p>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 italic text-gray-500">
                "A confiança é construída visitando cada propriedade e falando a
                linguagem do produtor rural."
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl shadow-xl group"
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
              <p className="text-xs text-gray-500 text-center italic">
                Contato contínuo e direto com moradores da região
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-100 text-onca-preto border-y border-gray-200 flex justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div
                  className="relative w-full aspect-square cursor-zoom-in overflow-hidden rounded-3xl shadow-lg group"
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
                <p className="text-[10px] text-gray-500 text-center italic leading-tight">
                  Orientação à moradores
                </p>
              </div>

              <div className="space-y-3">
                <div
                  className="relative w-full aspect-square cursor-zoom-in overflow-hidden rounded-3xl shadow-lg group"
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
                <p className="text-[10px] text-gray-500 text-center italic leading-tight">
                  Instalação de armadilhas fotográficas
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                  Manejo Preventivo
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Durante as visitas às propriedades rurais do entorno, nossa
                  equipe orienta os produtores sobre boas práticas de manejo
                  para prevenir conflitos com animais silvestres. Também são
                  identificadas vulnerabilidades, implementadas medidas de
                  proteção e realizado o acompanhamento das áreas para reduzir
                  riscos e fortalecer a coexistência entre pessoas e grandes
                  felinos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
