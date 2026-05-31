import Image from 'next/image';

export default function HeroFauna() {
  return (
    <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden border-b border-white/10">
      <div className="w-full max-w-7xl min-[2000px]:max-w-600 flex flex-col md:flex-row items-stretch relative">
        <div className="relative z-20 w-full md:w-[35%] flex flex-col justify-center shrink-0 py-8 md:py-8 lg:py-12 min-[2000px]:py-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-onca-laranja/10 blur-[100px] min-[2000px]:blur-[200px] rounded-full z-0 mix-blend-screen pointer-events-none"></div>

          <div className="relative z-10 mx-auto w-full px-0 md:px-6 lg:pl-12 lg:pr-8 min-[2000px]:pl-24 min-[2000px]:pr-16">
            <div className="max-w-xl min-[2000px]:max-w-3xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
              <span className="inline-block text-onca-laranja text-sm min-[2000px]:text-2xl font-bold uppercase tracking-[0.3em] mb-4 min-[2000px]:mb-8 drop-shadow-md">
                Biodiversidade
              </span>
              <h1 className="text-white text-5xl md:text-6xl min-[2000px]:text-[140px] font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 min-[2000px]:mb-12 drop-shadow-lg">
                Fauna do <br />
                <span className="text-onca-laranja">Iguaçu</span>
              </h1>
            </div>

            <div className="relative w-full h-auto md:hidden my-6">
              <Image
                src="/fauna/hero-fauna.jpg"
                alt="Onça-pintada observando a floresta do Parque Nacional do Iguaçu"
                width={906}
                height={423}
                priority
                className="w-full h-auto"
                sizes="100vw"
              />
            </div>

            <div className="max-w-xl min-[2000px]:max-w-4xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0 mt-4 md:mt-0">
              <p className="text-gray-300 text-lg min-[2000px]:text-4xl min-[2000px]:leading-normal drop-shadow-md font-medium">
                Conheça os magníficos felinos que habitam o Corredor Verde da
                Mata Atlântica e descubra a importância de cada espécie para o
                equilíbrio do nosso ecossistema.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden md:flex md:w-[65%] shrink-0 items-center justify-end">
          <div className="absolute inset-y-0 left-0 w-32 min-[2000px]:w-80 bg-linear-to-r from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 min-[2000px]:w-32 bg-linear-to-l from-onca-preto to-transparent z-20 pointer-events-none"></div>

          <Image
            src="/fauna/hero-fauna.jpg"
            alt="Onça-pintada observando a floresta do Parque Nacional do Iguaçu"
            width={906}
            height={423}
            priority
            className="w-full h-auto z-10 block"
            sizes="(max-width: 1280px) 70vw, 1500px"
          />
        </div>
      </div>
    </section>
  );
}
