"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { stats } from "@/lib/data";

const statIcons = [
  /* Calendar */
  <svg key="a" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>,
  /* Check-badge */
  <svg key="b" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>,
  /* Users */
  <svg key="c" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
  /* Star */
  <svg key="d" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>,
];

export default function CompanyOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="/images/company-bg.jpg"
          alt="Company background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(11,11,11,0.88)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.05),transparent_70%)]" />
      </motion.div>

      {/* Blueprint overlay */}
      <div className="blueprint-grid absolute inset-0 opacity-20" />

      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Our Track Record
            </span>
            <h2 className="section-heading mt-5 !text-white">
              Built on{" "}
              <span className="text-gradient">Proven Excellence</span>
            </h2>
            <p className="section-subheading mx-auto mt-4 !text-white/65">
              Numbers that reflect our commitment and the trust placed in us
              by clients, partners, and communities across Nepal.
            </p>
          </ScrollReveal>

          {/* Stats grid */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-white/15 p-5 text-center backdrop-blur-xl transition-all duration-500 hover:border-accent/40 sm:p-8"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover bottom glow line */}
                  <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500 group-hover:w-4/5" />

                  {/* Icon */}
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent/50">
                    {statIcons[index]}
                  </div>

                  {/* Number */}
                  <p className="font-display text-4xl font-bold leading-none text-white sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>

                  {/* Label */}
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/55 transition-colors group-hover:text-white/80">
                    {stat.label}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Decorative quote row */}
          <ScrollReveal delay={0.2} className="mt-16">
            <div className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-5 backdrop-blur-sm sm:gap-6 sm:px-8 sm:py-6">
              <div className="hidden shrink-0 sm:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.389-.88m2.269 2.268a3.765 3.765 0 010 2.528m-2.268 4.788a3.737 3.737 0 01-1.389.88 3.736 3.736 0 01-1.38.21m2.769-1.09L12 16.576m4.712-4.712L12 16.576m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m9.424 0l-4.138-3.448" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-sm italic leading-relaxed text-white/70 sm:text-base">
                &ldquo;Our track record of over 120 completed projects and 98% client satisfaction is not just a statistic — it is the foundation of every relationship we build.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
