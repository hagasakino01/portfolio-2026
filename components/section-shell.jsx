import { motion } from "framer-motion";

import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
  viewport = { once: true, amount: 0.2 },
  children,
}) {
  return (
    <motion.section
      variants={staggerContainer(0.14, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24 ${className}`}
    >
      {id ? <span id={id} className="hash-anchor" /> : null}

      {eyebrow || title || description ? (
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow ? (
            <motion.p variants={textVariant(0)} className={styles.sectionSubText}>
              {eyebrow}
            </motion.p>
          ) : null}

          {title ? (
            <motion.h2 variants={textVariant(0.08)} className={styles.sectionHeadText}>
              {title}
            </motion.h2>
          ) : null}

          {description ? (
            <motion.p
              variants={fadeIn("", "tween", 0.12, 0.6)}
              className="mt-5 text-base leading-8 text-slate-300 sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
        </div>
      ) : null}

      <div className={eyebrow || title || description ? "mt-16" : ""}>{children}</div>
    </motion.section>
  );
}
