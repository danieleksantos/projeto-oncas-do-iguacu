'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal, { ModalData } from '@/src/components/ImageModal';
import {
  Ruler,
  Scale,
  Utensils,
  Baby,
  Clock,
  HeartPulse,
  AlertTriangle,
  ShieldAlert,
  Volume2,
} from 'lucide-react';
import VoltarLinkFauna from '../components/VoltarLinkFauna';
import Link from 'next/link';

export default function OncaPintadaDetalhesPage() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <div className="bg-white text-onca-preto selection:bg-onca-laranja selection:text-onca-preto">
      <div className="w-full bg-white border-b border-gray-100 min-[2000px]:py-8">
        <div className="mx-auto max-w-5xl min-[2000px]:max-w-400 px-6 py-6">
          <VoltarLinkFauna />
        </div>
      </div>

      <section className="mx-auto max-w-5xl min-[2000px]:max-w-400 px-6 py-12 min-[2000px]:py-24 space-y-8 min-[2000px]:space-y-16">
        <div className="space-y-2 min-[2000px]:space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl min-[2000px]:text-[140px] font-bold uppercase tracking-tighter text-onca-preto">
            Onça-Pintada
          </h1>
          <p className="text-2xl min-[2000px]:text-5xl text-onca-laranja-escuro font-bold italic">
            Panthera onca
          </p>
        </div>

        <div
          className="relative w-full aspect-video md:aspect-21/9 rounded-3xl min-[2000px]:rounded-[4rem] overflow-hidden shadow-2xl cursor-zoom-in group"
          onClick={() =>
            setModalData({
              src: '/fauna/onca-pintada.webp',
              caption:
                'Onça-pintada (Panthera onca) no Parque Nacional do Iguaçu',
            })
          }
        >
          <Image
            src="/fauna/onca-pintada.webp"
            alt="Onça-pintada em seu habitat natural"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        <p className="text-xl md:text-2xl min-[2000px]:text-4xl font-medium text-gray-700 leading-relaxed min-[2000px]:leading-normal max-w-4xl min-[2000px]:max-w-7xl pt-4 min-[2000px]:pt-8">
          A onça-pintada é o maior felino das Américas, e o terceiro maior
          felino do mundo, depois do leão e do tigre. A potência de sua mordida
          é considerada a maior dentre os felinos de todo o mundo.
        </p>
      </section>

      <section className="bg-gray-50 py-16 min-[2000px]:py-32 border-y border-gray-200">
        <div className="mx-auto max-w-5xl min-[2000px]:max-w-400 px-6">
          <h2 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight text-onca-preto mb-8 min-[2000px]:mb-16">
            Ficha Biológica
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-[2000px]:gap-12">
            <div className="bg-white p-6 min-[2000px]:p-12 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-3 min-[2000px]:gap-6">
              <div className="flex items-center gap-2 min-[2000px]:gap-4 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm min-[2000px]:text-2xl">
                <Ruler className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />{' '}
                Comprimento
              </div>
              <p className="text-gray-700 font-medium min-[2000px]:text-3xl">
                Até 2,70 m (máxima).
              </p>
            </div>

            <div className="bg-white p-6 min-[2000px]:p-12 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-3 min-[2000px]:gap-6">
              <div className="flex items-center gap-2 min-[2000px]:gap-4 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm min-[2000px]:text-2xl">
                <Scale className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />{' '}
                Peso
              </div>
              <p className="text-gray-700 font-medium text-sm min-[2000px]:text-2xl min-[2000px]:leading-relaxed">
                Entre 35 kg e 158 kg. As onças do Iguaçu pesam até 100 kg. Os
                machos são maiores que as fêmeas.
              </p>
            </div>

            <div className="bg-white p-6 min-[2000px]:p-12 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-3 min-[2000px]:gap-6">
              <div className="flex items-center gap-2 min-[2000px]:gap-4 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm min-[2000px]:text-2xl">
                <Utensils className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />{' '}
                Dieta
              </div>
              <p className="text-gray-700 font-medium text-sm min-[2000px]:text-2xl min-[2000px]:leading-relaxed">
                De médios mamíferos, répteis e aves até grandes animais como
                antas, queixadas, veados, jacarés, porcos-do-mato e capivaras.
              </p>
            </div>

            <div className="bg-white p-6 min-[2000px]:p-12 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-3 min-[2000px]:gap-6">
              <div className="flex items-center gap-2 min-[2000px]:gap-4 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm min-[2000px]:text-2xl">
                <Baby className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />{' '}
                Reprodução
              </div>
              <p className="text-gray-700 font-medium text-sm min-[2000px]:text-2xl min-[2000px]:leading-relaxed">
                Fêmeas reproduzem com 2 a 3 anos de idade, e machos com 3 a 4
                anos. Têm de 1 a 4 filhotes, o mais comum são dois.
              </p>
            </div>

            <div className="bg-white p-6 min-[2000px]:p-12 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-3 min-[2000px]:gap-6">
              <div className="flex items-center gap-2 min-[2000px]:gap-4 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm min-[2000px]:text-2xl">
                <Clock className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />{' '}
                Gestação
              </div>
              <p className="text-gray-700 font-medium text-lg min-[2000px]:text-3xl italic">
                90 a 115 dias.
              </p>
            </div>

            <div className="bg-white p-6 min-[2000px]:p-12 rounded-2xl min-[2000px]:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-3 min-[2000px]:gap-6">
              <div className="flex items-center gap-2 min-[2000px]:gap-4 text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm min-[2000px]:text-2xl">
                <HeartPulse className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />{' '}
                Longevidade
              </div>
              <p className="text-gray-700 font-medium text-sm min-[2000px]:text-2xl min-[2000px]:leading-relaxed">
                Vive cerca de 12 a 15 anos em vida livre. Em cativeiro podem
                viver bem mais, quase o dobro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl min-[2000px]:max-w-400 px-6 py-20 min-[2000px]:py-40 space-y-20 lg:space-y-28 min-[2000px]:space-y-56">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 min-[2000px]:gap-40 items-center">
          <div className="md:col-span-7 space-y-6 min-[2000px]:space-y-12 text-lg min-[2000px]:text-3xl text-gray-700 leading-relaxed min-[2000px]:leading-normal">
            <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight text-onca-preto border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
              Características Físicas
            </h3>
            <p>
              A característica mais marcante da onça-pintada são justamente suas
              pintas. Possui pelagem amarelo-dourado com pintas pretas na
              cabeça, pescoço e patas. Nos ombros, costas e flancos tem pintas
              formando <strong className="text-onca-preto">rosetas</strong> que
              têm, no seu interior, um ou mais pontos.
            </p>
            <p>
              O padrão de pintas é bastante variado e pode ser usado para
              identificar uma onça individualmente,{' '}
              <strong className="text-onca-preto">
                como se fosse uma impressão digital
              </strong>
              . Na garganta, barriga e partes internas dos membros a pelagem é
              branca.
            </p>
          </div>
          <div className="md:col-span-5 space-y-4">
            <div
              className="relative w-full aspect-square rounded-3xl min-[2000px]:rounded-[3rem] overflow-hidden shadow-xl cursor-zoom-in group"
              onClick={() =>
                setModalData({
                  src: '/fauna/onca-atiaia.webp',
                  caption: 'Onça-pintada Atiaia. Foto: Emílio White',
                })
              }
            >
              <Image
                src="/fauna/onca-atiaia.webp"
                alt="Onça-pintada Atiaia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs min-[2000px]:text-xl text-gray-500 text-center italic">
              Onça-pintada Atiaia. Foto: Emílio White
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 min-[2000px]:gap-40 items-center">
          <div className="md:col-span-5 order-2 md:order-1 space-y-4">
            <div
              className="relative w-full aspect-square rounded-3xl min-[2000px]:rounded-[3rem] overflow-hidden shadow-xl cursor-zoom-in group"
              onClick={() =>
                setModalData({
                  src: '/fauna/onca-pintada-com-filhote.webp',
                  caption: 'Onça-pintada Indira com o filhote Aritana',
                })
              }
            >
              <Image
                src="/fauna/onca-pintada-com-filhote.webp"
                alt="Onça-pintada Indira com o filhote Aritana"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs min-[2000px]:text-xl text-gray-500 text-center italic">
              Onça-pintada Indira com o filhote Aritana
            </p>
          </div>

          <div className="md:col-span-7 order-1 md:order-2 space-y-6 min-[2000px]:space-y-12 text-lg min-[2000px]:text-3xl text-gray-700 leading-relaxed min-[2000px]:leading-normal">
            <p>
              Podem ocorrer indivíduos inteiramente negros, sendo esta apenas
              uma característica melânica da mesma espécie. No Parque Nacional
              do Iguaçu, até o momento, não há registro de indivíduos melânicos.
            </p>
            <blockquote className="border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-6 min-[2000px]:pl-12 py-4 min-[2000px]:py-8 mt-8 min-[2000px]:mt-16 mb-4 min-[2000px]:mb-8 text-xl min-[2000px]:text-4xl font-medium text-onca-preto italic bg-gray-50 rounded-r-2xl min-[2000px]:rounded-r-4xl border-y border-r">
              "Outra característica dessa espécie é que ela não mia como a
              maioria dos felinos. Ela emite uma série de roncos muito fortes
              chamados de{' '}
              <strong className="text-onca-laranja-escuro">esturro</strong>, que
              podem ser ouvidos por quilômetros."
            </blockquote>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl min-[2000px]:rounded-4xl p-4 min-[2000px]:p-8 flex flex-col gap-3 min-[2000px]:gap-6 w-full max-w-sm min-[2000px]:max-w-2xl shadow-sm">
              <span className="flex items-center gap-2 min-[2000px]:gap-4 text-sm min-[2000px]:text-2xl font-bold uppercase tracking-widest text-onca-preto">
                <Volume2 className="text-onca-laranja w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />
                Ouça o esturro da onça-pintada Cacirra
              </span>
              <audio
                controls
                controlsList="nodownload"
                className="w-full h-10 min-[2000px]:h-16 outline-none"
              >
                <source
                  src="/fauna/Cacirra-esturrando.mp3.mpeg"
                  type="audio/mpeg"
                />
                Sinto muito, mas seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 min-[2000px]:gap-40 items-center">
          <div className="md:col-span-7 space-y-6 min-[2000px]:space-y-12 text-lg min-[2000px]:text-3xl text-gray-700 leading-relaxed min-[2000px]:leading-normal">
            <h3 className="text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight text-onca-preto border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
              Ecologia e Hábitat
            </h3>
            <p>
              A onça-pintada é ativa durante o dia e à noite, mas a maior
              atividade é noturna. Onças são solitárias, geralmente macho e
              fêmea só se encontram para acasalar. Para evitar contato entre si,
              os machos esturram e usam urina e fezes para demarcar seu
              território.
            </p>
            <p>
              Os filhotes nascem cegos e totalmente dependentes da mãe. Com duas
              semanas abrem os olhos, e mamam até os 2 meses, quando começam a
              comer carne. Acompanham a mãe nas caçadas aos 6 meses e se separam
              dela com um ano e meio a dois anos de idade.
            </p>
            <p>
              Sua dieta é variada, mas quando o número de presas naturais
              diminui, as onças podem vir a se alimentar de animais domésticos,
              motivo pelo qual acabam sendo perseguidas.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4 lg:mt-24 min-[2000px]:mt-48">
            <div
              className="relative w-full aspect-square rounded-3xl min-[2000px]:rounded-[3rem] overflow-hidden shadow-xl cursor-zoom-in group"
              onClick={() =>
                setModalData({
                  src: '/fauna/onca-atiaia.jpg',
                  caption: 'Onça-pintada caminhando na floresta à noite',
                })
              }
            >
              <Image
                src="/fauna/onca-atiaia.jpg"
                alt="Onça-pintada caminhando na floresta à noite"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs min-[2000px]:text-xl text-gray-500 text-center italic">
              Onça-pintada caminhando na floresta à noite
            </p>
          </div>
        </div>
      </section>

      <section className="bg-onca-preto text-white py-24 min-[2000px]:py-48">
        <div className="mx-auto max-w-6xl min-[2000px]:max-w-400 px-6 space-y-24 min-[2000px]:space-y-48">
          <div className="text-center max-w-3xl min-[2000px]:max-w-6xl mx-auto space-y-4 min-[2000px]:space-y-8">
            <h3 className="text-4xl md:text-5xl min-[2000px]:text-[80px] font-bold uppercase tracking-tight text-onca-laranja">
              Status e Distribuição
            </h3>
            <p className="text-gray-300 text-lg min-[2000px]:text-3xl leading-relaxed min-[2000px]:leading-normal">
              A onça-pintada é considerada pela IUCN como "Quase Ameaçada" em
              âmbito global, mas a realidade local apresenta cenários muito mais
              críticos e urgentes.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 min-[2000px]:gap-32 items-center">
            <div className="md:col-span-5 space-y-4 min-[2000px]:space-y-8">
              <div
                className="relative w-full aspect-square rounded-3xl min-[2000px]:rounded-[3rem] overflow-hidden cursor-zoom-in group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/mapa-americas.webp',
                    caption:
                      'Distribuição histórica e atual da onça-pintada nas Américas',
                  })
                }
              >
                <Image
                  src="/fauna/mapa-americas.webp"
                  alt="Mapa de distribuição nas Américas"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs min-[2000px]:text-xl text-gray-500 text-center italic">
                Distribuição histórica (verde claro) e atual (verde escuro).
              </p>
            </div>

            <div className="md:col-span-7 space-y-6 min-[2000px]:space-y-12 text-lg min-[2000px]:text-3xl min-[2000px]:leading-normal">
              <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-white border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                O Panorama Global
              </h4>
              <p className="text-gray-300 leading-relaxed">
                A espécie já perdeu cerca de{' '}
                <strong className="text-onca-laranja">
                  50% de sua área de distribuição original
                </strong>
                . Originalmente, a distribuição deste animal se dava desde o
                sudoeste dos Estados Unidos até o norte da Argentina.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Agora, onças estão oficialmente extintas nos Estados Unidos (com
                raros indivíduos cruzando a partir do México), mas ainda podem
                ser encontradas na América Latina, inclusive no Brasil.
              </p>
              <p className="text-gray-300 leading-relaxed">
                De maneira geral, suas populações vêm diminuindo drasticamente
                onde entram em confronto com atividades humanas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 min-[2000px]:gap-32 items-center">
            <div className="md:col-span-7 order-2 md:order-1 space-y-6 min-[2000px]:space-y-12 text-lg min-[2000px]:text-3xl min-[2000px]:leading-normal">
              <h4 className="text-2xl min-[2000px]:text-5xl font-bold uppercase tracking-tight text-white border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-8">
                O Cenário Brasileiro
              </h4>
              <p className="text-gray-300 leading-relaxed">
                No Brasil, a espécie está listada como Vulnerável, mas seu
                status de conservação varia muito em cada bioma. Ela já
                praticamente desapareceu da maior parte das regiões nordeste,
                sudeste e sul, mas ainda ocorre em florestas como a Amazônica e
                a Mata Atlântica, e em ambientes abertos como Pantanal e
                Cerrado.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 p-6 min-[2000px]:p-12 rounded-2xl min-[2000px]:rounded-[3rem] space-y-4 min-[2000px]:space-y-8 mt-6 min-[2000px]:mt-12">
                <p className="text-white leading-relaxed font-medium">
                  Na{' '}
                  <strong className="text-red-400 uppercase tracking-wide">
                    Mata Atlântica a espécie está criticamente ameaçada (CR)
                  </strong>
                  . A situação é tão grave que a estimativa é que existam menos
                  de 20% de remanescentes adequados para sua sobrevivência,
                  restando menos de 300 onças no Bioma.
                </p>
                <p className="text-gray-300 leading-relaxed text-base min-[2000px]:text-2xl italic">
                  Estima-se que uma redução populacional de pelo menos 50%
                  (provavelmente mais próxima a 87-90%) ocorreu nos últimos 10 a
                  15 anos na maior população de onças-pintadas da região do Alto
                  Paraná.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2 space-y-4 min-[2000px]:space-y-8">
              <div
                className="relative w-full aspect-square rounded-3xl min-[2000px]:rounded-[3rem] overflow-hidden cursor-zoom-in group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/mapa-biomas-brasil.webp',
                    caption:
                      'Status de ameaça da onça-pintada em cada bioma brasileiro',
                  })
                }
              >
                <Image
                  src="/fauna/mapa-biomas-brasil.webp"
                  alt="Status de ameaça nos biomas brasileiros"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs min-[2000px]:text-xl text-gray-500 text-center italic">
                Status de conservação variando entre Vulnerável (VU) e
                Criticamente Ameaçada (CR).
              </p>
            </div>
          </div>

          <div className="max-w-5xl min-[2000px]:max-w-400 mx-auto bg-white/5 border border-white/10 rounded-3xl min-[2000px]:rounded-[4rem] p-8 lg:p-12 min-[2000px]:p-24 backdrop-blur-sm mt-12 min-[2000px]:mt-24">
            <div className="text-center mb-10 min-[2000px]:mb-20">
              <h4 className="inline-flex items-center justify-center gap-3 min-[2000px]:gap-6 text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight text-red-500">
                <ShieldAlert className="w-9 h-9 min-[2000px]:w-16 min-[2000px]:h-16" />{' '}
                Principais Ameaças
              </h4>
            </div>

            <ul className="grid md:grid-cols-2 gap-x-12 min-[2000px]:gap-x-24 gap-y-6 min-[2000px]:gap-y-12 text-gray-200 font-medium text-lg min-[2000px]:text-3xl">
              <li className="flex items-center gap-4 min-[2000px]:gap-8 bg-white/5 p-4 min-[2000px]:p-8 rounded-xl min-[2000px]:rounded-4xl">
                <AlertTriangle className="text-onca-laranja shrink-0 w-6 h-6 min-[2000px]:w-10 min-[2000px]:h-10" />
                Redução e fragmentação de hábitats
              </li>
              <li className="flex items-center gap-4 min-[2000px]:gap-8 bg-white/5 p-4 min-[2000px]:p-8 rounded-xl min-[2000px]:rounded-4xl">
                <AlertTriangle className="text-onca-laranja shrink-0 w-6 h-6 min-[2000px]:w-10 min-[2000px]:h-10" />
                Caça predatória
              </li>
              <li className="flex items-center gap-4 min-[2000px]:gap-8 bg-white/5 p-4 min-[2000px]:p-8 rounded-xl min-[2000px]:rounded-4xl">
                <AlertTriangle className="text-onca-laranja shrink-0 w-6 h-6 min-[2000px]:w-10 min-[2000px]:h-10" />
                Atropelamentos em rodovias
              </li>
              <li className="flex items-center gap-4 min-[2000px]:gap-8 bg-white/5 p-4 min-[2000px]:p-8 rounded-xl min-[2000px]:rounded-4xl">
                <AlertTriangle className="text-onca-laranja shrink-0 w-6 h-6 min-[2000px]:w-10 min-[2000px]:h-10" />
                Caça por retaliação
              </li>
              <li className="flex items-center gap-4 min-[2000px]:gap-8 bg-white/5 p-4 min-[2000px]:p-8 rounded-xl min-[2000px]:rounded-4xl">
                <AlertTriangle className="text-onca-laranja shrink-0 w-6 h-6 min-[2000px]:w-10 min-[2000px]:h-10" />
                Redução de presas naturais
              </li>
              <li className="flex items-center gap-4 min-[2000px]:gap-8 bg-white/5 p-4 min-[2000px]:p-8 rounded-xl min-[2000px]:rounded-4xl md:col-span-2 lg:col-span-1">
                <AlertTriangle className="text-onca-laranja shrink-0 w-6 h-6 min-[2000px]:w-10 min-[2000px]:h-10" />
                Conflito com populações humanas
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 min-[2000px]:py-48">
        <div className="mx-auto max-w-6xl min-[2000px]:max-w-400 px-6 space-y-16 min-[2000px]:space-y-32">
          <div className="text-center max-w-3xl min-[2000px]:max-w-6xl mx-auto space-y-6 min-[2000px]:space-y-12">
            <h3 className="text-3xl md:text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tight text-onca-preto">
              As onças-pintadas no Parque Nacional do Iguaçu
            </h3>
            <p className="text-gray-700 text-lg min-[2000px]:text-3xl leading-relaxed min-[2000px]:leading-normal">
              Desde 2009 são realizados censos bianuais simultaneamente no
              Brasil e na Argentina. É um dos maiores esforços mundiais para
              acomhamento da espécie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 min-[2000px]:gap-40 items-center">
            <div className="space-y-6 min-[2000px]:space-y-12 text-gray-700 leading-relaxed min-[2000px]:leading-normal text-lg min-[2000px]:text-3xl">
              <p>
                Entre 1990 e 1995 estimou-se que a região abrigava entre 400 e
                800 onças, mas a estimativa em 2005 caiu para{' '}
                <strong className="text-onca-preto">
                  apenas cerca de 40 onças
                </strong>{' '}
                em todo o Corredor Verde. No Parque Nacional do Iguaçu (Brasil),
                em 2009 restavam entre 9 a 11 onças-pintadas. A espécie estava
                perto da extinção local.
              </p>
              <p>
                No entanto, após essa grande queda, temos observado uma
                tendência de importante crescimento. A população no Corredor
                Verde vem se recuperando há mais de uma década, tendo{' '}
                <strong className="text-onca-preto">
                  conseguido dobrar entre 2005 e 2016
                </strong>{' '}
                (de 40 para 90 animais).
              </p>
              <p className="font-medium text-onca-preto">
                Em 2020 a estimativa média se manteve em 90 animais no Corredor
                Verde, sendo um número médio de 24 animais exclusivamente no
                lado Brasileiro. Os dados indicam uma estabilidade da população.
              </p>
            </div>

            <div className="space-y-3 min-[2000px]:space-y-6">
              <div
                className="relative w-full aspect-4/3 md:aspect-video cursor-zoom-in group"
                onClick={() =>
                  setModalData({
                    src: '/fauna/evolucao-populacao-oncas.jpg',
                    caption:
                      'Gráfico de evolução da população de onças-pintadas no Parque Nacional do Iguaçu',
                  })
                }
              >
                <Image
                  src="/fauna/evolucao-populacao-oncas.jpg"
                  alt="Gráfico de recuperação populacional do Censo"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs min-[2000px]:text-xl text-gray-500 text-center italic px-4 min-[2000px]:px-8">
                Evolução populacional das onças-pintadas estimada através dos
                censos bianuais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 min-[2000px]:pb-48">
        <div className="mx-auto max-w-5xl min-[2000px]:max-w-400 px-6">
          <div className="bg-onca-laranja text-onca-preto rounded-[2.5rem] min-[2000px]:rounded-[5rem] p-10 md:p-16 min-[2000px]:p-32 flex flex-col md:flex-row items-center justify-between gap-8 min-[2000px]:gap-16 text-center md:text-left relative overflow-hidden group shadow-xl min-[2000px]:shadow-2xl">
            <div className="absolute -right-20 -top-20 min-[2000px]:-right-40 min-[2000px]:-top-40 w-80 h-80 min-[2000px]:w-150 min-[2000px]:h-150 bg-white/30 rounded-full blur-3xl min-[2000px]:blur-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -left-20 -bottom-20 min-[2000px]:-left-40 min-[2000px]:-bottom-40 w-64 h-64 min-[2000px]:w-125 min-[2000px]:h-125 bg-white/20 rounded-full blur-3xl min-[2000px]:blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-4 min-[2000px]:space-y-8">
              <h4 className="text-3xl lg:text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tighter text-onca-preto">
                Você também pode ser um <br className="hidden lg:block" />{' '}
                protetor da onça-pintada!
              </h4>
              <p className="text-gray-900 font-medium text-lg min-[2000px]:text-4xl min-[2000px]:leading-normal max-w-xl min-[2000px]:max-w-4xl">
                O crescimento da população no Iguaçu é fruto de muito trabalho,
                mas o desafio contínuo precisa de apoio. Junte-se a nós e ajude
                a garantir um futuro seguro para essa espécie incrível.
              </p>
            </div>

            <div className="relative z-10 shrink-0 mt-6 min-[2000px]:mt-12 md:mt-0">
              <Link
                href="/apoie"
                className="inline-flex items-center gap-3 min-[2000px]:gap-6 bg-onca-preto text-white px-10 py-5 min-[2000px]:px-20 min-[2000px]:py-10 rounded-full font-bold uppercase tracking-widest min-[2000px]:text-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-onca-preto/50"
              >
                Apoiar o Projeto
                <svg
                  className="w-5 h-5 min-[2000px]:w-10 min-[2000px]:h-10 transition-transform group-hover:translate-x-1"
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

      <div className="w-full bg-gray-50 border-t border-gray-200 py-12 min-[2000px]:py-24">
        <div className="mx-auto max-w-5xl min-[2000px]:max-w-400 px-6 flex justify-center md:justify-start">
          <VoltarLinkFauna />
        </div>
      </div>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </div>
  );
}
