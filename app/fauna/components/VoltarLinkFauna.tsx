import Link from 'next/link';

export default function VoltarLinkFauna() {
  return (
    <Link
      href="/fauna"
      className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-onca-laranja-escuro hover:underline decoration-onca-laranja-escuro decoration-2 underline-offset-8 focus-visible:underline group"
    >
      <svg
        className="w-5 h-5 transition-transform group-hover:-translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Voltar para Fauna do Iguaçu
    </Link>
  );
}
