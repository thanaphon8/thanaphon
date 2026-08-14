"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectLightbox from "./ProjectLightbox";
import type { ProjectPreviewImage } from "@/data/projects";

type ProjectPreviewGridProps = {
  images: ProjectPreviewImage[];
  alt: string;
};

function normalize(image: ProjectPreviewImage) {
  return typeof image === "string" ? { src: image, orientation: undefined } : image;
}

export default function ProjectPreviewGrid({ images, alt }: ProjectPreviewGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const normalized = images.map(normalize);

  return (
    <>
      <div className="mt-2 grid grid-cols-2 items-start gap-2 sm:grid-cols-4">
        {normalized.map(({ src, orientation }, index) => (
          <button
            key={src}
            type="button"
            aria-label={`View ${alt} preview ${index + 1} full size`}
            className={`relative overflow-hidden rounded-md border border-black/[.08] dark:border-white/[.145] ${
              orientation === "portrait" ? "aspect-[9/16]" : "aspect-[1920/952]"
            }`}
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
          images={normalized}
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
