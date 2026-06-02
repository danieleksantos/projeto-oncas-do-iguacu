import Image from 'next/image';

export default function HeroConteudos() {
  return (
    <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
        <div className="relative z-10 hidden md:block md:w-[60%] min-h-125 shrink-0">
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>

          <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

          <Image
            src="/conteudos/hero-conteudo.png"
            alt="Conteúdos e materiais do Projeto Onças do Iguaçu"
            fill
            priority
            className="object-cover object-center z-10"
            sizes="(max-width: 1280px) 60vw, 1500px"
          />
        </div>

        <div className="relative z-20 w-full md:w-[40%] flex flex-col justify-center shrink-0 py-12 md:py-32">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-onca-laranja/10 blur-[100px] rounded-full z-0 mix-blend-screen pointer-events-none"></div>

          <div className="relative z-10 mx-auto w-full px-0 md:px-6 lg:pr-12 lg:pl-8">
            <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
              <span className="inline-block text-onca-laranja text-sm font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">
                Informação & Ciência
              </span>
              <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                Nossos <br />
                <span className="text-onca-laranja">Conteúdos</span>
              </h1>
            </div>

            <div className="relative w-full h-[45vh] md:hidden my-8">
              <Image
                src="/conteudos/hero-conteudo.png"
                alt="Conteúdos e materiais do Projeto Onças do Iguaçu"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
              <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                A informação é uma das nossas maiores aliadas. Aqui você
                encontra desde cartilhas práticas de convivência até o rigor das
                nossas pesquisas científicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
