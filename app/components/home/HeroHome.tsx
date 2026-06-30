import Link from 'next/link';
import Image from 'next/image';
export default function HeroHome() {
  return (
    <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
        <div className="relative z-10 hidden md:block md:w-[60%] min-h-125 shrink-0">
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

          <Image
            src="/home/hero-home3.jpg"
            alt="Onça-pintada na Mata Atlântica"
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
              <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold uppercase tracking-tighter leading-tight lg:leading-[1.1] mb-2 md:mb-6 drop-shadow-lg">
                Conservar a <br className="hidden md:block" />
                <span className="text-onca-laranja">onça-pintada</span>
              </h1>
            </div>

            <div className="relative w-full h-[45vh] md:hidden my-8">
              <Image
                src="/home/hero-home3.jpg"
                alt="Onça-pintada na Mata Atlântica"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
              <p className="text-gray-300 text-lg drop-shadow-md font-medium mb-8">
                Espécie-chave da biodiversidade do Parque Nacional do Iguaçu.
              </p>

              <div className="flex flex-col xl:flex-row items-center md:items-start gap-4">
                <Link
                  href="/apoie"
                  className="w-full xl:w-auto text-center inline-flex justify-center items-center gap-2 bg-onca-laranja text-onca-preto px-6 py-4 rounded-full font-bold uppercase text-sm transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-onca-laranja/50 outline-none shadow-xl"
                >
                  Apoie o Projeto
                </Link>

                <Link
                  href="/sobre"
                  className="w-full xl:w-auto text-center inline-flex justify-center items-center gap-2 bg-white text-onca-preto px-6 py-4 rounded-full font-bold uppercase text-sm transition-all duration-300 hover:text-onca-preto hover:scale-105 focus:ring-4 focus:ring-onca-laranja/50 outline-none"
                >
                  Nosso trabalho
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
