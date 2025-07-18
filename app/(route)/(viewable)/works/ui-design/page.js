import HomeNavbar from "@/components/home/Navbar";
import PortfolioNav from "@/components/works/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function UIDesignPage() {
  return (
    <>
      <HomeNavbar />
      <PortfolioNav />

    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Crafting Interfaces that{" "}
          <span className="text-[var(--highlight)]">Feel Human</span> and Perform Exceptionally
        </h1>
        <p className="mt-4 text-lg text-[var(--secondary)]">
          I&apos;m a UI Developer focused on elegant design systems, accessible code, and modern web interactions.
        </p>
        <button className="mt-6 px-6 py-3 text-md bg-[var(--accent)] text-black rounded-xl hover:scale-105 transition inline-flex items-center gap-2">
          Hire Me <ArrowRight className="h-4 w-4" />
        </button>
      </section>

      {/* Skill Stack */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">My Core Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-sm text-[var(--foreground)]">
          {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Next.js", "Framer Motion", "Figma"].map((tech, i) => (
            <div key={i} className="border border-[var(--border)] p-4 rounded-lg hover:bg-[var(--border)] transition">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Work Samples */}
      <section className="bg-[var(--border)] px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Recent UI Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--background)] hover:scale-[1.02] hover:shadow-xl transition"
            >
              <Image
                src={`/ui-samples/sample-${num}.png`}
                alt={`UI Sample ${num}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Dashboard UI Concept</h3>
                <p className="text-sm text-[var(--secondary)]">
                  Responsive, component-based layout using Tailwind and Framer Motion.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Design Mindset</h2>
        <p className="text-[var(--secondary)] leading-relaxed">
          I believe that good UI is invisible. It should help users flow through their tasks smoothly — with no distractions, no dead ends.
          Every pixel should have a purpose. I don&apos;t just write code — I create experiences.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your Vision Together</h2>
        <p className="text-[var(--secondary)] max-w-xl mx-auto">
          I&apos;m currently open to frontend roles, contract work, or collaboration. Let&apos;s connect and discuss how I can help.
        </p>
        <button className="mt-6 px-6 py-3 text-md bg-[var(--accent)] text-black rounded-xl hover:scale-105 transition inline-flex items-center gap-2">
          Contact Me <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </div>  </>
  );
}
