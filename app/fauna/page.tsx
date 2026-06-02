import Image from 'next/image';
import Link from 'next/link';
import HeroFauna from './components/HeroFauna';
import OncaPintadaFauna from './components/OncaPintadaFauna';
import OncaPardaFauna from './components/OncaPardaFauna';
import JaguatiricaFauna from './components/JaguatiricaFauna';
import GatoMouriscoFauna from './components/GatoMouriscoFauna';
import GatoMaracajaFauna from './components/GatoMaracajaFauna';
import GatoDoMatoPequenoFauna from './components/GatoDoMatoPequenoFauna';

export default function FaunaPage() {
  const felinosNav = [
    { name: 'Onça-Pintada', href: '#onca-pintada' },
    { name: 'Onça-Parda', href: '#onca-parda' },
    { name: 'Jaguatirica', href: '#jaguatirica' },
    { name: 'Gato-Mourisco', href: '#gato-mourisco' },
    { name: 'Gato-Maracajá', href: '#gato-maracaja' },
    { name: 'Gato-do-Mato-Pequeno', href: '#gato-do-mato-pequeno' },
  ];

  return (
    <div className="bg-white text-onca-preto selection:bg-onca-laranja selection:text-onca-preto overflow-hidden">
      <HeroFauna />

      <section className="w-full py-24 bg-white flex justify-center">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-14 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-onca-preto relative inline-block">
              Nossos Felinos
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-onca-laranja rounded-full"></span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 bg-gray-50/50 p-8 lg:p-10 rounded-[3rem] border border-gray-100">
            <div className="flex-1 text-center md:text-left space-y-6">
              <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed">
                No Brasil, temos{' '}
                <strong className="text-onca-laranja-escuro">
                  nove espécies de felinos
                </strong>
                , todas ameaçadas de extinção. Seis delas ocorrem na rica
                biodiversidade do Parque Nacional do Iguaçu.
              </p>
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
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

            <div className="shrink-0 flex items-center justify-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <Link
                href="https://procarnivoros.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja rounded-2xl transition-transform hover:scale-105"
              >
                <Image
                  src="/fauna/logo-pro-carnivoros.webp"
                  alt="Logo Instituto Pró-Carnívoros"
                  width={250}
                  height={250}
                  className="object-contain h-32 md:h-40 w-auto mix-blend-multiply"
                  style={{ width: 'auto' }}
                />
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-12 w-full mx-auto flex flex-col items-center space-y-6">
            <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-400 text-center">
              Saiba mais detalhes dos felinos do Iguaçu:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 lg:gap-32 w-full max-w-2xl mx-auto">
              <div className="flex flex-col items-center md:items-start space-y-4">
                {felinosNav.slice(0, 3).map((felino) => (
                  <Link
                    key={felino.href}
                    href={felino.href}
                    className="text-onca-laranja hover:text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm md:text-base underline decoration-onca-laranja/40 hover:decoration-onca-laranja-escuro decoration-2 underline-offset-8 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-onca-laranja rounded-sm"
                  >
                    {felino.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col items-center md:items-start space-y-4">
                {felinosNav.slice(3, 6).map((felino) => (
                  <Link
                    key={felino.href}
                    href={felino.href}
                    className="text-onca-laranja hover:text-onca-laranja-escuro font-bold uppercase tracking-widest text-sm md:text-base underline decoration-onca-laranja/40 hover:decoration-onca-laranja-escuro decoration-2 underline-offset-8 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-onca-laranja rounded-sm"
                  >
                    {felino.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <OncaPintadaFauna />
      <OncaPardaFauna />
      <JaguatiricaFauna />
      <GatoMouriscoFauna />
      <GatoMaracajaFauna />
      <GatoDoMatoPequenoFauna />
    </div>
  );
}
