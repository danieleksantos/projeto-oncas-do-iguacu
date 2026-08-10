'use client';

import CounterSobre from '../../sobre/components/CounterSobre';

export default function ImpactoHome() {
  const impactos = [
    {
      prefix: '+',
      end: 9,
      suffix: '',
      texto: (
        <>
          Anos de
          <br />
          atuação
        </>
      ),
    },
    {
      prefix: '+',
      end: 170,
      suffix: ' mil',
      texto: (
        <>
          Hectares
          <br />
          monitorados
        </>
      ),
    },
    {
      prefix: '',
      end: 100,
      suffix: '%',
      texto: (
        <>
          Compromisso com
          <br />a Coexistência
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-onca-laranja py-8 md:py-10 relative z-20 mt-8 md:-mt-10 mx-auto max-w-6xl rounded-[2.5rem] shadow-2xl px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-onca-preto/20 text-center">
        {impactos.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center justify-center py-8 md:py-0 first:pt-0 last:pb-0"
          >
            <span className="text-4xl md:text-5xl font-bold text-onca-preto tracking-tighter mb-2 flex items-baseline">
              <CounterSobre
                end={item.end}
                prefix={item.prefix}
                suffix={item.suffix}
                duration={2000}
                delay={index * 200}
              />
            </span>
            <span className="text-onca-preto font-bold uppercase tracking-widest text-sm">
              {item.texto}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
