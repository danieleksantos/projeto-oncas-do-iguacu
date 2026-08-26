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

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 space-y-5 md:space-y-6 relative overflow-hidden group shadow-sm">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-onca-laranja/5 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="bg-onca-laranja/10 p-3 rounded-2xl shrink-0">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-onca-laranja-escuro" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-onca-preto uppercase tracking-tight">
                  Empresa Amiga da Onça
                </h4>
              </div>

              <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed relative z-10">
                <p>
                  O programa Empresa Amiga da Onça reúne empresas que apoiam a
                  conservação da onça-pintada e fortalecem as ações do Projeto
                  Onças do Iguaçu. As empresas parceiras recebem certificação
                  oficial, reconhecimento institucional, agregam valor à sua
                  marca e passam a integrar uma rede comprometida com a
                  conservação e o desenvolvimento sustentável da região.
                </p>
                <p>
                  O apoio pode ser financeiro ou não financeiro, por meio do
                  fornecimento de produtos, serviços, estrutura ou outras formas
                  de parceria que contribuam para as atividades do Projeto.
                </p>
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

        <div className="mt-14 md:mt-18 flex flex-col items-center text-center space-y-6">
          <h4 className="text-[16px] md:text-2xl font-bold text-onca-preto uppercase tracking-tight max-w-3xl">
            Tem interesse em se tornar uma Empresa Amiga da Onça? Entre em
            contato com nossa equipe!
          </h4>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
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

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </section>
  );
}
