'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

const iniciativasEngajamento = [
  {
    titulo: 'Bafo de Onça',
    imagem: '/atuacao/bafo-de-onca.webp',
    paragrafos: [
      'O Bafo de Onça leva a conservação para onde a conversa acontece.',
      'Realizado em bares e outros espaços de convivência, promove encontros descontraídos entre pesquisadores, comunidade e convidados para discutir ciência, conservação e coexistência de forma acessível, participativa e sem formalidades.',
    ],
  },
  {
    titulo: 'Mutirão da Onça',
    imagem: '/atuacao/mutirao-da-onca.webp',
    paragrafos: [
      'A conservação também pode deixar um legado para as pessoas. O Mutirão da Onça reúne comunidades, voluntários e parceiros para realizar ações que atendem necessidades locais, demonstrando que conservar a onça-pintada também pode deixar um legado para as pessoas. O Mutirão da Onça reúne comunidades, voluntários e parceiros para realizar ações que atendem necessidades locais, demonstrando que conservar a onça-pintada também significa gerar benefícios para quem compartilha esse território com ela.',
    ],
  },
  {
    titulo: 'Onça Grafiteira',
    imagem: '/atuacao/onca-grafiteira-3.jpg',
    paragrafos: [
      'Fruto da parceria entre o Projeto Onças do Iguaçu e o artista Igor Izy, o Onça Grafiteira leva a conservação para as ruas por meio da arte urbana. Os murais transformam paredes em grandes telas que contam a história da onça-pintada e inspiram orgulho, pertencimento e coexistência.',
      'Com obras já presentes em cinco municípios do entorno do Parque Nacional do Iguaçu, a iniciativa busca criar uma galeria a céu aberto, com pelo menos um mural em cada um dos dez municípios da região.',
    ],
  },
  {
    titulo: 'Aeroporto Amigo da Onça',
    imagem: '/atuacao/aeroporto-amigo-da-onca-2.jpeg',
    paragrafos: [
      'Primeiro Aeroporto Amigo da Onça do Brasil, o Aeroporto Internacional de Foz do Iguaçu desenvolve, em parceria com o Projeto Onças do Iguaçu e a Motiva, ações que aproximam milhares de passageiros da conservação da onça-pintada e da biodiversidade da Mata Atlântica.',
      'A iniciativa demonstra como um dos principais portões de entrada do Parque Nacional do Iguaçu pode se tornar também uma porta de entrada para a conservação.',
    ],
  },
  {
    titulo: 'Onça Compensa',
    imagem: '/atuacao/logo-onca-compensa.png',
    isLogo: true,
    paragrafos: [
      'O Onça Compensa é uma ferramenta de engajamento comunitário que transforma a conservação da onça-pintada em oportunidades para as pessoas que vivem no entorno do Parque Nacional do Iguaçu. O programa identifica talentos locais e apoia o desenvolvimento de produtos e serviços aos quais a onça agrega valor, criando fontes alternativas de renda diretamente associadas à conservação da espécie.',
      'Além de estimular o empreendedorismo local, o Projeto conecta os participantes a oportunidades de capacitação, intercâmbio, certificação e novos mercados, fortalecendo iniciativas que demonstram que manter as onças vivas também pode gerar benefícios para as comunidades.',
    ],
  },
  {
    titulo: 'Propriedade Amiga da Onça',
    imagem: '/atuacao/propriedade-amiga-da-onca-3.jpeg',
    paragrafos: [
      'O reconhecimento Propriedade Amiga da Onça valoriza produtores rurais que fazem da conservação parte do seu modo de produzir. São propriedades que apoiam a pesquisa científica, adotam boas práticas de manejo, protegem a biodiversidade e contribuem para a conservação da onça-pintada e do Parque Nacional do Iguaçu.',
      'A avaliação é realizada pelo Projeto Onças do Iguaçu em conjunto com os proprietários, reconhecendo diferentes formas de contribuição, como a recuperação de áreas naturais, a agricultura sustentável e familiar, o apoio às pesquisas, a prevenção de conflitos com grandes felinos e a valorização do turismo de natureza. Ao receber a placa Propriedade Amiga da Onça, o produtor passa a integrar uma rede de pessoas que demonstram, na prática, que conservar e produzir podem caminhar juntos.',
    ],
  },
  {
    titulo: 'Rede Trinacional de Coexistência',
    imagem: '/atuacao/rede-nacional.jpg',
    paragrafos: [
      'Criada em 2025 e coordenada inicialmente pelo Projeto Onças do Iguaçu, a Rede Trinacional de Coexistência reúne projetos, instituições e profissionais do Brasil, Argentina e Paraguai para fortalecer ações voltadas à coexistência entre pessoas e grandes felinos.',
      'A Rede promove o intercâmbio de experiências, o desenvolvimento de protocolos conjuntos, capacitações, pesquisas e estratégias integradas de atuação, reconhecendo que os desafios da coexistência são compartilhados pelos três países. Ao conectar iniciativas e estimular o aprendizado conjunto, busca ampliar a efetividade das ações de conservação em toda a região da Tríplice Fronteira.',
      'Com um plano de atuação de cinco anos, a Rede prevê encontros trinacionais, treinamentos, produção de materiais técnicos e intercâmbios entre equipes, utilizando o Centro de Conservação e Coexistência como uma de suas bases de formação. A iniciativa tem como objetivo consolidar-se como uma referência internacional em coexistência entre seres humanos e grandes felinos, com potencial para inspirar outras regiões da América do Sul.',
    ],
  },
  {
    titulo: 'Centro de Conservação e Coexistência (CCC)',
    imagem: '/atuacao/centro-de-conservavao.jpg',
    paragrafos: [
      'Criado em 2025 pelo Projeto Onças do Iguaçu, o Centro de Conservação e Coexistência (CCC) é o primeiro espaço da região dedicado à capacitação em coexistência entre pessoas e grandes felinos. Localizado no Parque Nacional do Iguaçu, o Centro reúne treinamento, demonstração de técnicas e intercâmbio de experiências para fortalecer a conservação da onça-pintada.',
      'O CCC recebe produtores rurais, agentes ambientais, universidades, equipes de projetos de conservação e instituições do Brasil, Argentina e Paraguai, oferecendo capacitações voltadas à prevenção de conflitos, boas práticas de manejo, atendimento a casos de predação, monitoramento de fauna e implementação de medidas preventivas em propriedades rurais.',
      'Mais do que um espaço de treinamento, o Centro funciona como um polo trinacional de inovação e cooperação, fortalecendo a Rede Trinacional de Coexistência e demonstrando, na prática, que é possível proteger rebanhos, conservar as onças e promover uma convivência segura entre pessoas e fauna silvestre.',
    ],
  },
  {
    titulo: 'Ciscando o Futuro',
    imagem: '/atuacao/Ciscando-o-Futuro-2.jpg',
    isLogo: false,
    paragrafos: [
      'O Ciscando o Futuro é uma iniciativa do Projeto Onças do Iguaçu voltada à agricultura familiar, que promove segurança alimentar, geração de renda complementar e coexistência entre pessoas e grandes felinos.',
      'O programa apoia pequenos produtores na implantação de galinheiros protegidos, que garantem o bem-estar das aves e reduzem significativamente o risco de predação por onças, jaguatiricas, graxains, gambás e outros predadores. Durante o dia, as galinhas permanecem em áreas de pastejo; à noite, ficam protegidas em estruturas seguras, conciliando produção e conservação.',
      'Mais do que prevenir conflitos, o Ciscando o Futuro busca transformar as propriedades em modelos de produção sustentável, incentivando também iniciativas como a apicultura, hortas agroecológicas e sistemas agroflorestais, fortalecendo a autonomia das famílias e a valorização da conservação.',
      'A implantação dos galinheiros conta com a parceria do Eco Park Foz, patrocinador da iniciativa, que financia a construção das estruturas e contribui para que a presença da onça esteja associada a oportunidades e benefícios para as comunidades do entorno do Parque Nacional do Iguaçu.',
    ],
  },
  {
    titulo: 'Crocheteiras da Onça',
    imagem: '/atuacao/crocheteiras-da-onca-2.jpeg',
    paragrafos: [
      'As Crocheteiras da Onça são um exemplo de como a conservação pode gerar oportunidades para as comunidades. O programa identifica e fortalece talentos locais, transformando o crochê — uma habilidade já presente entre muitas mulheres da região — em uma fonte de renda associada à conservação da onça-pintada.',
      'Criado pelo Projeto Onças do Iguaçu, o grupo reúne atualmente 18 artesãs de Foz do Iguaçu, Serranópolis do Iguaçu e Matelândia, que produzem amigurumis e outras peças inspiradas na fauna brasileira. O Projeto oferece capacitação, apoio na organização do grupo e faz a ponte entre as crocheteiras e os compradores, ampliando o acesso ao mercado. Um dos princípios da iniciativa é que 100% da renda obtida com as vendas permaneça com as artesãs. O papel do Projeto é apoiar o desenvolvimento do grupo e fortalecer a conexão entre o artesanato e a conservação, mostrando que manter as onças vivas também pode gerar oportunidades para quem vive ao seu redor.',
      'Em 2025, o grupo produziu 49 encomendas, movimentando mais de R$ 104 mil e proporcionando, em média, um aumento de 36% na renda anual das participantes. Mais do que peças em crochê, cada produto leva consigo uma mensagem: a onça agrega valor ao trabalho dessas mulheres, e sua conservação beneficia toda a comunidade.',
    ],
  },
  {
    titulo: 'Jaguatá Porã',
    imagem: '/atuacao/jaguata-pora.jpg',
    paragrafos: [
      'O Jaguatá Porã é uma iniciativa desenvolvida em parceria entre o Projeto Onças do Iguaçu, o Hotel das Cataratas, A Belmond Hotel, e a Parimpacto, que une conservação, geração de renda e valorização da cultura indígena na comunidade Avá-Guarani Tekohá Ocoy.',
      'Por meio de um processo participativo, as mulheres da comunidade co-criaram uma linha de produtos inspirada na onça-pintada, resgatando sua relação ancestral com esse animal, símbolo de território, conhecimento e coexistência. Mais do que desenvolver novos produtos, a iniciativa fortalece a identidade cultural, o protagonismo feminino e cria oportunidades de geração de renda associadas à conservação.',
      'As oficinas foram conduzidas pela artesã Mônica Carvalho, especialista no trabalho com mulheres indígenas, reunindo 25 participantes em um processo construído com respeito aos saberes e à cultura local.',
      'O nome da coleção foi escolhido pelas próprias participantes: Jaguatá Porã, expressão em guarani que significa "juntas caminhamos um belo caminho". O lançamento da linha está previsto para 2026.',
    ],
  },
  {
    titulo: 'Nozes & Onças',
    imagem: '/atuacao/nozes-e-onca.png',
    paragrafos: [
      'O Nozes & Onças mostra que a conservação também pode gerar valor. A iniciativa nasceu da parceria entre o Projeto Onças do Iguaçu e o produtor rural Sílvio Guerini, que decidiu transformar a presença da onça-pintada em um diferencial para sua produção de nozes-pecã.',
      'Ao associar o produto à conservação da espécie, o programa conecta consumidores que valorizam a biodiversidade a produtores comprometidos com a coexistência. Dessa forma, a onça deixa de representar apenas um desafio e passa a agregar valor ao que é produzido na região.',
      'O lançamento da iniciativa reuniu parceiros da gastronomia e do turismo, entre eles o Hotel das Cataratas, A Belmond Hotel, Parimpacto, Le Pain du Chef e Oficina do Sorvete, demonstrando que diferentes setores podem contribuir para fortalecer uma economia baseada na conservação.',
      'O objetivo é ampliar esse modelo para outros produtores e cadeias produtivas, mostrando que conservar a onça-pintada também pode gerar oportunidades, fortalecer a economia local e valorizar quem escolhe produzir em harmonia com a natureza.',
    ],
  },
];

function CopyEmailLink() {
  const [copiado, setCopiado] = useState(false);
  const email = 'projetooncasdoiguacu@gmail.com';

  const handleCopiar = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleCopiar}
      className="inline-flex items-center gap-1.5 font-bold text-onca-laranja-escuro hover:text-onca-preto transition-colors cursor-pointer group"
      title="Clique para copiar"
    >
      {copiado ? 'E-mail copiado!' : email}
      {copiado ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      )}
    </a>
  );
}

export default function EngajamentoAtuacao() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      <section
        id="engajamento"
        className="w-full py-24 bg-white text-onca-preto scroll-mt-20 flex justify-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-onca-laranja text-sm font-bold uppercase tracking-[0.3em]">
              O Lado Humano da Conservação
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto">
              Engajamento
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              O engajamento é um dos pilares do Projeto Onças do Iguaçu. Nossas
              ações aproximam as pessoas da conservação por meio da educação, do
              diálogo e da participação comunitária. Trabalhamos com escolas,
              comunidades, produtores rurais, povos indígenas, visitantes e
              diferentes setores da sociedade para transformar o medo em
              conhecimento, o conhecimento em participação e fortalecer a
              coexistência entre pessoas e onças-pintadas.
            </p>
          </div>

          <div className="space-y-20 pt-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                Conexão com a comunidade
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg max-w-5xl">
                O projeto desenvolve iniciativas voltadas a diferentes públicos,
                levando informação e experiência direta com a temática da
                conservação. O programa{' '}
                <strong className="text-onca-preto">Onça na Escola</strong> atua
                em instituições de ensino com atividades como palestras, teatro
                e exposições, enquanto o{' '}
                <strong className="text-onca-preto">Onça Itinerante</strong>{' '}
                leva essas ações para espaços públicos e eventos, ampliando o
                alcance junto à população.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-3">
                <div
                  className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl shadow-xl group"
                  onClick={() =>
                    setModalData({
                      src: '/atuacao/trilha-da-onca.webp',
                      caption: 'Imersão na natureza durante a Trilha da Onça',
                    })
                  }
                >
                  <Image
                    src="/atuacao/trilha-da-onca.webp"
                    alt="Trilha da Onça"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center italic px-2">
                  Imersão na natureza durante a Trilha da Onça
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                  Experiência no território
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A aproximação com o ambiente natural é promovida por meio da{' '}
                  <strong className="text-onca-preto">Trilha da Onça</strong>,
                  que proporciona vivências no Parque Nacional do Iguaçu,
                  incluindo observação da fauna, acompanhamento de atividades de
                  monitoramento e conversas sobre a importância da conservação.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-12 border-t border-gray-100">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                  Programa Onça na Escola
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    O Programa Onça na Escola é uma iniciativa do Programa de
                    Coexistência do Projeto Onças do Iguaçu, voltada à
                    comunidade escolar da rede pública dos dez municípios
                    lindeiros ao Parque Nacional do Iguaçu.
                  </p>
                  <p>
                    O programa nasceu da necessidade de ampliar o acesso a
                    informações sobre as onças, sua importância para o
                    território e os desafios de sua conservação. Por meio de
                    atividades educativas, aproxima ciência, escola e
                    comunidade, estimulando a reflexão, o vínculo com a fauna e
                    o protagonismo de crianças, jovens e professores.
                  </p>
                  <p>
                    As ações são orientadas por três pilares: Educação Ambiental
                    Crítica, Pedagogia do Afeto e Teoria da Mudança. Juntos,
                    eles estruturam atividades que vão além da transmissão de
                    informações, buscando estimular conhecimentos, sentimentos,
                    atitudes e comportamentos favoráveis à conservação.
                  </p>
                  <p>
                    A proposta é contribuir, no médio e longo prazo, para
                    reduzir a percepção de risco em relação às onças, fortalecer
                    atitudes positivas em relação à fauna e ampliar a
                    participação da comunidade na conservação. Assim, o Onça na
                    Escola busca pavimentar o caminho para um futuro de
                    coexistência entre pessoas e onças no território do Parque
                    Nacional do Iguaçu.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto lg:mx-0 flex flex-col gap-8 lg:sticky lg:top-24">
                <div className="flex flex-col gap-3">
                  <div
                    className="relative w-full aspect-4/3 cursor-zoom-in overflow-hidden rounded-3xl shadow-xl group lg:mt-15"
                    onClick={() =>
                      setModalData({
                        src: '/atuacao/onca-na-escola.webp',
                        caption:
                          'Atividades lúdicas de educação ambiental no programa Onça na Escola',
                      })
                    }
                  >
                    <Image
                      src="/atuacao/onca-na-escola.webp"
                      alt="Onça na Escola"
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center italic px-2">
                    Atividades lúdicas do programa Onça na Escola
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 flex flex-col gap-4 shadow-sm">
                  <h4 className="text-xl font-bold text-onca-preto tracking-tight">
                    Leve nossos projeto até você!
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Tem interesse em receber as atividades do{' '}
                    <strong className="text-onca-preto">Onça na Escola</strong>{' '}
                    ou do{' '}
                    <strong className="text-onca-preto">Onça Itinerante</strong>
                    ?
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Entre em contato conosco através do e-mail:{' '}
                    <br className="sm:hidden" />
                    <CopyEmailLink />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-200 text-onca-preto border-y border-gray-200 flex justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-bold uppercase tracking-tight mb-4 text-onca-preto">
              Iniciativas de Engajamento
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Outras iniciativas reforçam essa conexão de forma contínua,
              levando a mensagem da conservação para os mais diversos ambientes
              e parceiros.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {iniciativasEngajamento.map((iniciativa, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden"
              >
                <div
                  className={`relative w-full aspect-video cursor-zoom-in group overflow-hidden ${
                    iniciativa.isLogo
                      ? 'bg-white border-b border-gray-100'
                      : 'bg-gray-200'
                  }`}
                  onClick={() =>
                    setModalData({
                      src: iniciativa.imagem,
                      caption: iniciativa.titulo,
                    })
                  }
                >
                  <div
                    className={`relative w-full h-full ${iniciativa.isLogo ? 'p-8' : ''}`}
                  >
                    <Image
                      src={iniciativa.imagem}
                      alt={iniciativa.titulo}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`${
                        iniciativa.isLogo ? 'object-contain' : 'object-cover'
                      } transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>
                </div>
                <div className="p-8 flex flex-col grow space-y-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tight text-onca-preto">
                    {iniciativa.titulo}
                  </h4>
                  <div className="text-gray-600 leading-relaxed grow space-y-4">
                    {iniciativa.paragrafos.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-onca-preto text-white relative overflow-hidden flex justify-center">
        <div className="absolute top-0 left-0 w-150 h-150 bg-onca-laranja/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-center space-y-4">
              <div
                className="w-full max-w-150 relative aspect-video cursor-zoom-in overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 group"
                onClick={() =>
                  setModalData({
                    src: '/atuacao/peter-rei-do-role.webp',
                    caption:
                      'Onça-pintada Peter, flagrada pelas estradas do parque.',
                  })
                }
              >
                <Image
                  src="/atuacao/peter-rei-do-role.webp"
                  alt="Onça Peter atravessando a pista"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-gray-400 text-center italic px-4">
                Registros enviados pelo grupo Amigos da Onça auxiliam no
                monitoramento
              </p>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl font-bold uppercase tracking-tight text-onca-laranja mb-8">
                Participação Ativa
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                A conservação só é efetiva quando feita a várias mãos. O projeto
                estimula a participação direta da sociedade, transformando
                cidadãos comuns em aliados da ciência.
              </p>

              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl mt-8 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-3xl">📱</span> Amigos da Onça
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Um grupo que reúne motoristas, guias e profissionais que atuam
                  no Parque Nacional Iguaçu. Eles atuam como os "olhos" do
                  projeto em campo, contribuindo com registros frequentes,
                  vídeos e informações sobre a presença dos animais. Essa troca
                  direta fortalece o monitoramento científico e cria um forte
                  senso de pertencimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
