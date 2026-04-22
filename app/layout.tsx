import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avantGarde = localFont({
  src: [
    {
      path: "./fonts/ITCAvantGardeStd-Bk.woff2", 
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ITCAvantGardeStd-Md.woff2", 
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ITCAvantGardeStd-Bold.woff2", 
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avant-garde",
});

export const metadata: Metadata = {
  title: "Projeto Onças do Iguaçu",
  description: "Projeto de conservação das onças-pintadas realizado no Parque Nacional do Iguaçu.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-br" 
      className={`${avantGarde.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}