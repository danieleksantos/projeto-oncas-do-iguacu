'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

export default function PesquisaAtuacao() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="pesquisa"
        className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 space-y-24 min-[2000px]:space-y-48">
          <div className="max-w-3xl min-[2000px]:max-w-6xl mx-auto text-center space-y-6 min-[2000px]:space-y-12">
            <span className="inline-block text-onca-laranja-escuro text-sm min-[2000px]:text-3xl font-bold uppercase tracking-[0.3em]">
              O Ponto de Partida
            </span>
            <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter text-onca-preto">
              Pesquisa
            </h2>
            <p className="text-xl min-[2000px]:text-4xl text-gray-600 leading-relaxed min-[2000px]:leading-normal font-medium">
              A pesquisa científica é a base das ações do Projeto Onças do
              Iguaçu. É por meio dela que compreendemos a ecologia da
              onça-pintada, monitoramos a dinâmica populacional e geramos
              conhecimento aplicado para garantir sua conservação no Corredor
              Verde da Mata Atlântica.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-[2000px]:gap-32 items-center">
            <div className="space-y-6 min-[2000px]:space-y-12">
              <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                Monitoramento de fauna
              </h3>
              <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                Realizado de forma sistemática desde 2019 com o uso de
                armadilhas fotográficas distribuídas no Parque Nacional do
                Iguaçu. Esse esforço de longo prazo permite não apenas
                identificar individualmente as onças, mas também acompanhar
                eventos reprodutivos, dispersão, sobrevivência e comportamento
                dos animais. Ao longo dos anos, o monitoramento foi aprimorado,
                aumentando o esforço amostral e a robustez das análises
                ecológicas .
              </p>
              <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl pt-2 min-[2000px]:pt-6">
                Além de estimar o tamanho populacional, esses dados possibilitam
                análises mais refinadas, como os padrões de atividade das
                onças-pintadas. Os registros mostram, por exemplo, uma
                predominância de atividade noturna, informação essencial para
                entender como a espécie utiliza a paisagem e evita a presença
                humana .
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 min-[2000px]:gap-12">
              <div className="col-span-2 space-y-2 min-[2000px]:space-y-6">
                <div
                  className="relative h-64 min-[2000px]:h-150 w-full cursor-zoom-in group overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/instalacao-de-armadilha.webp',
                      caption:
                        'Instalação de armadilhas fotográficas para censo de onças-pintadas',
                    })
                  }
                >
                  <Image
                    src="/atuacao/instalacao-de-armadilha.webp"
                    alt="Instalação de armadilha fotográfica"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs min-[2000px]:text-2xl text-gray-700 text-center italic">
                  Instalação de armadilhas fotográficas para censo de
                  onças-pintadas
                </p>
              </div>

              <div className="space-y-2 min-[2000px]:space-y-6">
                <div
                  className="relative h-48 min-[2000px]:h-100 w-full cursor-zoom-in group overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-lg"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/veado-bororo.webp',
                      caption:
                        'Veado-bororó (Mazama nana) registrado no monitoramento',
                    })
                  }
                >
                  <Image
                    src="/atuacao/veado-bororo.webp"
                    alt="Veado-bororó"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] min-[2000px]:text-xl leading-tight text-gray-700 text-center italic">
                  Veado-bororó (Mazama nana) registrado no monitoramento
                </p>
              </div>

              <div className="space-y-2 min-[2000px]:space-y-6">
                <div
                  className="relative h-48 min-[2000px]:h-100 w-full cursor-zoom-in group overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-lg"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/jaguatirica.webp',
                      caption:
                        'Jaguatirica (Leopardus pardalis) registrada em campo',
                    })
                  }
                >
                  <Image
                    src="/atuacao/jaguatirica.webp"
                    alt="Jaguatirica"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] min-[2000px]:text-xl leading-tight text-gray-700 text-center italic">
                  Jaguatirica (Leopardus pardalis) registrada em campo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-gray-100 text-onca-preto border-y border-gray-200 flex justify-center">
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-[2000px]:gap-32 items-center">
            <div className="order-2 lg:order-1 space-y-10 min-[2000px]:space-y-20 flex flex-col items-center">
              <div className="w-full max-w-125 min-[2000px]:max-w-250 space-y-3 min-[2000px]:space-y-6">
                <div
                  className="cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-200 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/evolucao-populacao-oncas.jpg',
                      caption:
                        'Evolução da população de onças-pintadas no Parque Nacional do Iguaçu',
                    })
                  }
                >
                  <Image
                    src="/atuacao/evolucao-populacao-oncas.jpg"
                    alt="Gráfico Evolução"
                    width={800}
                    height={500}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs min-[2000px]:text-2xl text-gray-700 text-center italic px-4">
                  Evolução da população de onças-pintadas no Parque Nacional do
                  Iguaçu
                </p>
              </div>

              <div className="w-full max-w-125 min-[2000px]:max-w-250 space-y-3 min-[2000px]:space-y-6">
                <div
                  className="cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-200 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/mapa-pontos-censo.webp',
                      caption:
                        'Pontos e amostragem do censo no Parque Nacional do Iguaçu',
                    })
                  }
                >
                  <Image
                    src="/atuacao/mapa-pontos-censo.webp"
                    alt="Mapa de pontos"
                    width={800}
                    height={500}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs min-[2000px]:text-2xl text-gray-700 text-center italic px-4">
                  Pontos e amostragem do censo no Parque Nacional do Iguaçu
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6 min-[2000px]:space-y-12">
              <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight mb-6 min-[2000px]:mb-12 text-onca-preto border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                Censo de Onças-Pintadas
              </h3>
              <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                O censo de onças-pintadas é uma das principais ferramentas do
                Projeto Onças do Iguaçu. Realizado a cada dois anos, em parceria
                com o Proyecto Yaguareté (Argentina), ele monitora a população
                da espécie em todo o Corredor Verde da Mata Atlântica.
              </p>
              <p className="text-gray-600 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                Por meio da instalação de centenas de armadilhas fotográficas,
                identificamos individualmente os animais e estimamos o tamanho
                da população, acompanhando sua evolução ao longo do tempo. Os
                resultados do censo orientam estratégias de conservação e ajudam
                a garantir o futuro da espécie na região.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto flex justify-center">
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
          <div className="grid lg:grid-cols-2 gap-16 min-[2000px]:gap-32">
            <div className="space-y-6 min-[2000px]:space-y-12 flex flex-col h-full">
              <h3 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-onca-preto border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                Estudo de base de presas
              </h3>
              <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-3xl grow">
                Desenvolvemos estudos sobre a base de presas, fator determinante
                para a manutenção de populações viáveis de grandes predadores. O
                monitoramento da fauna revela a presença e dinâmica de
                espécies-chave como queixadas, veados e antas, permitindo
                compreender as relações ecológicas que sustentam o ecossistema e
                influenciam diretamente a presença das onças .
              </p>
              <div className="space-y-3 min-[2000px]:space-y-6 mt-auto">
                <div
                  className="relative w-full aspect-square max-w-125 min-[2000px]:max-w-200 mx-auto cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-100 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/grid-amostral-base-de-presas.webp',
                      caption: 'Grid amostral do estudo de base de presas',
                    })
                  }
                >
                  <Image
                    src="/atuacao/grid-amostral-base-de-presas.webp"
                    alt="Grid presas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs min-[2000px]:text-2xl text-gray-700 text-center italic">
                  Grid amostral do estudo de base de presas
                </p>
              </div>
            </div>

            <div className="space-y-6 min-[2000px]:space-y-12 flex flex-col h-full">
              <h3 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-onca-preto border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                Dieta e ecologia isotópica
              </h3>
              <p className="text-gray-700 leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-3xl grow">
                São realizados estudos de dieta e ecologia isotópica, que
                permitem entender com maior precisão o que as onças estão
                consumindo e como se estruturam as cadeias alimentares na
                região. Esse tipo de informação é fundamental para avaliar a
                saúde do ecossistema e orientar estratégias de manejo.
              </p>
              <div className="space-y-3 min-[2000px]:space-y-6 mt-auto">
                <div
                  className="relative w-full aspect-square max-w-125 min-[2000px]:max-w-200 mx-auto cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-xl border border-gray-100 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/triagem-de-material-coletado.webp',
                      caption:
                        'Processamento de amostras no laboratório do LEMaC/ESALQ',
                    })
                  }
                >
                  <Image
                    src="/atuacao/triagem-de-material-coletado.webp"
                    alt="Triagem"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs min-[2000px]:text-2xl text-gray-700 text-center italic">
                  Processamento de amostras no laboratório do LEMaC/ESALQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-onca-preto text-white relative overflow-hidden flex justify-center">
        <div className="absolute top-0 right-0 w-200 h-200 min-[2000px]:w-200 min-[2000px]:h-200 bg-onca-laranja/5 rounded-full blur-[100px] min-[2000px]:blur-[200px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24 relative z-10 space-y-24 min-[2000px]:space-y-48">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-[2000px]:gap-32 items-center">
            <div className="lg:col-span-7 space-y-6 min-[2000px]:space-y-12">
              <h3 className="text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tight text-onca-laranja mb-4 min-[2000px]:mb-8">
                Captura e Colarização
              </h3>
              <div className="space-y-4 min-[2000px]:space-y-8">
                <p className="text-gray-300 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  A captura e colarização de onças-pintadas é uma ferramenta
                  fundamental para entender como esses animais vivem na
                  natureza. Realizada com protocolos rigorosos de bem-estar
                  animal e segurança, essa atividade permite equipar as onças
                  com colares GPS que registram seus deslocamentos.
                </p>
                <p className="text-gray-300 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  Esses dados mostram como as onças utilizam o território,
                  identificam áreas prioritárias para conservação e ajudam a
                  orientar ações para reduzir conflitos com pessoas. Durante a
                  captura, também são realizadas avaliações de saúde e coleta de
                  amostras, contribuindo para estudos genéticos e sanitários.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2 min-[2000px]:space-y-6">
              <div
                className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-2xl border border-white/10 group"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/onca-com-colar.webp',
                    caption: 'Onça-pintada monitorada com rádio-colar',
                  })
                }
              >
                <Image
                  src="/atuacao/onca-com-colar.webp"
                  alt="Onça com colar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] min-[2000px]:text-xl text-gray-400 text-center italic">
                Onça-pintada monitorada com rádio-colar
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-[2000px]:gap-32 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-2 min-[2000px]:space-y-6">
              <div
                className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-3xl min-[2000px]:rounded-[3rem] shadow-2xl border border-white/10 group"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/captura-e-colarizacao-de-onca-pintada.webp',
                    caption: 'Protocolo de captura e colarização',
                  })
                }
              >
                <Image
                  src="/atuacao/captura-e-colarizacao-de-onca-pintada.webp"
                  alt="Protocolo de captura"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] min-[2000px]:text-xl text-gray-400 text-center italic">
                Protocolo de captura e colarização
              </p>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="pl-6 md:pl-8 min-[2000px]:pl-16 border-l-4 min-[2000px]:border-l-8 border-onca-laranja">
                <h4 className="text-2xl min-[2000px]:text-5xl font-bold text-white mb-4 min-[2000px]:mb-8 flex items-start gap-3 min-[2000px]:gap-6">
                  <span className="text-onca-laranja mt-1 shrink-0">
                    <svg
                      className="w-7 h-7 min-[2000px]:w-12 min-[2000px]:h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  O colar de monitoramento machuca a onça-pintada?
                </h4>
                <p className="text-gray-300 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
                  <strong className="text-white">Não.</strong> Os colares são
                  desenvolvidos especificamente para pesquisa e conservação da
                  fauna, seguindo protocolos veterinários rigorosos para
                  garantir o bem-estar do animal. Eles são leves, ajustados
                  individualmente e não limitam os movimentos da onça-pintada. O
                  monitoramento por colar é uma ferramenta essencial para
                  entender o comportamento da espécie e criar estratégias mais
                  eficientes de conservação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 min-[2000px]:py-48 bg-white text-onca-preto flex justify-center">
        <div className="mx-auto w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
          <div className="grid md:grid-cols-3 gap-8 min-[2000px]:gap-16">
            <div className="bg-onca-laranja/10 hover:bg-onca-laranja/20 transition-colors duration-300 p-8 sm:p-10 min-[2000px]:p-20 rounded-3xl min-[2000px]:rounded-[3rem] flex flex-col h-full border border-onca-laranja/20">
              <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight mb-4 min-[2000px]:mb-8">
                Pesquisas em Parceria
              </h4>
              <p className="font-medium leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-2xl opacity-90 grow">
                Estabelecemos parcerias com outros pesquisadores e instituições
                para aproveitar ao máximo os dados obtidos pelo projeto. Essas
                parcerias incluem análises de genética populacional, saúde e
                status sanitário dos animais, contribuindo para avaliar a
                viabilidade da população a longo prazo e identificar possíveis
                riscos, como doenças ou perda de variabilidade genética.
              </p>
            </div>

            <div className="bg-onca-laranja/10 hover:bg-onca-laranja/20 transition-colors duration-300 p-8 sm:p-10 min-[2000px]:p-20 rounded-3xl min-[2000px]:rounded-[3rem] flex flex-col h-full border border-onca-laranja/20">
              <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight mb-4 min-[2000px]:mb-8">
                Saúde Única
              </h4>
              <p className="font-medium leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-2xl opacity-90 grow">
                O Projeto integra ciência e manejo ao investigar a interface
                entre fauna silvestre e atividades humanas. Nesse contexto,
                iniciativas como o Programa CãoServação monitoram a presença de
                cães domésticos no interior do parque e entorno — um fator
                crítico, tanto pelo risco de transmissão de doenças quanto pela
                pressão de caça sobre a fauna nativa. Esses dados subsidiam
                ações diretas de manejo e estratégias de redução de impactos.
              </p>
            </div>

            <div className="bg-onca-laranja/10 hover:bg-onca-laranja/20 transition-colors duration-300 p-8 sm:p-10 min-[2000px]:p-20 rounded-3xl min-[2000px]:rounded-[3rem] flex flex-col h-full border border-onca-laranja/20">
              <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight mb-4 min-[2000px]:mb-8">
                Conectividade e Conservação
              </h4>
              <p className="font-medium leading-relaxed min-[2000px]:leading-normal min-[2000px]:text-2xl opacity-90 grow">
                O projeto investiga a conectividade entre fragmentos florestais,
                analisando o uso de corredores naturais e o deslocamento da
                fauna. Esses dados são fundamentais para orientar ações que
                garantam a manutenção e a recuperação de áreas estratégicas para
                a espécie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
