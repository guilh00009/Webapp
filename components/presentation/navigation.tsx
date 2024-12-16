"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export function Navigation({ currentSlide, totalSlides, onPrevSlide, onNextSlide }: NavigationProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Button variant="ghost">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} de {totalSlides}
          </span>
          <Progress value={progress} className="w-40" />
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={onPrevSlide}
          disabled={currentSlide === 0}
          variant="outline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Anterior
        </Button>
        <Button
          onClick={onNextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          Próximo
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}