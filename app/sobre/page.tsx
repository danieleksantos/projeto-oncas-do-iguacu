import EquipeSobre from '@/app/sobre/components/EquipeSobre';
import ParceirosSobre from '@/app/sobre/components/ParceirosSobre';
import HeroSobre from './components/HeroSobre';

export default function SobrePage() {
  return (
    <div className="bg-onca-preto text-white">
      <HeroSobre />

      <section
        id="quem-somos"
        className="py-24 lg:py-32 bg-white text-onca-preto w-full flex justify-center"
      >
        <div className="w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold uppercase border-l-4 border-onca-laranja pl-5 mb-8 tracking-tight">
                Quem somos
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Somos um projeto do Parque Nacional do Iguaçu/ICMBio,
                desenvolvido em parceria com o Instituto Pró-Carnívoros e o
                CENAP/ICMBio. Atuamos para conservar as onças e os grandes
                felinos no Parque Nacional do Iguaçu e nos dez municípios
                lindeiros com ações integradas de pesquisa, coexistência,
                engajamento e comunicação.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <strong className="text-onca-preto uppercase tracking-widest text-sm shrink-0 sm:w-24 sm:pt-1.5">
                  Missão:
                </strong>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Conservação da onça-pintada como espécie-chave da
                  biodiversidade do Parque Nacional do Iguaçu.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <strong className="text-onca-preto uppercase tracking-widest text-sm shrink-0 sm:w-24 sm:pt-1.5">
                  Visão:
                </strong>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Onças, pessoas e Parque Nacional prosperando juntos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl">
              <h3 className="text-onca-preto font-bold uppercase mb-6 tracking-widest text-[20px]">
                O que fazemos
              </h3>
              <p className="text-onca-preto mb-6 font-semibold text-[18px]">
                Nossa atuação integra ciência, coexistência, educação e
                comunicação para conservar a população de onças-pintadas do
                Iguaçu. Fazemos isso por meio de:
              </p>
              <ul className="space-y-5 text-onca-preto">
                {[
                  'Pesquisa e monitoramento da população de onças e de suas presas',
                  'Coexistência, desenvolvendo soluções para reduzir conflitos com produtores rurais',
                  'Engajamento e educação, aproximando pessoas da conservação da fauna',
                  'Comunicação e disseminação de conhecimento, transformando ciência em informação acessível e apoio à tomada de decisão',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-onca-laranja font-bold mt-0.5">
                      /
                    </span>{' '}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-onca-laranja p-10 rounded-2xl text-onca-preto flex flex-col justify-center">
              <h3 className="font-bold uppercase mb-6 tracking-widest text-sm text-onca-preto">
                Por que isso importa
              </h3>
              <p className="text-xl font-bold mb-4 leading-tight">
                A onça-pintada é uma espécie-chave para a conservação da Mata
                Atlântica.
              </p>
              <p className="leading-relaxed font-medium">
                Como predador de topo da cadeia alimentar, ela ajuda a manter o
                equilíbrio dos ecossistemas. Proteger a onça significa conservar
                a floresta, sua biodiversidade e os benefícios que ela
                proporciona às pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-300 text-onca-preto w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-8 space-y-20">
          <div>
            <h2 className="text-3xl font-bold uppercase border-l-4 border-onca-laranja pl-4 mb-8">
              Onde atuamos
            </h2>
            <p className="text-gray-700 max-w-4xl text-lg leading-relaxed">
              O projeto promove ações em escala regional e articula esforços no
              contínuo de Mata Atlântica compartilhado entre Brasil e Argentina.
              As atuações são no Parque Nacional do Iguaçu e nos 10 municípios
              do seu entorno: Foz do Iguaçu, Santa Terezinha de Itaipu, São
              Miguel do Iguaçu, Serranópolis do Iguaçu, Matelândia, Céu Azul,
              Santa Tereza do Oeste, Lindoeste, Capitão Leônidas Marques e
              Capanema.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold uppercase border-l-4 border-onca-laranja pl-4 mb-8">
              Histórico
            </h2>
            <div className="text-gray-700 max-w-4xl text-lg leading-relaxed space-y-6">
              <p>
                Os esforços de conservação na região começaram na década de 1990
                com o Projeto Carnívoros do Iguaçu, liderado por Peter Crawshaw
                Jr., que identificou uma população estimada de 68 onças-pintadas
                no Parque Nacional do Iguaçu — número considerado crítico já na
                época.
              </p>
              <p>
                Após um período de declínio populacional e limitações
                operacionais, as atividades foram retomadas em 2009 com apoio
                institucional e financiamento estruturado. Em 2018, o projeto
                foi reformulado e passou a se chamar Projeto Onças do Iguaçu,
                amplando sua atuação e consolidando parcerias nacionais e
                internacionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="equipe"
        className="py-24 bg-white text-onca-preto w-full flex justify-center"
      >
        <div className="w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 border-l-4 border-onca-laranja pl-4 leading-none">
              Equipe
            </h2>
            <p className="text-gray-600 max-w-3xl text-lg leading-relaxed mt-4">
              Contamos com uma equipe multidisciplinar formada por profissionais
              das áreas de biologia, gestão ambiental e conservação, medicina
              veterinária, direito, comunicação e mais, atuando de forma
              integrada em pesquisa, coexistência e engajamento.
            </p>
          </div>
          <EquipeSobre />
        </div>
      </section>

      <div id="parceiros">
        <ParceirosSobre />
      </div>

      <section
        id="transparencia"
        className="relative py-24 bg-gray-50 overflow-hidden border-t border-gray-200 w-full flex justify-center"
      >
        <div className="w-full max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-onca-preto mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-onca-laranja inline-block shrink-0"></span>
                Transparência
              </h2>
              <p className="text-xl font-medium text-gray-800 leading-relaxed border-l-2 border-onca-laranja pl-4">
                Clareza e confiança são a base das nossas ações de conservação.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Baixe os sumários executivos dos nossos relatórios anuais e
                acompanhe os resultados do projeto.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    ano: '2025',
                    link: 'https://drive.google.com/file/d/1zPxrDrEfQSi0XosX6lJ_NyqUL4X2uX5p/view?usp=sharing',
                  },
                  {
                    ano: '2024',
                    link: 'https://drive.google.com/file/d/1v92vNh8h-Faza7Ne5C5LC-I4255Bmy67/view?usp=sharing',
                  },
                  {
                    ano: '2023',
                    link: 'https://drive.google.com/file/d/1DbfObLKXuvty9qxRr0NJ34qI7I7liZsB/view?usp=sharing',
                  },
                  {
                    ano: '2022',
                    link: 'https://drive.google.com/file/d/19LMsMtouPy6UMdeeFsPX1TYNhIY9IvkZ/view?usp=sharing',
                  },
                  {
                    ano: '2021',
                    link: 'https://drive.google.com/file/d/1LkaX3rbbmlxpZcUO74kRDS7TiAZhcHHs/view?usp=sharing',
                  },
                  {
                    ano: '2020',
                    link: 'https://drive.google.com/file/d/1ZLlde4d_8uFgqSMeaS4WfbKAFB2khUn2/view?usp=sharing',
                  },
                ].map((item) => (
                  <a
                    key={item.ano}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 bg-gray-200 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-onca-laranja transition-all group outline-none focus-visible:ring-2 focus-visible:ring-onca-laranja"
                  >
                    <span className="font-bold text-onca-preto">
                      Relatório {item.ano}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-onca-laranja transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
