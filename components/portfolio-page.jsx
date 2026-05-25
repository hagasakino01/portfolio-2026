"use client";

import dynamic from "next/dynamic";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Tech from "@/components/tech";
import Testimonials from "@/components/testimonials";
import Works from "@/components/works";
import { socialLinks } from "@/lib/content";

const StarsCanvas = dynamic(() => import("@/components/canvas/stars-canvas"), {
  ssr: false,
});

export default function PortfolioPage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-60" />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Testimonials />

        <section className="relative">
          <Contact />
          <StarsCanvas />
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Built with Next.js, Tailwind CSS, React Three Fiber, and EmailJS.</p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
