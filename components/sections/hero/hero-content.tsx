"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { TypingEffect } from "./typing-effect";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          {SITE_CONFIG.name.split(" ")[1]}
        </span>
      </motion.h1>

      <TypingEffect />

      <motion.div 
        className="flex justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button variant="outline" size="icon" asChild>
          <Link href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub Profile</span>
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={SITE_CONFIG.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter Profile</span>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}