// app/services/page.tsx or app/works/page.tsx

import HomeNavbar from '@/components/home/Navbar';
import PortfolioNav from '@/components/works/Navbar';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <>
      <HomeNavbar />
      <PortfolioNav />
      <main className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Explore My Work
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Dive into a curated collection of my best work in UI Design, Full-Stack Development, and Branding.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center items-center">
          {[
            { label: 'UI Design', href: '/works/ui-design' },
            { label: 'Full Stack', href: '/works/full-stack' },
            { label: 'Branding', href: '/works/branding' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2.5 border border-[var(--highlight)] text-[var(--highlight)] font-semibold rounded-lg hover:bg-[var(--accent)] hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
