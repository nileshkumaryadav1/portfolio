import HomeNavbar from "@/components/home/Navbar";
import PortfolioNav from "@/components/works/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BrandingPage() {
  return (
    <>
     <HomeNavbar />
     <PortfolioNav />

    <div className="bg-[--background] text-[--foreground] min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Crafting Brands that <span className="text-green-500">Stand Out</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in identity systems, visual storytelling, and brand consistency across all platforms.
        </p>
        <button className="mt-6 px-6 py-3 text-md">
          Hire Me <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </section>

      {/* Brand Identity Tools */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">What I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-sm text-gray-700">
          {["Adobe Illustrator", "Photoshop", "Figma", "Canva", "After Effects", "Lightroom", "Typography", "Color Theory"].map((tool, i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-lg hover:shadow transition">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Work Samples */}
      <section className="bg-[--background] text-[--foreground] px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Branding Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="border rounded-xl overflow-hidden bg-[--background] hover:scale-[1.02] hover:shadow-xl transition"
            >
              <Image
                src={`/branding-samples/sample-${num}.png`}
                alt={`Brand Sample ${num}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Visual Identity System</h3>
                <p className="text-sm text-gray-600">Logo design, color palette, and brand voice for startups and events.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Branding Philosophy</h2>
        <p className="text-gray-600 leading-relaxed">
          A great brand doesn’t just look good — it communicates values, builds trust, and connects emotionally.
          I focus on intentional design choices backed by strategy and storytelling.
        </p>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Brand that Speaks?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether you’re a startup, team, or individual — I can help you craft a brand that’s unforgettable.
        </p>
        <button className="mt-6 px-6 py-3 text-md">
          Let’s Talk <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </section>
    </div> </>
  );
}
