import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

const PawPrintIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="M226.5 92.9c14.3 7.3 22.8 23 21 39.6l-4.3 39.4c-1.5 13.9-14.6 23.3-28.1 20.3l-38.3-8.6c-13.8-3.1-22.3-16.7-19.5-30.6l10.3-50.6c3.2-15.6 18.2-24.9 33.4-20.9l25.5 11.4zm104.9-20.9c15.2-4 30.2 5.3 33.4 20.9l10.3 50.6c2.8 13.9-5.7 27.5-19.5 30.6l-38.3 8.6c-13.5 3-26.6-6.4-28.1-20.3l-4.3-39.4c-1.8-16.6 6.7-32.3 21-39.6l25.5-11.4zM92.4 213.9c16.3-11.6 39.2-6.5 49 11.1l20.4 36.7c7 12.6 1.4 28.5-12.2 34l-35.1 14.2c-15.3 6.2-32.5-3.6-35.3-20l-5.7-33.1c-2.4-14.2 2.6-28.6 14.1-37.1l4.8-3.8zm327.2 0l4.8 3.8c11.5 8.5 16.5 22.9 14.1 37.1l-5.7 33.1c-2.8 16.4-20 26.2-35.3 20l-35.1-14.2c-13.6-5.5-19.2-21.4-12.2-34l20.4-36.7c9.8-17.6 32.7-22.7 49-11.1zM256 256c-20 0-38.9 5.8-55 16.3-17.6 11.5-31.5 28-40.2 46.9l-26.5 57.6c-9.1 19.8-6.1 43.3 7.8 60.1 14.8 17.9 37.9 27.1 61.6 23.3l38.2-6.1c11.9-1.9 24.1-1.9 36.1 0l38.2 6.1c23.7 3.8 46.8-5.4 61.6-23.3 13.9-16.8 16.9-40.3 7.8-60.1l-26.5-57.6c-8.7-18.9-22.6-35.4-40.2-46.9C294.9 261.8 276 256 256 256z" />
  </svg>
);

export default function ConhecaOncasHome() {
  return (
    <section className="w-full flex justify-center py-16 md:py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes jaguarFadeLight {
          0% { opacity: 0; transform: scale(0.85); filter: drop-shadow(0 0 0px rgba(249,115,22,0)); }
          10% { opacity: 0.8; transform: scale(1); filter: drop-shadow(0 0 8px rgba(249,115,22,0.4)); }
          30% { opacity: 0.6; transform: scale(1); filter: drop-shadow(0 0 4px rgba(249,115,22,0.2)); }
          70% { opacity: 0; transform: scale(1.05); filter: drop-shadow(0 0 0px rgba(249,115,22,0)); }
          100% { opacity: 0; }
        }
        
        .track-anim {
          animation: jaguarFadeLight 4.8s infinite;
        }
        
        .step-1 { animation-delay: 0.0s; }
        .step-2 { animation-delay: 0.8s; }
        .step-3 { animation-delay: 1.6s; }
        .step-4 { animation-delay: 2.4s; }
        .step-5 { animation-delay: 3.2s; }
        .step-6 { animation-delay: 4.0s; }
      `}</style>

      <div className="w-full max-w-7xl px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
          <div className="relative z-20 w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 text-onca-laranja text-sm font-bold uppercase tracking-[0.3em] mb-4">
              <Search className="w-5 h-5" /> Biodiversidade
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto leading-[1.1] mb-6">
              A Onça-pintada e <br />
              <span className="text-onca-laranja">Nossos Felinos</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              A onça-pintada é a grande estrela do Parque Nacional do Iguaçu,
              mas ela não reina sozinha. Descubra os detalhes do maior felino
              das Américas e conheça também outros felinos incríveis que dividem
              este habitat.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-[55%] flex flex-col">
            <div className="relative w-full h-40 md:h-55 lg:h-87.5 pointer-events-none mt-2 lg:mt-0">
              <div className="absolute top-[0%] left-[5%] rotate-120">
                <div className="track-anim step-1 text-onca-laranja -scale-x-100">
                  <PawPrintIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>

              <div className="absolute top-[15%] left-[25%] rotate-150">
                <div className="track-anim step-2 text-onca-laranja">
                  <PawPrintIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>

              <div className="absolute top-[35%] left-[30%] rotate-120">
                <div className="track-anim step-3 text-onca-laranja -scale-x-100">
                  <PawPrintIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>

              <div className="absolute top-[50%] left-[50%] rotate-150">
                <div className="track-anim step-4 text-onca-laranja">
                  <PawPrintIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>

              <div className="absolute top-[70%] left-[55%] rotate-120">
                <div className="track-anim step-5 text-onca-laranja -scale-x-100">
                  <PawPrintIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>

              <div className="absolute top-[85%] left-[75%] rotate-150">
                <div className="track-anim step-6 text-onca-laranja">
                  <PawPrintIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-auto md:ml-auto w-full md:w-auto relative z-20">
              <Link
                href="/felinos"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-4 bg-onca-laranja text-onca-preto px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-transform duration-300 hover:scale-105 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
              >
                Explorar Espécies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
