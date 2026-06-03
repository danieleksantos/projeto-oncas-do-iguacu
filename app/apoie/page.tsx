import DoacaoApoie from './components/DoacaoApoie';
import HeroApoie from './components/HeroApoie';

export default function ApoiePage() {
  return (
    // O scroll-smooth garante o deslizamento suave ao clicar nas âncoras
    <div className="bg-white text-onca-preto min-h-screen selection:bg-onca-laranja selection:text-onca-preto scroll-smooth">
      <HeroApoie />
      <DoacaoApoie />
    </div>
  );
}
