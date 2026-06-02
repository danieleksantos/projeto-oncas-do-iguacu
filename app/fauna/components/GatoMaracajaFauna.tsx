'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import { Info } from 'lucide-react';

export default function GatoMaracajaFauna() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="gato-maracaja"
        className="w-full py-24 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6 lg:sticky lg:top-32">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl shadow-xl border border-gray-200 group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/gato-maracaja.webp',
                    caption: 'Gato-Maracajá (Leopardus wiedii)',
                  })
                }
              >
                <Image
                  src="/fauna/gato-maracaja.webp"
                  alt="Gato-Maracajá"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-gray-100 border border-gray-200 p-6 rounded-3xl">
                <h4 className="flex items-center gap-2 font-bold uppercase tracking-tight text-onca-preto mb-3">
                  <Info className="w-5 h-5 text-onca-laranja" />
                  Detalhes que Diferenciam
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  É muito parecido com o gato-do-mato-pequeno, mas difere dele
                  por ter as <strong>manchas do corpo mais alongadas</strong>,
                  além de possuir <strong>olhos, cauda e patas maiores</strong>.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto">
                  Gato-Maracajá
                </h2>
                <p className="text-lg text-onca-laranja-escuro font-bold italic">
                  Leopardus wiedii
                </p>
                <p className="text-gray-700 leading-relaxed text-lg pt-2">
                  Um felino de rara beleza e habilidades incríveis, que passa
                  boa parte do seu tempo no meio da mata. Com uma dieta focada
                  na caça de pequenos animais, ele desempenha um papel
                  importante no controle populacional em seu ecossistema.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Peso
                  </span>
                  <span className="text-lg font-bold">3kg — 9kg</span>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Hábitat
                  </span>
                  <span className="text-lg font-bold leading-tight mt-1">
                    Meio da mata
                  </span>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Hábitos
                  </span>
                  <span className="text-lg font-bold leading-tight mt-1">
                    Predominantemente noturnos
                  </span>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Dieta
                  </span>
                  <span className="text-sm font-bold leading-tight mt-1">
                    Pequenos animais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
