import Link from 'next/link';
import HeroProdutos from './components/HeroProdutos';
import Produtos from './components/Produtos';

export const metadata = {
  title: 'Produtos Oficiais | Apoie | Projeto Onças do Iguaçu',
  description:
    'Faça uma doação e receba produtos exclusivos do Projeto Onças do Iguaçu como forma de agradecimento pelo seu apoio.',
};

export default function ProdutosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-hidden bg-gray-50">
      <HeroProdutos />

      <div className="w-full max-w-7xl px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center">
        <div className="max-w-3xl text-center mb-16 space-y-4">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Faça uma doação e receba produtos exclusivos do Projeto Onças do
            Iguaçu como forma de agradecimento pelo seu apoio. Escolha entre
            camisetas, chaveiros, pins, ecobags, canecas e outros itens
            disponíveis.
          </p>
        </div>

        <div className="w-full">
          <Produtos />
        </div>

        <div className="mt-24 max-w-3xl text-center flex flex-col items-center space-y-8 bg-gray-200 p-8 md:p-12 rounded-3xl shadow-sm border border-onca-laranja">
          <p className="text-lg text-gray-600 leading-relaxed">
            Se tiver interesse em apoiar o projeto de outra forma ou doar algum
            material, entre em contato conosco. Sua contribuição fortalece as
            ações de conservação da onça-pintada.
          </p>
          <Link
            href="/contato/#nossos-canais"
            className="inline-flex items-center justify-center px-10 py-4 bg-onca-laranja-escuro text-onca-preto rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </main>
  );
}
