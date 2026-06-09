"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const featured = projects.slice(0, 4);

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = ["All", ...new Set(featured.map((p) => p.category))];
  const filtered =
    filter === "All"
      ? featured
      : featured.filter((p) => p.category === filter);

  const [heroProject, ...gridProjects] = filtered;

  return (
    <section className="section-padding relative overflow-hidden bg-surface/40">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,107,0,0.04),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <ScrollReveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-tag">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Portfolio
            </span>
            <h2 className="section-heading mt-5">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subheading mt-4">
              Landmark projects demonstrating quality, innovation, and
              engineering excellence across Nepal.
            </p>
          </div>
          <Link href="/projects/" className="btn-outline hidden shrink-0 sm:inline-flex text-xs">
            All Projects
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>

        {/* Filter pills */}
        <ScrollReveal delay={0.1} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "bg-accent text-white shadow-glow-sm"
                    : "border border-white/10 bg-white/3 text-muted-light hover:border-accent/40 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10"
          >
            {filtered.length === 0 ? (
              <p className="py-20 text-center text-muted">No projects in this category.</p>
            ) : (
              <div className="grid gap-5 lg:grid-cols-5 lg:grid-rows-2">
                {/* Hero project — spans 3 cols, 2 rows */}
                {heroProject && (
                  <motion.button
                    type="button"
                    onClick={() => setSelectedProject(heroProject)}
                    onHoverStart={() => setHoveredId(heroProject.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    className="project-card col-span-1 row-span-1 lg:col-span-3 lg:row-span-2 w-full text-left"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="relative h-72 overflow-hidden rounded-2xl lg:h-full lg:min-h-[500px]">
                      <Image
                        src={heroProject.image}
                        alt={heroProject.name}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          hoveredId === heroProject.id ? "scale-110" : "scale-100"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

                      {/* Category badge */}
                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-accent/30 bg-background/60 px-3 py-1.5 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                          {heroProject.category}
                        </span>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={hoveredId === heroProject.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.div>

                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-7">
                        <p className="text-xs text-muted-light">{heroProject.year}</p>
                        <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                          {heroProject.name}
                        </h3>
                        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-light">
                          <svg className="h-3.5 w-3.5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {heroProject.location}
                        </p>
                        <p className="mt-3 line-clamp-2 max-w-xl text-sm text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 lg:opacity-100">
                          {heroProject.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )}

                {/* Remaining 3 projects — 2 cols */}
                {gridProjects.slice(0, 3).map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    onHoverStart={() => setHoveredId(project.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    className="project-card col-span-1 lg:col-span-2 w-full text-left"
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          hoveredId === project.id ? "scale-110" : "scale-100"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                      {/* Category badge */}
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-light">
                          {project.category}
                        </span>
                      </div>

                      {/* View icon */}
                      <motion.div
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={hoveredId === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.div>

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-display text-base font-bold text-white sm:text-lg">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-xs text-muted-light">
                          {project.location} &bull; {project.year}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Mobile CTA */}
        <ScrollReveal className="mt-10 text-center sm:hidden">
          <Link href="/projects/" className="btn-primary text-xs">
            View All Projects
          </Link>
        </ScrollReveal>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
