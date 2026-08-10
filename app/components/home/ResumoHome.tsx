import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ResumoHome() {
  return (
    <section className="w-full bg-white py-24 lg:py-32 flex justify-center">
      <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-onca-laranja rounded-[3rem] -rotate-3 scale-105 opacity-20"></div>
          <div className="relative aspect-square md:aspect-4/3 w-full rounded-[3rem] overflow-hidden shadow-xl">
            <Image
              src="/atuacao/hero-atuacao.jpeg"
              alt="Equipe do Projeto Onças do Iguaçu em campo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-onca-preto uppercase tracking-tighter mb-6">
            Proteger a onça é proteger a{' '}
            <span className="text-onca-laranja-escuro">vida</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            O Projeto Onças do Iguaçu atua há quase 10 anos na conservação da
            onça-pintada. Nossa missão vai além do monitoramento: trabalhamos
            lado a lado com as comunidades lindeiras, promovendo a coexistência,
            o engajamento e a pesquisa científica para garantir que o maior
            felino das Américas continue a reinar no Parque Nacional do Iguaçu.
          </p>

          <Link
            href="/sobre"
            className="group inline-flex items-center gap-3 bg-onca-preto text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-onca-preto/50 outline-none"
          >
            Sobre o projeto
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
