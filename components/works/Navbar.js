"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "UI Design", href: "/works/ui-design" },
  { name: "Full Stack", href: "/works/full-stack" },
  { name: "Branding", href: "/works/branding" },
];

export default function PortfolioNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-[var(--border)] bg-[var(--background)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 py-4 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm md:text-base font-medium transition pb-1
              ${
                pathname === item.href
                  ? "text-[var(--highlight)] border-b-2 border-[var(--highlight)]"
                  : "text-[var(--secondary)] hover:text-[var(--foreground)]"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
