"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="before-after-slider relative aspect-[4/3] rounded-lg overflow-hidden"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchStart={() => (isDragging.current = true)}
        onTouchEnd={() => (isDragging.current = false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After (full width, below) */}
        <Image
          src={afterImage}
          alt={`${title} - After`}
          fill
          className="object-cover"
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <Image
            src={beforeImage}
            alt={`${title} - Before`}
            fill
            className="object-cover"
            style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-charcoal/40" />
              <div className="w-0.5 h-4 bg-charcoal/40" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 bg-charcoal/70 text-white text-xs px-2 py-1 rounded">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-amber/90 text-white text-xs px-2 py-1 rounded">
          After
        </div>
      </div>
      <p className="mt-2 text-sm text-charcoal/60 text-center">{title}</p>
    </div>
  );
}
