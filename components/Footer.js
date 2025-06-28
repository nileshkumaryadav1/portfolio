export default function Footer() {
  return (
    <footer
      className="w-full px-6 py-8 mt-auto text-sm text-[color:var(--highlight)]"
      style={{
        backgroundColor: "var(--foreground)",
        color: "var(--highlight)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-[color:var(--highlight)] font-medium">
            © {new Date().getFullYear()} Nilesh Kumar. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="mailto:nileshkumarextra@gmail.com"
            className="hover:underline hover:text-white transition"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="hover:underline hover:text-white transition"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hover:underline hover:text-white transition"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
