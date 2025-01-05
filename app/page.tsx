"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-b from-background to-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </motion.main>
  );
}