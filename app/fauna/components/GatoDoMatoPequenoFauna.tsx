'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import { Info } from 'lucide-react';

export default function GatoDoMatoPequenoFauna() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="gato-do-mato-pequeno"
        className="w-full py-24 min-[2000px]:py-48 bg-gray-50 text-onca-preto scroll-mt-20 border-t border-gray-200 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 min-[2000px]:gap-40 items-start">
            <div className="space-y-8 min-[2000px]:space-y-16 order-1">
              <div className="space-y-4 min-[2000px]:space-y-8">
                <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
                  Gato-do-Mato-Pequeno
                </h2>
                <p className="text-lg min-[2000px]:text-4xl text-onca-laranja-escuro font-bold italic">
                  Leopardus guttulus
                </p>
                <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl pt-2 min-[2000px]:pt-6">
                  Possui pelagem que varia do amarelo-claro ao
                  castanho-amarelado, com manchas pretas abertas e preenchidas
                  com coloração amarronzada. É um felino versátil que habita
                  preferencialmente ambientes florestais.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 min-[2000px]:gap-8">
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Peso
                  </span>
                  <span className="text-lg min-[2000px]:text-4xl font-bold">
                    1,5kg — 3kg
                  </span>
                </div>
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Hábitat
                  </span>
                  <span className="text-lg min-[2000px]:text-3xl font-bold leading-tight mt-1">
                    Ambientes florestais
                  </span>
                </div>
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Hábitos
                  </span>
                  <span className="text-lg min-[2000px]:text-3xl font-bold leading-tight mt-1">
                    Diurnos e Noturnos
                  </span>
                </div>
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Dieta
                  </span>
                  <span className="text-sm min-[2000px]:text-2xl font-bold leading-tight mt-1">
                    Pequenos animais
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 min-[2000px]:space-y-12 lg:sticky lg:top-32 min-[2000px]:top-64 order-2">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-200 group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/gato-do-mato.webp',
                    caption: 'Gato-do-Mato-Pequeno (Leopardus guttulus)',
                  })
                }
              >
                <Image
                  src="/fauna/gato-do-mato.webp"
                  alt="Gato-do-Mato-Pequeno"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-white border border-gray-200 p-6 min-[2000px]:p-12 rounded-3xl min-[2000px]:rounded-[3rem]">
                <h4 className="flex items-center gap-2 min-[2000px]:gap-6 min-[2000px]:text-4xl font-bold uppercase tracking-tight text-onca-preto mb-3 min-[2000px]:mb-6">
                  <Info className="w-5 h-5 min-[2000px]:w-10 min-[2000px]:h-10 text-onca-laranja" />
                  Variação de Cor
                </h4>
                <p className="text-gray-700 text-sm min-[2000px]:text-2xl leading-relaxed min-[2000px]:leading-normal">
                  Embora a pelagem amarelada com manchas seja a mais comum,
                  <strong>
                    {' '}
                    alguns indivíduos podem ser totalmente negros
                  </strong>
                  . Essa variação genética é conhecida como melanismo e ocorre
                  em diversas espécies de felinos.
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
