"use client";

import { HeroContent } from "./hero-content";
import { HeroButton } from "./hero-button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 text-center">
        <HeroContent />
        <HeroButton />
       
      </div>
    </section>
   
  );
}