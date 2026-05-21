'use client';

import Image from 'next/image';

// Exportamos o tipo para poder usar nos outros arquivos sem precisar recriar
export type ModalData = {
  src: string;
  caption: string;
};

type ImageModalProps = {
  modalData: ModalData | null;
  onClose: () => void;
};

export default function ImageModal({ modalData, onClose }: ImageModalProps) {
  if (!modalData) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-onca-preto/95 backdrop-blur-lg p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center justify-center w-12 h-12 lg:bg-white/20 bg-onca-laranja hover:bg-onca-laranja lg:text-white text-onca-preto hover:text-onca-preto rounded-full backdrop-blur-md transition-all duration-300 z-50 group shadow-xl cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Fechar visualização"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-transform group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="relative w-full max-w-7xl h-full max-h-[80vh] flex flex-col items-center justify-center cursor-default gap-6 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-white text-lg md:text-2xl font-medium tracking-wide text-center drop-shadow-lg px-8 md:px-24 pt-10 lg:pt-2">
          {modalData.caption}
        </h4>

        <div className="relative w-full grow">
          <Image
            src={modalData.src}
            alt={modalData.caption}
            fill
            sizes="90vw"
            className="object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] select-none"
          />
        </div>
      </div>
    </div>
  );
}
