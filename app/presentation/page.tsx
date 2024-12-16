"use client";

import { useState } from "react";
import { Navigation } from "@/components/presentation/navigation";
import { Slide } from "@/components/presentation/slide";
import { slides } from "@/data/slides";

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Navigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
        />
        
        <Slide {...slides[currentSlide]} />
      </div>
    </main>
  );
}