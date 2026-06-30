'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HeartHandshake, QrCode, Copy, Check } from 'lucide-react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

export default function DoacaoApoie() {
  const pixKey = 'procarnivoros@procarnivoros.org.br';
  const [isCopied, setIsCopied] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar a chave PIX: ', err);
    }
  };

  return (
    <section
      id="doacao"
      className="w-full py-20 lg:py-32 bg-white scroll-mt-10 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 rounded-l-[100px] pointer-events-none hidden lg:block" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-[0.3em]">
                <HeartHandshake className="w-5 h-5" /> Faça uma Doação
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-onca-preto leading-tight">
                Apoie nossas <br className="hidden md:block" />
                <span className="text-onca-laranja">ações no campo</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
                Sua contribuição fortalece o trabalho de pesquisa,
                monitoramento, educação e conservação realizado pelo Projeto
                Onças do Iguaçu em uma das áreas mais importantes para a
                onça-pintada na Mata Atlântica.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-3xl p-6 md:p-3 max-w-lg shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-onca-laranja/5 rounded-full blur-2xl group-hover:bg-onca-laranja/10 transition-colors duration-500 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                <div className="shrink-0 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2">
                  <div className="relative w-32 h-32 md:w-36 md:h-36">
                    <Image
                      src="/apoie/qrcode-pix.png"
                      alt="QR Code para doação PIX"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center text-center sm:text-left h-full">
                  <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-onca-preto font-bold uppercase tracking-widest text-sm mb-2">
                    <QrCode className="w-4 h-4 text-onca-laranja-escuro" />
                    Doação via PIX
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Aponte a câmera para o QR Code ou copie a chave PIX abaixo:
                  </p>

                  <div className="flex flex-col gap-2">
                    <code className="text-xs sm:text-sm bg-white border border-gray-200 px-3 py-2 rounded-lg text-gray-800 break-all text-center sm:text-left select-all">
                      {pixKey}
                    </code>

                    <button
                      onClick={handleCopyPix}
                      className={`inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-onca-laranja rounded-md py-1 cursor-pointer ${
                        isCopied
                          ? 'text-green-600'
                          : 'text-onca-laranja-escuro hover:text-onca-preto'
                      }`}
                      aria-label="Copiar chave PIX"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" /> Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> Copiar chave PIX
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-auto md:min-h-150 flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <div
              className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-onca-laranja z-10 hover:z-30 transition-all duration-500 hover:scale-105 cursor-zoom-in"
              onClick={() =>
                setModalData({
                  src: '/atuacao/hero-atuacao.jpeg',
                  caption: 'Equipe do projeto trabalhando em campo',
                })
              }
            >
              <Image
                src="/atuacao/hero-atuacao.jpeg"
                alt="Equipe do projeto trabalhando em campo"
                fill
                className="object-cover bg-gray-200"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100 -z-10">
                [Foto Equipe]
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-onca-laranja z-20 hover:z-30 transition-all duration-500 hover:scale-105 cursor-zoom-in"
              onClick={() =>
                setModalData({
                  src: '/apoie/onca2.png',
                  caption: 'Onça-pintada na floresta',
                })
              }
            >
              <Image
                src="/apoie/onca2.png"
                alt="Onça-pintada na floresta"
                fill
                className="object-cover bg-gray-300"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-200 -z-10">
                [Foto Onça]
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
