'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Mail, Copy, Check } from 'lucide-react';

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

export default function ContatoPage() {
  const whatsappUrl =
    'https://wa.me/5545998097698?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20o%20Projeto%20On%C3%A7as%20do%20Igua%C3%A7u.';

  const emailAddress = 'projetooncasdoiguacu@gmail.com';
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const socialLinks = [
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
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar o e-mail: ', err);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen selection:bg-onca-laranja selection:text-onca-preto">
      <section className="relative bg-onca-preto w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative">
          <div className="relative z-10 hidden md:block md:w-[60%] min-h-100 shrink-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-onca-preto to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-onca-preto via-onca-preto/90 to-transparent z-20 pointer-events-none"></div>

            <Image
              src="/contato/hero-contato.png"
              alt="Contato - Projeto Onças do Iguaçu"
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
                  <MessageCircle className="w-4 h-4" /> Fale Conosco
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight lg:leading-[0.9] mb-2 md:mb-6 drop-shadow-lg">
                  Você viu uma <br />
                  <span className="text-onca-laranja">Onça?</span>
                </h1>
              </div>

              <div className="relative w-full h-[45vh] md:hidden my-8">
                <Image
                  src="/contato/hero-contato.png"
                  alt="Contato - Projeto Onças do Iguaçu"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="max-w-xl text-center md:text-left mx-auto md:mx-0 px-6 md:px-0">
                <p className="text-white text-2xl font-bold mb-3">Comunique!</p>
                <p className="text-gray-300 text-lg drop-shadow-md font-medium">
                  Sua informação é muito importante e nos ajuda a monitorar e
                  proteger as onças-pintadas e a biodiversidade do Parque
                  Nacional do Iguaçu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32"
        id="nossos-canais"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-onca-preto mb-2">
                Nossos Canais
              </h2>
              <p className="text-gray-600 font-medium">
                Escolha a melhor forma para falar com a nossa equipe.
                Retornaremos o mais breve possível.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row items-start text-left bg-gray-200 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200 hover:border-onca-laranja/50 hover:shadow-xl transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors pointer-events-none" />
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="flex flex-col flex-1 w-full relative z-10">
                  <h3 className="text-xl font-bold text-onca-preto mb-2">
                    WhatsApp{' '}
                    <span className="text-gray-500 text-sm font-medium ml-1">
                      (45) 99809-7698
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Envie uma mensagem direta ou nos chame para informar
                    avistamentos na região do parque.
                  </p>
                  <span className="inline-flex items-center justify-start gap-2 mt-auto text-green-600 font-bold tracking-widest text-sm transition-colors">
                    Clique aqui para falar conosco
                  </span>
                </div>
              </Link>

              <button
                onClick={handleCopyEmail}
                className={`group flex flex-col sm:flex-row items-start text-left w-full  bg-gray-200 p-6 md:p-8 rounded-3xl shadow-sm border transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja/50 relative overflow-hidden ${
                  isEmailCopied
                    ? 'border-green-500 bg-green-50/30 shadow-lg'
                    : 'border-gray-200 hover:border-onca-laranja/50 hover:shadow-xl'
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-colors ${isEmailCopied ? 'bg-green-500/10' : 'bg-onca-laranja/5 group-hover:bg-onca-laranja/10'}`}
                />

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shrink-0 transition-all duration-500 ${isEmailCopied ? 'bg-green-100 text-green-600 scale-110' : 'bg-orange-100 text-onca-laranja-escuro group-hover:scale-110'}`}
                >
                  {isEmailCopied ? (
                    <Check className="w-8 h-8" />
                  ) : (
                    <Mail className="w-8 h-8" />
                  )}
                </div>

                <div className="flex flex-col flex-1 w-full relative z-10 cursor-pointer">
                  <h3 className="text-xl font-bold mb-2 text-onca-preto">
                    E-mail Institucional
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Para dúvidas gerais, convites, estágios, parcerias ou
                    assuntos institucionais.
                  </p>

                  <span
                    className={`font-bold tracking-wider text-sm break-normal mb-2 transition-colors ${isEmailCopied ? 'text-onca-preto' : 'text-onca-laranja-escuro'}`}
                  >
                    projetooncasdoiguacu@gmail.com
                  </span>

                  <span
                    className={`inline-flex items-center justify-start gap-2 mt-auto font-bold tracking-widest text-sm transition-colors ${isEmailCopied ? 'text-onca-preto' : 'text-onca-laranja-escuro text-[12px]'}`}
                  >
                    {isEmailCopied ? (
                      <>
                        E-mail copiado! <Check className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Clique aqui para copiar <Copy className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-onca-preto text-white rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-onca-laranja/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-onca-laranja mb-4">
                Redes Sociais
              </h2>
              <p className="text-gray-300 font-medium mb-10 leading-relaxed">
                Acompanhe nosso trabalho diário, veja registros de onças e da
                fauna local e conheça os bastidores da conservação.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.Icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-onca-laranja transition-all duration-300 group outline-none focus-visible:ring-4 focus-visible:ring-onca-laranja"
                    >
                      <div className="bg-white/10 text-onca-laranja sm:text-white sm:group-hover:bg-onca-laranja/10 sm:group-hover:text-onca-laranja p-3 rounded-xl transition-colors flex items-center justify-center shrink-0">
                        <Icon />
                      </div>
                      <span className="font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
