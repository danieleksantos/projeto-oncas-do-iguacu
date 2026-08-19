'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import Link from 'next/link';

export default function PesquisaAtuacao() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="pesquisa"
        className="w-full py-24 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-onca-laranja-escuro text-sm font-bold uppercase tracking-[0.3em]">
              O Ponto de Partida
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto">
              Pesquisa
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              A pesquisa científica é a base das ações do Projeto Onças do
              Iguaçu. É por meio dela que compreendemos a ecologia da
              onça-pintada, monitoramos a dinâmica populacional e geramos
              conhecimento aplicado para garantir sua conservação no Corredor
              Verde da Mata Atlântica.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                Monitoramento contínuo de fauna
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Realizado de forma sistemática desde 2019, o monitoramento de
                fauna utiliza uma rede permanente de armadilhas fotográficas
                distribuídas pelo Parque Nacional do Iguaçu. Esse esforço
                contínuo permite identificar individualmente as onças-pintadas e
                acompanhar aspectos como reprodução, dispersão, sobrevivência,
                uso do habitat e comportamento ao longo do tempo.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg pt-2">
                Ao longo dos anos, a rede de monitoramento foi ampliada,
                aumentando o esforço amostral e a qualidade das informações
                geradas. Além das onças-pintadas, centenas de registros de
                outras espécies ajudam a compreender a dinâmica da fauna e a
                saúde do ecossistema.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg pt-2">
                Os dados obtidos subsidiam pesquisas científicas e orientam
                estratégias de conservação, permitindo entender como as onças
                utilizam a paisagem, avaliar o sucesso reprodutivo da população
                e embasar ações para reduzir conflitos entre pessoas e grandes
                felinos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-20">
              <div className="col-span-2 space-y-2">
                <div
                  className="relative h-64 w-full cursor-zoom-in group overflow-hidden rounded-3xl shadow-xl"
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
                <p className="text-xs text-gray-700 text-center italic">
                  Instalação de armadilhas fotográficas para censo de
                  onças-pintadas
                </p>
              </div>

              <div className="space-y-2">
                <div
                  className="relative h-48 w-full cursor-zoom-in group overflow-hidden rounded-3xl shadow-lg"
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
                <p className="text-[10px] leading-tight text-gray-700 text-center italic">
                  Veado-bororó (Mazama nana) registrado no monitoramento
                </p>
              </div>

              <div className="space-y-2">
                <div
                  className="relative h-48 w-full cursor-zoom-in group overflow-hidden rounded-3xl shadow-lg"
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
                <p className="text-[10px] leading-tight text-gray-700 text-center italic">
                  Jaguatirica (Leopardus pardalis) registrada em campo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-100 text-onca-preto border-y border-gray-200 flex justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coluna das Imagens */}
            <div className="order-2 lg:order-1 space-y-10 flex flex-col items-center">
              <div className="w-full max-w-125 space-y-3">
                <div
                  className="cursor-zoom-in overflow-hidden rounded-3xl shadow-xl border border-gray-200 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/evolucao-populacao-oncas.jpeg',
                      caption:
                        'Evolução da população de onças-pintadas no Parque Nacional do Iguaçu',
                    })
                  }
                >
                  <Image
                    src="/atuacao/evolucao-populacao-oncas.jpeg"
                    alt="Gráfico Evolução"
                    width={800}
                    height={500}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-gray-700 text-center italic px-4">
                  Evolução da população de onças-pintadas no Parque Nacional do
                  Iguaçu
                </p>
              </div>

              <div className="w-full max-w-125 space-y-3">
                <div
                  className="cursor-zoom-in overflow-hidden rounded-3xl shadow-xl border border-gray-200 group"
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
                <p className="text-xs text-gray-700 text-center italic px-4">
                  Pontos e amostragem do censo no Parque Nacional do Iguaçu
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-6 text-onca-preto border-l-4 border-onca-laranja pl-4">
                Censo de Onças-Pintadas
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                O Censo de Onças-Pintadas é uma das principais ações de pesquisa
                do Projeto Onças do Iguaçu. Realizado a cada dois anos em
                parceria com o Proyecto Yaguareté (Argentina), ele monitora a
                população da espécie em todo o Corredor Verde da Mata Atlântica,
                formando o maior esforço binacional de monitoramento de
                onças-pintadas desse bioma.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Por meio da instalação de centenas de armadilhas fotográficas,
                identificamos individualmente cada animal e estimamos o tamanho
                e a dinâmica da população ao longo do tempo. Esses dados
                orientam estratégias de conservação, avaliam a efetividade das
                ações de manejo e apoiam a proteção da espécie em toda a região.
              </p>

              <div className="pt-4">
                <Link
                  href="/conteudos/artigos-cientificos"
                  className="inline-flex items-center gap-2 bg-onca-preto text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 shadow-lg focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none"
                >
                  Ver Artigos Científicos Publicados
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-white text-onca-preto flex justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-onca-preto border-l-4 border-onca-laranja pl-4">
                Estudo de base de presas
              </h3>
              <p className="text-gray-700 leading-relaxed grow">
                A disponibilidade de presas é um dos principais fatores para a
                manutenção de populações viáveis de onças-pintadas. Em parceria
                com instituições de pesquisa, desenvolvemos estudos que estimam
                a abundância e a biomassa das principais espécies que compõem
                sua dieta, como queixadas, catetos, veados, antas e pacas.
              </p>
              <p className="text-gray-700 leading-relaxed grow">
                Os resultados demonstraram que o Corredor Verde da Mata
                Atlântica abriga a maior disponibilidade de presas entre as
                áreas estudadas, reforçando seu papel como uma das regiões mais
                importantes para a conservação da onça-pintada. Além disso,
                evidenciaram que a redução da pressão humana é fundamental para
                manter populações saudáveis de presas e, consequentemente,
                garantir a persistência da espécie
              </p>
              <div className="space-y-3 mt-auto">
                <div
                  className="relative w-full aspect-square max-w-125 mx-auto cursor-zoom-in overflow-hidden rounded-3xl shadow-xl border border-gray-100 group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/pesquisa/Estudo-base-de-presas.png',
                      caption: 'Grid amostral do estudo de base de presas',
                    })
                  }
                >
                  <Image
                    src="/atuacao/pesquisa/Estudo-base-de-presas.png"
                    alt="Grid presas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-gray-700 text-center italic">
                  Grid amostral do estudo de base de presas
                </p>
              </div>
            </div>

            <div className="space-y-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-onca-preto border-l-4 border-onca-laranja pl-4">
                Dieta e ecologia isotópica
              </h3>
              <p className="text-gray-700 leading-relaxed grow">
                Em parceria com a ESALQ/CENA-USP, por meio do Laboratório de
                Ecologia, Manejo e Conservação da Fauna (LEMaC), desenvolvemos
                estudos sobre a dieta e a ecologia isotópica das onças-pintadas
                e onças-pardas do Parque Nacional do Iguaçu.
              </p>
              <p className="text-gray-700 leading-relaxed grow">
                As pesquisas revelam como esses predadores utilizam os recursos
                alimentares e compartilham o ambiente. Os resultados mostram que
                a onça-pintada depende principalmente de presas de grande porte,
                como catetos e queixadas, enquanto a onça-parda apresenta maior
                flexibilidade alimentar. As análises também evidenciam a
                importância dos ambientes florestais na manutenção de cadeias
                alimentares saudáveis, fornecendo informações essenciais para
                orientar estratégias de conservação dos grandes felinos e de
                suas presas.
              </p>

              <div className="space-y-3 mt-auto">
                <div
                  className="relative w-full aspect-square max-w-125 mx-auto cursor-zoom-in overflow-hidden rounded-3xl shadow-xl border border-gray-100 group"
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
                <p className="text-xs text-gray-700 text-center italic">
                  Processamento de amostras no laboratório do LEMaC/ESALQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-onca-preto text-white relative overflow-hidden flex justify-center">
        <div className="absolute top-0 right-0 w-200 h-200 bg-onca-laranja/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10 space-y-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-4xl font-bold uppercase tracking-tight text-onca-laranja mb-4">
                Captura e monitoramento por telemetria
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  A captura e o monitoramento de onças-pintadas com colares GPS
                  são ferramentas fundamentais para compreender a ecologia da
                  espécie e promover a coexistência entre pessoas e grandes
                  felinos. Realizada seguindo rigorosos protocolos de bem-estar
                  animal e segurança, essa atividade permite acompanhar, em
                  tempo real, os deslocamentos e o uso da paisagem por cada
                  indivíduo.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Essas informações revelam como as onças utilizam o território,
                  identificam áreas prioritárias para conservação, corredores
                  ecológicos e regiões com maior potencial de conflito com
                  atividades humanas. O monitoramento também permite antecipar
                  situações de risco, orientar ações preventivas junto às
                  comunidades rurais e subsidiar medidas que protegem as onças,
                  os produtores, os rebanhos e outros animais domésticos.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Durante a captura, também são realizados exames clínicos e a
                  coleta de amostras biológicas, gerando informações sobre
                  saúde, genética, reprodução e doenças. Esses dados ampliam o
                  conhecimento científico sobre a espécie e fornecem subsídios
                  para o manejo e a conservação da população de onças-pintadas
                  do Iguaçu.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <div
                className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-3xl shadow-2xl border border-white/10 group"
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
              <p className="text-[10px] text-gray-400 text-center italic">
                Onça-pintada monitorada com rádio-colar
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-2">
              <div
                className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-3xl shadow-2xl border border-white/10 group"
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
              <p className="text-[10px] text-gray-400 text-center italic">
                Protocolo de captura e colarização
              </p>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="pl-6 md:pl-8 border-l-4 border-onca-laranja">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-start gap-3">
                  <span className="text-onca-laranja mt-1 shrink-0">
                    <svg
                      className="w-7 h-7"
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
                <p className="text-gray-300 leading-relaxed text-lg">
                  <strong className="text-white">Não.</strong> Os colares
                  utilizados em pesquisas científicas são desenvolvidos
                  especificamente para grandes felinos e seguem rigorosos
                  protocolos veterinários e de bem-estar animal. Cada
                  equipamento é ajustado individualmente ao animal, pesa menos
                  de 3% do seu peso corporal e não interfere em seus movimentos,
                  alimentação, caça ou comportamento natural.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-2">
                  Durante todo o período de monitoramento, as onças são
                  acompanhadas pela equipe técnica para verificar seu estado de
                  saúde e o funcionamento do equipamento. Ao final do estudo, os
                  colares são removidos ou possuem mecanismos de desprendimento
                  programado, evitando que permaneçam no animal por tempo
                  indeterminado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: SAÚDE ÚNICA / CÃOSERVAÇÃO */}
      <section className="w-full py-24 bg-gray-50 text-onca-preto flex justify-center border-b border-gray-200">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-16">
          <div className="max-w-4xl space-y-6">
            <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
              Saúde Única
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              O Projeto integra ciência e manejo ao investigar a interface entre
              fauna silvestre e atividades humanas. Compreendemos que a saúde
              dos ecossistemas, da fauna silvestre e dos animais domésticos
              estão profundamente interligadas, e essas informações subsidiam
              ações diretas de manejo e redução de impactos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Texto Cãoservação */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold uppercase tracking-tight text-onca-preto">
                Programa Cãoservação
              </h4>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  O Cãoservação é um programa do Projeto Onças do Iguaçu criado
                  para ampliar as estratégias de conservação da onça-pintada e
                  de outros carnívoros silvestres por meio da Saúde Única.
                  Surgiu após a identificação de que muitos cães e gatos das
                  comunidades do entorno do Parque Nacional do Iguaçu
                  apresentavam condições sanitárias precárias, baixa cobertura
                  vacinal e acesso limitado à castração, representando riscos à
                  fauna silvestre devido à intensa interação entre animais
                  domésticos, vida silvestre e pessoas.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  O programa busca conhecer o perfil demográfico e sanitário dos
                  cães e gatos domiciliados, monitorar a circulação de agentes
                  infecciosos e desenvolver ações preventivas para reduzir esses
                  riscos. Para isso, promove campanhas de vacinação contra a
                  raiva e outras doenças infecciosas, incentivo à castração,
                  educação em saúde e guarda responsável.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Desde sua criação, o Cãoservação já imunizou mais de mil
                  animais, protegendo a saúde das comunidades, dos animais
                  domésticos e da fauna silvestre. Além disso, fortalece o
                  vínculo com os moradores do entorno, mostrando que a
                  conservação da onça-pintada depende também do cuidado com os
                  animais domésticos e do engajamento das pessoas, promovendo a
                  coexistência entre pessoas, fauna silvestre e animais
                  domésticos.
                </p>
              </div>
            </div>

            {/* Imagens (Grid) */}
            <div className="pt-30 grid grid-cols-2 gap-6">
              <div className="col-span-2 space-y-2">
                <div
                  className="relative h-64 sm:h-80 w-full cursor-zoom-in group overflow-hidden rounded-3xl shadow-xl"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/pesquisa/Caoservacao.jpeg',
                      caption: 'Programa Cãoservação em ação',
                    })
                  }
                >
                  <Image
                    src="/atuacao/pesquisa/Caoservacao.jpeg"
                    alt="Programa Cãoservação"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div
                  className="relative h-48 w-full cursor-zoom-in group overflow-hidden rounded-3xl shadow-lg"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/pesquisa/logo-caaoservacao.jpeg',
                      caption: 'Ações de vacinação e cuidados',
                    })
                  }
                >
                  <Image
                    src="/atuacao/pesquisa/logo-caaoservacao.jpeg"
                    alt="Vacinação de animais"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div
                  className="relative h-48 w-full cursor-zoom-in group overflow-hidden rounded-3xl shadow-lg"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/pesquisa/Caoservacao-3.jpg',
                      caption: 'Engajamento com a comunidade local',
                    })
                  }
                >
                  <Image
                    src="/atuacao/pesquisa/Caoservacao-3.jpg"
                    alt="Engajamento com a comunidade"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTRAS PESQUISAS (Agora apenas 2 cards) */}
      <section className="w-full py-14 bg-white text-onca-preto flex justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-onca-laranja/10 hover:bg-onca-laranja/20 transition-colors duration-300 p-8 sm:p-10 rounded-3xl flex flex-col h-full border border-onca-laranja/20">
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Pesquisas em Parceria
              </h4>
              <p className="font-medium leading-relaxed opacity-90 grow">
                Estabelecemos parcerias com outros pesquisadores e instituições
                para aproveitar ao máximo os dados obtidos pelo projeto. Essas
                parcerias incluem análises de genética populacional, saúde e
                status sanitário dos animais, contribuindo para avaliar a
                viabilidade da população a longo prazo e identificar possíveis
                riscos, como doenças ou perda de variabilidade genética.
              </p>
            </div>

            <div className="bg-onca-laranja/10 hover:bg-onca-laranja/20 transition-colors duration-300 p-8 sm:p-10 rounded-3xl flex flex-col h-full border border-onca-laranja/20">
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Conectividade e Conservação
              </h4>
              <p className="font-medium leading-relaxed opacity-90 grow">
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
