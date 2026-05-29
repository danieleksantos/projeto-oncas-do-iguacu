'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

export default function EngajamentoAtuacao() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="engajamento"
        className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 space-y-24 min-[2000px]:space-y-48">
          <div className="max-w-3xl min-[2000px]:max-w-6xl mx-auto text-center space-y-6 min-[2000px]:space-y-12">
            <span className="inline-block text-onca-laranja text-sm min-[2000px]:text-3xl font-bold uppercase tracking-[0.3em]">
              O Lado Humano da Conservação
            </span>
            <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
              Engajamento
            </h2>
            <p className="text-xl min-[2000px]:text-4xl text-gray-600 leading-relaxed min-[2000px]:leading-normal font-medium">
              O engajamento é uma das bases do Projeto Onças do Iguaçu. As ações
              são voltadas às comunidades dos municípios do entorno do Parque
              Nacional do Iguaçu, com o objetivo de transformar o medo em
              conexão e fortalecer o vínculo entre as pessoas e a conservação
              das onças.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 min-[2000px]:gap-48 items-center">
            <div className="grid grid-cols-2 gap-4 lg:gap-6 min-[2000px]:gap-12 relative">
              <div className="flex flex-col gap-3 min-[2000px]:gap-6 mt-8 lg:mt-16 min-[2000px]:mt-32">
                <div
                  className="relative w-full aspect-4/5 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/onca-na-escola.webp',
                      caption:
                        'Atividades lúdicas de educação ambiental no programa Onça na Escola',
                    })
                  }
                >
                  <Image
                    src="/atuacao/onca-na-escola.webp"
                    alt="Onça na Escola"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs min-[2000px]:text-2xl text-gray-500 text-center italic px-2">
                  Atividades lúdicas do programa Onça na Escola
                </p>
              </div>

              <div className="flex flex-col gap-3 min-[2000px]:gap-6">
                <div
                  className="relative w-full aspect-4/5 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/trilha-da-onca.webp',
                      caption: 'Imersão na natureza durante a Trilha da Onça',
                    })
                  }
                >
                  <Image
                    src="/atuacao/trilha-da-onca.webp"
                    alt="Trilha da Onça"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs min-[2000px]:text-2xl text-gray-500 text-center italic px-2">
                  Imersão na natureza durante a Trilha da Onça
                </p>
              </div>
            </div>

            <div className="space-y-12 min-[2000px]:space-y-24">
              <div className="space-y-4 min-[2000px]:space-y-8">
                <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                  Conexão com a comunidade
                </h3>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  O projeto desenvolve iniciativas voltadas a diferentes
                  públicos, levando informação e experiência direta com a
                  temática da conservação. O programa{' '}
                  <strong className="text-onca-preto">Onça na Escola</strong>{' '}
                  atua em instituições de ensino com atividades como palestras,
                  teatro e exposições, enquanto o{' '}
                  <strong className="text-onca-preto">Onça Itinerante</strong>{' '}
                  leva essas ações para espaços públicos e eventos, ampliando o
                  alcance junto à população.
                </p>
              </div>

              <div className="space-y-4 min-[2000px]:space-y-8">
                <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                  Experiência no território
                </h3>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  A aproximação com o ambiente natural é promovida por meio da{' '}
                  <strong className="text-onca-preto">Trilha da Onça</strong>,
                  que proporciona vivências no Parque Nacional do Iguaçu,
                  incluindo observação da fauna, acompanhamento de atividades de
                  monitoramento e conversas sobre a importância da conservação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-gray-50 text-onca-preto border-y border-gray-200 flex justify-center">
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 space-y-16 min-[2000px]:space-y-32">
          <div className="max-w-2xl min-[2000px]:max-w-5xl">
            <h3 className="text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tight mb-4 min-[2000px]:mb-8 text-onca-preto">
              Engajamento Ampliado
            </h3>
            <p className="text-gray-600 text-lg min-[2000px]:text-3xl leading-relaxed min-[2000px]:leading-normal">
              Outras iniciativas reforçam essa conexão de forma contínua,
              levando a mensagem da conservação para os mais diversos ambientes
              e parceiros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 min-[2000px]:gap-20">
            <div className="bg-white rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              <div
                className="relative w-full aspect-video cursor-zoom-in group overflow-hidden bg-gray-200"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/bafo-de-onca.webp',
                    caption:
                      'Bate-papo descontraído sobre conservação no Bafo de Onça',
                  })
                }
              >
                <Image
                  src="/atuacao/bafo-de-onca.webp"
                  alt="Bafo de Onça"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 min-[2000px]:p-16 flex flex-col grow space-y-4 min-[2000px]:space-y-8">
                <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-onca-preto">
                  Bafo de Onça
                </h4>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-3xl grow">
                  Leva o debate sobre conservação para espaços informais, como
                  bares, utilizando uma linguagem acessível para dialogar
                  diretamente com a comunidade de forma descontraída.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              <div
                className="relative w-full aspect-video cursor-zoom-in group overflow-hidden bg-gray-200"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/mutirao-da-onca.webp',
                    caption:
                      'Ações colaborativas com as comunidades locais no Mutirão da Onça',
                  })
                }
              >
                <Image
                  src="/atuacao/mutirao-da-onca.webp"
                  alt="Mutirão da Onça"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 min-[2000px]:p-16 flex flex-col grow space-y-4 min-[2000px]:space-y-8">
                <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-onca-preto">
                  Mutirão da Onça
                </h4>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-3xl grow">
                  Promove ações colaborativas com as comunidades locais, atuando
                  lado a lado para contribuir diretamente para a resolução de
                  demandas estruturais e de convívio na região.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              <div
                className="relative w-full aspect-video cursor-zoom-in group overflow-hidden bg-gray-200"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/onca-grafiteira-1.jpeg',
                    caption: 'Arte urbana levando a mensagem de conservação',
                  })
                }
              >
                <Image
                  src="/atuacao/onca-grafiteira-1.jpeg"
                  alt="Onça Grafiteira"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 min-[2000px]:p-16 flex flex-col grow space-y-4 min-[2000px]:space-y-8">
                <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-onca-preto">
                  Onça Grafiteira
                </h4>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-3xl grow">
                  Utiliza a arte urbana como ferramenta de sensibilização. A
                  criação de murais temáticos nos municípios do entorno
                  fortalece o engajamento comunitário e aproxima diferentes
                  públicos por meio da arte.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              <div
                className="relative w-full aspect-video cursor-zoom-in group overflow-hidden bg-gray-200"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/aeroporto-amigo-da-onca-2.jpeg',
                    caption:
                      'Parceria de conservação com o Aeroporto de Foz do Iguaçu',
                  })
                }
              >
                <Image
                  src="/atuacao/aeroporto-amigo-da-onca-2.jpeg"
                  alt="Aeroporto Amigo da Onça"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 min-[2000px]:p-16 flex flex-col grow space-y-4 min-[2000px]:space-y-8">
                <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-onca-preto">
                  Aeroporto Amigo da Onça
                </h4>
                <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-3xl grow">
                  Uma parceria pioneira com o Aeroporto Internacional de Foz do
                  Iguaçu que integra o setor privado. Amplia a conscientização
                  de milhares de passageiros e consolida o apoio institucional à
                  biodiversidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-onca-preto text-white relative overflow-hidden flex justify-center">
        <div className="absolute top-0 left-0 w-150 h-150 min-[2000px]:w-200 min-[2000px]:h-200 bg-onca-laranja/10 rounded-full blur-[120px] min-[2000px]:blur-[240px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 min-[2000px]:gap-32 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-center space-y-4 min-[2000px]:space-y-8">
              <div
                className="w-full max-w-150 min-[2000px]:max-w-300 relative aspect-video cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 group"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/peter-rei-do-role.webp',
                    caption:
                      'Onça-pintada Peter, flagrada pelas estradas do parque.',
                  })
                }
              >
                <Image
                  src="/atuacao/peter-rei-do-role.webp"
                  alt="Onça Peter atravessando a pista"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs min-[2000px]:text-2xl text-gray-400 text-center italic px-4">
                Registros enviados pelo grupo Amigos da Onça auxiliam no
                monitoramento
              </p>
            </div>

            <div className="order-1 lg:order-2 space-y-6 min-[2000px]:space-y-12">
              <h3 className="text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tight text-onca-laranja mb-8 min-[2000px]:mb-16">
                Participação Ativa
              </h3>
              <p className="text-gray-300 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                A conservação só é efetiva quando feita a várias mãos. O projeto
                estimula a participação direta da sociedade, transformando
                cidadãos comuns em aliados da ciência.
              </p>

              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] mt-8 min-[2000px]:mt-16 backdrop-blur-sm">
                <h4 className="text-2xl min-[2000px]:text-5xl font-bold text-white mb-3 min-[2000px]:mb-6 flex items-center gap-3 min-[2000px]:gap-6">
                  <span className="text-3xl min-[2000px]:text-6xl">📱</span>{' '}
                  Amigos da Onça
                </h4>
                <p className="text-gray-300 min-[2000px]:text-2xl leading-relaxed min-[2000px]:leading-normal">
                  Um grupo que reúne motoristas, guias e profissionais que atuam
                  no Parque Nacional Iguaçu. Eles atuam como os "olhos" do
                  projeto em campo, contribuindo com registros frequentes,
                  vídeos e informações sobre a presença dos animais. Essa troca
                  direta fortalece o monitoramento científico e cria um forte
                  senso de pertencimento.
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
