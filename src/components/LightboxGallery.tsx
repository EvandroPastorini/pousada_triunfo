"use client";

import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

export function LightboxGallery({ items }: { items: GalleryItem[] }) {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item, index) => (
          <button
            className={`group relative overflow-hidden rounded-[8px] bg-moss-900 text-left shadow-soft outline-none ring-marigold transition focus-visible:ring-2 ${
              index === 0 ? "col-span-2 row-span-2 aspect-[4/5] md:aspect-[8/7]" : "aspect-[4/5]"
            }`}
            key={item.src}
            onClick={() => setActiveImage(item)}
            type="button"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-moss-900/70 via-moss-900/5 to-transparent" />
            <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-sm font-semibold text-white">
              {item.category}
              <ZoomIn aria-hidden className="size-4 shrink-0 opacity-80" />
            </span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-moss-900/90 p-4 backdrop-blur-sm"
          role="dialog"
        >
          <button
            aria-label="Fechar imagem ampliada"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white text-moss-900 shadow-soft transition hover:bg-moss-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marigold"
            onClick={() => setActiveImage(null)}
            type="button"
          >
            <X aria-hidden className="size-5" />
          </button>
          <div className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-[8px] bg-black">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
