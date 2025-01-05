"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLinks } from "./nav-links";
import { navAnimation } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      {...navAnimation}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {SITE_CONFIG.name.split(" ").map(n => n[0]).join("")}
        </Link>
        <div className="flex items-center gap-6">
          <NavLinks />
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}