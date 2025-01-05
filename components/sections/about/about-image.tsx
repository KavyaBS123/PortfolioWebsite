"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

export function AboutImage() {
  return (
    <motion.div
      {...fadeInUp}
      className="relative w-full aspect-square max-w-md mx-auto"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-6" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl -rotate-6" />
      
      {/* Dots pattern */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-xl" />
      <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-primary/20 rounded-xl" />
      
      {/* Main image container */}
      <div className="relative rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <div className="relative w-full h-0 pb-[100%]">
        <Image
          src="/assets/me.jpeg"
          alt="Programming workspace"
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        </div>
        
      </div>

      {/* Floating badge */}
      <motion.div 
        className="absolute -right-6 top-10 bg-card px-4 py-2 rounded-lg shadow-lg border border-border"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-sm font-medium">Aspiring Software Developer</span>
      </motion.div>

      {/* Tech stack floating element */}
      {/* <motion.div 
        className="absolute -left-6 bottom-10 bg-card px-4 py-2 rounded-lg shadow-lg border border-border"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      > */}
      
      {/* </motion.div> */}
    </motion.div>
  );
}