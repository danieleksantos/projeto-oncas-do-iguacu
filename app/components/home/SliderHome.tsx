'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Você viu uma onça?',
    description:
      'Sua informação é fundamental para o nosso monitoramento. Comunique avistamentos na região do Parque Nacional do Iguaçu.',
    image: '/home/slider-onca.webp',
    cta: 'Comunique Aqui',
    href: '/contato',
    align: 'right',
  },
  {
    id: 2,
    title: 'Estágio e Voluntariado',
    description:
      'Venha sujar a bota de terra com a gente! Descubra como fazer parte da nossa equipe de voluntários e estagiários.',
    image: '/home/slider-voluntario.jpg',
    cta: 'Saiba Mais',
    href: '/envolva-se',
    align: 'left',
  },
  {
    id: 3,
    title: 'Nossos Conteúdos',
    description:
      'Acesse artigos, cartilhas, boletins informativos e fique por dentro de tudo o que acontece no universo da conservação.',
    image: '/home/slider-conteudos.jpg',
    cta: 'Acessar Materiais',
    href: '/conteudos',
    align: 'left',
  },
  {
    id: 4,
    title: 'Apoie a Conservação',
    description:
      'Ajude a manter o maior felino das Américas seguro na Mata Atlântica. Sua doação faz a diferença em campo.',
    image: '/home/slider-apoie.png',
    cta: 'Apoie o Projeto',
    href: '/apoie',
    align: 'right',
  },
];

export default function SliderHome() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  return (
    <section
      className="w-full flex justify-center bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full max-w-7xl px-6 lg:px-8 py-12 md:py-20 mx-auto">
        <div className="relative w-full h-125 lg:h-150 rounded-[2.5rem] overflow-hidden shadow-2xl group">
          <div
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative min-w-full h-full flex items-center shrink-0"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-onca-preto/50" />
                </div>

                <div
                  className={`relative z-10 w-full px-8 md:px-16 lg:px-24 flex flex-col max-w-3xl ${
                    slide.align === 'right'
                      ? 'ml-auto items-end text-right'
                      : 'mr-auto items-start text-left'
                  }`}
                >
                  <h3 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-white mb-6 drop-shadow-md leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-200 text-lg md:text-xl font-medium mb-10 drop-shadow max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-3 bg-onca-laranja text-onca-preto px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-onca-preto focus:ring-4 focus:ring-onca-laranja/50 outline-none"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-onca-laranja text-white hover:text-onca-preto w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none cursor-pointer"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-onca-laranja text-white hover:text-onca-preto w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none cursor-pointer"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full outline-none focus:ring-2 focus:ring-white cursor-pointer ${
                  current === index
                    ? 'w-10 h-2.5 bg-onca-laranja'
                    : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
