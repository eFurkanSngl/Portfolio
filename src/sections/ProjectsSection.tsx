import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import LazyVideo from "../components/LazyVideo";
import { stackProjects, type StackProject } from "../data/projects";

function StackCard({
  project,
  index,
  totalCards,
}: {
  project: StackProject;
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full min-h-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#0C0C0C] font-black"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 110px)",
                WebkitTextStroke: "1px #D7E2EA",
                color: "transparent",
              }}
            >
              {project.number}
            </span>
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-[#D7E2EA]">
                {project.title}
              </h3>
            </div>
          </div>
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <LiveProjectButton
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="!px-4 !py-2 !text-xs sm:!text-sm"
                />
              ))}
            </div>
          )}
        </div>

        <p className="shrink-0 text-xs sm:text-sm text-[#D7E2EA]/60 leading-relaxed max-w-2xl">
          {project.description}
        </p>

        {project.image ? (
          <div className="flex-1 min-h-0 flex gap-3">
            <div className="w-2/5 h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="w-3/5 h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
              {project.video ? (
                <LazyVideo src={project.video} className="w-full h-full object-cover" />
              ) : (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              )}
            </div>
          </div>
        ) : (
          project.video && (
            <div className="flex-1 min-h-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
              <LazyVideo src={project.video} className="w-full h-full object-cover" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 pb-10"
    >
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {stackProjects.map((project, index) => (
          <StackCard key={project.id} project={project} index={index} totalCards={stackProjects.length} />
        ))}
      </div>
    </section>
  );
}
