import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full shadow-md px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2"
      style={{
        backgroundColor: "var(--techfest-background)",
        color: "var(--techfest-foreground)",
      }}
    >
      {/* Logo + Breadcrumb */}
      <div className="flex items-center gap-4">
        <Link
          href="/projects/techfest"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--techfest-foreground)" }}
        >
          Tech<span className="text-yellow-500">Fest</span>
        </Link>

        {/* Breadcrumb Trail */}
        <div className="text-sm text-[color:var(--techfest-secondary)] hidden md:block">
          <span>/</span>
          <Link href="/" className="ml-1 hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <span className="mx-1">/</span>
          <span className="font-medium text-[color:var(--techfest-foreground)]">
            Techfest
          </span>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex gap-4 items-center">
        <Link
          href="/projects"
          className="text-sm hover:text-yellow-400 transition"
        >
          ← Back to Projects
        </Link>

        <Link
          href="https://github.com/nileshkumaryadav1/techfest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-yellow-400 transition"
        >
          GitHub
        </Link>

        <Link
          href="https://kectechfest.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-yellow-500 text-black px-4 py-1.5 rounded hover:bg-yellow-600 transition font-medium shadow"
        >
          Live Demo
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
