import Navbar from "@/components/projects/collegefinder/Navbar";
import Link from "next/link";

const features = [
  {
    title: "Smart Predictor",
    desc: "Get personalized college suggestions based on your category and score. Supports multiple states and categories.",
  },
  {
    title: "Verified College Info",
    desc: "Explore detailed info like placements, fees, courses, hostel, facilities, and cutoff history.",
  },
  {
    title: "Entrance Exam Guide",
    desc: "Track entrance exams like JEE, NEET, CUET, COMEDK, and others with eligibility and important dates.",
  },
  {
    title: "Student Dashboard",
    desc: "Create your profile, save favorite colleges, receive notifications, and access premium tools.",
  },
  {
    title: "Scholarships Explorer",
    desc: "Find relevant scholarships based on your category, location, and stream with eligibility and deadlines.",
  },
  {
    title: "Live News & Updates",
    desc: "Stay updated with verified education news, exam announcements, and real-time alerts.",
  },
  {
    title: "Genuine Reviews",
    desc: "Read or post student reviews with ratings on campus life, placements, faculty, and infrastructure.",
  },
  {
    title: "College Compare Tool",
    desc: "Compare up to 3 colleges side-by-side with fees, reviews, location, and ranking.",
  },
];

export default function CollegeFinder() {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-[color:var(--background)] to-[#1e1e23]">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Discover Your{" "}
          <span className="text-[color:var(--highlight-collegefinder)]">Dream College</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-[color:var(--secondary)]">
          A next-gen tool to explore colleges, entrance exams, scholarships, and real reviews — powered by students for students.
        </p>
        <Link
          target="_blank"
          href="https://collegefinder.site"
          className="mt-8 inline-block bg-[color:var(--highlight-collegefinder)] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[color:var(--highlight-blogwriting)] transition shadow-md"
        >
          Visit College Finder
        </Link>
      </section>

      {/* Features Timeline */}
      <section className="relative px-6 py-24 bg-[#141417]">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[color:var(--secondary)] opacity-20 hidden md:block" />

          {features.map((feature, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } mb-20 items-center`}
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[color:var(--highlight-collegefinder)] rounded-full border-4 border-[#141417] z-10 shadow-md" />

                {/* Feature Card */}
                <div
                  className={`w-full md:w-1/2 p-6 rounded-xl bg-[#1c1c21] shadow-md border border-[color:var(--border)] transition hover:shadow-lg ${
                    isLeft ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[color:var(--highlight-collegefinder)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[color:var(--secondary)]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-24 bg-[color:var(--background)] text-black text-center">
        <h2 className="text-3xl md:text-4xl text-[color:var(--highlight-collegefinder)] font-bold mb-4">
          Ready to make smarter choices?
        </h2>
        <p className="mb-8 text-[color:var(--secondary)] text-lg">
          Let CollegeFinder streamline your admissions journey.
        </p>
        <Link
          href="https://collegefinder.site"
          className="bg-[color:var(--highlight-collegefinder)] hover:bg-[color:var(--highlight-blogwriting)] text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg transition"
        >
          Explore Now
        </Link>
      </section>
    </div>
  );
}
