import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, ArrowRight, CalendarDays } from 'lucide-react';
import { client } from '@/sanity/lib/client';

async function getNoticias() {
  const query = `*[_type == "noticia"] | order(dataPublicacao desc) {
    _id,
    titulo,
    "slug": slug.current,
    dataPublicacao,
    resumo,
    "imagemCapa": imagemCapa.asset->url,
    "imagemAlt": imagemCapa.alt
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function NoticiasPage() {
  const noticias = await getNoticias();

  return (
    <div className="bg-gray-200 min-h-screen selection:bg-onca-laranja selection:text-onca-preto">
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          <div className="relative z-10 hidden md:block md:w-[60%] min-h-100 shrink-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/conteudos/noticias/hero-noticias.webp"
              alt="Notícias e Atualizações - Projeto Onças do Iguaçu"
              fill
              priority
              className="object-cover object-center z-10"
              sizes="(max-width: 1280px) 60vw, 1500px"
            />
          </div>

          <div className="relative z-20 w-full md:w-[40%] flex flex-col justify-center shrink-0 py-12 md:py-24">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-onca-laranja/10 blur-[100px] rounded-full z-0 mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 mx-auto w-full px-0 md:px-6 lg:pr-12 lg:pl-8">
              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <span className="inline-flex items-center justify-center md:justify-start gap-2 text-onca-laranja text-sm font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">
                  <Newspaper className="w-4 h-4" /> Fique por dentro
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                  Nossas <br />
                  <span className="text-onca-laranja">Notícias</span>
                </h1>
              </div>

              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/conteudos/noticias/hero-noticias.webp"
                  alt="Notícias e Atualizações - Projeto Onças do Iguaçu"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                  Acompanhe os últimos registros, eventos, ações de educação
                  ambiental e avanços na conservação da nossa fauna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="lista-de-noticias"
        className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-20 lg:py-32 scroll-mt-24"
      >
        {noticias.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
            <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-onca-preto">
              Nenhuma notícia publicada ainda.
            </h3>
            <p className="text-gray-500">Volte em breve para novidades!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {noticias.map((noticia: any) => {
              const dataFormatada = new Date(
                noticia.dataPublicacao,
              ).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              });

              return (
                <Link
                  key={noticia._id}
                  href={`/conteudos/noticias/${noticia.slug}`}
                  className="group flex flex-col bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-onca-laranja/30 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
                >
                  <div className="relative w-full aspect-4/3 bg-gray-200 overflow-hidden">
                    <Image
                      src={noticia.imagemCapa || '/noticias/hero-noticias.jpg'}
                      alt={noticia.imagemAlt || noticia.titulo}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold text-onca-preto shadow-sm">
                      <CalendarDays className="w-3.5 h-3.5 text-onca-laranja" />
                      {dataFormatada}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-onca-preto mb-3 line-clamp-3 group-hover:text-onca-laranja-escuro transition-colors duration-300 leading-tight">
                      {noticia.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                      {noticia.resumo}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                      <span className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-all duration-300 hover:text-onca-laranja-escuro">
                        Ler Notícia
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
