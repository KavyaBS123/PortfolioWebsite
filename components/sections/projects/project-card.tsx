"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href={project.github} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button asChild>
            <Link href={project.demo} target="_blank">
              View Demo
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}