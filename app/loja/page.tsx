import HeroLoja from './components/HeroLoja';
import Produtos from './components/Produtos';

export const metadata = {
  title: 'Loja | Projeto Onças do Iguaçu',
  description:
    'Adquira nossos produtos oficiais e ajude a financiar as ações de conservação da onça-pintada no Parque Nacional do Iguaçu.',
};

export default function LojaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-hidden bg-gray-50">
      <HeroLoja />

      <div className="w-full max-w-7xl px-6 lg:px-8 pb-24">
        <Produtos />
      </div>
    </main>
  );
}
