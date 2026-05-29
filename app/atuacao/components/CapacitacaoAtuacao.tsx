'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

export default function CapacitacaoAtuacao() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="capacitacao"
        className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 space-y-16 min-[2000px]:space-y-32">
          <div className="max-w-3xl min-[2000px]:max-w-6xl mx-auto text-center space-y-6 min-[2000px]:space-y-12">
            <span className="inline-block text-onca-laranja-escuro text-sm min-[2000px]:text-3xl font-bold uppercase tracking-[0.3em]">
              Conhecimento que Transforma
            </span>
            <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
              Capacitação e Cooperação
            </h2>
            <p className="text-xl min-[2000px]:text-4xl text-gray-700 leading-relaxed min-[2000px]:leading-normal font-medium">
              Acreditamos que a educação e o fortalecimento de redes são as
              melhores ferramentas para garantir um futuro seguro tanto para as
              pessoas quanto para a biodiversidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 min-[2000px]:gap-40 items-center">
            <div className="space-y-10 min-[2000px]:space-y-20">
              <div className="space-y-4 min-[2000px]:space-y-8">
                <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                  Capacitação
                </h3>
                <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  São realizadas capacitações com moradores, produtores, guias e
                  agentes ambientais, fortalecendo o conhecimento local e a
                  adoção de práticas preventivas.
                </p>
                <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  O projeto também forma profissionais para atuação em conflitos
                  entre pessoas e grandes felinos, com atividades realizadas em
                  diferentes biomas do Brasil e no Centro de Conservação e
                  Coexistência.
                </p>
              </div>

              <div className="space-y-4 min-[2000px]:space-y-8">
                <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                  Rede de Coexistência
                </h3>
                <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  O projeto coordena a{' '}
                  <strong className="text-onca-preto">
                    Rede de Coexistência da Tríplice Fronteira
                  </strong>
                  , que conecta iniciativas no Brasil, Paraguai e Argentina,
                  promovendo a troca de experiências, capacitações e ações
                  conjuntas. Essa articulação fortalece a cooperação entre
                  países e amplia o alcance das estratégias de coexistência em
                  uma paisagem compartilhada.
                </p>
              </div>
            </div>

            <div className="space-y-4 min-[2000px]:space-y-8">
              <div
                className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl group"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/capacitacao-moradores.png',
                    caption:
                      'Capacitação de guias, moradores e colaboradores do Parque Nacional',
                  })
                }
              >
                <Image
                  src="/atuacao/capacitacao-moradores.png"
                  alt="Capacitação de equipe e moradores"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs min-[2000px]:text-2xl text-gray-600 text-center italic">
                Promovendo conhecimento sobre coexistência e segurança para
                diversos públicos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-gray-50 text-onca-preto border-y border-gray-200 flex justify-center">
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 space-y-16 min-[2000px]:space-y-32">
          <div className="grid lg:grid-cols-12 gap-12 min-[2000px]:gap-24 items-center">
            <div className="lg:col-span-8 space-y-6 min-[2000px]:space-y-12">
              <h3 className="text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tight mb-4 min-[2000px]:mb-8 text-onca-preto">
                Geração de Valor e Alternativas de Renda
              </h3>
              <p className="text-gray-700 text-lg min-[2000px]:text-3xl leading-relaxed min-[2000px]:leading-normal">
                O projeto desenvolve iniciativas que conectam conservação e
                geração de renda, fortalecendo o vínculo entre as comunidades e
                a permanência das onças na paisagem. O programa{' '}
                <strong className="text-onca-preto">Onça Compensa</strong> atua
                no apoio a produtos e serviços que transformam a presença da
                onça em valor positivo para quem vive no entorno do parque.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-38 h-38 lg:w-58 lg:h-58 min-[2000px]:w-100 min-[2000px]:h-100 drop-shadow-xl">
                <Image
                  src="/atuacao/logo-onca-compensa.png"
                  alt="Logo Programa Onça Compensa"
                  fill
                  sizes="(max-width: 1024px) 200px, (max-width: 1999px) 232px, 400px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-[2000px]:gap-16 pt-8 min-[2000px]:pt-16 border-t border-gray-200">
            <div className="bg-onca-laranja p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-onca-laranja-escuro hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <h4 className="text-xl min-[2000px]:text-4xl font-bold uppercase tracking-tight mb-3 min-[2000px]:mb-6">
                Ciscando o Futuro
              </h4>
              <p className="text-dark leading-relaxed min-[2000px]:leading-normal grow text-sm min-[2000px]:text-2xl">
                Integra segurança alimentar, bem-estar animal e mitigação de
                conflitos por meio da produção otimizada e segura de ovos e
                frangos caipiras.
              </p>
            </div>

            <div className="bg-onca-laranja p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-onca-laranja-escuro hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <h4 className="text-xl min-[2000px]:text-4xl font-bold uppercase tracking-tight mb-3 min-[2000px]:mb-6">
                Crocheteiras da Onça
              </h4>
              <p className="text-dark leading-relaxed min-[2000px]:leading-normal grow text-sm min-[2000px]:text-2xl">
                Fortalece o trabalho e a autonomia financeira de mulheres da
                região do entorno por meio da valorização da produção artesanal
                em crochê.
              </p>
            </div>

            <div className="bg-onca-laranja p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-onca-laranja-escuro hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <h4 className="text-xl min-[2000px]:text-4xl font-bold uppercase tracking-tight mb-3 min-[2000px]:mb-6">
                Artesãs da Onça
              </h4>
              <p className="text-dark leading-relaxed min-[2000px]:leading-normal grow text-sm min-[2000px]:text-2xl">
                Conecta saberes tradicionais e geração de renda com a produção
                artesanal diretamente associada à identidade visual e cultural
                da onça-pintada.
              </p>
            </div>

            <div className="bg-onca-laranja p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-onca-laranja-escuro hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <h4 className="text-xl min-[2000px]:text-4xl font-bold uppercase tracking-tight mb-3 min-[2000px]:mb-6">
                De Flor em Flor
              </h4>
              <p className="text-dark leading-relaxed min-[2000px]:leading-normal grow text-sm min-[2000px]:text-2xl">
                Iniciativa que engloba a produção do "Mel da Onça" e promove
                ações voltadas à proteção e conscientização sobre a importância
                dos polinizadores nativos.
              </p>
            </div>

            <div className="bg-onca-laranja p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-onca-laranja-escuro hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <h4 className="text-xl min-[2000px]:text-4xl font-bold uppercase tracking-tight mb-3 min-[2000px]:mb-6">
                Avá-Guarani Tekohá Ocoy
              </h4>
              <p className="text-dark leading-relaxed min-[2000px]:leading-normal grow text-sm min-[2000px]:text-2xl">
                Trabalho com artesãs da aldeia Avá-Guarani Tekohá Ocoy, que
                fortalece a produção artesanal local tanto como fonte de renda
                quanto como pilar de valorização cultural.
              </p>
            </div>

            <div className="bg-onca-laranja p-8 min-[2000px]:p-16 rounded-3xl min-[2000px]:rounded-[3rem] shadow-sm border border-onca-laranja-escuro hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <h4 className="text-xl min-[2000px]:text-4xl font-bold uppercase tracking-tight mb-3 min-[2000px]:mb-6">
                Nozes e Onças
              </h4>
              <p className="text-dark leading-relaxed min-[2000px]:leading-normal grow text-sm min-[2000px]:text-2xl">
                Agrega valor à produção local de moradores parceiros, reforçando
                a mensagem de que manter as onças vivas gera benefícios
                concretos para quem compartilha o território.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-onca-preto text-white relative overflow-hidden flex justify-center">
        <div className="absolute bottom-0 left-0 w-150 h-150 min-[2000px]:w-300 min-[2000px]:h-300 bg-onca-laranja/10 rounded-full blur-[120px] min-[2000px]:blur-[240px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 min-[2000px]:gap-32 items-center">
            <div className="lg:col-span-5 space-y-8 min-[2000px]:space-y-16">
              <div className="space-y-6 min-[2000px]:space-y-12">
                <h3 className="text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tight text-onca-laranja">
                  Reconhecimento e Rede Local
                </h3>
                <p className="text-gray-200 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  A iniciativa{' '}
                  <strong className="text-white">
                    Propriedades Amigas da Onça
                  </strong>{' '}
                  reconhece e certifica locais que adotam boas práticas de
                  manejo e contribuem ativamente para a conservação,
                  fortalecendo uma rede orgânica comprometida com a proteção da
                  fauna.
                </p>
                <p className="text-gray-200 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  Fazem parte dessa rede o projeto{' '}
                  <strong className="text-white">Tocas da Onça</strong>, que
                  oferece apoio logístico e hospedagem solidária, e o{' '}
                  <strong className="text-white">Rancho Jaguareté</strong>, um
                  exemplo real de propriedade que transformou um histórico de
                  predação em um complexo de turismo rural sustentável.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4 min-[2000px]:gap-8">
              <div className="col-span-2 space-y-2 min-[2000px]:space-y-6">
                <div
                  className="relative h-64 min-[2000px]:h-150 w-full cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-2xl border border-white/10 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/propriedade-amiga-da-onca.jpg',
                      caption: 'Certificação de Propriedades Amigas da Onça',
                    })
                  }
                >
                  <Image
                    src="/atuacao/propriedade-amiga-da-onca.jpg"
                    alt="Propriedades Amigas da Onça"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] min-[2000px]:text-xl text-gray-300 text-center italic">
                  Certificação e reconhecimento de produtores rurais parceiros
                </p>
              </div>

              <div className="space-y-2 min-[2000px]:space-y-6">
                <div
                  className="relative h-48 min-[2000px]:h-100 w-full cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-2xl border border-white/10 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/rancho-jaguarete.jpeg',
                      caption: 'Rancho Jaguareté: complexo de turismo rural',
                    })
                  }
                >
                  <Image
                    src="/atuacao/rancho-jaguarete.jpeg"
                    alt="Rancho Jaguareté: complexo de turismo rural"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] min-[2000px]:text-xl text-gray-300 text-center italic">
                  Rancho Jaguareté: complexo de turismo rural
                </p>
              </div>

              <div className="space-y-2 min-[2000px]:space-y-6">
                <div
                  className="relative h-48 min-[2000px]:h-100 w-full cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-2xl border border-white/10 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/programa-toca-da-onca.jpg',
                      caption: 'Inauguração de uma Toca da Onça',
                    })
                  }
                >
                  <Image
                    src="/atuacao/programa-toca-da-onca.jpg"
                    alt="Tocas da Onça"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] min-[2000px]:text-xl text-gray-300 text-center italic">
                  Programa Tocas da Onça
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
