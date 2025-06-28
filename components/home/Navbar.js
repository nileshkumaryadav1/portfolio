"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomeNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center font-medium text-gray-800 z-50">
      {/* Logo */}
      {/* <Link href="/" className="text-xl font-bold tracking-tight text-black">
        Nilesh<span className="text-blue-600">.dev</span>
      </Link> */}

      <div></div>

      {/* Navigation */}
      <nav className="flex gap-8 items-center relative">
        <Link href="/projects" className="hover:text-blue-600 transition">
          Projects
        </Link>
        <Link
          href="/video-production"
          className="hover:text-blue-600 transition"
        >
          Videos
        </Link>

        {/* Works dropdown menu */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="hover:text-blue-600 transition">Works ▾</button>
          {showDropdown && (
            <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg border rounded-lg py-2 z-50">
              <li>
                <Link
                  href="/works/ui-design"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  UI Design
                </Link>
              </li>
              <li>
                <Link
                  href="/works/dev-projects"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dev Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/works/branding"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Branding
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div></div>
    </div>
  );
}
