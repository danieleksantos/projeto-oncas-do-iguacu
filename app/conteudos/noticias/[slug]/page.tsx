import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import VoltarLinkNoticias from '../components/VoltarLinkNoticias';
import { createImageUrlBuilder } from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

const myPortableTextComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-10 w-full">
          <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Imagem da notícia'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          {value.legenda && (
            <figcaption className="text-xs text-gray-500 mt-3 text-center sm:text-left">
              {value.legenda}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

async function getNoticia(slug: string) {
  const query = `*[_type == "noticia" && slug.current == $slug][0] {
    titulo,
    resumo,
    dataPublicacao,
    "imagemCapa": imagemCapa.asset->url,
    "imagemAlt": imagemCapa.alt,
    "imagemLegenda": imagemCapa.legenda,
    conteudo
  }`;
  return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
}

export default async function NoticiaInternaPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const noticia = await getNoticia(params.slug);

  if (!noticia) {
    notFound();
  }

  const data = new Date(noticia.dataPublicacao);
  const dataFormatada = data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const horaFormatada = data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <article className="bg-white min-h-screen pb-10 selection:bg-onca-laranja selection:text-onca-preto">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12 md:pt-16">
        <VoltarLinkNoticias />

        <header className="mt-8 md:mt-20">
          <h1 className="text-onca-preto text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            {noticia.titulo}
          </h1>

          {noticia.resumo && (
            <p className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed mb-6">
              {noticia.resumo}
            </p>
          )}

          <div className="py-4 border-y border-gray-200 mt-6">
            <p className="text-sm font-bold text-gray-900 mb-1">
              Por Projeto Onças do Iguaçu
            </p>
            <p className="text-xs text-gray-500">
              Publicado em {dataFormatada} às {horaFormatada}
            </p>
          </div>
        </header>

        {noticia.imagemCapa && (
          <figure className="mb-10 w-full">
            <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={noticia.imagemCapa}
                alt={noticia.imagemAlt || noticia.titulo}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            {noticia.imagemLegenda && (
              <figcaption className="text-xs text-gray-500 mt-3 text-center sm:text-left">
                {noticia.imagemLegenda}
              </figcaption>
            )}
          </figure>
        )}

        <div
          className="prose prose-lg prose-gray max-w-none wrap-break-word 
          prose-headings:text-onca-preto prose-headings:font-bold
          prose-p:text-gray-800 prose-p:leading-relaxed
          prose-strong:text-onca-preto prose-strong:font-bold
          prose-a:text-onca-laranja-escuro hover:prose-a:text-onca-preto
          prose-img:rounded-xl prose-img:shadow-sm mx-auto mb-12 md:mb-20"
        >
          {noticia.conteudo ? (
            <PortableText
              value={noticia.conteudo}
              components={myPortableTextComponents}
            />
          ) : (
            <p>O conteúdo desta notícia está sendo preparado.</p>
          )}
        </div>
        <VoltarLinkNoticias />
      </div>
    </article>
  );
}
