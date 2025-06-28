// components/Navbar.tsx

import Link from "next/link";

export default function UniversalNavbar({ bgColor, textColor }) {
  return (
    <div
      className="w-full text-sm px-5 flex justify-between items-center z-50 shadow-sm transition"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderBottom: "1px solid var(--secondary)",
      }}
    >
      <Link
        href="/"
        className="text-xl font-bold tracking-tight"
        style={{ color: textColor }}
      >
        Nilesh<span style={{ color: "var(--accent)" }}>.dev</span>
      </Link>

      <div className="flex gap-6 font-medium">
        <Link
          href="/#about"
          className="hover:text-[color:var(--highlight)] transition"
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="hover:text-[color:var(--highlight)] transition"
        >
          Projects
        </Link>
        <Link
          href="/#services"
          className="hover:text-[color:var(--highlight)] transition"
        >
          Services
        </Link>
        <Link
          href="/#contact"
          className="hover:text-[color:var(--highlight)] transition"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
