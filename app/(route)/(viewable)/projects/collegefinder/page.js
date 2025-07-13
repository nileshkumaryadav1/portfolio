import Navbar from "@/components/projects/collegefinder/Navbar";
import Link from "next/link";

const features = [
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
];

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

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-[color:var(--collegefinder-background)] to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Find Your{" "}
          <span className="text-[color:var(--collegefinder-accent)]">
            Perfect College
          </span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-[color:var(--collegefinder-secondary)]">
          India&apos;s smartest tool for discovering top universities, entrance
          exams, and admission predictions.
        </p>

        <Link
          href="https://collegefinder.site"
          className="mt-8 inline-block bg-[color:var(--collegefinder-accent)] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-red-500 transition shadow-md"
        >
          Explore College Finder
        </Link>
      </section>

      {/* Timeline */}
      <section className="relative px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[color:var(--collegefinder-secondary)] opacity-20 hidden md:block" />

          {features.map((feature, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } mb-20 items-center`}
              >
                {/* Connector Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[color:var(--collegefinder-accent)] rounded-full border-4 border-white z-10 shadow-md" />

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 p-6 rounded-xl bg-white shadow-md border border-[color:var(--collegefinder-secondary)] transition hover:shadow-lg ${
                    isLeft ? "md:mr-8 text-left" : "md:ml-8 text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[color:var(--collegefinder-accent)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[color:var(--collegefinder-secondary)]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[color:var(--collegefinder-foreground)] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to find your dream college?
        </h2>
        <p className="mb-8 text-[color:var(--collegefinder-highlight)] text-lg">
          Let CollegeFinder guide your admission journey.
        </p>
        <Link
          href="https://collegefinder.site"
          className="bg-[color:var(--collegefinder-accent)] hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg transition"
        >
          Visit Now
        </Link>
      </section>
    </div>
  );
}
