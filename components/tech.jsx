import dynamic from "next/dynamic";

import SectionShell from "@/components/section-shell";
import { technologies } from "@/lib/content";

const TechBallCanvas = dynamic(() => import("@/components/canvas/tech-ball-canvas"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-full border border-white/10 bg-white/5" />
  ),
});

export default function Tech() {
  return (
    <SectionShell
      eyebrow="Core Stack"
      title="Tools I reach for when speed and polish both matter."
      description="The stack below mirrors the original portfolio idea: web fundamentals, modern React tooling, and Three.js for interactive presentation."
      centered
    >
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="group rounded-[28px] border border-white/10 bg-white/5 p-5 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/10"
          >
            <div className="mx-auto h-24 w-24">
              <TechBallCanvas icon={technology.icon} />
            </div>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-200">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
