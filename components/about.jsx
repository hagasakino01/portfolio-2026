import { motion } from "framer-motion";

import SectionShell from "@/components/section-shell";
import { services } from "@/lib/content";
import { fadeIn } from "@/lib/motion";

function ServiceCard({ service, index }) {
  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.12, 0.72)}
      className="group rounded-[28px] p-px accent-border shadow-card"
    >
      <div className="h-full rounded-[27px] bg-black-100/95 p-8 transition duration-300 group-hover:-translate-y-1 group-hover:bg-black-100">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <img src={service.icon} alt={service.title} className="h-10 w-10 object-contain" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-white">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{service.blurb}</p>
      </div>
    </motion.article>
  );
}

export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="Introduction"
      title="Building interfaces that feel precise, fast, and memorable."
      description="I am a frontend developer focused on React and Next.js, with hands-on experience turning visual ideas into production-ready web experiences. I care about clean implementation, strong motion design, and the details that make a product feel premium."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
