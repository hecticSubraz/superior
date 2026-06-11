"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DirectorSignature from "@/components/DirectorSignature";
import ScrollReveal from "@/components/ScrollReveal";
import { managingDirector } from "@/lib/data";

export default function ManagingDirector() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative backgrounds */}
      <div className="blueprint-grid absolute inset-0 opacity-15" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/3 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <ScrollReveal className="mb-12 text-center">
          <span className="section-tag">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Leadership
          </span>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <ScrollReveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Corner accents */}
              <div className="corner-accent-tl absolute -left-3 -top-3 z-10 h-10 w-10 sm:h-14 sm:w-14" />
              <div className="corner-accent-br absolute -bottom-3 -right-3 z-10 h-10 w-10 sm:h-14 sm:w-14" />

              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/8 via-transparent to-gold/8 blur-2xl" />

              <motion.div
                className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                style={{ y: imgY }}
              >
                <Image
                  src={managingDirector.image}
                  alt={managingDirector.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlays — dark so floating badge stays legible on photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

                {/* Bottom accent strip */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-gold to-transparent" />

                {/* Floating badge on photo */}
                <motion.div
                  className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-stone-200 bg-white/85 px-3 py-2.5 backdrop-blur-md shadow-card sm:bottom-8 sm:left-6 sm:px-4 sm:py-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="h-8 w-8 rounded-full bg-accent/15 flex items-center justify-center">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500">
                      Certified Leader
                    </p>
                    <p className="text-xs font-semibold text-foreground">20+ Years Experience</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Message card */}
          <ScrollReveal delay={0.2}>
            <div className="gradient-border-card relative p-8 sm:p-10 lg:p-12">
              {/* Inner shimmer */}
              <div className="shimmer absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" />

              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.6rem] leading-tight">
                Message from the{" "}
                <span className="text-gradient">Managing Director</span>
              </h2>

              {/* Decorative quote mark */}
              <div className="relative mt-8">
                <span
                  className="pointer-events-none absolute -left-2 -top-4 font-display text-[3rem] leading-none text-accent/25 select-none sm:-left-3 sm:-top-6 sm:text-[5rem] lg:text-[6rem]"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="relative z-10 border-l-[3px] border-accent/50 pl-6 text-[1.05rem] leading-[1.85] text-stone-600 sm:text-lg">
                  {managingDirector.quote}
                </blockquote>

                <span
                  className="pointer-events-none absolute -bottom-4 right-0 font-display text-[2.5rem] leading-none text-gold/30 select-none sm:text-[4rem]"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </div>

              {/* Divider */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                <div className="h-px w-8 bg-gold/30" />
              </div>

              {/* Identity block */}
              <div className="mt-6">
                <p className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {managingDirector.name}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-accent-dark">
                  {managingDirector.position}
                </p>
                <DirectorSignature
                  name={managingDirector.signature}
                  className="mt-5"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
