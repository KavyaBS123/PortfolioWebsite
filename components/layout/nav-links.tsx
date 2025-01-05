"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { NavLink } from "./nav-link";

export function NavLinks() {
  return (
    <div className="flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}