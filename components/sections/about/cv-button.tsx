"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export function CVButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex items-center gap-4"
    >
      <Button asChild size="lg" className="group">
        <a 
          href={SITE_CONFIG.resumeUrl} 
          download
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          Download My CV
        </a>
      </Button>
      <span className="text-sm text-muted-foreground">PDF format</span>
    </motion.div>
  );
}