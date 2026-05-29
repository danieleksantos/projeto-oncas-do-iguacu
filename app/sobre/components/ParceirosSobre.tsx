import Image from 'next/image';
import Link from 'next/link';

const partnersLogos = [
  '/sobre/partners/beauval-natura-logo.webp',
  '/sobre/partners/belgo-logo.webp',
  '/sobre/partners/Helisul-aviacao-logo.webp',
  '/sobre/partners/icc-logo.webp',
  '/sobre/partners/WWF-logo.webp',
  '/sobre/partners/zooparc-beauval-logo.webp',
];

const tierLogos = [
  { src: '/sobre/jaguatirica.jpg', alt: 'Jaguatirica' },
  { src: '/sobre/onca-parda.jpg', alt: 'Onça-Parda' },
  { src: '/sobre/onca-preta.png', alt: 'Onça-Preta' },
  { src: '/sobre/onca-pintada.png', alt: 'Onça-Pintada' },
];

export default function ParceirosSobre() {
  return (
    <section className="py-24 min-[2000px]:py-48 bg-white text-onca-preto overflow-hidden w-full flex justify-center">
      <div className="w-full max-w-7xl min-[2000px]:max-w-600 px-6 lg:px-8 min-[2000px]:px-24">
        <div className="mb-20 min-[2000px]:mb-40 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl min-[2000px]:text-[100px] font-bold uppercase tracking-tighter mb-6 min-[2000px]:mb-12 border-l-4 min-[2000px]:border-l-8 border-onca-laranja pl-4 min-[2000px]:pl-10 inline-block md:block text-onca-preto leading-none">
            Parceiros
          </h2>
          <p className="text-gray-800 max-w-3xl min-[2000px]:max-w-6xl text-lg min-[2000px]:text-4xl leading-relaxed min-[2000px]:leading-normal">
            O Projeto Onças do Iguaçu é desenvolvido por meio da colaboração
            entre instituições de pesquisa, órgãos públicos, organizações da
            sociedade civil e apoiadores estratégicos.
          </p>
          <p className="text-gray-800 max-w-3xl min-[2000px]:max-w-6xl text-lg min-[2000px]:text-4xl leading-relaxed min-[2000px]:leading-normal mt-4 min-[2000px]:mt-8">
            Essas parcerias viabilizam a execução das ações de conservação,
            pesquisa e engajamento realizadas na região do Parque Nacional do
            Iguaçu.
          </p>
        </div>

        <div className="mb-32 min-[2000px]:mb-64 relative">
          <h3 className="text-[18px] min-[2000px]:text-4xl font-bold text-gray-500 uppercase tracking-[0.2em] mb-12 min-[2000px]:mb-24 text-center">
            Nossa rede de apoio
          </h3>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-20 min-[2000px]:h-40 bg-onca-laranja/5 -rotate-3 blur-2xl min-[2000px]:blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 min-[2000px]:gap-20 py-8 min-[2000px]:py-16 relative z-10">
            {partnersLogos.map((logo, index) => (
              <div
                key={index}
                className={`group relative flex justify-center items-center w-32 h-32 md:w-40 md:h-40 min-[2000px]:w-80 min-[2000px]:h-80 bg-white rounded-4xl min-[2000px]:rounded-[3rem] shadow-[0_4px_20px_rgb(0,0,0,0.04)] min-[2000px]:shadow-2xl border border-gray-100 hover:border-onca-laranja/40 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-onca-laranja/15
                  ${index % 2 === 0 ? 'translate-y-4 md:translate-y-6 min-[2000px]:translate-y-12' : '-translate-y-4 md:-translate-y-6 min-[2000px]:-translate-y-12'}
                `}
              >
                <Image
                  src={logo}
                  alt={`Logo Parceiro ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 128px, (max-width: 1999px) 160px, 320px"
                  className="object-contain p-6 min-[2000px]:p-12 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 min-[2000px]:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 min-[2000px]:gap-48 items-center border-t border-gray-200 pt-16 min-[2000px]:pt-32">
          <div>
            <h3 className="text-2xl lg:text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight text-onca-preto mb-8 min-[2000px]:mb-16">
              Tipos de parceria
            </h3>
            <div className="space-y-6 min-[2000px]:space-y-12 text-gray-800 leading-relaxed text-lg min-[2000px]:text-3xl min-[2000px]:leading-normal">
              <p>
                O Projeto Onças do Iguaçu estabelece parcerias por meio de cotas
                de contribuição institucional, nas categorias{' '}
                <strong>Jaguatirica</strong>, <strong>Onça-Parda</strong>,{' '}
                <strong>Onça-Preta</strong> e <strong>Onça-Pintada</strong>, com
                diferentes níveis de apoio e contrapartidas proporcionais.
              </p>

              <p>
                Além do apoio financeiro, também são possíveis contribuições
                institucionais e não-financeiras, como suporte logístico, cessão
                de espaços, hospedagem, alimentação, transporte, impressão de
                materiais, fornecimento de insumos, equipamentos, tecnologia e
                apoio à produção de conteúdo e eventos.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full lg:mt-0">
            <div className="grid grid-cols-2 gap-3 md:gap-6 min-[2000px]:gap-12 w-full max-w-70 md:max-w-[320px] lg:max-w-95 min-[2000px]:max-w-150 mx-auto">
              {tierLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="aspect-square relative flex items-center justify-center bg-white rounded-xl md:rounded-2xl min-[2000px]:rounded-4xl border border-gray-100 shadow-inner overflow-hidden"
                >
                  <Image
                    src={logo.src}
                    alt={`Cota ${logo.alt}`}
                    fill
                    sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, (max-width: 1999px) 190px, 300px"
                    className="object-contain p-3 md:p-4 min-[2000px]:p-8"
                  />
                </div>
              ))}
            </div>

            <span className="inline-block mt-4 md:mt-6 min-[2000px]:mt-10 text-sm md:text-base min-[2000px]:text-2xl text-gray-400 font-medium text-center italic">
              Selos de cotas de contribuição institucional.
            </span>
          </div>
        </div>

        <div className="mt-20 min-[2000px]:mt-40 border-t border-gray-200 pt-16 min-[2000px]:pt-32">
          <h3 className="text-2xl lg:text-3xl min-[2000px]:text-6xl font-bold uppercase tracking-tight text-onca-preto mb-8 min-[2000px]:mb-16 md:text-center">
            Benefícios para a empresa:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 min-[2000px]:gap-y-10 text-gray-800 text-lg min-[2000px]:text-3xl max-w-5xl mx-auto">
            {[
              'Associação à conservação da espécie símbolo do Parque Nacional do Iguaçu.',
              'Reconhecimento nas redes sociais e relatórios institucionais do Projeto.',
              'Valorização institucional e turística.',
              'Participação em uma rede de impacto positivo.',
              'Agregação de valor ambiental à empresa.',
              'Certificação oficial Empresa Amiga da Onça.',
            ].map((beneficio, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 min-[2000px]:gap-8"
              >
                <span className="text-onca-laranja mt-1 min-[2000px]:mt-2 shrink-0">
                  <svg
                    className="w-6 h-6 min-[2000px]:w-12 min-[2000px]:h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="leading-relaxed font-medium">{beneficio}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 min-[2000px]:mt-48 bg-onca-laranja text-onca-preto rounded-[2.5rem] min-[2000px]:rounded-[5rem] p-10 md:p-16 min-[2000px]:p-32 flex flex-col md:flex-row items-center justify-between gap-8 min-[2000px]:gap-16 text-center md:text-left relative overflow-hidden group shadow-xl min-[2000px]:shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 min-[2000px]:w-150 min-[2000px]:h-150 bg-white/30 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 min-[2000px]:w-125 min-[2000px]:h-125 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-3xl lg:text-4xl min-[2000px]:text-7xl font-bold uppercase tracking-tighter mb-4 min-[2000px]:mb-8 text-onca-preto">
              Interessado em apoiar o projeto?
            </h4>
            <p className="text-gray-900 font-medium text-lg min-[2000px]:text-4xl">
              Junte-se a nós e faça parte dessa rede de impacto positivo.
            </p>
          </div>

          <div className="relative z-10 shrink-0 mt-6 md:mt-0">
            <Link
              href="/apoie"
              className="inline-flex items-center gap-3 min-[2000px]:gap-6 bg-onca-preto text-white px-10 py-5 min-[2000px]:px-20 min-[2000px]:py-10 rounded-full font-bold uppercase tracking-widest min-[2000px]:text-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-onca-preto/50"
            >
              Apoiar Projeto
              <svg
                className="w-5 h-5 min-[2000px]:w-10 min-[2000px]:h-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
  );
}
