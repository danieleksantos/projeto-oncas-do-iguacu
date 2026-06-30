import Link from 'next/link';
import {
  Microscope,
  HeartHandshake,
  Users,
  GraduationCap,
  Megaphone,
  ArrowRight,
} from 'lucide-react';

const areasDeAtuacao = [
  {
    title: 'Pesquisa',
    description:
      'Monitoramento populacional, ecologia e saúde das onças-pintadas e sua base de presas na região.',
    icon: Microscope,
    href: '/atuacao/#pesquisa',
  },
  {
    title: 'Engajamento',
    description:
      'Educação ambiental e ações que transformam as comunidades lindeiras em guardiãs da conservação.',
    icon: Users,
    href: '/atuacao/#engajamento',
  },
  {
    title: 'Coexistência',
    description:
      'Estratégias de manejo e mediação de conflitos para proteger a comunidade rural e os grandes felinos.',
    icon: HeartHandshake,
    href: '/atuacao/#coexistencia',
  },
  {
    title: 'Capacitação',
    description:
      'Treinamento e formação contínua de profissionais, parceiros e voluntários para atuação na conservação.',
    icon: GraduationCap,
    href: '/atuacao/#capacitacao',
  },
  {
    title: 'Comunicação',
    description:
      'Divulgação científica e campanhas estratégicas para combater a desinformação e dar voz à causa.',
    icon: Megaphone,
    href: '/atuacao/#comunicacao',
  },
];

export default function AtuacaoHome() {
  return (
    <section className="w-full bg-gray-200 py-24 lg:py-22 flex justify-center">
      <div className="w-full max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-onca-preto mb-6">
            Como <span className="text-onca-laranja-escuro">Atuamos</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            A conservação da onça-pintada exige um esforço multidisciplinar.
            Nosso trabalho é dividido em cinco frentes integradas para garantir
            resultados efetivos e sustentáveis.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {areasDeAtuacao.map((area, index) => {
            const Icon = area.icon;

            return (
              <Link
                key={index}
                href={area.href}
                className="group flex flex-col justify-between w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-200 hover:border-onca-laranja hover:shadow-2xl transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-onca-laranja/5 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-onca-laranja/10 transition-transform duration-500 pointer-events-none" />

                <div>
                  <div className="w-16 h-16 bg-gray-50 text-onca-laranja-escuro group-hover:bg-onca-laranja group-hover:text-onca-preto rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-onca-preto mb-4 tracking-tight group-hover:text-onca-laranja-escuro transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-medium mb-8">
                    {area.description}
                  </p>
                </div>

                <div className="mt-auto border-t border-gray-100 pt-6 flex items-center">
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto group-hover:text-onca-laranja-escuro transition-colors duration-300 origin-left group-hover:scale-105">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
