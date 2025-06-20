// components/EmblaCarousel.jsx
"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function EmblaCarousel({ items }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1000 })]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {items.map(({ name, icon }, index) => (
          <div
            key={index}
            className="flex-none w-32 flex flex-col items-center justify-center space-y-2 px-4"
          >
            {icon}
            <span className="text-gray-400 text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
