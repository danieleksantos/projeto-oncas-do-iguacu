import HeroAtuacao from '@/app/atuacao/components/HeroAtuacao';
import PesquisaAtuacao from '@/app/atuacao/components/PesquisaAtuacao';
import EngajamentoAtuacao from '@/app/atuacao/components/EngajamentoAtuacao';
import CoexistenciaAtuacao from '@/app/atuacao/components/CoexistenciaAtuacao';
import CapacitacaoAtuacao from '@/app/atuacao/components/CapacitacaoAtuacao';
import ComunicacaoAtuacao from '@/app/atuacao/components/ComunicacaoAtuacao';

export default function AtuacaoPage() {
  return (
    <div className="bg-onca-preto text-white selection:bg-onca-laranja selection:text-onca-preto overflow-hidden">
      <HeroAtuacao />
      <PesquisaAtuacao />
      <EngajamentoAtuacao />
      <CoexistenciaAtuacao />
      <CapacitacaoAtuacao />
      <ComunicacaoAtuacao />
    </div>
  );
}
