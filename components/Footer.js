export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full px-6 py-10 mt-auto text-sm border-t border-white/10"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--highlight)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-center md:text-left font-medium text-[color:var(--highlight)]">
          © {currentYear} Nilesh Kumar — All rights reserved.
        </p>

        {/* Right: Links */}
        <nav className="flex gap-6 text-[color:var(--highlight)]">
          <a
            href="mailto:nileshkumarextra@gmail.com"
            className="hover:text-[color:var(--accent)] transition"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/nileshkumar123/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--accent)] transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nileshkumaryadav1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--accent)] transition"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
