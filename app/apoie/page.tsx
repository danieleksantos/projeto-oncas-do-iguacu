import DoacaoApoie from './components/DoacaoApoie';
import EstagioVoluntariadoApoie from './components/EstagioVoluntariadoApoie';
import HeroApoie from './components/HeroApoie';
import ParceriaApoie from './components/ParceriaApoie';

export default function ApoiePage() {
  return (
    <div className="bg-white text-onca-preto min-h-screen selection:bg-onca-laranja selection:text-onca-preto scroll-smooth">
      <HeroApoie />
      <DoacaoApoie />
      <EstagioVoluntariadoApoie />
      <ParceriaApoie />
    </div>
  );
}
