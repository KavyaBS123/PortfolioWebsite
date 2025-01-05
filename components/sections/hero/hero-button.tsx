"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function HeroButton() {
  return (
    <motion.div {...fadeInUp}>
      <Button asChild size="lg">
        <Link href="#about" className="group">
          Learn More
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Link>
      </Button>
    </motion.div>
  );
}