import HomeNavbar from "@/components/home/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen"
    >
      <HomeNavbar />

      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-[color:var(--accent)]">Nilesh</span> 👋
        </h1>
        <p className="text-md md:text-lg max-w-2xl mx-auto text-[color:var(--secondary)] leading-relaxed">
          Full-stack developer crafting modern web experiences. Explore my
          projects, watch dev-focused videos, and follow what I&apos;m building
          next.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-block bg-[color:var(--accent)] text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:bg-red-600 transition-transform"
        >
          View Projects
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-[color:var(--secondary)] leading-relaxed text-base">
          I&apos;m a student developer passionate about building real-world
          products. I specialize in React, Next.js, MongoDB, Express, and
          Tailwind. From concept to deployment, I turn ideas into scalable
          solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "College Finder",
              desc: "A smart tool for students to explore colleges and predict admissions.",
              href: "/projects/collegefinder",
            },
            {
              title: "Blogging Platform",
              desc: "A complete MERN blog system with dashboard, stats, and cloud uploads.",
              href: "/projects/blogging",
            },
          ].map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className="group border border-[color:var(--secondary)] p-6 rounded-xl hover:shadow-lg transition hover:border-[color:var(--accent)]"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[color:var(--accent)] transition">
                {project.title}
              </h3>
              <p className="text-sm text-[color:var(--secondary)]">
                {project.desc}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-right mt-6">
          <Link
            href="/projects"
            className="text-sm text-[color:var(--accent)] hover:underline"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="px-6 py-20 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
        <ul className="grid gap-6 md:grid-cols-3 text-[color:var(--secondary)] text-base">
          <li className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition border border-[color:var(--secondary)]">
            <Link href="/projects">🚀 Full-Stack Development</Link>
          </li>
          <li className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition border border-[color:var(--secondary)]">
            🎨 UI/UX Design
          </li>
          <li className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition border border-[color:var(--secondary)]">
            <Link href="/video-production">🎥 Video Production</Link>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 py-24 text-center bg-[color:var(--universal-nav-background)]"
      >
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Let&apos;s Work Together
        </h2>
        <p className="mb-6 text-[color:var(--universal-nav-foreground)] max-w-xl mx-auto">
          Have an idea, project, or collaboration in mind? I&apos;m open to
          freelance work, collabs, or just having a chat about cool tech.
        </p>
        <a
          href="mailto:nileshkumarextra@gmail.com"
          className="inline-block bg-[color:var(--accent)] text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition"
        >
          Message Me
        </a>
      </section>
    </div>
  );
}
