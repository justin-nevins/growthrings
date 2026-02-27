"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/50 text-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous */}
      <button
        onClick={goPrev}
        className="absolute left-4 text-white/50 hover:text-white p-2 z-10"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      {/* Image */}
      <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-16">
        <Image
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      {/* Next */}
      <button
        onClick={goNext}
        className="absolute right-4 text-white/50 hover:text-white p-2 z-10"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {/* Click backdrop to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
