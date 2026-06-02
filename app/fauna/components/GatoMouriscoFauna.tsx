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
        className="w-full py-24 bg-gray-50 text-onca-preto scroll-mt-20 border-t border-gray-200 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto">
                  Gato-Mourisco
                </h2>
                <p className="text-lg text-onca-laranja-escuro font-bold italic">
                  Herpailurus yagouaroundi
                </p>
                <p className="text-gray-700 leading-relaxed text-lg pt-2">
                  Também chamado de gato-do-mourisco ou jaguarundi. É um felino
                  que não possui manchas e apresenta um corpo bastante alongado,
                  com coloração sólida que pode variar entre o cinza,
                  marrom-escuro ou avermelhado.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Peso
                  </span>
                  <span className="text-lg font-bold">3kg — 6kg</span>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Hábitat
                  </span>
                  <span className="text-lg font-bold leading-tight mt-1">
                    Florestas e capoeiras
                  </span>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Hábitos
                  </span>
                  <span className="text-lg font-bold leading-tight mt-1">
                    Diurnos
                  </span>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Dieta
                  </span>
                  <span className="text-sm font-bold leading-tight mt-1">
                    Animais de pequeno e médio porte
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-32 order-1 lg:order-2">
              <div className="space-y-2">
                <div
                  className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl shadow-xl border border-gray-200 group"
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
                <p className="text-xs text-gray-500 text-center italic px-2">
                  Autor: Adriano Gambarini
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-3xl">
                <h4 className="flex items-center gap-2 font-bold uppercase tracking-tight text-onca-preto mb-3">
                  <Info className="w-5 h-5 text-onca-laranja" />
                  Mestre do Disfarce
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
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
