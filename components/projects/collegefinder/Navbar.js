import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className="sticky top-0 z-50 w-full shadow-md px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Logo and Breadcrumb */}
      <div className="flex items-center gap-4">
        <Link
          href="/projects/collegefinder"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          College
          <span style={{ color: "var(--highlight-collegefinder)" }}>Finder</span>
        </Link>

        <div className="text-sm text-gray-400 hidden md:block">
          <span>/</span>
          <Link href="/" className="hover:underline ml-1">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <span className="mx-1">/</span>
          <span className="text-white font-medium">College Finder</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <Link
          href="/projects"
          className="text-sm hover:text-[var(--highlight-collegefinder)] transition"
        >
          ← Back to Projects
        </Link>

        <Link
          href="https://github.com/nileshkumaryadav1/collegefinder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-[var(--highlight-collegefinder)] transition"
        >
          GitHub
        </Link>

        <Link
          href="https://collegefinder.site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-1.5 rounded transition bg-[color:var(--highlight-collegefinder)] hover:bg-[color:var(--highlight-blogwriting)]"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
