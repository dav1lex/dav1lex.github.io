"use client";

import { useState, useEffect, useCallback } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ZoomableImage({ src, alt, caption }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <div className="my-4 cursor-zoom-in" onClick={() => setOpen(true)}>
        <img
          src={src}
          alt={alt}
          className="w-full border border-rule bg-block"
        />
        {caption && (
          <p className="font-mono text-[11px] text-muted italic mt-1.5">{caption}</p>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 cursor-zoom-out"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 font-mono text-sm text-muted hover:text-text
                       transition-colors duration-150"
            aria-label="close"
          >
            [ esc ]
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain border border-rule"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted italic">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
