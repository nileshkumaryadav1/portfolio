"use client";

import HomeNavbar from "@/components/home/Navbar";
import { FaYoutube, FaPlay } from "react-icons/fa";
import React from "react";

export default function YouTubePromoPage() {
  const highlights = [
    {
      title: "🔥 Real Projects",
      description: "Learn full-stack development with hands-on real-world apps.",
    },
    {
      title: "🚀 5-Minute Tutorials",
      description: "Bite-sized videos to get concepts fast.",
    },
    {
      title: "🎯 For Beginners",
      description: "Clear, beginner-friendly explainers without fluff.",
    },
    {
      title: "🎥 Project Behind-the-Scenes",
      description: "Explore how real projects are built from scratch.",
    },
    {
      title: "💡 Dev Hacks",
      description: "Smart tips to save time and boost productivity.",
    },
  ];

  return (
    <>
      <HomeNavbar />
      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png')" }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Learn Full-Stack Dev Like Never Before
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Subscribe to <span className="text-red-500 font-semibold">@nileshkumarnayan</span> for real dev insights, fast tech tutorials & more!
            </p>
            <a
              href="https://www.youtube.com/@nileshkumarnayan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition shadow-md"
            >
              <FaYoutube size={20} /> Visit Channel
            </a>
          </div>
        </section>

        {/* Highlight Cards Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You&apos;ll Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#111] p-6 rounded-lg shadow-lg hover:scale-[1.03] hover:shadow-xl transition duration-300 border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#111] py-20 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Start Watching Now</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            The fastest way to level up your coding skills, build real projects, and stay ahead of the curve.
          </p>
          <a
            href="https://www.youtube.com/@nileshkumarnayan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-md"
          >
            <FaPlay size={18} /> Watch Now
          </a>
        </section>
      </div>
    </>
  );
}
