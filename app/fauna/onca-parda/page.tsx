'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import VoltarLinkFauna from '../components/VoltarLinkFauna';
import {
  Scale,
  Baby,
  Clock,
  Globe2,
  AlertTriangle,
  ShieldAlert,
} from 'lucide-react';

export default function OncaPardaDetalhesPage() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <div className="bg-white text-onca-preto selection:bg-onca-laranja selection:text-onca-preto">
      <div className="w-full bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <VoltarLinkFauna />
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-6 py-12 space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-onca-preto">
            Onça-Parda
          </h1>
          <p className="text-2xl text-onca-laranja-escuro font-bold italic">
            Puma concolor
          </p>
        </div>

        <div
          className="relative w-full aspect-video md:aspect-21/9 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in group"
          onClick={() =>
            setModalData({
              src: '/fauna/onca-parda-galeria-2.webp',
              caption: 'Onça-parda (Puma concolor) em seu habitat natural',
            })
          }
        >
          <Image
            src="/fauna/onca-parda-galeria-2.webp"
            alt="Onça-parda em seu habitat natural"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-4xl pt-4">
          A onça-parda tem muitos nomes em diferentes regiões do Brasil: puma,
          leão-baio, suçuarana, boiadeira e onça-vermelha. É um dos felinos mais
          bem adaptados aos diferentes tipos de ambientes em todo o continente.
        </p>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-onca-preto mb-8">
            Ficha Biológica
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm">
                <Scale className="w-5 h-5" /> Peso
              </div>
              <p className="text-gray-700 font-medium text-lg">38 kg a 72 kg</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm">
                <Clock className="w-5 h-5" /> Gestação
              </div>
              <p className="text-gray-700 font-medium text-lg">82 a 96 dias</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm">
                <Baby className="w-5 h-5" /> Filhotes
              </div>
              <p className="text-gray-700 font-medium text-lg">
                1 a 6 filhotes
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm">
                <Globe2 className="w-5 h-5" /> Status
              </div>
              <p className="text-green-600 font-bold uppercase text-sm mt-1">
                Pouco Preocupante
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="md:col-span-7 space-y-6 text-lg text-gray-700 leading-relaxed">
            <h3 className="text-3xl font-bold uppercase tracking-tight text-onca-preto border-l-4 border-onca-laranja pl-4">
              Características Físicas
            </h3>
            <p>
              A onça-parda é bem menor que a pintada, e sua pele é bege por todo
              o corpo, menos na região ventral, que é mais clara. O tamanho e
              peso variam conforme a região de ocorrência.
            </p>
            <p>
              É um animal de corpo delicado e alongado, o que lhe dá{' '}
              <strong className="text-onca-preto">muita agilidade</strong>.
              Possuem uma força impressionante nas pernas traseiras, podendo
              saltar do chão a uma altura de até{' '}
              <strong className="text-onca-preto">5,5 metros</strong> em uma
              árvore em um só pulo.
            </p>
            <blockquote className="border-l-4 border-onca-laranja pl-6 py-4 mt-8 mb-4 text-xl font-medium text-onca-preto italic bg-gray-50 rounded-r-2xl border-y border-r">
              "Uma curiosidade: as onças-pardas não esturram como as pintadas.
              Elas produzem um som que mais parece um miado."
            </blockquote>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div
              className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl cursor-zoom-in group"
              onClick={() =>
                setModalData({
                  src: '/fauna/onca-parda.webp',
                  caption: 'Detalhe da pelagem bege da onça-parda.',
                })
              }
            >
              <Image
                src="/fauna/onca-parda.webp"
                alt="Rosto da onça-parda"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="md:col-span-7 space-y-6 text-lg text-gray-700 leading-relaxed">
              <h3 className="text-3xl font-bold uppercase tracking-tight text-onca-preto border-l-4 border-onca-laranja pl-4">
                Ecologia e Hábitat
              </h3>
              <p>
                Assim como a onça-pintada, a onça-parda apresenta uma ampla
                variedade de presas, que vai desde aves a mamíferos de maior
                porte como catetos e veados. A onça-parda é considerada um{' '}
                <strong className="text-onca-preto">
                  predador oportunista
                </strong>
                , exercendo um papel vital na manutenção da integridade dos
                ecossistemas onde ocorre.
              </p>
              <p>
                A presença de outros carnívoros influencia diretamente a escolha
                das presas. Por exemplo, em ambientes em que ocorre junto com a
                onça-pintada, as onças-pardas tendem a predar espécies de porte
                menor para evitar a competição por alimento. Aqui na região, tem
                atividade diurna maior do que as onças-pintadas, o que pode ser
                uma estratégia para evitar o confronto.
              </p>
              <p>
                Devido à sua plasticidade ecológica, as onças-pardas se
                locomovem com facilidade pelos pequenos corredores de matas e
                plantações. Sendo assim vista com frequência nos canaviais e
                plantações de soja. Infelizmente, tais corredores podem levá-las
                para rodovias e cidades, aumentando o risco de serem mortas por
                atropelamento.
              </p>
              <p>
                São animais com hábitos solitários e são territoriais. Apenas
                andam em casais durante o período reprodutivo. Assim como a
                onça-pintada, também sofre retaliação por predação aos animais
                domésticos (ovelhas e galinhas).
              </p>
            </div>

            <div className="lg:mt-18 md:col-span-5 space-y-4">
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md cursor-zoom-in group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/onca-parda-galeria-1.webp',
                    caption: 'Registro de onça-parda em armadilha fotográfica',
                  })
                }
              >
                <Image
                  src="/fauna/onca-parda-galeria-1.webp"
                  alt="Onça-parda na câmera trap"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md cursor-zoom-in group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/onca-parda-galeria-2.webp',
                    caption: 'Monitoramento de onças-pardas no Iguaçu',
                  })
                }
              >
                <Image
                  src="/fauna/onca-parda-galeria-2.webp"
                  alt="Onça-parda câmera trap"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md cursor-zoom-in group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/onca-parda-galeria-3.webp',
                    caption:
                      'As onças-pardas utilizam corredores ecológicos e bordas de mata.',
                  })
                }
              >
                <Image
                  src="/fauna/onca-parda-galeria-3.webp"
                  alt="Onça-parda câmera trap"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="text-xs text-gray-500 text-center italic pt-2">
                Registros de onças-pardas por armadilhas fotográficas do
                projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-onca-preto text-white py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold uppercase tracking-tight text-onca-laranja">
                Status e Distribuição
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Em 2022 o status de ameaça da onça-parda foi alterado, e ela
                agora não está mais em nenhuma categoria de ameaça global, sendo
                listada como{' '}
                <strong className="text-green-400">Pouco Preocupante</strong>.
              </p>
              <p className="text-gray-200 leading-relaxed font-medium border-l-2 border-onca-laranja pl-6 text-lg">
                Apesar do status global, a espécie ainda está{' '}
                <strong className="text-white">
                  ameaçada em vários estados do país
                </strong>
                .
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                A espécie se adapta com facilidade a vários ambientes, e está
                amplamente distribuída nas Américas. Ocorre desde o sudoeste do
                Canadá até o Estreito de Magalhães, no extremo sul da Argentina
                e Chile.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <h4 className="flex items-center gap-3 text-2xl font-bold uppercase tracking-tight text-red-500 mb-8">
                <ShieldAlert className="w-7 h-7" /> Principais Ameaças
              </h4>
              <ul className="space-y-5 text-gray-200 font-medium text-lg">
                <li className="flex items-center gap-4">
                  <AlertTriangle className="text-onca-laranja shrink-0 w-5 h-5" />
                  Redução e fragmentação de hábitats
                </li>
                <li className="flex items-center gap-4">
                  <AlertTriangle className="text-onca-laranja shrink-0 w-5 h-5" />
                  Caça predatória e por retaliação
                </li>
                <li className="flex items-center gap-4">
                  <AlertTriangle className="text-onca-laranja shrink-0 w-5 h-5" />
                  Atropelamentos em rodovias e estradas
                </li>
                <li className="flex items-center gap-4">
                  <AlertTriangle className="text-onca-laranja shrink-0 w-5 h-5" />
                  Redução de presas naturais
                </li>
                <li className="flex items-center gap-4">
                  <AlertTriangle className="text-onca-laranja shrink-0 w-5 h-5" />
                  Conflito com populações humanas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-onca-laranja text-onca-preto rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden group shadow-xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/30 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <h4 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-onca-preto">
                Você também pode ser um <br className="hidden lg:block" />{' '}
                protetor dos felinos do Iguaçu!
              </h4>
              <p className="text-gray-900 font-medium text-lg max-w-xl">
                O monitoramento dessas espécies exige muito trabalho em campo.
                Junte-se a nós e ajude a garantir um futuro seguro para a fauna
                do Iguaçu.
              </p>
            </div>

            <div className="relative z-10 shrink-0 mt-6 md:mt-0">
              <Link
                href="/apoie"
                className="inline-flex items-center gap-3 bg-onca-preto text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-onca-preto/50"
              >
                Apoiar o Projeto
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gray-50 border-t border-gray-200 py-12">
        <div className="mx-auto max-w-5xl px-6 flex justify-center md:justify-start">
          <VoltarLinkFauna />
        </div>
      </div>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </div>
  );
}
