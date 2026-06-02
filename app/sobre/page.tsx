import Image from 'next/image';
import Link from 'next/link';
import CounterSobre from '@/app/sobre/components/CounterSobre';
import EquipeSobre from '@/app/sobre/components/EquipeSobre';
import ParceirosSobre from '@/app/sobre/components/ParceirosSobre';

export default function SobrePage() {
  return (
    <div className="bg-onca-preto text-white">
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          <div className="relative z-20 w-full md:w-[40%] flex flex-col justify-center shrink-0 py-12 md:py-32">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-onca-laranja/10 blur-[100px] rounded-full z-0 mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 mx-auto w-full px-0 md:px-6 lg:pl-12 lg:pr-8">
              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <span className="inline-block text-onca-laranja text-sm font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">
                  Nossa Missão
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                  Prosperar <br />
                  <span className="text-onca-laranja">Juntos</span>
                </h1>
              </div>

              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/sobre/onca-hero-sobre.jpg"
                  alt="Onça-pintada na floresta"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                  Trabalhamos para garantir a conservação da onça-pintada,
                  protegendo a espécie-chave da biodiversidade do Parque
                  Nacional do Iguaçu e região.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden md:block md:w-[60%] min-h-[500px] shrink-0">
            <div className="absolute inset-y-0 left-0 w-48 bg-linear-to-r from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-onca-preto to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/sobre/onca-hero-sobre.jpg"
              alt="Onça-pintada na floresta"
              fill
              priority
              className="object-cover object-[center_30%] z-10"
              sizes="(max-width: 1280px) 60vw, 1500px"
            />
          </div>
        </div>
      </section>

      <section
        id="quem-somos"
        className="py-24 bg-white text-onca-preto w-full flex justify-center"
      >
        <div className="w-full max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold uppercase border-l-4 border-onca-laranja pl-4 mb-8">
                Quem somos
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                O Projeto Onças do Iguaçu, que nasceu em 2018, é uma iniciativa
                de conservação dedicada à proteção da onça-pintada na região do
                Parque Nacional do Iguaçu e seu entorno, atuando de forma
                integrada em pesquisa, coexistência e engajamento social.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-t border-gray-200 pt-6">
                <dd className="text-5xl font-bold text-onca-laranja flex items-baseline">
                  <CounterSobre end={30} prefix="+" />{' '}
                  <span className="ml-2 text-lg">anos</span>
                </dd>
                <dt className="text-xs font-bold uppercase text-gray-500 mt-2">
                  Histórico de pesquisa na região
                </dt>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <dd className="text-5xl font-bold text-onca-laranja">
                  <CounterSobre end={10} />
                </dd>
                <dt className="text-xs font-bold uppercase text-gray-500 mt-2">
                  Municípios de atuação no entorno do Parque
                </dt>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <dd className="text-5xl font-bold text-onca-laranja flex items-baseline">
                  <CounterSobre end={600} />{' '}
                  <span className="ml-2 text-lg">mil</span>
                </dd>
                <dt className="text-xs font-bold uppercase text-gray-500 mt-2">
                  Hectares monitorados em um dos maiores censos de onças do
                  mundo
                </dt>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <dd className="text-5xl font-bold text-onca-laranja flex items-baseline">
                  <CounterSobre end={100} prefix="+" />
                </dd>
                <dt className="text-xs font-bold uppercase text-gray-500 mt-2">
                  Onças-pintadas no Corredor Verde (Brasil + Argentina)
                </dt>
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
                Trabalhamos para garantir a sobrevivência da onça-pintada na
                Mata Atlântica por meio de:
              </p>
              <ul className="space-y-4 text-onca-preto">
                {[
                  'Monitoramento científico da população e de suas presas',
                  'Redução de conflitos entre pessoas e grandes felinos',
                  'Ações de educação e engajamento com comunidades locais',
                  'Produção e disseminação de conhecimento técnico e científico',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-onca-laranja font-bold">/</span>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-onca-laranja p-10 rounded-2xl text-onca-preto flex flex-col justify-center">
              <h3 className="font-bold uppercase mb-6 tracking-widest text-sm text-onca-preto">
                Por que isso importa
              </h3>
              <p className="text-xl font-bold mb-4 leading-tight">
                A onça-pintada é uma espécie-chave para o equilíbrio dos
                ecossistemas.
              </p>
              <p className="leading-relaxed font-medium">
                Sua presença indica a integridade ambiental da região e sua
                conservação contribui diretamente para a proteção da
                biodiversidade da Mata Atlântica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-onca-preto w-full flex justify-center">
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

      <section className="py-24 bg-onca-preto border-t border-white/10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-onca-laranja text-[20px] font-bold uppercase tracking-[0.2em] mb-12">
            Base Institucional
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-white text-lg leading-relaxed">
              O Projeto Onças do Iguaçu é desenvolvido* pelo Parque Nacional do
              Iguaçu/ICMBio, em parceria com o Instituto Pró-Carnívoros e o
              CENAP/ICMBio, e financiado majoritariamente com recursos de
              Encargos Acessórios previstos no Contrato de Concessão nº 01/2022
              do Parque Nacional do Iguaçu.
            </p>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 italic text-sm text-gray-400">
              *Acordo de Cooperação nº 47/2020, celebrado entre ICMBio e
              Instituto Pró-Carnívoros.
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

              <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-8 mt-4 group">
                <div>
                  <h4 className="font-bold text-xl text-onca-preto mb-3">
                    Portal de Transparência
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    Acesse nossos relatórios de atividades, indicadores de
                    impacto, documentos institucionais e detalhes sobre
                    parcerias estratégicas.
                  </p>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <Link
                    href="/transparencia"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-onca-preto text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 hover:bg-onca-laranja hover:text-onca-preto transition-all duration-300"
                  >
                    Acessar Portal
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
