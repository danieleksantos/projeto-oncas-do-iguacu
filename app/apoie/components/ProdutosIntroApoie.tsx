'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function ProdutosIntroApoie() {
  return (
    <section className="w-full py-20 lg:py-32 bg-gray-50 flex justify-center border-y border-gray-100 overflow-hidden relative">
      <div className="w-full max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-[0.3em]">
                <ShoppingBag className="w-5 h-5" /> Recompensas
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-onca-preto leading-tight">
                Nossos <br />
                <span className="text-onca-laranja">Produtos</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
              <p className="text-lg">
                Faça uma doação e receba produtos exclusivos do Projeto Onças do
                Iguaçu como forma de agradecimento pelo seu apoio. Escolha entre
                camisetas, chaveiros, pins, ecobags, canecas e outros itens
                disponíveis.
              </p>
              <p className="text-base text-gray-500">
                Se tiver interesse em apoiar o projeto de outra forma ou doar
                algum material, entre em contato conosco. Sua contribuição
                fortalece as ações de conservação da onça-pintada.
              </p>
            </div>

            <div className="hidden lg:block pt-4">
              <Link
                href="/apoie/produtos"
                className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none"
              >
                Ver todos os Produtos
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/loja/produtos/Caneca-grande-foto1.JPG"
                alt="Produtos oficiais do Projeto Onças do Iguaçu"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 bg-white"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-4 border-onca-laranja/20 rounded-3xl z-10 pointer-events-none mix-blend-overlay"></div>
            </div>

            <div className="flex lg:hidden justify-center w-full">
              <Link
                href="/apoie/produtos"
                className="group/btn flex items-center justify-center gap-3 w-full px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 active:scale-95 shadow-lg focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none"
              >
                Ver todos os Produtos
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 bg-onca-laranja/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
