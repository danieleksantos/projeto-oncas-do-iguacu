'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, GraduationCap, Binoculars, ArrowUpRight } from 'lucide-react';
import ImageModal, { ModalData } from '@/src/components/ImageModal';

export default function EstagioVoluntariadoApoie() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <section
      id="estagioEvoluntariado"
      className="w-full py-20 lg:py-32 bg-gray-50 scroll-mt-10 relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-4/3 lg:aspect-square flex items-center justify-center">
            <div className="absolute top-10 -left-10 w-64 h-64 bg-onca-laranja/10 rounded-full blur-3xl z-0 pointer-events-none" />

            <div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl z-10 group cursor-zoom-in border-4 border-onca-laranja"
              onClick={() =>
                setModalData({
                  src: '/apoie/voluntariado.webp',
                  caption: 'Voluntários e estagiários em atividade de campo.',
                })
              }
            >
              <Image
                src="/apoie/voluntariado.webp"
                alt="Voluntários e estagiários do projeto"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 bg-gray-200"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-200 -z-10">
                [Foto Voluntariado/Estágio]
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-[0.3em]">
                <Users className="w-5 h-5" /> Junte-se à Equipe
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-onca-preto leading-tight">
                Estágio e <br />
                <span className="text-onca-laranja">Voluntariado</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                O Projeto Onças do Iguaçu oferece oportunidades de estágio
                obrigatório e voluntariado para estudantes e profissionais de
                áreas relacionadas à conservação, pesquisa e gestão ambiental,
                proporcionando vivência prática nas ações desenvolvidas no
                Parque Nacional do Iguaçu e seu entorno.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:border-onca-laranja/30 transition-colors">
                <div className="flex items-center gap-3 text-onca-preto font-bold uppercase tracking-widest text-sm mb-1">
                  <Binoculars className="w-5 h-5 text-onca-laranja" />
                  Atividades
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monitoramento de fauna, apoio em campo, organização e análise
                  de dados, ações de engajamento comunitário e educação
                  ambiental.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:border-onca-laranja/30 transition-colors">
                <div className="flex items-center gap-3 text-onca-preto font-bold uppercase tracking-widest text-sm mb-1">
                  <GraduationCap className="w-5 h-5 text-onca-laranja" />
                  Público-Alvo
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Estudantes de graduação, pós-graduação, cursos técnicos e
                  profissionais de Ciências Biológicas, Gestão Ambiental, Med.
                  Veterinária e afins.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-2 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">
                As vagas são abertas periodicamente e divulgadas pelos canais
                oficiais do projeto, com critérios e requisitos específicos para
                cada ciclo.
              </p>

              <Link
                href="https://www.linkedin.com/company/projetooncasdoiguacu/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group w-fit"
              >
                Acompanhar vagas
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ImageModal modalData={modalData} onClose={() => setModalData(null)} />
    </section>
  );
}
