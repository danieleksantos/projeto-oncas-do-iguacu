import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Newspaper } from 'lucide-react';

const destaquesNoticias = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/conteudos/noticias/noticia1.webp',
    category: 'Pesquisa',
    href: '/conteudos/noticias',
  },
  {
    title: 'Duis aute irure dolor in reprehenderit in voluptate velit',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
    image: '/conteudos/noticias/noticia2.webp',
    category: 'Engajamento',
    href: '/conteudos/noticias',
  },
];

export default function DestaquesNoticias() {
  return (
    <section className="w-full py-20 bg-white flex justify-center border-b border-gray-200">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span className="flex items-center justify-center md:justify-start gap-2 text-onca-preto text-sm font-bold uppercase tracking-widest mb-3">
            <Newspaper className="w-4 h-4 text-onca-laranja" /> Na Mídia e no
            Campo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-onca-preto">
            Notícias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {destaquesNoticias.map((noticia, index) => (
            <Link
              key={index}
              href={noticia.href}
              className="group flex flex-col bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-300 hover:shadow-xl transition-all duration-300 hover:border-onca-preto/20 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50"
            >
              <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
                <Image
                  src={noticia.image}
                  alt={noticia.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-onca-preto/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white shadow-md">
                  {noticia.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-onca-preto mb-3 line-clamp-2 group-hover:text-onca-laranja-escuro transition-colors duration-300">
                  {noticia.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {noticia.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex items-center">
                  <span className="group/btn inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-onca-preto transition-all duration-300 hover:scale-105 hover:text-onca-laranja-escuro origin-left">
                    Ler Notícia
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            href="/conteudos/noticias"
            className="inline-flex items-center gap-3 px-8 py-4 bg-onca-preto text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:bg-onca-laranja hover:text-onca-preto hover:shadow-xl focus-visible:ring-4 focus-visible:ring-onca-laranja/50 outline-none group"
          >
            Ver todas as notícias
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
