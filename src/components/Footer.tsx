import Image from 'next/image';
import Link from 'next/link';

const Icons = {
  Instagram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Youtube: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  ),
  Linkedin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

const footerNavigation = {
  acessoRapido: [
    { name: 'Início', href: '/' },
    { name: 'Contato', href: '/contato' },
    { name: 'Produtos', href: '/apoie/produtos' },
    { name: 'As onças', href: '/oncas' },
  ],
  projeto: [
    { name: 'Quem somos', href: '/sobre/quem-somos' },
    { name: 'Equipe', href: '/sobre/equipe' },
    { name: 'Parceiros', href: '/sobre/parceiros' },
    { name: 'Transparência', href: '/sobre/transparencia' },
  ],
  atuacao: [
    { name: 'Pesquisa', href: '/atuacao/pesquisa' },
    { name: 'Engajamento', href: '/atuacao/engajamento' },
    { name: 'Coexistência', href: '/atuacao/coexistencia' },
    { name: 'Comunicação', href: '/conteudos/boletim' },
  ],
  ajude: [
    { name: 'Doação', href: '/apoie/#doacao' },
    { name: 'Estágio', href: '/apoie/#estagioEvoluntariado' },
    { name: 'Voluntariado', href: '/apoie/#estagioEvoluntariado' },
    { name: 'Parcerias', href: '/apoie/#parcerias' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/oncasdoiguacu',
      Icon: Icons.Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/oncasdoiguacu',
      Icon: Icons.Facebook,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@oncasdoiguacu',
      Icon: Icons.Youtube,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/projetooncasdoiguacu/',
      Icon: Icons.Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-onca-preto text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col items-center lg:items-start space-y-8 lg:max-w-xs">
            <Image
              src="/logo-laranja.png"
              alt="Logo Onças do Iguaçu"
              width={180}
              height={45}
              className="brightness-0 invert"
            />
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left">
              Conservação da onça-pintada como espécie chave para a
              biodiversidade do Parque Nacional do Iguaçu.
            </p>
            <div className="flex justify-center lg:justify-start gap-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-onca-laranja hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.Icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-x-16">
            <div className="text-left">
              <h3 className="text-sm font-bold leading-6 text-onca-laranja uppercase tracking-wider">
                Acesso rápido
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.acessoRapido.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-sm font-bold leading-6 text-onca-laranja uppercase tracking-wider">
                O Projeto
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.projeto.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-sm font-bold leading-6 text-onca-laranja uppercase tracking-wider">
                Atuação
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.atuacao.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-sm font-bold leading-6 text-onca-laranja uppercase tracking-wider">
                Como Ajudar
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.ajude.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Projeto Onças do Iguaçu. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://danieleksantos.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-gray-400 uppercase tracking-widest font-bold hover:text-onca-laranja transition-colors"
            >
              desenvolvido por Daniele K. Santos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
