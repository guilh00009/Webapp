"use client";

import { Card } from "@/components/ui/card";
import { SlideLinks } from "@/components/presentation/slide-content";
import { Slide as SlideType } from "@/types/slides";

export function Slide({ icon: Icon, title, content, links, link }: SlideType) {
  return (
    <Card className="p-8 mb-8 transition-all duration-500 transform">
      <div className="flex flex-col items-center text-center">
        <Icon className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-6">
          {content}
        </p>
        <SlideLinks links={links} link={link} />
      </div>
    </Card>
  );
}