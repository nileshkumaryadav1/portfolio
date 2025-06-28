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
        <h1 className="text-4xl font-bold mb-4">Techfest Website</h1>
        <p className="text-[color:var(--secondary)] text-lg mb-8">
          Official website for college technical fest featuring event listings,
          registration, announcements, and student profiles.
        </p>

        <Link
          href="https://techfest.yourdomain.com"
          target="_blank"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition"
        >
          Visit Live Site
        </Link>
      </section>

      {/* Key Features */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">What It Includes</h2>
        <ul className="grid gap-6 md:grid-cols-2 text-[color:var(--secondary)]">
          <li>🎉 Event posting and registration</li>
          <li>📄 Individual student dashboards</li>
          <li>📢 Live updates and announcements</li>
          <li>💡 Admin panel for event management</li>
          <li>📷 Embedded media and promotions</li>
          <li>🎮 Team Centre representation & branding</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Built With</h2>
        <p className="text-[color:var(--secondary)]">
          Next.js • Tailwind CSS • MongoDB • Express • JWT • Vercel • Framer
          Motion
        </p>
      </section>
    </div>
  );
}
