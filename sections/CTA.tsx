"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: "clock", label: "Fast Turnaround", value: "On-Time Delivery" },
  { icon: "shield", label: "Quality Assured", value: "ISO Standards" },
  { icon: "users", label: "Expert Team", value: "250+ Professionals" },
];

function FeatureIcon({ type }: { type: string }) {
  if (type === "clock") return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  if (type === "shield") return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="/images/cta-bg.jpg"
          alt="Construction site"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/82" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,rgba(255,107,0,0.06),transparent)]" />
      </motion.div>

      {/* Blueprint grid */}
      <div className="blueprint-grid absolute inset-0 opacity-20" />

      {/* Decorative corner lines */}
      <div className="absolute left-8 top-8 h-16 w-16 border-l-2 border-t-2 border-accent/25" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-gold/20" />

      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — main CTA */}
            <ScrollReveal>
              <span className="section-tag">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Start Your Project
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.2rem]">
                Ready to Build Your{" "}
                <span className="text-gradient block">Next Project?</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-light">
                Partner with Nepal&apos;s most trusted construction experts. Let&apos;s
                bring your vision to life with quality, precision, and
                engineering excellence.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact/" className="btn-primary">
                  Request Consultation
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/projects/" className="btn-outline">
                  View Our Work
                </Link>
              </div>
            </ScrollReveal>

            {/* Right — feature cards */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    className="gradient-border-card flex items-center gap-5 p-5"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                      <FeatureIcon type={f.icon} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {f.label}
                      </p>
                      <p className="mt-0.5 font-display text-lg font-semibold text-white">
                        {f.value}
                      </p>
                    </div>
                    <svg className="ml-auto h-4 w-4 shrink-0 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                ))}

                {/* Contact strip */}
                <div className="mt-2 flex items-center gap-4 rounded-xl border border-white/6 bg-white/[0.03] px-5 py-4">
                  <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted">Call us directly</p>
                    <p className="text-sm font-semibold text-white">+977 1-4XXXXXX</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
