"use client";

import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

type Accommodation = {
  group: string;
  name: string;
  image: string;
  images?: string[];
  tag: string;
  description: string;
  features: string[];
};

type AccommodationGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

type Props = {
  accommodations: Accommodation[];
  groups: AccommodationGroup[];
  whatsappUrl: string;
};

export function AccommodationCards({ accommodations, groups, whatsappUrl }: Props) {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => {
    if (!selectedAccommodation) return [];
    return selectedAccommodation.images?.length
      ? selectedAccommodation.images
      : [selectedAccommodation.image];
  }, [selectedAccommodation]);

  const closeCarousel = useCallback(() => {
    setSelectedAccommodation(null);
    setCurrentImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const previousImage = useCallback(() => {
    setCurrentImageIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  useEffect(() => {
    if (!selectedAccommodation || images.length <= 1) return;

    const interval = window.setInterval(nextImage, 4500);
    return () => window.clearInterval(interval);
  }, [images.length, nextImage, selectedAccommodation]);

  useEffect(() => {
    if (!selectedAccommodation) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeCarousel();
      if (event.key === "ArrowRight" && images.length > 1) nextImage();
      if (event.key === "ArrowLeft" && images.length > 1) previousImage();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeCarousel, images.length, nextImage, previousImage, selectedAccommodation]);

  return (
    <>
      <div className="mt-16 space-y-16">
        {groups.map((group) => {
          const groupAccommodations = accommodations.filter((room) => room.group === group.id);

          return (
            <section key={group.id} aria-labelledby={`accommodation-${group.id}`}>
              <div className="mb-7 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">
                  {group.eyebrow}
                </p>
                <h3
                  id={`accommodation-${group.id}`}
                  className="mt-2 font-display text-4xl leading-tight text-moss-900"
                >
                  {group.title}
                </h3>
                <p className="mt-3 leading-7 text-moss-700">{group.description}</p>
              </div>

              <div
                className={`grid gap-7 sm:grid-cols-2 ${
                  groupAccommodations.length > 2 ? "xl:grid-cols-4" : "lg:grid-cols-2"
                }`}
              >
                {groupAccommodations.map((room) => (
                  <article
                    className="group overflow-hidden rounded-[8px] border border-moss-500/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(95,70,48,0.16)]"
                    key={room.name}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedAccommodation(room);
                        setCurrentImageIndex(0);
                      }}
                      className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
                      aria-label={`Ver fotos de ${room.name}`}
                    >
                      <span className="relative block aspect-[4/3] overflow-hidden bg-moss-50">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-moss-900/40 to-transparent" />
                        <span className="absolute bottom-4 right-4 inline-flex size-10 items-center justify-center rounded-full bg-white/95 text-clay shadow-soft backdrop-blur">
                          <Images aria-hidden className="size-5" />
                        </span>
                      </span>

                      <span className="block p-7">
                        <span className="mb-3 inline-flex rounded-full bg-marigold/24 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-clay">
                          {room.tag}
                        </span>
                        <span className="block font-display text-3xl leading-tight text-moss-900">
                          {room.name}
                        </span>
                        <span className="mt-4 block leading-7 text-moss-700">
                          {room.description}
                        </span>
                        <span className="mt-6 block space-y-2">
                          {room.features.map((feature) => (
                            <span
                              className="flex items-start gap-2 text-sm font-semibold text-moss-700"
                              key={feature}
                            >
                              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-clay" />
                              <span>{feature}</span>
                            </span>
                          ))}
                        </span>
                        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-clay">
                          <Images aria-hidden className="size-4" />
                          Ver fotos
                        </span>
                      </span>
                    </button>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {selectedAccommodation && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-moss-900/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${selectedAccommodation.name}`}
          onClick={closeCarousel}
        >
          <div
            className="relative h-[88svh] w-full max-w-5xl overflow-hidden rounded-[8px] bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${selectedAccommodation.name}, foto ${currentImageIndex + 1} de ${images.length}`}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />

            <button
              type="button"
              onClick={closeCarousel}
              className="absolute right-3 top-3 z-20 inline-flex size-11 items-center justify-center rounded-full bg-white/95 text-moss-900 shadow-soft transition hover:bg-white"
              aria-label="Fechar galeria"
            >
              <X aria-hidden className="size-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-3 top-1/2 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-moss-900 shadow-soft transition hover:bg-white sm:left-5"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft aria-hidden className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-moss-900 shadow-soft transition hover:bg-white sm:right-5"
                  aria-label="Próxima foto"
                >
                  <ChevronRight aria-hidden className="size-6" />
                </button>
              </>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-5 pb-5 pt-20 text-white sm:px-7 sm:pb-7">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl">
                    {selectedAccommodation.name}
                  </h3>
                  <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-white/90 sm:block">
                    {selectedAccommodation.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-white/80">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>

              {images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2" aria-label="Selecionar foto">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === currentImageIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Ir para foto ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <a
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
          className="inline-flex rounded-full bg-marigold px-6 py-3 text-sm font-semibold text-moss-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-moss-100"
        >
          Solicitar disponibilidade
        </a>
      </div>
    </>
  );
}
