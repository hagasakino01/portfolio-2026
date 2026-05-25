import { motion } from "framer-motion";

import SectionShell from "@/components/section-shell";
import { testimonials } from "@/lib/content";
import { fadeIn } from "@/lib/motion";

export default function Testimonials() {
  return (
    <SectionShell
      eyebrow="Testimonials"
      title="Signals of trust from teams I have supported."
      className="pb-10"
    >
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-black-100 shadow-card">
        <div className="panel-gradient px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-100/80">
            What others say
          </p>
          <h3 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Feedback that mirrors the work.
          </h3>
        </div>

        <div className="-mt-4 grid gap-6 px-6 pb-8 pt-2 sm:px-10 lg:grid-cols-3 lg:px-16 lg:pb-14">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeIn("up", "spring", index * 0.16, 0.75)}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8"
            >
              <p className="font-display text-5xl leading-none text-cyan-200">&ldquo;</p>
              <p className="mt-4 text-base leading-8 text-slate-200">{item.quote}</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-cyan-300/15 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  {item.initials}
                </div>
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
