"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import ProjectModal from "@/components/ProjectModal";
import CTA from "@/sections/CTA";
import { projects, projectCategories } from "@/lib/data";
import type { Project } from "@/lib/data";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-24">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Work
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Explore our portfolio of completed and ongoing construction projects
            across Nepal.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                    filter === cat
                      ? "bg-accent text-white shadow-glow"
                      : "border border-stone-300 bg-white/70 text-muted hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.05}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group relative w-full overflow-hidden rounded-2xl text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/65">
                      {project.location} &bull; {project.year}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted">No projects found in this category.</p>
          )}
        </div>
      </section>

      <CTA />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </PageTransition>
  );
}
