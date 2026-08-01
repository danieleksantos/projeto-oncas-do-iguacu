'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProdutoProps {
  nome: string;
  descricao: string;
  preco: string;
  imagens: string[];
}

export default function CardProduto({ produto }: { produto: ProdutoProps }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mensagemWhatsapp = encodeURIComponent(
    `Olá! Gostaria de adquirir o produto: ${produto.nome}`,
  );
  const linkWhatsapp = `https://wa.me/5545998097698?text=${mensagemWhatsapp}`;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % produto.imagens.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === 0 ? produto.imagens.length - 1 : prev - 1,
    );
  };

  return (
    <div className="group flex flex-col bg-gray-200 rounded-3xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
        {produto.imagens.length > 0 ? (
          <Image
            src={produto.imagens[currentImageIndex]}
            alt={`${produto.nome} - Imagem ${currentImageIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 -z-10 flex items-center justify-center text-gray-400 text-sm">
            Sem imagem
          </div>
        )}

        {produto.imagens.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-onca-laranja text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm shadow-md"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-onca-laranja text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none backdrop-blur-sm shadow-md"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {produto.imagens.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentImageIndex === idx
                      ? 'bg-onca-laranja w-3'
                      : 'bg-white/70 w-1.5'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col grow p-6 md:p-8">
        <div className="grow space-y-3">
          <h3 className="text-xl font-bold text-onca-preto uppercase tracking-tight leading-tight">
            {produto.nome}
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {produto.descricao}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
          <span className="text-2xl font-bold text-onca-laranja-escuro">
            {produto.preco}
          </span>

          <Link
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full uppercase tracking-widest rounded-full bg-onca-preto px-6 py-3.5 text-xs font-bold text-white shadow-sm outline-none transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-onca-preto"
          >
            <ShoppingBag className="w-4 h-4" />
            Eu Quero
          </Link>
        </div>
      </div>
    </div>
  );
}
