"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say Hi, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/JSuhas123" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/j-suhas-/" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:suhasjanardhan10@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}