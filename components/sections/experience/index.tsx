"use client";

import { motion } from "framer-motion";
import { EXPERIENCE, QUALIFICATIONS } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Experience</h2>
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border-l-2 border-primary pl-4 space-y-2"
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <p>{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Qualifications</h2>
            {QUALIFICATIONS.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border-l-2 border-primary pl-4 space-y-2"
              >
                <h3 className="text-xl font-semibold">{qual.degree}</h3>
                <p className="text-muted-foreground">{qual.institution}</p>
                <p className="text-sm text-muted-foreground">{qual.year}</p>
                <p>{qual.grade}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}