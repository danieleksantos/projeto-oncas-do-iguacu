import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Newspaper } from 'lucide-react';
import { client } from '@/sanity/lib/client';

async function getUltimasNoticias() {
  const query = `*[_type == "noticia"] | order(dataPublicacao desc)[0...2] {
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

export default async function DestaquesNoticias() {
  const noticias = await getUltimasNoticias();

  if (!noticias || noticias.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-20 bg-white flex justify-center border-b border-gray-200">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span className="flex items-center justify-center md:justify-start gap-2 text-onca-laranja-escuro text-sm font-bold uppercase tracking-widest mb-3">
            <Newspaper className="w-4 h-4 text-onca-laranja-escuro" /> Na Mídia
            e no Campo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-onca-preto">
            Notícias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {noticias.map((noticia: any) => {
            const dataFormatada = new Date(
              noticia.dataPublicacao,
            ).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            });

            return (
              <Link
                key={noticia._id}
                href={`/conteudos/noticias/${noticia.slug}`}
                className="group flex flex-col bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-300 hover:shadow-xl transition-all duration-300 hover:border-onca-preto/20 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
              >
                <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
                  <Image
                    src={noticia.imagemCapa || '/noticias/hero-noticias.jpg'}
                    alt={noticia.imagemAlt || noticia.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-onca-preto/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white shadow-md">
                    {dataFormatada}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-onca-preto mb-3 line-clamp-2 group-hover:text-onca-laranja-escuro transition-colors duration-300">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {noticia.resumo}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-200 flex items-center">
                    <span className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-all duration-300 hover:scale-105 hover:text-onca-laranja-escuro origin-left">
                      Ler Notícia
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            href="/conteudos/noticias"
            className="inline-flex items-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group"
          >
            Ver todas as notícias
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
