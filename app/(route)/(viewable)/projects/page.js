import HomeNavbar from "@/components/home/Navbar";
import Link from "next/link";

export default function Projects() {
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
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-md text-[color:var(--secondary)] max-w-xl mx-auto">
          Explore some of my best work — crafted with passion and precision.
        </p>
      </section>

      {/* Project List */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "CollegeFinder",
              href: "/projects/collegefinder",
              desc: "Smart admission predictor and explorer for Indian colleges.",
            },
            {
              title: "Blogging Platform",
              href: "/projects/blogging",
              desc: "A full-featured MERN-based platform for tech and personal blogs.",
            },
            {
              title: "Techfest",
              href: "/projects/techfest",
              desc: "Official website for a college technical fest, with event registration and schedules.",
            },
          ].map((project, i) => (
            <li
              key={i}
              className="border border-[color:var(--secondary)] rounded-xl p-6 hover:shadow-lg transition bg-white dark:bg-[color:var(--background)]"
            >
              <Link href={project.href} className="block group">
                <h2
                  className="text-xl font-semibold mb-1 group-hover:text-[color:var(--accent)] transition"
                  style={{ color: "var(--foreground)" }}
                >
                  {project.title}
                </h2>
                <p className="text-sm text-[color:var(--secondary)]">
                  {project.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
