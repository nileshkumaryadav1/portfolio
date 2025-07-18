"use client";

import Navbar from "@/components/video-production/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Videos() {
  const videos = [
    {
      title: "Engineering Student DailyLife 2025",
      href: "https://www.youtube.com/watch?v=NLh4gUvtdPY",
      videoId: "NLh4gUvtdPY",
      desc: "A dynamic aftermovie capturing 3 days of tech & culture.",
      tag: "DailyLife",
    },
    {
      title: "Centre Reels Showreel",
      href: "https://www.instagram.com/reel/XXXXX",
      videoId: "XXXXX", // Replace with actual Instagram reel ID if needed
      desc: "Fast-paced editing and modern transitions for Instagram reels.",
      tag: "Reel",
    },
    {
      title: "Promo Video for Hackathon",
      href: "https://www.youtube.com/watch?v=xxxx",
      videoId: "NLh4gUvtdPY",
      desc: "Hype-building promo video for our coding showdown event.",
      tag: "Promo",
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
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Glimpse of My{" "}
          <span className="text-[color:var(--highlight-videoproduction)]">
            Video Production
          </span>
        </h1>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
          A glimpse into the visual storytelling work I&apos;ve done — events,
          promos, and engaging reels.
        </p>
      </section>

      {/* Video Grid */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <Link
              href={video.href}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-gray-700 rounded-xl overflow-hidden bg-[color:var(--background)] hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-60">
                <Image
                  // src={
                  //   video.href.includes("youtube")
                  //     ? `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`
                  //     : "/placeholder-reel-thumbnail.jpg"
                  // }
                  src="/placeholder-reel-thumbnail.jpg"
                  alt={`${video.title} thumbnail`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 p-6">
                <div className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-2">
                  {video.tag}
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-[color:var(--highlight-videoproduction)] transition">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">{video.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* YT + Insta */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Check out my{" "}
          <span className="text-[color:var(--highlight-videoproduction)]">
            YouTube
          </span>{" "}
          and{" "}
          <span className="text-[color:var(--highlight-videoproduction)]">
            Instagram
          </span>{" "}
          for more!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="https://www.youtube.com/@nileshandshubham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[color:var(--highlight-videoproduction)] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[color:var(--highlight-techfest)] transition shadow-md"
          >
            YouTube
          </Link>
          <Link
            href="https://www.instagram.com/nileshnayan_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[color:var(--highlight-videoproduction)] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[color:var(--highlight-techfest)] transition shadow-md"
          >
            Instagram
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Want to{" "}
          <span className="text-[color:var(--highlight-videoproduction)]">
            collaborate?
          </span>
        </h2>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
          I&apos;m always open to new collaborations and opportunities. Let&apos;s
          create something amazing together!
        </p>
        <Link
          href="mailto:nileshkumarextra@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[color:var(--highlight-videoproduction)] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[color:var(--highlight-techfest)] transition shadow-md"
        >
          Connect with Me
        </Link>
      </section>
    </div>
  );
}
