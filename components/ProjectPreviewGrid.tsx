"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectLightbox from "./ProjectLightbox";

type ProjectPreviewGridProps = {
  images: string[];
  alt: string;
};

export default function ProjectPreviewGrid({ images, alt }: ProjectPreviewGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`View ${alt} preview ${index + 1} full size`}
            className="relative aspect-[1920/952] overflow-hidden rounded-md border border-black/[.08] dark:border-white/[.145]"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpenIndex(index);
            }}
          >
            <Image
              src={src}
              alt={`${alt} preview ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <ProjectLightbox
          images={images}
          alt={alt}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNext={() => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length))}
          onPrev={() => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))}
        />
      )}
    </>
  );
}
