'use client';

import Image from 'next/image';

const membros = [
  {
    nome: 'Yara Barros',
    cargo: 'Coordenadora Executiva | Bióloga',
    foto: '/logo-laranja.png',
    bio: 'Bióloga, doutora em Zoologia pela UNESP. Atuou com conservação de fauna ameaçada in situ e ex situ em órgãos governamentais, zoológicos e organizações não governamentais. É pesquisadora associada do Instituto Pró-Carnívoros, coordenadora executiva do Plano de Ação Nacional para a Conservação de Grandes Felinos e integrante do CPSG Brasil (Grupo Especialista em Planejamento para a Conservação/IUCN).',
  },
  {
    nome: 'Thiago Reginato',
    cargo: 'Coordenador de Coexistência | Gestor Ambiental',
    foto: '/logo-laranja.png',
    bio: 'Gestor Ambiental pela UTFPR (Medianeira), com experiência em coexistência entre pessoas e grandes felinos, mediação de conflitos, relações públicas, engajamento e educação ambiental com diferentes públicos.',
  },
  {
    nome: 'Vânia Foster',
    cargo: 'Coordenadora de Pesquisa | Bióloga',
    foto: '/logo-laranja.png',
    bio: 'Bióloga, mestre em Ecologia, Biodiversidade e Gestão de Ecossistemas pela Universidade de Aveiro (Portugal) e doutora em Ecologia e Conservação pela UFMS. Durante o doutorado, trabalhou com carnívoros do Pantanal, analisando uso de habitat, padrões de atividade e coexistência entre espécies.',
  },
  {
    nome: 'Aline Kotz',
    cargo: 'Gestora de Coexistência | Gestora Ambiental',
    foto: '/logo-laranja.png',
    bio: 'Gestora Ambiental pela UTFPR (Medianeira), com experiência em coexistência humano-grandes felinos, mediação de conflitos, engajamento comunitário e educação ambiental com crianças e adultos.',
  },
  {
    nome: 'Patrícia Gomes',
    cargo: 'Veterinária Responsável Técnica',
    foto: '/logo-laranja.png',
    bio: 'Médica Veterinária formada pela Universidade de Marília (UNIMAR), com pós-graduação em Educação Ambiental pela mesma instituição. Possui mestrado acadêmico na área de Animais Selvagens pela Universidade Estadual Paulista (UNESP) e atualmente é pós-graduanda em Medicina de Animais Silvestres e Exóticos pela Universidade de Americana (FAM). Apresenta ampla experiência na área de fauna silvestre, com atuação em conservação, manejo e reabilitação de animais selvagens.',
  },
  {
    nome: 'Valquíria Marina Nascimento',
    cargo: 'Assistente de Pesquisa',
    foto: '/logo-laranja.png',
    bio: 'Gestora Ambiental formada pela UNIMAR e Técnica em Meio Ambiente pelo CEEP Manoel Moreira. Ex-agente ambiental do ICMBio, com experiência em conservação, manejo de fogo e proteção ambiental.',
  },
  {
    nome: 'Ranter Ramos',
    cargo: 'Assistente de Pesquisa',
    foto: '/logo-laranja.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    nome: 'Katlin Fernandes',
    cargo: 'Coordenadora de Educação e Engajamento',
    foto: '/logo-laranja.png',
    bio: 'Bióloga, mestre em Biodiversidade Neotropical pela UNILA, com especializações em Gestão Ambiental e Ensino de Biologia. Ao longo da sua trajetória profissional, já trabalhou com licenciamento e gestão ambiental em obras de infraestrutura, conservação ex situ, inventário de anuros durante a graduação e também como professora de Ciências e Biologia na rede pública estadual.',
  },
  {
    nome: 'Igor Moreno',
    cargo: 'Assessor jurídico-administrativo',
    foto: '/logo-laranja.png',
    bio: 'Advogado formado pela USP, com especialização em Desenvolvimento Territorial Sustentável e Integração Transfronteiriça (UNIOESTE e IMT Mines Ales) e em Direito Digital e Compliance. Atua na interface entre gestão e planejamento, direito e governança ambiental em áreas protegidas e projetos de conservação. Atualmente é consultor técnico do Parque Nacional do Iguaçu para Lista Verde da UICN e do Projeto Onças do Iguaçu (Instituto Pró-Carnívoros) em assessoria jurídica e administrativa em planejamento e execução de recursos.',
  },
  {
    nome: 'Ana Catarine Franzini',
    cargo: 'Assessora Técnica',
    foto: '/logo-laranja.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    nome: 'Tainah de Souza',
    cargo: 'Gestora de Educação e Engajamento',
    foto: '/logo-laranja.png',
    bio: 'Tainah de Souza é bióloga graduada pela União Dinâmica de Faculdades Cataratas (UDC Anglo Americano), com dupla especialização: pós-graduação em Bem-Estar de Animais Silvestres e Exóticos e em Manejo de Animais Silvestres e Exóticos. Possui sólida experiência no desenvolvimento de programas de educação ambiental voltados a zoológicos, além de atuar na comunicação estratégica e turismo institucional. Complementa sua atuação técnica com competências em design e ilustração, aplicando recursos visuais para promover a acessibilidade e a divulgação do conhecimento biológico.',
  },
  {
    nome: 'Luiz Gustavo Betanin',
    cargo: 'Coordenador de Comunicação',
    foto: '/logo-laranja.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    nome: 'Claudiani Tavares',
    cargo: 'Coordenadora das Crocheteiras da Onça',
    foto: '/logo-laranja.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function EquipeSobre() {
  return (
    <div className="space-y-24 lg:space-y-32">
      {membros.map((membro, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div
            key={membro.nome}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 
              ${isEven ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="relative h-64 w-64 lg:h-80 lg:w-80 shrink-0">
              <div className="absolute inset-0 rounded-full border-[6px] border-onca-laranja/10 scale-110" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-50 shadow-xl border-4 border-white">
                <Image
                  src={membro.foto}
                  alt={membro.nome}
                  fill
                  className="object-contain p-8 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>

            <div
              className={`flex flex-col text-center 
              ${isEven ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}`}
            >
              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-onca-preto uppercase tracking-tighter">
                  {membro.nome}
                </h3>
                <p className="text-onca-laranja font-bold uppercase tracking-[0.2em] text-xs lg:text-sm mt-2">
                  {membro.cargo}
                </p>
              </div>

              <div className="h-1.5 w-16 bg-onca-laranja mb-8" />

              <p className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-2xl">
                {membro.bio}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
