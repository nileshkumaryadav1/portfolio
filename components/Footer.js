export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full px-6 py-10 mt-auto text-sm border-t border-white/10"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--accent)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-center md:text-left font-medium">
          © {currentYear} Nilesh Kumar — All rights reserved.
        </p>

        {/* Right: Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-[color:var(--accent)]">
          {[
            { label: "Contact", href: "mailto:nileshkumarextra@gmail.com" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/nileshkumar123/",
            },
            {
              label: "GitHub",
              href: "https://github.com/nileshkumaryadav1/",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@nileshandshubham",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nileshnayan_/",
            },
            {
              label: "HackerRank",
              href: "https://www.hackerrank.com/nileshnayan",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--highlight)] transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
