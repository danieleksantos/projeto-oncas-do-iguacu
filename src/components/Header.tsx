"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Início", href: "/" },
  { 
    name: "Sobre", 
    href: "/sobre", 
    children: [
      { name: "Quem somos", href: "/sobre/quem-somos" },
      { name: "Equipe", href: "/sobre/equipe" },
      { name: "Parceiros", href: "/sobre/parceiros" },
      { name: "Governança", href: "/sobre/governanca" },
      { name: "Transparência", href: "/sobre/transparencia" },
    ] 
  },
  { 
    name: "Atuação", 
    href: "/atuacao", 
    children: [
      { name: "Pesquisa", href: "/atuacao/pesquisa" },
      { name: "Engajamento", href: "/atuacao/engajamento" },
      { name: "Coexistência", href: "/atuacao/coexistencia" },
      { name: "Educação", href: "/atuacao/educacao" },
      { name: "Comunicação", href: "/atuacao/comunicacao" },
    ] 
  },
  { 
    name: "Fauna do Iguaçu", 
    href: "/fauna", 
    children: [
      { name: "As onças", href: "/fauna/as-oncas" },
      { name: "Outros felinos", href: "/fauna/outros-felinos" },
    ] 
  },
  { 
    name: "Conteúdos", 
    href: "/conteudos", 
    children: [
      { name: "Boletim A Voz da Onça", href: "/conteudos/boletim" },
      { name: "Notícias", href: "/conteudos/noticias" },
      { name: "Materiais para download", href: "/conteudos/downloads" },
      { name: "Artigos científicos", href: "/conteudos/artigos" },
    ] 
  },
  { 
    name: "Apoie", 
    href: "/apoie", 
    children: [
      { name: "Doação", href: "/apoie/doacao" },
      { name: "Estágio", href: "/apoie/estagio" },
      { name: "Voluntariado", href: "/apoie/voluntariado" },
      { name: "Parcerias", href: "/apoie/parcerias" },
    ] 
  },
  { name: "Loja", href: "/loja" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-onca-laranja-escuro shadow-md" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 outline-none focus-visible:ring-2 focus-visible:ring-onca-preto rounded-lg">
            <span className="sr-only">Onças do Iguaçu</span>
            <Image
              src="/logo-laranja.png"
              alt="Logo Onças do Iguaçu"
              width={200} 
              height={50}
              className="h-12 w-auto brightness-0"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-onca-preto outline-none focus-visible:ring-2 focus-visible:ring-onca-preto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex lg:gap-x-6" aria-label="Navegação desktop">
          {navigation.map((item) => (
            <div key={item.name} className="group relative py-2">
              <Link
                href={item.href}
                className="text-[14px] font-bold tracking-tight text-onca-preto uppercase flex items-center gap-1 outline-none transition-all hover:underline decoration-onca-preto decoration-2 underline-offset-8 focus-visible:underline"
                aria-haspopup={item.children ? "true" : "false"}
              >
                {item.name}
                {item.children && (
                  <svg className="w-3.5 h-3.5 fill-current opacity-50" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                )}
              </Link>

              {item.children && (
                <div 
                  className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block group-focus-within:block animate-in fade-in slide-in-from-top-2 duration-200"
                  role="menu"
                >
                  <div className="bg-onca-laranja-escuro rounded-lg shadow-xl overflow-hidden border border-onca-preto/10">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        role="menuitem"
                        className="block px-4 py-3 text-[13px] font-bold text-onca-preto outline-none transition-all hover:underline decoration-onca-preto decoration-1 underline-offset-4 focus:underline border-b border-onca-preto/5 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/apoie/doacao"
            className="rounded-full bg-onca-preto px-6 py-2.5 text-sm font-bold text-white shadow-sm outline-none transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
          >
            DOE AGORA
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-onca-laranja-escuro border-t border-onca-preto/10 px-6 py-8" aria-label="Navegação mobile">
          <div className="flex flex-col gap-y-6">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col">
                <Link
                  href={item.href}
                  className="text-base font-bold text-onca-preto uppercase py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-2 flex flex-col border-l-2 border-onca-preto/10 pl-4 gap-y-3">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="text-[14px] font-semibold text-onca-preto/80"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/apoie/doacao"
              className="mt-4 block rounded-full bg-onca-preto py-4 text-center text-base font-bold text-white uppercase transition-transform active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              DOE AGORA
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}