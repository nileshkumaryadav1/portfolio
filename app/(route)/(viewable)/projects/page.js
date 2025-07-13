"use client";

import HomeNavbar from "@/components/home/Navbar";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "CollegeFinder",
      href: "/projects/collegefinder",
      desc: "Smart admission predictor and explorer for Indian colleges.",
      tag: "Flagship",
    },
    {
      title: "Blogging Platform",
      href: "/projects/blogging",
      desc: "A full-featured MERN-based platform for tech and personal blogs.",
      tag: "MERN",
    },
    {
      title: "Techfest Website",
      href: "/projects/techfest",
      desc: "Official website for a college technical fest, with event registration and schedules.",
      tag: "Events",
    },
  ];

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
      <section className="px-6 py-20 text-center bg-black text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Explore My Projects
        </h1>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
          Showcasing my most impactful and technically challenging work —
          crafted with real-world use cases, clean code, and a dash of creativity.
        </p>
      </section>

      {/* Project Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              href={project.href}
              key={i}
              className="group relative border border-gray-700 rounded-xl overflow-hidden bg-[#111] hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Optional background overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 z-0" />

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-2">
                  {project.tag}
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-[color:var(--accent)] transition">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
