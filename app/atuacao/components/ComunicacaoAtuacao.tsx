'use client';

import Link from 'next/link';

export default function ComunicacaoAtuacao() {
  return (
    <section
      id="comunicacao"
      className="w-full py-24 bg-gray-50 text-onca-preto scroll-mt-20 border-t border-gray-200 flex justify-center"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-onca-laranja-escuro text-sm font-bold uppercase tracking-[0.3em]">
            Conexão e Emoção
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-onca-preto">
            Comunicação
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            A comunicação do Projeto Onças do Iguaçu é orientada pela construção
            de conexão emocional entre as pessoas e as onças, buscando
            transformar percepções e aproximar a sociedade da conservação.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                Estratégia
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                A abordagem prioriza a linguagem acessível e a narrativa
                sensível, reduzindo barreiras entre ciência e público. Em vez de
                uma comunicação técnica, o projeto compartilha experiências de
                campo, histórias e registros que despertam interesse e
                identificação.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-onca-laranja pl-4">
                Objetivo
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Essa estratégia busca substituir o medo pelo encantamento,
                ampliar o entendimento sobre a importância da espécie e
                fortalecer o apoio às ações de conservação.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-4">
            <Link
              href="https://www.instagram.com/oncasdoiguacu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-5 rounded-3xl lg:bg-white bg-onca-laranja shadow-sm border border-gray-100 hover:border-onca-laranja hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#E1306C] group-hover:text-white transition-colors duration-300 lg:text-onca-preto text-[#E1306C]">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.956a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700 font-medium">
                  Siga no Instagram
                </span>
                <span className="text-lg font-bold text-onca-preto group-hover:text-onca-laranja-escuro transition-colors">
                  @oncasdoiguacu
                </span>
              </div>
            </Link>

            <Link
              href="https://www.facebook.com/oncasdoiguacu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-5 rounded-3xl lg:bg-white bg-onca-laranja shadow-sm border border-gray-100 hover:border-onca-laranja hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-300 lg:text-onca-preto text-[#1877F2]">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700 font-medium">
                  Acompanhe no Facebook
                </span>
                <span className="text-lg font-bold text-onca-preto group-hover:text-onca-laranja-escuro transition-colors">
                  /oncasdoiguacu
                </span>
              </div>
            </Link>

            <Link
              href="https://www.youtube.com/@oncasdoiguacu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-5 rounded-3xl lg:bg-white bg-onca-laranja shadow-sm border border-gray-100 hover:border-onca-laranja hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF0000] group-hover:text-white transition-colors duration-300 lg:text-onca-preto text-[#FF0000]">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700 font-medium">
                  Inscreva-se no YouTube
                </span>
                <span className="text-lg font-bold text-onca-preto group-hover:text-onca-laranja-escuro transition-colors">
                  @oncasdoiguacu
                </span>
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/company/projetooncasdoiguacu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-5 rounded-3xl lg:bg-white bg-onca-laranja shadow-sm border border-gray-100 hover:border-onca-laranja hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300 lg:text-onca-preto text-[#0A66C2]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700 font-medium">
                  Conecte-se no LinkedIn
                </span>
                <span className="text-lg font-bold text-onca-preto group-hover:text-onca-laranja-escuro transition-colors">
                  /projetooncasdoiguacu
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
