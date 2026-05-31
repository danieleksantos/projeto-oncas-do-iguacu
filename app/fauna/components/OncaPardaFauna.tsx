'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import { Info } from 'lucide-react';

export default function OncaPardaFauna() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="onca-parda"
        className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 min-[2000px]:gap-40 items-start">
            <div className="space-y-8 min-[2000px]:space-y-16 order-2 lg:order-1">
              <div className="space-y-4 min-[2000px]:space-y-8">
                <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
                  Onça-Parda
                </h2>
                <p className="text-lg min-[2000px]:text-4xl text-onca-laranja-escuro font-bold italic">
                  Puma concolor
                </p>
                <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl pt-2 min-[2000px]:pt-6">
                  Também conhecida como puma ou suçuarana, é um dos felinos mais
                  bem adaptados aos diferentes tipos de ambientes. Possui um
                  corpo delicado e alongado, o que lhe dá uma agilidade
                  surpreendente.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 min-[2000px]:gap-8">
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Peso
                  </span>
                  <span className="text-lg min-[2000px]:text-4xl font-bold">
                    38kg — 72kg
                  </span>
                </div>
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Gestação
                  </span>
                  <span className="text-lg min-[2000px]:text-4xl font-bold">
                    82 — 96 dias
                  </span>
                </div>
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Filhotes
                  </span>
                  <span className="text-lg min-[2000px]:text-4xl font-bold">
                    1 a 6 crias
                  </span>
                </div>
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Status Global
                  </span>
                  <span className="text-sm min-[2000px]:text-3xl font-bold text-green-600 uppercase">
                    Pouco Preocupante
                  </span>
                </div>
              </div>

              <Link
                href="/fauna/onca-parda"
                className="flex items-center justify-center gap-2 md:gap-3 min-[2000px]:gap-6 w-full px-4 sm:px-6 min-[2000px]:px-12 py-4 min-[2000px]:py-8 mt-4 min-[2000px]:mt-8 bg-onca-preto text-white rounded-full font-bold uppercase tracking-wide md:tracking-widest text-[11px] sm:text-sm md:text-base min-[2000px]:text-2xl text-center shadow-sm outline-none transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-onca-preto group"
              >
                <span>Ver ficha completa da onça-parda</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 min-[2000px]:w-10 min-[2000px]:h-10 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="space-y-6 min-[2000px]:space-y-12 lg:sticky lg:top-32 min-[2000px]:top-64 order-1 lg:order-2">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-200 group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/onca-parda.webp',
                    caption: 'Onça-Parda (Puma concolor)',
                  })
                }
              >
                <Image
                  src="/fauna/onca-parda.webp"
                  alt="Onça-Parda"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-gray-100 border border-gray-200 p-6 min-[2000px]:p-12 rounded-3xl min-[2000px]:rounded-[3rem]">
                <h4 className="flex items-center gap-2 min-[2000px]:gap-6 min-[2000px]:text-4xl font-bold uppercase tracking-tight text-onca-preto mb-3 min-[2000px]:mb-6">
                  <Info className="w-5 h-5 min-[2000px]:w-10 min-[2000px]:h-10 text-onca-laranja" />
                  Agilidade e Impulso
                </h4>
                <p className="text-gray-700 text-sm min-[2000px]:text-2xl leading-relaxed min-[2000px]:leading-normal">
                  O tamanho e peso variam conforme a região, mas seu corpo
                  delicado a torna uma excelente atleta. A onça-parda consegue
                  saltar do chão a uma <strong>altura de até 5,5 metros</strong>{' '}
                  em uma árvore em um só pulo!
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
