'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Handshake, Award, Mail, MessageCircle } from 'lucide-react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

export default function ParceriaApoie() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const whatsappUrl =
    'https://wa.me/5545998097698?text=Ol%C3%A1%2C%20estou%20interessado%20em%20ser%20parceiro%20do%20Projeto%20On%C3%A7as%20do%20Igua%C3%A7u%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es';

  const emailUrl =
    'mailto:projetooncasdoiguacu@gmail.com?subject=Interesse%20em%20Parceria%20-%20Projeto%20On%C3%A7as%20do%20Igua%C3%A7u';

  return (
    <section
      id="parcerias"
      className="w-full py-20 lg:py-32 bg-white scroll-mt-10 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gray-50 rounded-r-[100px] pointer-events-none hidden lg:block" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-[0.3em]">
                <Handshake className="w-5 h-5" /> Alianças de Impacto
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-onca-preto leading-tight">
                Construindo <br />
                <span className="text-onca-laranja">Parcerias</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                O Projeto Onças do Iguaçu conta com o apoio de instituições
                públicas, privadas e do terceiro setor que contribuem
                diretamente para a conservação da onça-pintada e da
                biodiversidade do Parque Nacional do Iguaçu. As parcerias podem
                acontecer através de várias formas.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 space-y-4 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-onca-laranja/5 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="bg-onca-laranja/10 p-3 rounded-2xl shrink-0">
                  <Award className="w-6 h-6 text-onca-laranja-escuro" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-onca-preto uppercase tracking-tight">
                    Empresa Amiga da Onça
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Além de fortalecer ações concretas de conservação, os
                    parceiros passam a integrar uma rede de impacto positivo e
                    podem receber reconhecimento institucional e a certificação
                    de{' '}
                    <strong className="text-onca-laranja-escuro font-bold">
                      Empresa Amiga da Onça
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-2 border-t border-gray-100">
              <h4 className="text-xl font-bold text-onca-preto uppercase tracking-tight">
                Interessado em apoiar o projeto? Entre em contato com nossa
                equipe!
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-onca-laranja border-2 border-onca-preto rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:bg-onca-laranja hover:text-onca-preto hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>

                <Link
                  href={emailUrl}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-onca-laranja text-onca-preto border-2 border-onca-preto rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-preto/30 outline-none group"
                >
                  <Mail className="w-5 h-5" />
                  E-mail
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-auto md:min-h-125 lg:min-h-150 flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <div
              className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-onca-laranja z-10 hover:z-30 transition-all duration-500 hover:scale-105 cursor-zoom-in"
              onClick={() =>
                setModalData({
                  src: '/apoie/parcerias3.jpg',
                  caption:
                    'Nossos parceiros em ação pelo Parque Nacional do Iguaçu.',
                })
              }
            >
              <Image
                src="/apoie/parcerias3.jpg"
                alt="Ação de parceria do projeto"
                fill
                className="object-cover bg-gray-200"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100 -z-10">
                [Foto Parceria 1]
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-onca-laranja z-20 hover:z-30 transition-all duration-500 hover:scale-105 cursor-zoom-in"
              onClick={() =>
                setModalData({
                  src: '/apoie/parcerias1.jpg',
                  caption:
                    'Selo de Empresa Amiga da Onça e parcerias institucionais.',
                })
              }
            >
              <Image
                src="/apoie/parcerias1.jpg"
                alt="Detalhe de parcerias"
                fill
                className="object-cover bg-gray-300"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-200 -z-10">
                [Foto Parceria 2]
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-onca-laranja/20 rounded-full blur-2xl z-0 pointer-events-none" />
          </div>
        </div>
      </div>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </section>
  );
}
