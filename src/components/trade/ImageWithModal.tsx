"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithModalProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}

export function ImageWithModal({ src, alt, sizes = "100vw", className }: ImageWithModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes={sizes}
        className={`w-full h-auto cursor-pointer ${className ?? ""}`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-[80vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
