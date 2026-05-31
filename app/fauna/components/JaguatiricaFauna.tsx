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
        className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 min-[2000px]:gap-40 items-start">
            {/* 1. COLUNA ESQUERDA (IMAGEM E CURIOSIDADE) */}
            {/* Fisicamente primeiro no grid -> Esquerda no Desktop, Topo no Mobile */}
            <div className="space-y-6 min-[2000px]:space-y-12 lg:sticky lg:top-32 min-[2000px]:top-64">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-200 group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/jaguatirica.webp',
                    caption: 'Jaguatirica (Leopardus pardalis)',
                  })
                }
              >
                <Image
                  src="/fauna/jaguatirica.webp"
                  alt="Jaguatirica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Quadro de Curiosidade */}
              <div className="bg-gray-100 border border-gray-200 p-6 min-[2000px]:p-12 rounded-3xl min-[2000px]:rounded-[3rem]">
                <h4 className="flex items-center gap-2 min-[2000px]:gap-6 min-[2000px]:text-4xl font-bold uppercase tracking-tight text-onca-preto mb-3 min-[2000px]:mb-6">
                  <Info className="w-5 h-5 min-[2000px]:w-10 min-[2000px]:h-10 text-onca-laranja" />
                  Semelhança que confunde
                </h4>
                <p className="text-gray-700 text-sm min-[2000px]:text-2xl leading-relaxed min-[2000px]:leading-normal">
                  Devido ao seu padrão de pelagem com manchas belíssimas, se
                  vista de longe, a jaguatirica pode ser facilmente
                  <strong> confundida com um filhote de onça-pintada</strong>.
                </p>
              </div>
            </div>

            {/* 2. COLUNA DIREITA (TEXTOS E ESTATÍSTICAS) */}
            {/* Fisicamente segundo no grid -> Direita no Desktop, Baixo no Mobile */}
            <div className="space-y-8 min-[2000px]:space-y-16">
              <div className="space-y-4 min-[2000px]:space-y-8">
                <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
                  Jaguatirica
                </h2>
                <p className="text-lg min-[2000px]:text-4xl text-onca-laranja-escuro font-bold italic">
                  Leopardus pardalis
                </p>
                <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl pt-2 min-[2000px]:pt-6">
                  Felino de porte médio, é o terceiro maior felino do Parque
                  Nacional do Iguaçu. Possui manchas abertas e alongadas no
                  corpo, enquanto na cabeça, patas e cauda as manchas são
                  sólidas.
                </p>
              </div>

              {/* Grid de Estatísticas Essenciais */}
              <div className="grid sm:grid-cols-2 gap-4 min-[2000px]:gap-8">
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Peso
                  </span>
                  <span className="text-lg min-[2000px]:text-4xl font-bold">
                    8kg — 18kg
                  </span>
                </div>
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Hábitat
                  </span>
                  <span className="text-lg min-[2000px]:text-3xl font-bold leading-tight mt-1">
                    Áreas florestadas
                  </span>
                </div>
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Hábitos
                  </span>
                  <span className="text-lg min-[2000px]:text-3xl font-bold leading-tight mt-1">
                    Noturnos e Diurnos
                  </span>
                </div>
                <div className="bg-gray-50 p-5 min-[2000px]:p-10 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs min-[2000px]:text-2xl font-bold text-gray-700 uppercase tracking-widest mb-1 min-[2000px]:mb-3">
                    Dieta
                  </span>
                  <span className="text-sm min-[2000px]:text-2xl font-bold leading-tight mt-1">
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
