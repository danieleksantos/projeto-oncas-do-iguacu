import Image from 'next/image';
import Link from 'next/link';

const topParceiros = [
  { src: '/sobre/partners/Pro Carnivoros.png', alt: 'Pró Carnívoros' },
  { src: '/sobre/partners/WWF-logo.webp', alt: 'WWF' },
  { src: '/sobre/partners/CENAP.png', alt: 'CENAP' },
  {
    src: '/sobre/partners/Parque-Nacional-do-Iguacu.png',
    alt: 'Parque Nacional do Iguaçu',
  },
  { src: '/sobre/partners/ICMBio.png', alt: 'ICMBio' },
];

const parceirosExecutores = [
  { src: '/sobre/partners/Proyecto Yaguarete.png', alt: 'Proyecto Yaguareté' },
  {
    src: '/sobre/partners/Salomao.png',
    alt: 'Salomão',
  },
  { src: '/sobre/partners/ESALQ.png', alt: 'ESALQ' },
  { src: '/sobre/partners/LEMAC.png', alt: 'LEMaC' },
];

const principalPatrocinador = [
  {
    src: '/sobre/partners/Parque-Nacional-do-Iguacu.png',
    alt: 'Parque Nacional do Iguaçu',
  },
  { src: '/sobre/partners/ICMBio.png', alt: 'ICMBio' },
];

const categoriasPatrocinioArray = [
  {
    id: 'pintada',
    title: 'Categoria Onça-Pintada',
    selo: '/sobre/onca-pintada.png',
    logos: [
      '/sobre/partners/Urbia-Cataratas.png',
      '/sobre/partners/Itaipu Binacional.png',
      '/sobre/partners/WWF-logo.webp',
      '/sobre/partners/WINGS.svg',
      '/sobre/partners/WFN.png',
      '/sobre/partners/Inigo.svg',
      '/sobre/partners/Hotel-Cataratas.png',
      '/sobre/partners/ICMBio.png',
    ],
  },
  {
    id: 'parda',
    title: 'Categoria Onça-Parda',
    selo: '/sobre/onca-parda.jpg',
    logos: ['/sobre/partners/LOG Nature.png', '/sobre/partners/Skytakes.jpg'],
  },
  {
    id: 'preta',
    title: 'Categoria Onça-Preta',
    selo: '/sobre/onca-preta.png',
    logos: [
      '/sobre/partners/Itaipu Parquetec.png',
      '/sobre/partners/Eco Park.png',
      '/sobre/partners/gedegato.png',
    ],
  },
  {
    id: 'jaguatirica',
    title: 'Categoria Jaguatirica',
    selo: '/sobre/jaguatirica.jpg',
    logos: [
      '/sobre/partners/Helisul Experience.png',
      '/sobre/partners/Visit Iguassu.png',
      '/sobre/partners/The Owsley Brown II.png',
      '/sobre/partners/Instituto Conhecer para Conservar.png',
      '/sobre/partners/Motiva.png',
      '/sobre/partners/Ron-Magill.png',
      '/sobre/partners/FAM.png',
    ],
  },
];

export default function ParceirosSobre() {
  return (
    <section className="py-24 bg-gray-200 text-onca-preto overflow-hidden w-full flex justify-center">
      <div className="w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 border-l-4 border-onca-laranja pl-4 inline-block md:block text-onca-preto leading-none">
            Parceiros
          </h2>
          <p className="text-gray-800 max-w-3xl text-lg leading-relaxed">
            O Projeto Onças do Iguaçu é desenvolvido por meio da colaboração
            entre instituições de pesquisa, órgãos públicos, organizações da
            sociedade civil e apoiadores estratégicos.
          </p>
          <p className="text-gray-800 max-w-3xl text-lg leading-relaxed mt-4">
            Essas parcerias viabilizam a execução das ações de conservação,
            pesquisa e engajamento realizadas na região do Parque Nacional do
            Iguaçu.
          </p>
        </div>

        <div className="flex flex-col gap-12 relative z-10 w-full">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 pb-10">
            {topParceiros.map((partner, index) => (
              <div
                key={index}
                className="relative w-28 h-24 md:w-36 md:h-28 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-gray-200 rounded-2xl bg-white p-2 shadow-xs"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className={`object-contain p-2 md:p-3 ${partner.src.includes('Helisul') ? 'invert' : ''}`}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <div className="bg-onca-preto w-full text-white text-center py-2.5 font-bold uppercase tracking-widest text-sm rounded-t-xl shadow-md">
                Parceiros Executores
              </div>
              <div className="bg-white w-full grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-4 p-6 rounded-b-xl border border-gray-200 border-t-0 shadow-xs h-full">
                {parceirosExecutores.map((partner, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-square max-w-24 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-gray-200 rounded-2xl p-2"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-onca-preto w-full text-white text-center py-2.5 font-bold uppercase tracking-widest text-sm rounded-t-xl shadow-md">
                Principal Patrocinador 2026
              </div>
              <div className="bg-white w-full flex flex-wrap justify-center items-center gap-6 md:gap-8 p-6 rounded-b-xl border border-gray-200 border-t-0 shadow-xs h-full">
                {principalPatrocinador.map((partner, index) => (
                  <div
                    key={index}
                    className="relative w-28 h-20 md:w-36 md:h-24 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-gray-200 rounded-2xl p-2"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-onca-preto w-full text-white text-center py-3 font-bold uppercase tracking-widest text-lg md:text-xl rounded-t-xl shadow-md">
              Categorias de patrocínio 2026
            </div>

            <div className="bg-white w-full rounded-b-xl border border-gray-200 border-t-0 p-6 md:p-10 shadow-xs flex flex-col gap-10">
              {categoriasPatrocinioArray.map((categoria) => (
                <div
                  key={categoria.id}
                  className="flex flex-col border-b-2 border-gray-100 last:border-0 pb-10 last:pb-0"
                >
                  <h4 className="text-base md:text-lg font-bold text-onca-laranja-escuro uppercase tracking-wider mb-6 text-center md:text-left">
                    {categoria.title}
                  </h4>

                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-10 w-full">
                    <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 hover:scale-105 transition-transform duration-300">
                      <Image
                        src={categoria.selo}
                        alt={categoria.title}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 flex-1">
                      {categoria.logos.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative w-20 h-16 md:w-24 md:h-20 transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_15px_rgb(0,0,0,0.08)] border border-transparent hover:border-gray-200 rounded-xl bg-white p-1.5"
                        >
                          <Image
                            src={src}
                            alt="Parceiro do Projeto"
                            fill
                            className={`object-contain p-1 ${src.includes('Helisul') ? 'invert' : ''}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16">
          <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight text-onca-preto mb-8 md:text-center">
            Benefícios para a Empresa Amiga da Onça:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-800 text-lg max-w-5xl mx-auto">
            {[
              'Associação à conservação da espécie símbolo do Parque Nacional do Iguaçu.',
              'Reconhecimento nas redes sociais e relatórios institucionais do Projeto.',
              'Valorização institucional e turística.',
              'Participação em uma rede de impacto positivo.',
              'Agregação de valor ambiental à empresa.',
              'Certificação oficial Empresa Amiga da Onça.',
            ].map((beneficio, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-onca-laranja mt-1 shrink-0">
                  <svg
                    className="w-6 h-6"
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

        <div className="mt-24 bg-onca-laranja text-onca-preto rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden group shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/30 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-4 text-onca-preto">
              Interessado em apoiar o projeto?
            </h4>
            <p className="text-gray-900 font-medium text-lg">
              Junte-se a nós e faça parte dessa rede de impacto positivo.
            </p>
          </div>

          <div className="relative z-10 shrink-0 mt-6 md:mt-0">
            <Link
              href="/apoie"
              className="inline-flex items-center gap-3 bg-onca-preto text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-onca-preto/50"
            >
              Apoiar Projeto
              <svg
                className="w-5 h-5"
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
