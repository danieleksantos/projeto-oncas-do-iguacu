'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import { Info } from 'lucide-react';

export default function GatoMouriscoFauna() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="gato-mourisco"
        className="w-full py-24 min-[2000px]:py-48 bg-gray-50 text-onca-preto scroll-mt-20 border-t border-gray-200 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 min-[2000px]:gap-40 items-start">
            <div className="space-y-8 min-[2000px]:space-y-16 order-2 lg:order-1">
              <div className="space-y-4 min-[2000px]:space-y-8">
                <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
                  Gato-Mourisco
                </h2>
                <p className="text-lg min-[2000px]:text-4xl text-onca-laranja-escuro font-bold italic">
                  Herpailurus yagouaroundi
                </p>
                <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl pt-2 min-[2000px]:pt-6">
                  Também chamado de gato-do-mourisco ou jaguarundi. É um felino
                  que não possui manchas e apresenta um corpo bastante alongado,
                  com coloração sólida que pode variar entre o cinza,
                  marrom-escuro ou avermelhado.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 min-[2000px]:gap-8">
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Peso
                  </span>
                  <span className="text-lg min-[2000px]:text-4xl font-bold">
                    3kg — 6kg
                  </span>
                </div>
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Hábitat
                  </span>
                  <span className="text-lg min-[2000px]:text-3xl font-bold leading-tight mt-1">
                    Florestas e capoeiras
                  </span>
                </div>
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Hábitos
                  </span>
                  <span className="text-lg min-[2000px]:text-3xl font-bold leading-tight mt-1">
                    Diurnos
                  </span>
                </div>
                <div className="bg-white p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Dieta
                  </span>
                  <span className="text-sm min-[2000px]:text-2xl font-bold leading-tight mt-1">
                    Animais de pequeno e médio porte
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 min-[2000px]:space-y-12 lg:sticky lg:top-32 min-[2000px]:top-64 order-1 lg:order-2">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-200 group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/gato-mourisco.webp',
                    caption: 'Gato-Mourisco (Herpailurus yagouaroundi)',
                  })
                }
              >
                <Image
                  src="/fauna/gato-mourisco.webp"
                  alt="Gato-Mourisco"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-white border border-gray-200 p-6 min-[2000px]:p-12 rounded-3xl min-[2000px]:rounded-[3rem]">
                <h4 className="flex items-center gap-2 min-[2000px]:gap-6 min-[2000px]:text-4xl font-bold uppercase tracking-tight text-onca-preto mb-3 min-[2000px]:mb-6">
                  <Info className="w-5 h-5 min-[2000px]:w-10 min-[2000px]:h-10 text-onca-laranja" />
                  Mestre do Disfarce
                </h4>
                <p className="text-gray-700 text-sm min-[2000px]:text-2xl leading-relaxed min-[2000px]:leading-normal">
                  Devido à sua pelagem sólida e corpo alongado, o gato-mourisco
                  pode ser facilmente{' '}
                  <strong>
                    confundido com uma "onça-preta" ou uma onça-parda
                  </strong>{' '}
                  se observado à distância na mata.
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
