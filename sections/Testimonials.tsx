"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/lib/data";

const INTERVAL = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, INTERVAL);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next, isPaused]);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,107,0,0.03),transparent)]" />
      <div className="blueprint-grid absolute inset-0 opacity-8" />

      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal className="text-center">
          <span className="section-tag">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Client Stories
          </span>
          <h2 className="section-heading mt-5">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </ScrollReveal>

        {/* Large quote mark */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[20rem] font-bold leading-none text-accent/[0.025]"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <ScrollReveal delay={0.15} className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
              <div className="gradient-border-card relative p-8 sm:p-12 lg:p-14">
                {/* Inner accent corner */}
                <div className="absolute left-0 top-0 h-[3px] w-16 rounded-tl-2xl bg-gradient-to-r from-accent to-transparent" />

                {/* Stars */}
                <div className="mb-7 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.svg
                      key={i}
                      className="h-5 w-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg leading-[1.9] text-muted-light sm:text-xl sm:leading-[1.85]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/8 pt-7">
                  {/* Avatar with gradient ring */}
                  <div className="relative">
                    <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-accent to-gold opacity-60" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-background font-display text-lg font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="mt-0.5 text-sm text-muted">
                      {testimonial.role}
                      <span className="mx-1.5 text-accent">·</span>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar + controls */}
          <div className="mt-8 flex items-center justify-between gap-6">
            {/* Prev / next */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-muted-light backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                aria-label="Previous testimonial"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-muted-light backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                aria-label="Next testimonial"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex flex-1 items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className="group relative flex-1 overflow-hidden rounded-full"
                  aria-label={`Testimonial ${i + 1}`}
                >
                  <div className="h-[3px] rounded-full bg-white/10" />
                  {i === current && (
                    <motion.div
                      key={progressKey}
                      className="absolute inset-0 origin-left rounded-full bg-accent"
                      initial={{ scaleX: 0 }}
                      animate={isPaused ? { scaleX: undefined } : { scaleX: 1 }}
                      transition={isPaused ? {} : { duration: INTERVAL / 1000, ease: "linear" }}
                    />
                  )}
                  {i < current && (
                    <div className="absolute inset-0 rounded-full bg-accent/40" />
                  )}
                </button>
              ))}
            </div>

            <span className="shrink-0 text-xs tabular-nums text-muted">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
