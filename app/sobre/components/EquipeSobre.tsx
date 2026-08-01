'use client';

import Image from 'next/image';

const membros = [
  {
    nome: 'Yara Barros',
    cargo: 'Coordenadora Executiva | Bióloga',
    foto: '/sobre/equipe/Yara.png',
    bio: 'Bióloga, doutora em Zoologia pela UNESP. Atuou com conservação de fauna ameaçada in situ e ex situ em órgãos governamentais, zoológicos e organizações não governamentais. É pesquisadora associada do Instituto Pró-Carnívoros, coordenadora executiva do Plano de Ação Nacional para a Conservação de Grandes Felinos e integrante do CPSG Brasil (Grupo Especialista em Planejamento para a Conservação/IUCN).',
  },
  {
    nome: 'Vânia Foster',
    cargo: 'Coordenadora de Pesquisa | Bióloga',
    foto: '/sobre/equipe/Vania.JPG',
    bio: 'Graduada em Ciências Biológicas pelo Centro Universitário Barão de Mauá (2006), mestre em Biologia, ramo Ecologia, Biodiversidade e Gestão de Ecossistemas, pela Universidade de Aveiro (2012) e doutora em Ecologia e Conservação pela Universidade Federal de Mato Grosso do Sul (2017). Atualmente é pesquisadora no Projeto Onças do Iguaçu, onde atua desde 2019. Responsável pela área de Pesquisa do projeto, desenvolvendo atividades de monitoramento da flutuação populacional dos grandes felinos (onça-pintada e onça-parda) e de suas bases de presas, monitoramento dos corredores de vegetação adjacentes ao Parque Nacional do Iguaçu e estudos de dieta, deslocamento, uso do hábitat e coocorrência dos felinos.',
  },
  {
    nome: 'Patrícia Gomes',
    cargo: 'Veterinária Responsável Técnica',
    foto: '/sobre/equipe/Patricia.jpeg',
    bio: 'Médica Veterinária formada pela Universidade de Marília (UNIMAR), com pós-graduação em Educação Ambiental pela mesma instituição. Possui mestrado acadêmico na área de Animais Selvagens pela Universidade Estadual Paulista (UNESP) e atualmente é pós-graduanda em Medicina de Animais Silvestres e Exóticos pela Universidade de Americana (FAM). Apresenta ampla experiência na área de fauna silvestre, com atuação em conservação, manejo e reabilitação de animais selvagens.',
  },
  {
    nome: 'Valquíria Marina Nascimento',
    cargo: 'Assistente de Pesquisa',
    foto: '/sobre/equipe/Valquiria.JPG',
    bio: 'Gestora Ambiental formada pela UNIMAR e Técnica em Meio Ambiente pelo CEEP Manoel Moreira. Ex-agente ambiental do ICMBio, com experiência em conservação, manejo de fogo e proteção ambiental.',
  },
  {
    nome: 'Ranter Ramos',
    cargo: 'Assistente de Pesquisa',
    foto: '/sobre/equipe/Ranter.jpg',
    bio: 'Cursando Análise e Desenvolvimento de sistemas pela UNIFATECIE, ex-agente ambiental do ICMBio, com experiência em manejo de fogo, proteção e conservação ambiental.',
  },
  {
    nome: 'Katlin Fernandes',
    cargo: 'Coordenadora de Educação e Engajamento',
    foto: '/sobre/equipe/Katlin.png',
    bio: 'Bióloga, mestre em Biodiversidade Neotropical pela UNILA, com especializações em Gestão Ambiental e Ensino de Biologia. Ao longo da sua trajetória profissional, já trabalhou com licenciamento e gestão ambiental em obras de infraestrutura, conservação ex situ, inventário de anuros durante a graduação e também como professora de Ciências e Biologia na rede pública estadual.',
  },
  {
    nome: 'Tainah de Souza',
    cargo: 'Gestora de Educação e Engajamento',
    foto: '/sobre/equipe/Tainah.jpeg',
    bio: 'Bióloga graduada pela União Dinâmica de Faculdades Cataratas (UDC Anglo Americano), com dupla especialização: pós-graduação em Bem-Estar de Animais Silvestres e Exóticos e em Manejo de Animais Silvestres e Exóticos. Possui sólida experiência no desenvolvimento de programas de educação ambiental voltados a zoológicos, além de atuar na comunicação estratégica e turismo institucional. Complementa sua atuação técnica com competências em design e ilustração, aplicando recursos visuais para promover a acessibilidade e a divulgação do conhecimento biológico.',
  },
  {
    nome: 'Luiz Gustavo Betanin',
    cargo: 'Coordenador de Comunicação',
    foto: '/sobre/equipe/Guga.jpeg',
    bio: 'Documentarista de natureza, formado em Cinema e Audiovisual pela UFPE. Vencedor do Prêmio Vasconcelos Sobrinho 2025 (Governo de Pernambuco), na categoria Destaque em Comunicação Ambiental. Dirigiu documentários e séries voltados à vida selvagem e conservação. Atuou na concepção e execução de projetos de comunicação audiovisual para Ibama/PE, ICMBio/PE, GRAD e instituições de pesquisa. Possui experiência na interface entre audiovisual, ciência e conservação da biodiversidade.',
  },
  {
    nome: 'Igor Moreno',
    cargo: 'Assessor jurídico-administrativo',
    foto: '/sobre/equipe/Igor.jpg',
    bio: 'Advogado formado pela USP, com especialização em Desenvolvimento Territorial Sustentável e Integração Transfronteiriça (UNIOESTE e IMT Mines Ales) e em Direito Digital e Compliance. Atua na interface entre gestão e planejamento, direito e governança ambiental em áreas protegidas e projetos de conservação. Atualmente é consultor técnico do Parque Nacional do Iguaçu para Lista Verde da UICN e do Projeto Onças do Iguaçu (Instituto Pró-Carnívoros) em assessoria jurídica e administrativa em planejamento e execução de recursos.',
  },
  {
    nome: 'Ana Catarine Franzini',
    cargo: 'Assessora Técnica',
    foto: '/sobre/equipe/Ana.jpeg',
    bio: 'Bióloga, Gestora Ambiental, pós-graduada em Ecologia e Biodiversidade e mestranda em Conservação e Manejo de Recursos Naturais. Possui experiência em projetos de pesquisa e atuação técnica nas áreas de gestão ambiental pública, adaptação climática, áreas protegidas e conservação de fauna silvestre, bem como em serviços de análise, assessoria e consultoria ambiental.',
  },
  {
    nome: 'Claudiani Tavares',
    cargo: 'Coordenadora das Crocheteiras da Onça',
    foto: '/sobre/equipe/Claudiani.jpeg',
    bio: 'Agricultora e artesã. Atualmente é Coordenadora do grupo Crocheteiras da Onça e do grupo Artesãs da Onça.',
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
            <div className="relative h-56 w-56 lg:h-72 lg:w-72 shrink-0">
              <div className="absolute inset-0 rounded-full border-[6px] border-onca-laranja/10 scale-110" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-100 shadow-xl border-4 border-white">
                <Image
                  src={membro.foto}
                  alt={membro.nome}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
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
