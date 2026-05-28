import { motion } from "framer-motion";

import SectionShell from "@/components/section-shell";
import { experiences } from "@/lib/content";
import { fadeIn } from "@/lib/motion";

const cardViewport = {
  once: true,
  amount: 0.35,
  margin: "0px 0px -10% 0px",
};

function ExperienceCard({ experience, index }) {
  const isRight = index % 2 === 1;

  return (
    <motion.article
      variants={fadeIn(isRight ? "left" : "right", "tween", 0.05, 0.72)}
      initial="hidden"
      whileInView="show"
      viewport={cardViewport}
      className={`relative pl-16 lg:w-[calc(50%-2rem)] ${
        isRight ? "lg:ml-auto lg:pl-16" : "lg:pr-16"
      }`}
    >
      <div
        className={`absolute left-0 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950 shadow-[0_0_0_10px_rgba(5,8,22,1)] ${
          isRight ? "lg:left-[-3.375rem]" : "lg:left-auto lg:right-[-3.375rem]"
        }`}
      >
        <img
          src={experience.icon}
          alt={experience.company}
          className="h-6 w-6 object-contain"
        />
      </div>

      <div className="glass-panel rounded-[30px] p-6 shadow-card">
        <span className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100">
          {experience.date}
        </span>

        <h3 className="mt-5 font-display text-2xl font-semibold text-white">
          {experience.title}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">
          {experience.company}
        </p>

        <ul className="mt-6 space-y-3">
          {experience.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Career Path"
      title="Experience shaped by product work, motion, and frontend systems."
      description="A simplified timeline of roles that influenced how I approach UI quality, collaboration, and scalable frontend architecture."
      centered
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -18% 0px" }}
    >
      <div className="relative">
        <div className="absolute left-[1.375rem] top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-slate-500/30 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`${experience.company}-${experience.title}`} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
