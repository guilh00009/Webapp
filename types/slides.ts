import { LucideIcon } from "lucide-react";

export interface Link {
  text: string;
  url: string;
}

export interface Slide {
  id: number;
  title: string;
  icon: LucideIcon;
  content: string;
  links?: Link[];
  link?: Link;
}