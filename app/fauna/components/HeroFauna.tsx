import Image from 'next/image';

export default function HeroFauna() {
  return (
    <section className="relative flex items-center justify-start min-h-[60vh] lg:min-h-[75vh] border-b border-white/10 overflow-hidden bg-onca-preto">
      <div className="absolute inset-0 z-0">
        <Image
          src="/fauna/hero-fauna.webp"
          alt="Onça-pintada observando a floresta do Parque Nacional do Iguaçu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-zinc-900/40 via-zinc-900/10 to-transparent lg:from-zinc-900/60 lg:via-zinc-900/30"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full mt-20 lg:mt-0">
        <div className="max-w-2xl text-left space-y-4">
          <span className="inline-block text-onca-laranja text-sm lg:text-base font-bold uppercase tracking-[0.3em] drop-shadow-md">
            Biodiversidade
          </span>
          <h1 className="text-white text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-none drop-shadow-lg">
            Fauna do <br />
            <span className="text-onca-laranja">Iguaçu</span>
          </h1>
          <p className="text-gray-100 text-lg lg:text-xl leading-relaxed font-medium drop-shadow-md pt-2 pb-15 lg:pb-0">
            Conheça os magníficos felinos que habitam o Corredor Verde da Mata
            Atlântica e descubra a importância de cada espécie para o equilíbrio
            do nosso ecossistema.
          </p>
        </div>
      </div>
    </section>
  );
}
