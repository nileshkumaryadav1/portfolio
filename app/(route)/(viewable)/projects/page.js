"use client";

import HomeNavbar from "@/components/home/Navbar";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "CollegeFinder",
      href: "/projects/collegefinder",
      desc: "Smart admission predictor and explorer for Indian colleges.",
      tag: "Flagship, NextJS",
    },
    {
      title: "Techfest Website",
      href: "/projects/techfest",
      desc: "Official website for a college technical fest, with event registration and schedules.",
      tag: "Events, NextJS",
    },
    {
      title: "Blogging Platform",
      href: "/projects/blogging",
      desc: "A full-featured MERN-based platform for tech and personal blogs.",
      tag: "MERN",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen w-full"
    >
      <HomeNavbar />

      {/* Hero Section */}
      <section className="px-6 py-24 text-center bg-[color:var(--background)] text-[color:var(--foreground)]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Explore My <span className="text-[color:var(--accent)]">Projects</span>
        </h1>
        <p className="text-md md:text-lg text-[color:var(--secondary)] max-w-2xl mx-auto">
          Showcasing my most impactful and technically challenging work — crafted with real-world use cases, clean code, and a dash of creativity.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              href={project.href}
              key={i}
              className="group relative border border-[color:var(--border)] rounded-2xl overflow-hidden bg-[#0e0e10] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="text-[10px] uppercase font-semibold text-[color:var(--secondary)] tracking-widest mb-2">
                  {project.tag}
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-[color:var(--accent)] transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center bg-[color:var(--background)] to-[#1e1e23]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Want to <span className="text-[color:var(--accent)]">collaborate?</span>
        </h2>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
          I&apos;m open to collaborating on exciting projects. Let&apos;s bring your ideas to life.
        </p>
        <Link
          href= "https://www.github.com/nileshkumaryadav1"
          target="_blank"
          rel="noopener noreferrer" className="mt-8 inline-block bg-[color:var(--accent)] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[color:var(--highlight)] transition shadow-md"
        >
          Visit My Github
        </Link>
      </section>
    </div>
  );
}
