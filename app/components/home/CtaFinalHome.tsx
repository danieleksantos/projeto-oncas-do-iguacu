import Link from 'next/link';
import { Heart, Handshake } from 'lucide-react';

export default function CtaFinalHome() {
  return (
    <section className="w-full flex justify-center pb-16 md:pb-24 pt-8 bg-white">
      <div className="w-full max-w-7xl px-6 lg:px-8">
        <div className="relative bg-onca-laranja rounded-4xl md:rounded-[3rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-xl group">
          <div className="absolute top-[-50%] right-[-10%] w-120 h-120 bg-white/20 rounded-full blur-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-[-50%] left-[-10%] w-80 h-80 bg-onca-preto/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto leading-[1.1] mb-4">
              Apoie a conservação da <br className="hidden md:block" />
              <span className="text-white drop-shadow-sm">onça-pintada</span>
            </h2>

            <p className="text-onca-preto/80 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              Sua ajuda é fundamental para mantermos as equipes em campo e
              garantirmos um futuro seguro para o maior felino das Américas.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-3 shrink-0 w-full sm:w-auto sm:min-w-70">
            <Link
              href="/apoie/#doacao"
              className="group/btn flex items-center justify-center gap-2 w-full uppercase tracking-widest rounded-full bg-onca-preto px-8 py-4 text-sm font-bold text-white shadow-sm outline-none transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
            >
              <Heart
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110"
                fill="currentColor"
              />
              Doar agora
            </Link>

            <Link
              href="/contato"
              className="group/btn flex items-center justify-center gap-2 w-full uppercase tracking-widest rounded-full bg-onca-preto px-8 py-4 text-sm font-bold text-white shadow-sm outline-none transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
            >
              <Handshake className="w-4 h-4 transition-transform duration-300 group-hover/btn:-rotate-12" />
              Quero ser Parceiro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
