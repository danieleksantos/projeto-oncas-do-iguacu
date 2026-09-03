import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const avantGarde = localFont({
  src: [
    {
      path: './fonts/ITCAvantGardeStd-Bk.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ITCAvantGardeStd-Md.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ITCAvantGardeStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-avant-garde',
});

const siteUrl = 'https://www.projetooncasdoiguacu.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Projeto Onças do Iguaçu | Conservação no PNI',
    template: '%s | Projeto Onças do Iguaçu',
  },
  description:
    'Conservação das onças-pintadas no Parque Nacional do Iguaçu. Pesquisa, monitoramento, coexistência e educação ambiental.',
  keywords: [
    'Onças do Iguaçu',
    'Conservação',
    'Onça-pintada',
    'Parque Nacional do Iguaçu',
    'Pró-Carnívoros',
    'Fauna brasileira',
    'Biodiversidade',
    'Jaguar',
  ],
  authors: [{ name: 'Projeto Onças do Iguaçu' }],
  manifest: '/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicon.ico' },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/android-chrome-192x192.png' }, // usado como toque de ícone em dispositivos iOS
    ],
  },

  openGraph: {
    title: 'Projeto Onças do Iguaçu | Conservação das Onças-Pintadas',
    description:
      'Atuamos para conservar as onças e os grandes felinos no Parque Nacional do Iguaçu e nos dez municípios lindeiros com ações integradas de pesquisa, coexistência, engajamento e comunicação.',
    url: siteUrl,
    siteName: 'Projeto Onças do Iguaçu',
    images: [
      {
        url: '/logo-laranja.png',
        width: 819,
        height: 370,
        alt: 'Logo Projeto Onças do Iguaçu',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${avantGarde.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
