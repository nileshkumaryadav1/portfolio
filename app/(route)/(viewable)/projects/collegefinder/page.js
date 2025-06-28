// app/projects/collegefinder/page.js
import Navbar from "@/components/projects/collegefinder/Navbar";
import Link from "next/link";

export default function CollegeFinder() {
  return (
    <div
      style={{
        backgroundColor: "var(--collegefinder-background)",
        color: "var(--collegefinder-foreground)",
      }}
      className="min-h-screen w-full flex flex-col"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Find Your{" "}
          <span style={{ color: "var(--collegefinder-accent)" }}>
            Perfect College
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-[color:var(--collegefinder-secondary)]">
          India&apos;s smartest tool for discovering top universities, entrance
          exams, and admission predictions.
        </p>

        <Link
          href="https://collegefinder.site"
          className="mt-8 inline-block bg-[color:var(--collegefinder-accent)] text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-red-500 transition"
        >
          Explore College Finder
        </Link>
      </section>

      {/* Features */}
      <section className="px-6 py-12 bg-white text-[color:var(--collegefinder-foreground)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Smart Predictor",
              desc: "Get personalized college suggestions based on your category and score.",
            },
            {
              title: "Verified College Info",
              desc: "Explore complete data including placements, courses, fees, and facilities.",
            },
            {
              title: "Entrance Exam Guide",
              desc: "Never miss an update—track major exams, cutoffs, and eligibility.",
            },
            {
              title: "Student Dashboard",
              desc: "Register, favorite colleges, track updates, and access premium features.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-[color:var(--collegefinder-secondary)] shadow-sm hover:shadow-md transition"
            >
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--collegefinder-accent)" }}
              >
                {item.title}
              </h2>
              <p className="text-sm text-[color:var(--collegefinder-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-[color:var(--collegefinder-foreground)] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to find your dream college?
        </h2>
        <p className="mb-8 text-[color:var(--collegefinder-highlight)]">
          Let CollegeFinder guide your admission journey.
        </p>
        <Link
          href="https://collegefinder.site"
          className="bg-[color:var(--collegefinder-accent)] px-6 py-3 text-lg font-medium rounded-full hover:bg-red-600 transition"
        >
          Visit Now
        </Link>
      </section>
    </div>
  );
}
