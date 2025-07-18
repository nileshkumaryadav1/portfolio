import Navbar from "@/components/projects/techfest/Navbar";
import Link from "next/link";

export default function Techfest() {
  return (
    <div
      style={{
        backgroundColor: "var(--techfest-background)",
        color: "var(--techfest-foreground)",
      }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Techfest Website
        </h1>
        <p className="text-lg text-[color:var(--secondary)] mb-8">
          Official website for our college technical fest featuring event listings,
          student registration, announcements, and profile dashboards.
        </p>
        <Link
          href="https://kectechfest.vercel.app"
          target="_blank"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          Visit Live Site
        </Link>
      </section>

      {/* Key Features */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[color:var(--foreground)]">
          🚀 What It Includes
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 text-[color:var(--secondary)] text-base leading-relaxed list-disc list-inside">
          <li>🎉 Event posting and real-time registration</li>
          <li>👤 Personalized student dashboards</li>
          <li>📢 Instant announcements & updates</li>
          <li>🛠️ Admin panel with full event control</li>
          <li>📷 Embedded media galleries and reels</li>
          <li>🎮 Team Centre representation & branding</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[color:var(--foreground)]">
          🧠 Built With
        </h2>
        <p className="text-[color:var(--secondary)] text-base">
          Next.js • Tailwind CSS • MongoDB • Express • JWT • Vercel • Framer Motion
        </p>
      </section>
    </div>
  );
}
