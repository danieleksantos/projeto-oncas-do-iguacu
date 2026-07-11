'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'O que fazer ao encontrar uma onça?',
    answer:
      'Mantenha a calma e dê espaço ao animal. Afaste-se devagar, sem correr ou fazer movimentos bruscos, e evite se aproximar. Onças evitam o contato com pessoas e, ao perceberem sua presença, tendem a se afastar.',
  },
  {
    question: 'Onças atacam pessoas?',
    answer:
      'Ataques são extremamente raros. As onças evitam o contato com humanos e não nos veem como presa. Quando percebem a presença de pessoas, tendem a se afastar.',
  },
  {
    question: 'Existe onça no Parque Nacional do Iguaçu?',
    answer:
      'Sim. O Parque abriga uma das populações mais importantes de onça-pintada da Mata Atlântica, monitorada continuamente. Mesmo assim, os avistamentos são raros.',
  },
  {
    question: 'É perigoso visitar o Parque?',
    answer:
      'Não. A visitação é segura e bem organizada. As onças são discretas e dificilmente aparecem, e seguir as orientações do parque já é suficiente para uma visita tranquila.',
  },
  {
    question: 'O que fazer se uma onça aparecer perto da minha propriedade?',
    answer: (
      <>
        Mantenha distância e evite qualquer aproximação. Proteja seus animais
        domésticos e entre em contato conosco (
        <Link
          href="/contato#nossos-canais"
          className="font-bold text-onca-laranja-escuro underline hover:text-onca-laranja transition-colors"
        >
          clique aqui para ver as opções
        </Link>
        ). Com manejo adequado, é possível reduzir bastante o risco de novos
        encontros.
      </>
    ),
  },
  {
    question: 'Por que é importante proteger a onça-pintada?',
    answer:
      'A onça-pintada está no topo da cadeia alimentar e regula populações de outras espécies, ajudando a manter o equilíbrio de todo o ecossistema. Proteger a onça é proteger a floresta, a biodiversidade e os próprios recursos naturais dos quais as pessoas dependem. Onde há onça, há um ambiente mais íntegro e funcional.',
  },
  {
    question: 'Qual a diferença entre onça-pintada e onça-parda?',
    answer:
      'A onça-pintada tem pelagem amarelada a dourada, com manchas em forma de rosetas e corpo mais robusto. A onça-parda não tem pintas, apresenta coloração uniforme que varia do marrom ao acinzentado e possui porte mais esguio.',
  },
  {
    question: 'O que o projeto faz?',
    answer:
      'O Projeto Onças do Iguaçu trabalha para conservar a onça-pintada por meio de pesquisa, monitoramento, ações com comunidades e atividades de educação e engajamento.',
  },
  {
    question: 'Qual a diferença entre uma jaguatirica e um filhote de onça?',
    answer:
      'A jaguatirica é menor, tem corpo mais esguio e manchas alongadas. Já o filhote de onça-pintada é mais robusto, com manchas em rosetas e geralmente está acompanhado da mãe.',
  },
  {
    question: 'Quais as espécies de felinos do Parque Nacional do Iguaçu?',
    answer:
      'O Parque abriga diferentes espécies de felinos, desde os maiores até os de pequeno porte. Entre eles estão a onça-pintada, a onça-parda, a jaguatirica, o gato-maracajá, o gato-do-mato e o gato-mourisco.',
  },
];

export default function FaqHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center py-16 md:py-24 bg-gray-200">
      <div className="w-full max-w-4xl px-6 lg:px-8 flex flex-col">
        <div className="mb-10 text-left">
          <span className="inline-flex items-center gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-[0.3em] mb-4">
            <MessageCircle className="w-5 h-5" /> Dúvidas
          </span>

          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-onca-preto leading-[1.1] mb-6">
            Perguntas Frequentes
          </h2>

          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            Tem curiosidade sobre o comportamento dos felinos, o ecossistema da
            Mata Atlântica ou quer saber mais detalhes sobre o nosso trabalho em
            campo? Separamos as dúvidas mais comuns da comunidade e dos
            visitantes para você.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border transition-all duration-300 rounded-3xl overflow-hidden ${
                  isOpen
                    ? 'bg-white border-onca-laranja shadow-md'
                    : 'bg-white border-gray-200 hover:border-onca-laranja/50 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/20 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-lg md:text-xl font-bold transition-colors pr-4 ${
                      isOpen ? 'text-onca-laranja-escuro' : 'text-onca-preto'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-onca-laranja text-onca-preto rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 font-medium leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-onca-laranja/10 border border-onca-laranja/30 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm mt-4">
          <div>
            <h4 className="text-xl font-bold text-onca-preto mb-2">
              Sua dúvida não está aqui?
            </h4>
            <p className="text-gray-700 font-medium">
              Nossa equipe está à disposição para esclarecer qualquer questão
              sobre o projeto e as onças.
            </p>
          </div>
          <Link
            href="/contato/#nossos-canais"
            className="group shrink-0 inline-flex items-center gap-3 bg-onca-laranja border-2 border-onca-preto text-onca-preto px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-transform duration-300 hover:scale-105 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50 hover:shadow-xl"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
