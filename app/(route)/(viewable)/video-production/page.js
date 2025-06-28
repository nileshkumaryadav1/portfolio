import React from "react";

export default function YouTubePromoPage() {
  const highlights = [
    "🔥 Learn full-stack dev with real projects",
    "🚀 Fast, focused 5-minute tech tutorials",
    "🎯 Beginner-friendly explainers",
    "🎥 Behind-the-scenes of my projects",
    "💡 Smart shortcuts and productivity tips",
  ];

  return (
    <div
      className="min-h-screen px-6 py-16"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        What My YouTube Channel Offers
      </h1>

      <div className="relative max-w-3xl mx-auto border-l-4 border-[color:var(--accent)] pl-6">
        {highlights.map((point, i) => (
          <div
            key={i}
            className="mb-10 group relative hover:scale-[1.02] transition-transform"
          >
            <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-[color:var(--accent)] border-4 border-[color:var(--background)]"></div>
            <div className="bg-white dark:bg-[color:var(--background)] p-4 rounded-lg shadow-md border border-[color:var(--secondary)] group-hover:shadow-lg transition">
              <h2 className="text-lg font-medium">{point}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="https://www.youtube.com/@nileshandshubham"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[color:var(--accent)] text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition"
        >
          Visit Channel
        </a>
      </div>
    </div>
  );
}
