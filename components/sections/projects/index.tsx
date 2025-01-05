"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { fadeInUp } from "@/lib/animations";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.h2
          className="text-3xl font-bold mb-12"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}