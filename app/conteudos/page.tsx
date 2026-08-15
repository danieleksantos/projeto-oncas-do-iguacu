import HeroConteudos from './components/HeroConteudos';
import DestaquesBoletins from './components/DestaquesBoletins';
import DestaquesNoticias from './components/DestaquesNoticias';
import DestaquesDownloads from './components/DestaquesDownloads';
import DestaquesArtigosEco from './components/DestaquesArtigosEco';
import DestaquesArtigosCientificos from './components/DestaquesArtigosCientificos';

export default function ConteudosHubPage() {
  return (
    <div className="bg-white text-onca-preto min-h-screen selection:bg-onca-laranja selection:text-onca-preto">
      <HeroConteudos />
      <DestaquesBoletins />
      <DestaquesNoticias />
      <DestaquesDownloads />
      <DestaquesArtigosEco />
      <DestaquesArtigosCientificos />
    </div>
  );
}
