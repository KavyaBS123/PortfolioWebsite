"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-center mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}