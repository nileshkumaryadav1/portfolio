"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Camera, Code, Palette } from "lucide-react";

export default function HomeNavbar() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const isActive = (href) => pathname === href;

  const linkClass = (href) =>
    `transition duration-200 px-1 tracking-wide ${
      isActive(href)
        ? "text-[color:var(--accent)] font-semibold underline underline-offset-4"
        : "text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
    }`;

  const dropdownLinkClass = (href) =>
    `flex items-center gap-2 px-4 py-2 text-sm rounded-md transition duration-150 ${
      isActive(href)
        ? "bg-[color:var(--accent)]/10 text-[color:var(--accent)] font-semibold"
        : "text-[color:var(--secondary)] hover:bg-[color:var(--border)]"
    }`;

  return (
    <header
      className="w-full px-6 py-4 flex justify-between items-center font-medium z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="text-lg font-extrabold tracking-tight text-[color:var(--accent)]">
        {/* Nilesh<span className="text-[color:var(--foreground)]">.dev</span> */}
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6 items-center relative text-sm md:text-base">
        <Link href="/projects" className={linkClass("/projects")}>
          <Code size={16} className="inline mr-1 -mt-1" /> Projects
        </Link>

        
{/* Works Dropdown */}
{pathname.startsWith("/works") ? (
  <span className="text-[color:var(--accent)] font-semibold underline underline-offset-4">
    Works
  </span>
) : (
  <div
    className="relative"
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}
  >
    <button
      className={`transition font-medium ${
        showDropdown
          ? "text-[color:var(--accent)] underline underline-offset-4"
          : "text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
      }`}
    >
      Works ▾
    </button>

    {/* Dropdown */}
    <div
      className={`absolute top-full mt-3 z-50 rounded-xl shadow-2xl border border-[color:var(--border)] bg-[color:var(--background)] transform transition-all duration-200
        ${showDropdown ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
        w-[90vw] max-w-[16rem] left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0
      `}
    >
      <ul className="py-2">
        <li>
          <Link href="/works/ui-design" className={dropdownLinkClass("/works/ui-design")}>
            <Palette size={14} /> UI Design
          </Link>
        </li>
        <li>
          <Link href="/works/full-stack" className={dropdownLinkClass("/works/full-stack")}>
            <Code size={14} /> Full Stack
          </Link>
        </li>
        <li>
          <Link href="/works/branding" className={dropdownLinkClass("/works/branding")}>
            🎨 Branding
          </Link>
        </li>
        <li>
          <Link href="/video-production" className={dropdownLinkClass("/video-production")}>
            🎥 Video Prod.
          </Link>
        </li>
      </ul>
    </div>
  </div>
)}

        <Link href="/video-production" className={linkClass("/video-production")}>
          <Camera size={16} className="inline mr-1 -mt-1" /> Videos
        </Link>

      </nav>

      {/* Optional right section */}
      <div />
    </header>
  );
}
