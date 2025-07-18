import HomeNavbar from "@/components/home/Navbar";
import PortfolioNav from "@/components/works/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FullStackPage() {
  return (
    <>
    <HomeNavbar />
    <PortfolioNav />
    
    <div className="bg-[--background] text-[--foreground] min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Building Scalable Systems from <span className="text-green-500">Frontend to Backend</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I&apos;m a Full Stack Developer passionate about clean APIs, scalable architectures, and beautiful user experiences.
        </p>
        <button className="mt-6 px-6 py-3 text-md">
          Hire Me <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </section>

      {/* Core Tech Stack */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">My Core Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-sm text-gray-700">
          {["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Prisma", "PostgreSQL", "JWT/Auth"].map((tech, i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-lg hover:shadow transition">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Work Samples */}
      <section className="bg-[--secondary] px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Full Stack Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="border rounded-xl overflow-hidden bg-[--background] hover:scale-[1.02] hover:shadow-xl transition"
            >
              <Image
                src={`/fullstack-samples/sample-${num}.png`}
                alt={`Full Stack Sample ${num}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">End-to-End Web App</h3>
                <p className="text-sm text-[--accent]">Built with MERN/Next.js stack, role-based auth, and REST/GraphQL APIs.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Engineering Philosophy</h2>
        <p className="text-gray-600 leading-relaxed">
          I believe great software balances performance with maintainability.  
          I architect systems that scale, optimize user flow, and reduce technical debt — all while keeping the user first.
        </p>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Code Something Amazing</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          I&apos;m open to full-time roles, freelance projects, or backend/frontend collaborations. Let&apos;s build together.
        </p>
        <button className="mt-6 px-6 py-3 text-md">
          Contact Me <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </section>
    </div> </>
  );
}
