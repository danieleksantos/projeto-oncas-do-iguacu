'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Importações cruciais do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Estilos obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    imgPosition: 'center',
  },
  {
    id: 2,
    title: 'Estágio e Voluntariado',
    description:
      'Venha sujar a bota de terra com a gente! Descubra como fazer parte da nossa equipe de voluntários e estagiários.',
    image: '/home/slider-voluntario.jpg',
    cta: 'Saiba Mais',
    href: '/apoie',
    align: 'left',
    imgPosition: 'center',
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
    imgPosition: 'right',
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
    imgPosition: 'center bottom',
  },
];

export default function SliderHome() {
  return (
    <section className="w-full flex justify-center bg-transparent">
      <style>{`
        .swiper-pagination-bullet {
          background: #f6b436;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #f6b436;
          opacity: 1;
          width: 32px;
          border-radius: 8px;
        }
        /* Esconde as setas nativas porque criamos as nossas */
        .swiper-button-next, .swiper-button-prev {
          display: none;
        }
      `}</style>

      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-20 mx-auto relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          className="w-full h-112.5 md:h-150 rounded-4xl md:rounded-[2.5rem] shadow-2xl relative"
        >
          <button className="custom-prev absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 text-onca-laranja w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 hover:scale-125 outline-none cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <ChevronLeft
              className="w-8 h-8 md:w-12 md:h-12"
              strokeWidth={1.5}
            />
          </button>

          <button className="custom-next absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 text-onca-laranja w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 hover:scale-125 outline-none cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <ChevronRight
              className="w-8 h-8 md:w-12 md:h-12"
              strokeWidth={1.5}
            />
          </button>

          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center bg-onca-preto">
                <div className="absolute inset-0 z-0 bg-onca-preto">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: slide.imgPosition }}
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    priority={slide.id === 1}
                  />
                  <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
                </div>

                <div
                  className={`relative z-10 w-full px-14 sm:px-16 md:px-24 flex flex-col items-center text-center max-w-3xl mx-auto md:mx-0 ${
                    slide.align === 'right'
                      ? 'md:ml-auto md:items-end md:text-right'
                      : 'md:mr-auto md:items-start md:text-left'
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-white mb-4 md:mb-6 drop-shadow-md leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-100 md:text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-8 md:mb-10 drop-shadow max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>

                  <Link
                    href={slide.href}
                    className="group/btn inline-flex items-center justify-center gap-2 uppercase tracking-widest rounded-full bg-onca-laranja px-6 md:px-8 py-3 md:py-3.5 text-xs md:text-sm font-bold text-onca-preto shadow-sm outline-none transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                  >
                    {slide.cta}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
