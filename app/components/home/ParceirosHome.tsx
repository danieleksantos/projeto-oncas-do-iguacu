import Image from 'next/image';

// Juntamos todos os parceiros em uma única lista limpa
const todosParceiros = [
  { src: '/sobre/partners/Pro Carnivoros.png', alt: 'Pró Carnívoros' },
  { src: '/sobre/partners/WWF-logo.webp', alt: 'WWF' },
  { src: '/sobre/partners/CENAP.png', alt: 'CENAP' },
  {
    src: '/sobre/partners/Parque-Nacional-do-Iguacu.png',
    alt: 'Parque Nacional do Iguaçu',
  },
  { src: '/sobre/partners/ICMBio.png', alt: 'ICMBio' },
  { src: '/sobre/partners/Proyecto Yaguarete.png', alt: 'Proyecto Yaguareté' },
  { src: '/sobre/partners/Salomao.png', alt: 'Salomão' },
  { src: '/sobre/partners/ESALQ.png', alt: 'ESALQ' },
  { src: '/sobre/partners/LEMAC.png', alt: 'LEMaC' },
  { src: '/sobre/partners/urbia-cataratas-logo.webp', alt: 'Urbia Cataratas' },
  { src: '/sobre/partners/Itaipu Binacional.png', alt: 'Itaipu Binacional' },
  { src: '/sobre/partners/WINGS.svg', alt: 'WINGS' },
  { src: '/sobre/partners/WFN.png', alt: 'WFN' },
  { src: '/sobre/partners/Inigo.svg', alt: 'Inigo' },
  {
    src: '/sobre/partners/Hotel-Cataratas.png',
    alt: 'Hotel das Cataratas',
  },
  { src: '/sobre/partners/LOG Nature.png', alt: 'LOG Nature' },
  { src: '/sobre/partners/Skytakes.jpg', alt: 'Skytakes' },
  { src: '/sobre/partners/Itaipu Parquetec.png', alt: 'Itaipu Parquetec' },
  { src: '/sobre/partners/Eco Park.png', alt: 'Eco Park' },
  { src: '/sobre/partners/gedegato.png', alt: 'Gedegato' },
  { src: '/sobre/partners/Helisul Experience.png', alt: 'Helisul' },
  { src: '/sobre/partners/Visit Iguassu.png', alt: 'Visit Iguassu' },
  {
    src: '/sobre/partners/The Owsley Brown II.png',
    alt: 'The Owsley Brown II',
  },
  {
    src: '/sobre/partners/Instituto Conhecer para Conservar.png',
    alt: 'Instituto Conhecer para Conservar',
  },
  { src: '/sobre/partners/Motiva.png', alt: 'Motiva' },
  { src: '/sobre/partners/Ron-Magill.png', alt: 'Ron Magill' },
  { src: '/sobre/partners/FAM.png', alt: 'FAM' },
];

export default function ParceirosHome() {
  return (
    <section className="w-full flex justify-center py-16 md:py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-onca-preto mb-4">
            Quem faz acontecer
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            A conservação do maior felino das Américas no Parque Iguaçu só é
            possível graças a uma rede de instituições, apoiadores e empresas
            que acreditam no nosso projeto.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
          <div className="animate-marquee py-4 flex items-center gap-12 md:gap-20">
            {[...todosParceiros, ...todosParceiros].map((partner, index) => (
              <div
                key={index}
                className="relative w-28 h-16 md:w-36 md:h-20 shrink-0 group"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className={`object-contain transition-transform duration-300 group-hover:scale-110 ${
                    partner.src.includes('Helisul') ? 'invert' : ''
                  }`}
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
