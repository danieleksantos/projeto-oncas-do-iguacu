'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import { Info } from 'lucide-react';

export default function JaguatiricaFauna() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="jaguatirica"
        className="w-full py-24 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="space-y-2">
                <div
                  className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl shadow-xl border border-gray-200 group"
                  onClick={() =>
                    setModalData({
                      src: '/fauna/jaguatirica-2.jpg',
                      caption: 'Jaguatirica (Leopardus pardalis)',
                    })
                  }
                >
                  <Image
                    src="/fauna/jaguatirica-2.jpg"
                    alt="Jaguatirica"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center italic px-2">
                  Autor: Joel Sartore
                </p>
              </div>

              <div className="bg-gray-100 border border-gray-200 p-6 rounded-3xl">
                <h4 className="flex items-center gap-2 font-bold uppercase tracking-tight text-onca-preto mb-3">
                  <Info className="w-5 h-5 text-onca-laranja" />
                  Semelhança que confunde
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Devido ao seu padrão de pelagem com manchas belíssimas, se
                  vista de longe, a jaguatirica pode ser facilmente
                  <strong> confundida com um filhote de onça-pintada</strong>.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto">
                  Jaguatirica
                </h2>
                <p className="text-lg text-onca-laranja-escuro font-bold italic">
                  Leopardus pardalis
                </p>
                <p className="text-gray-700 leading-relaxed text-lg pt-2">
                  Felino de porte médio, é o terceiro maior felino do Parque
                  Nacional do Iguaçu. Possui manchas abertas e alongadas no
                  corpo, enquanto na cabeça, patas e cauda as manchas são
                  sólidas.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Peso
                  </span>
                  <span className="text-lg font-bold">8kg — 18kg</span>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Hábitat
                  </span>
                  <span className="text-lg font-bold leading-tight mt-1">
                    Áreas florestadas
                  </span>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Hábitos
                  </span>
                  <span className="text-lg font-bold leading-tight mt-1">
                    Noturnos e Diurnos
                  </span>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">
                    Dieta
                  </span>
                  <span className="text-sm font-bold leading-tight mt-1">
                    Animais até médio porte (ex: cutias)
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
