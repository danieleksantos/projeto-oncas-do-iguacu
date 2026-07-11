import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export interface ProdutoProps {
  nome: string;
  descricao: string;
  preco: string;
  imagemUrl: string;
}

export default function CardProduto({ produto }: { produto: ProdutoProps }) {
  // Cria uma mensagem automática para o WhatsApp com o nome do produto
  const mensagemWhatsapp = encodeURIComponent(
    `Olá! Gostaria de adquirir o produto: ${produto.nome}`,
  );
  const linkWhatsapp = `https://wa.me/5545998097698?text=${mensagemWhatsapp}`;

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Container da Imagem */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={produto.imagemUrl}
          alt={produto.nome}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Fallback de cor caso a imagem demore a carregar ou não exista */}
        <div className="absolute inset-0 bg-gray-200 -z-10 flex items-center justify-center text-gray-400 text-sm">
          Sem imagem
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <div className="flex-grow space-y-3">
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
