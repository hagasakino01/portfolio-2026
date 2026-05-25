import { motion } from "framer-motion";

import SectionShell from "@/components/section-shell";
import { projects } from "@/lib/content";
import { fadeIn } from "@/lib/motion";

function ProjectCard({ project, index }) {
  const hasLiveDemo = Boolean(project.liveDemo && project.liveDemo !== "#");

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.14, 0.8)}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-card"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

        <a
          href={project.sourceCode}
          target="_blank"
          rel="noreferrer"
          aria-label={`View source code for ${project.name}`}
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-slate-950/75 backdrop-blur transition hover:border-cyan-200/40 hover:bg-slate-950"
        >
          <img src="/assets/github.png" alt="" className="h-5 w-5 object-contain" />
        </a>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span key={`${project.name}-${tag.name}`} className={`text-sm font-medium ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-cyan-200/40 hover:bg-white/10"
          >
            Source
          </a>
          {hasLiveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-cyan-200"
            >
              Live Demo
            </a>
          ) : (
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Demo Pending
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Works() {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected Work"
      title="Projects that show how I structure interfaces and present products."
      description="These cards follow the spirit of the original portfolio: strong visual presentation, clear stack tags, and quick access to source code or demos."
    >
      <div className="grid gap-8 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
