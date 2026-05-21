import Image from 'next/image';

export default function HeroAtuacao() {
  return (
    <section className="relative flex min-h-screen lg:min-h-[85vh] border-b border-white/10 overflow-hidden bg-onca-preto">
      <div className="absolute bottom-0 w-full h-[55vh] lg:h-full lg:inset-0 z-0">
        <Image
          src="/atuacao/floresta.png"
          alt="Interior da densa floresta da Mata Atlântica"
          fill
          priority
          className="object-cover object-bottom lg:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-onca-preto via-onca-preto/50 to-transparent lg:bg-linear-to-l lg:from-onca-preto lg:from-10% lg:via-onca-preto/80 lg:via-50% lg:to-transparent lg:to-100%"></div>
      </div>

      <div className="absolute bottom-0 left-0 lg:-left-52 w-full lg:w-[55%] h-[45vh] lg:h-[80vh] z-10 pointer-events-none">
        <Image
          src="/atuacao/pesquisadora.png"
          alt="Pesquisadora do Projeto Onças do Iguaçu fazendo anotações"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          className="object-contain object-bottom lg:object-bottom-left scale-x-[-1] lg:scale-x-100 drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-10 relative"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 w-full h-full flex items-start lg:items-center justify-center lg:justify-end pt-12 lg:pt-35 pb-[55vh] lg:pb-0 pointer-events-auto">
        <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 relative z-20">
          <span className="inline-block text-onca-laranja text-sm font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">
            Como Trabalhamos
          </span>

          <h1 className="text-white text-5xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-6 drop-shadow-lg lg:leading-[0.9]">
            Nossa <br />
            <span className="text-onca-laranja leading-[0.9]">Atuação</span>
          </h1>

          <p className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-xl font-medium drop-shadow-md italic lg:opacity-90 mx-auto lg:mx-0">
            A conservação da onça-pintada exige uma abordagem integrada.
            Trabalhamos em quatro pilares fundamentais: Pesquisa, Engajamento,
            Coexistência e Comunicação.
          </p>
        </div>
      </div>
    </section>
  );
}
