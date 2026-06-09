"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const featured = projects.slice(0, 4);

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? featured
      : featured.filter((p) => p.category === filter);

  const categories = ["All", ...new Set(featured.map((p) => p.category))];

  return (
    <section className="section-padding bg-surface/50">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Portfolio
          </span>
          <h2 className="section-heading mt-4">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A showcase of our landmark projects demonstrating quality,
            innovation, and engineering excellence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? "bg-accent text-white shadow-glow"
                    : "border border-white/10 text-muted-light hover:border-accent/50 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {filtered.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative w-full overflow-hidden rounded-2xl text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category} &bull; {project.year}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-light">{project.location}</p>
                </div>
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link href="/projects/" className="btn-primary text-xs">
            View All Projects
          </Link>
        </ScrollReveal>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
