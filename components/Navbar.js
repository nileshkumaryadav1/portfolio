"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

export default function UniversalNavbar({ bgColor, textColor }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/works" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div
      className="w-full text-sm px-5 flex justify-between items-center z-50 shadow-sm transition relative"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderBottom: "1px solid var(--secondary)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold tracking-tight"
        style={{ color: textColor }}
      >
        Nilesh<span style={{ color: "var(--accent)" }}>.dev</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-medium hover:text-[color:var(--accent)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? (
            <X size={24} style={{ color: textColor }} />
          ) : (
            <Menu size={24} style={{ color: textColor }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col gap-4 py-4 px-5 bg-black md:hidden shadow-md"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
