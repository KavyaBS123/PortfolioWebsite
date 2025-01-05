"use client";

import { AboutImage } from "./about-image";
import { AboutContent } from "./about-content";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}