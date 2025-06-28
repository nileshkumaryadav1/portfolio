import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
      {/* Logo and Breadcrumb */}
      <div className="flex items-center gap-4">
        <Link href="/projects/collegefinder" className="text-xl font-bold">
          College<span className="text-blue-600">Finder</span>
        </Link>
        <div className="text-sm text-gray-500 hidden md:block">
          <span className="text-gray-400">/</span>
          <Link href="/" className="hover:underline ml-1">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <span className="mx-1">/</span>
          <span className="text-black font-medium">College Finder</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-700 hover:text-blue-600 transition"
        >
          ← Back to Projects
        </Link>
        <Link
          href="https://github.com/nileshkumaryadav1/collegefinder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 hover:text-blue-600 transition"
        >
          GitHub
        </Link>
        <Link
          href="https://collegefinder.site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
