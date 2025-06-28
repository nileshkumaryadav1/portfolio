import Navbar from "@/components/projects/blogging/Navbar";
import Link from "next/link";

export default function Blogging() {
  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen"
    >
      <Navbar />

      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Blogging Platform</h1>
        <p className="text-[color:var(--secondary)] text-lg mb-8">
          A full-featured MERN-based blogging platform with authentication,
          image uploads, dashboards, analytics, and rich UI.
        </p>

        <Link
          href="https://yourbloggingplatform.live"
          target="_blank"
          className="inline-block bg-[color:var(--accent)] text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition"
        >
          Visit Live Site
        </Link>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <ul className="grid gap-6 md:grid-cols-2 text-[color:var(--secondary)]">
          <li>📝 Write & publish blogs with Markdown support</li>
          <li>📊 Blog analytics (views, likes, comments)</li>
          <li>🖼️ Cloud image uploads (Cloudinary)</li>
          <li>📱 Responsive dashboard with dark mode</li>
          <li>🔐 Auth, roles & permissions (admin/user)</li>
          <li>📂 Filter by category, tags, or author</li>
        </ul>
      </section>

      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-[color:var(--secondary)]">
          MongoDB • Express • React • Node.js • TailwindCSS • Cloudinary • JWT
        </p>
      </section>
    </div>
  );
}
