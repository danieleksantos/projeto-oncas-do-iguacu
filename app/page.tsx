import AtuacaoHome from './components/home/AtuacaoHome';
import ConhecaOncasHome from './components/home/ConhecaOncasHome';
import CtaFinalHome from './components/home/CtaFinalHome';
import FaqHome from './components/home/FaqHome';
import HeroHome from './components/home/HeroHome';
import ImpactoHome from './components/home/ImpactoHome';
import ParceirosHome from './components/home/ParceirosHome';
import ResumoHome from './components/home/ResumoHome';
import SliderHome from './components/home/SliderHome';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen selection:bg-onca-laranja selection:text-onca-preto">
      <HeroHome />

      <div className="relative z-20 px-4 -mt-12">
        <ImpactoHome />
      </div>

      <ResumoHome />
      <AtuacaoHome />
      <SliderHome />
      <ConhecaOncasHome />
      <FaqHome />
      <ParceirosHome />
      <CtaFinalHome />
    </main>
  );
}
