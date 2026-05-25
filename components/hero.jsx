import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { heroContent } from "@/lib/content";
import { fadeIn, textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";

const ComputersCanvas = dynamic(() => import("@/components/canvas/computers-canvas"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[2rem] bg-white/5" />,
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl gap-12 px-6 pb-16 pt-28 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-16 lg:pb-12 lg:pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("right", "spring", 0.05, 0.9)}
          className="relative z-10"
        >
          <motion.span
            variants={textVariant(0)}
            className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-100/90"
          >
            {heroContent.badge}
          </motion.span>

          <div className="mt-8 flex items-start gap-5">
            <div className="mt-2 flex flex-col items-center">
              <span className="h-4 w-4 rounded-full bg-accent shadow-[0_0_24px_rgba(34,211,238,0.65)]" />
              <span className="mt-3 h-28 w-px bg-gradient-to-b from-accent to-transparent sm:h-40" />
            </div>

            <div>
              <motion.p
                variants={textVariant(0.04)}
                className="text-sm uppercase tracking-[0.28em] text-slate-400"
              >
                Hi, I&apos;m {heroContent.name}
              </motion.p>
              <motion.h1 variants={textVariant(0.08)} className={`${styles.heroHeadText} mt-4`}>
                {heroContent.title}
              </motion.h1>
              <motion.p variants={fadeIn("", "tween", 0.18, 0.7)} className={styles.heroSubText}>
                {heroContent.description}
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={fadeIn("up", "spring", 0.28, 0.8)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={heroContent.primaryCta.href}
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-cyan-200"
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-cyan-200/50 hover:bg-white/10"
            >
              {heroContent.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.36, 0.8)}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {heroContent.stats.map((item) => (
              <div key={item.label} className="glass-panel rounded-3xl p-5 shadow-soft">
                <p className="font-display text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("left", "spring", 0.2, 0.95)}
          className="relative h-[420px] sm:h-[520px] lg:h-[680px]"
        >
          <div className="absolute inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <div className="panel-gradient relative h-full overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
            <ComputersCanvas />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 sm:flex">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex h-16 w-9 items-start justify-center rounded-full border border-white/20 p-2"
        >
          <motion.span
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
            className="h-3 w-3 rounded-full bg-cyan-200"
          />
        </a>
      </div>
    </section>
  );
}
