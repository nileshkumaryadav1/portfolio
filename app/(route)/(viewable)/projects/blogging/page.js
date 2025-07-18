import Navbar from "@/components/projects/blogging/Navbar";
import Link from "next/link";

export default function Blogging() {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
          Powerful{" "}
          <span style={{ color: "var(--highlight-blogwriting)" }}>Blogging Platform</span>
        </h1>
        <p
          className="text-lg md:text-xl mb-8"
          style={{ color: "var(--secondary)" }}
        >
          A feature-rich MERN blogging app with Markdown support, role-based access,
          analytics, image uploads, and a beautiful UI.
        </p>

        <Link
          href="https://blogwriting.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full font-medium text-lg transition shadow-md"
          style={{
            backgroundColor: "var(--highlight-blogwriting)",
            color: "var(--foreground)",
          }}
        >
          Visit Live Site
        </Link>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          ✨ Key Features
        </h2>
        <ul
          className="grid gap-6 md:grid-cols-2 text-base leading-relaxed"
          style={{ color: "var(--secondary)" }}
        >
          <li>📝 Write & publish blogs with Markdown</li>
          <li>📊 Analytics: views, likes, comments</li>
          <li>🖼️ Image uploads via Cloudinary</li>
          <li>🌙 Responsive dashboard with dark mode</li>
          <li>🔐 JWT-based role authentication</li>
          <li>🔎 Filter by category, tags, or author</li>
        </ul>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 pb-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">🛠 Tech Stack</h2>
        <p className="text-lg" style={{ color: "var(--secondary)" }}>
          MongoDB • Express • React • Node.js • Tailwind CSS • Cloudinary • JWT Auth
        </p>
      </section>
    </div>
  );
}
