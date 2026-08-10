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
                Somos um projeto institucional do ICMBio, desenvolvido em
                parceria pelo Parque Nacional do Iguaçu, Instituto
                Pró-Carnívoros e CENAP/ICMBio. Atuamos no Parque Nacional do
                Iguaçu e nos dez municípios lindeiros, por meio de Acordo de
                Cooperação Técnica. Acordo de Cooperação nº 47/2020, celebrado
                entre ICMBio e Instituto Pró-Carnívoros.
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
        id="governanca"
        className="relative py-24 bg-gray-50 overflow-hidden border-t border-gray-200 w-full flex justify-center"
      >
        <div className="w-full max-w-7xl px-6 lg:px-8 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-onca-preto mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-onca-laranja inline-block shrink-0"></span>
                Governança
              </h2>
              <p className="text-xl font-medium text-gray-800 leading-relaxed border-l-2 border-onca-laranja pl-4">
                Nossas decisões estratégicas são orientadas por planejamento
                técnico e evidências científicas.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                A governança do Projeto Onças do Iguaçu é estruturada por meio
                de parcerias institucionais e cooperação entre organizações
                responsáveis pela execução, apoio técnico e gestão das ações.
              </p>

              <div>
                <h4 className="font-bold uppercase text-xs text-gray-500 mb-6 tracking-[0.2em]">
                  Estrutura de gestão
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    'Coordenação executiva',
                    'Equipe técnica multidisciplinar',
                    'Instituições parceiras',
                    'Órgãos públicos vinculados',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-onca-laranja mt-1 shrink-0">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </span>
                      <span className="font-medium text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          <div
            id="transparencia"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-onca-preto mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-onca-laranja inline-block shrink-0"></span>
                Transparência
              </h2>
              <p className="text-xl font-medium text-gray-800 leading-relaxed border-l-2 border-onca-laranja pl-4">
                Clareza e confiança são a base das nossas ações de conservação.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <div className="text-lg text-gray-700 leading-relaxed max-w-3xl space-y-4">
                <p>
                  Reconhecemos a transparência como um princípio fundamental
                  para a credibilidade e efetividade dos nossos esforços.
                </p>
                <p>
                  Buscamos garantir total clareza na comunicação de atividades e
                  resultados, fortalecendo o vínculo com a sociedade e com quem
                  apoia a causa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
