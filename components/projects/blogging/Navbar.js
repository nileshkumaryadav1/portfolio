import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className="sticky top-0 z-50 w-full shadow-md px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 bg-white"
      style={{
        color: "var(--blogging-foreground)",
      }}
    >
      {/* Logo and Breadcrumb */}
      <div className="flex items-center gap-4">
        <Link
          href="/projects/blogging"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--blogging-foreground)" }}
        >
          Blogging<span className="text-pink-500">Platform</span>
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
          <span className="text-black dark:text-white font-medium">
            Blogging
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <Link
          href="/projects"
          className="text-sm hover:text-pink-600 transition"
        >
          ← Back to Projects
        </Link>

        <Link
          href="https://github.com/nileshkumaryadav1/blogapp-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-pink-600 transition"
        >
          GitHub
        </Link>

        <Link
          href="https://blogwriting.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-pink-600 text-white px-4 py-1.5 rounded hover:bg-pink-700 transition"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
