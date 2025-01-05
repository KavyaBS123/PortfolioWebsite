"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}