"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { CVButton } from "./cv-button";

export function AboutContent() {
  return (
    <motion.div
      {...fadeInUp}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg text-muted-foreground">
        🌆 Hailing from the vibrant city of Bengaluru, 
        often celebrated as India’s Silicon Valley 🌐 Growing up amidst Bengaluru’s energy ⚡,
         I have cultivated a passion for creativity , problem-solving , and fostering meaningful community connections 🤝.
        </p>
        <p className="text-lg text-muted-foreground">
        My aspirations are rooted in gaining transformative professional experiences 
        across diverse industries and domains 🌍. 
        With a focus on real-world applications ,
        
        </p>
        <p className="text-lg text-muted-foreground">
        An advocate for open-source development,
         I find immense value in FOSS initiatives that have not only expanded my network
          but also honed my skills with cutting-edge tools 
           and practices. These experiences have shaped my ability to stay ahead in an ever-evolving industry 🚀
            while contributing to a global community 🌍 that thrives on collaboration  and innovation 💡.
        </p>
      </div>
      <CVButton />
    </motion.div>
  );
}