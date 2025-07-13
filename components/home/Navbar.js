"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HomeNavbar() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const isActive = (href) => pathname === href;

  const linkClass = (href) =>
    `transition px-1 duration-200 ${
      isActive(href)
        ? "text-[color:var(--accent)] font-semibold underline"
        : "text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
    }`;

  const dropdownLinkClass = (href) =>
    `block px-4 py-2 text-sm rounded-md transition duration-150 ${
      isActive(href)
        ? "bg-[color:var(--accent)]/10 text-[color:var(--accent)] font-semibold"
        : "text-[color:var(--secondary)] hover:bg-[color:var(--border)]"
    }`;

  return (
    <header
      className="w-full px-6 py-4 flex justify-between items-center font-medium z-50 border-b"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* Logo or Brand */}
      <div className="text-lg font-bold tracking-tight text-[color:var(--accent)]">
        {/* Nilesh<span className="text-[color:var(--foreground)]">.dev</span> */}
      </div>

      {/* Navigation */}
      <nav className="flex gap-8 items-center relative text-sm md:text-base">
        <Link href="/projects" className={linkClass("/projects")}>
          Projects
        </Link>
        <Link href="/video-production" className={linkClass("/video-production")}>
          Videos
        </Link>

        {/* Works Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button
            className={`transition font-medium ${
              pathname.startsWith("/works")
                ? "text-[color:var(--accent)] underline"
                : "text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
            }`}
          >
            Works ▾
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-0 mt-2 w-52 rounded-lg shadow-lg z-50 transform transition-all duration-200 border border-[color:var(--border)] bg-[color:var(--background)] ${
              showDropdown
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-95 invisible"
            }`}
          >
            <ul className="py-2">
              <li>
                <Link
                  href="/works/ui-design"
                  className={dropdownLinkClass("/works/ui-design")}
                >
                  UI Design
                </Link>
              </li>
              <li>
                <Link
                  href="/works/full-stack"
                  className={dropdownLinkClass("/works/full-stack")}
                >
                  Full Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/works/branding"
                  className={dropdownLinkClass("/works/branding")}
                >
                  Branding
                </Link>
              </li>
              
              <li>
                <Link
                  href="/video-production"
                  className={dropdownLinkClass("/video-production")}
                >
                  Video Production
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Optional Spacer or CTA */}
      <div />
    </header>
  );
}
