"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/types/slides";

interface SlideLinksProps {
  links?: Link[];
  link?: Link;
}

export function SlideLinks({ links, link }: SlideLinksProps) {
  return (
    <>
      {links && (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => window.open(link.url, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </div>
      )}
      
      {link && (
        <Button
          variant="outline"
          onClick={() => window.open(link.url, '_blank')}
          className="mt-4"
        >
          {link.text}
        </Button>
      )}
    </>
  );
}