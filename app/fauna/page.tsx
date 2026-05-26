import Image from 'next/image';
import Link from 'next/link';
import HeroFauna from './components/HeroFauna';
import OncaPintadaFauna from './components/OncaPintadaFauna';

export default function FaunaPage() {
  return (
    <div className="bg-white text-onca-preto selection:bg-onca-laranja selection:text-onca-preto overflow-hidden">
      {/* 1. HERO */}
      <HeroFauna />

      {/* 2. INTRODUÇÃO E FONTE (Minimalista e Centralizado) */}
      <section className="w-full py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-16">
          {/* Título Centralizado */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-onca-preto relative inline-block">
              Nossos Felinos
              {/* Detalhe laranja sutil abaixo do título centralizado */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-onca-laranja rounded-full"></span>
            </h2>
          </div>

          {/* Duas Colunas (Texto à esquerda, Logo à direita) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Textos (Esquerda) */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <p className="text-gray-700 text-xl leading-relaxed">
                No Brasil, temos{' '}
                <strong className="text-onca-preto">
                  nove espécies de felinos
                </strong>
                , todas ameaçadas de extinção. Seis delas ocorrem na rica
                biodiversidade do Parque Nacional do Iguaçu.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                As informações biológicas desta seção são baseadas em dados do{' '}
                <Link
                  href="https://procarnivoros.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-onca-preto hover:text-onca-laranja underline decoration-onca-laranja/30 hover:decoration-onca-laranja decoration-2 underline-offset-4 transition-colors"
                >
                  Instituto Pró-Carnívoros
                </Link>
                .
              </p>
            </div>

            {/* Logo (Direita) */}
            <div className="shrink-0 flex items-center justify-center">
              <Link
                href="https://procarnivoros.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none focus-visible:ring-2 focus-visible:ring-onca-laranja rounded-2xl p-2 transition-transform hover:scale-105"
              >
                <Image
                  src="/fauna/logo-pro-carnivoros.webp"
                  alt="Logo Instituto Pró-Carnívoros"
                  width={250}
                  height={250}
                  className="object-contain h-40 md:h-48 w-auto mix-blend-multiply"
                  style={{ width: 'auto' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AS ONÇAS */}
      <OncaPintadaFauna />
    </div>
  );
}
