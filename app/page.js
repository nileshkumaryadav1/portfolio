import Link from "next/link";
import HomeNavbar from "@/components/home/Navbar";

export default function Home() {
  return (
      <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
        <HomeNavbar />

        {/* Split Hero */}
        <section className="px-6 md:px-20 py-14 flex flex-col md:flex-row items-center gap-12">
          {/* Image or profile graphic */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-white/10 rounded-full border border-[color:var(--border)]">
              <img
                src="/profile_pic.png"
                alt="Nilesh"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>

          {/* Intro text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Hey, I&apos;m{" "}
              <span className="text-[color:var(--accent)]">Nilesh</span>
            </h1>
            <p className="text-lg text-[color:var(--secondary)] leading-relaxed">
              I build fast, scalable full-stack apps with expressive UI, smart
              backend, and developer-first approach. Currently shipping projects
              with React, Next.js, MongoDB & Express.
            </p>
            <Link
              href="/projects"
              className="mt-8 inline-block bg-[color:var(--accent)] text-black px-8 py-3 rounded-full font-medium text-lg hover:scale-105 transition"
            >
              See My Work →
            </Link>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-6 md:px-20 py-16 text-center border-t border-[color:var(--border)]">
          <h2 className="text-xl font-medium uppercase mb-8 text-[color:var(--secondary)]">
            Tech I Love
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-mono text-[color:var(--secondary)]">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Express.js",
              "MongoDB",
              "Framer Motion",
              "Cloudinary",
              "GitHub",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white/5 border border-[color:var(--border)] px-4 py-2 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-6 md:px-20 py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" id="projects">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "College Finder",
                desc: "Predict your college with entrance rank, filter real data, explore placements and cutoffs.",
                href: "/projects/collegefinder",
              },
              {
                title: "Blogging Platform",
                desc: "A modern MERN blog CMS with user dashboard, likes, cloud uploads and SEO routing.",
                href: "/projects/blogging",
              },
              {
                title: "TechFest System",
                desc: "Full technical fest portal for event listing, registration, student dashboards and admin panel.",
                href: "/projects/techfest",
              },
            ].map((proj, i) => (
              <Link
                key={i}
                href={proj.href}
                className="group bg-white/5 p-6 rounded-xl border border-[color:var(--border)] hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[color:var(--accent)]">
                  {proj.title}
                </h3>
                <p className="text-sm text-[color:var(--secondary)]">
                  {proj.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* About or Manifesto */}
        <section className="px-6 md:px-20 py-24 max-w-3xl mx-auto text-center" id="about">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why I Code</h2>
          <p className="text-lg text-[color:var(--secondary)] leading-relaxed">
            I love solving real problems with code. My mission is to craft
            digital tools that make people think “wow, that&apos;s smooth.” I care
            about performance, pixel-perfection, and empowering people through
            tech.
          </p>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-20 py-24 text-center bg-[color:var(--universal-nav-background)]" id="contact">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="mb-6 text-[color:var(--universal-nav-foreground)] text-lg">
            Open to freelance work, collaborations, or internships.
          </p>
          <a
            href="mailto:nileshkumarextra@gmail.com"
            className="inline-block bg-[color:var(--accent)] text-black px-8 py-3 rounded-full font-medium hover:bg-green-500 transition"
          >
            Contact Me
          </a>
        </section>
      </main>
  );
}
