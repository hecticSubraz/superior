"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { stats } from "@/lib/data";

const marqueeItems = [
  "Building Construction",
  "Infrastructure Development",
  "Commercial Projects",
  "Residential Homes",
  "Road Construction",
  "Project Management",
  "Quality Engineering",
  "Renovation & Remodeling",
];

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE ANALYSIS NOTES (for this specific image)
//
// Aerial shot of company equipment yard:
//  • JCB backhoe loaders (yellow) clustered upper-left → primary focal anchor
//  • Dump trucks (yellow/white) lined upper-right → secondary weight
//  • Blue warehouse roof spanning upper third → depth layer
//  • Muddy open ground lower-left → lightest area → TEXT ZONE
//  • Person walking centre → scale reference, adds life
//
// Decisions:
//  • object-position: center 22%   — prioritises full equipment array
//  • 5-layer graduated overlay     — heavy L/bottom for text, light centre-right
//  • Mouse parallax: ±14px X, ±8px Y  — gentle, feels live without vertigo
//  • Scale: 1.15 on wrapper        — absorbs scroll + mouse movement headroom
//  • Ken Burns load: scale 1.0→1.05 — makes image feel alive on enter
//  • No blur                       — sharp machinery detail is a design asset
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const sectionRef   = useRef<HTMLElement>(null);
  const scrollBgRef  = useRef<HTMLDivElement>(null);
  const mouseBgRef   = useRef<HTMLDivElement>(null);   // mouse parallax target
  const imgEnterRef  = useRef<HTMLDivElement>(null);   // Ken Burns target
  const contentRef   = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number | null>(null);
  const mouseTarget  = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const isMobileRef  = useRef(false);

  // ── Scroll parallax (Framer Motion spring) ──────────────────────────────
  const { scrollY } = useScroll();
  const bgY      = useTransform(scrollY, [0, 800], [0, 180]);
  const contentY = useTransform(scrollY, [0, 500], [0, 60]);
  const contentOpacity = useTransform(scrollY, [0, 420], [1, 0.35]);

  // ── Mouse parallax (rAF loop with lerp) ─────────────────────────────────
  useEffect(() => {
    isMobileRef.current = window.matchMedia("(max-width: 768px)").matches;
    if (isMobileRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseTarget.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2, // –1 → +1
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const tick = () => {
      const LERP = 0.055; // smoothing factor — lower = slower/smoother
      const mc = mouseCurrent.current;
      const mt = mouseTarget.current;

      mc.x += (mt.x - mc.x) * LERP;
      mc.y += (mt.y - mc.y) * LERP;

      if (mouseBgRef.current) {
        // max ±14px horizontal, ±8px vertical — GPU-accelerated via translate3d
        const tx = mc.x * -14;
        const ty = mc.y * -8;
        mouseBgRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Ken Burns entrance (GSAP) ────────────────────────────────────────────
  useEffect(() => {
    if (!imgEnterRef.current) return;

    // Image scales in slowly — cinematic enter
    gsap.fromTo(
      imgEnterRef.current,
      { scale: 1.0, opacity: 0 },
      { scale: 1.05, opacity: 1, duration: 2.4, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  // ── Content entrance (GSAP staggered timeline) ──────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge",    { y: 30, opacity: 0, duration: 0.8, delay: 0.6 })
        .from(".hero-title",    { y: 70, opacity: 0, duration: 1.1 }, "-=0.4")
        .from(".hero-subtitle", { y: 40, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".hero-cta",      { y: 25, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.6")
        .from(".hero-stats",    { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.5")
        .from(".hero-scroll",   { opacity: 0, duration: 0.6 }, "-=0.3");
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ────────────────────────────────────────────────────────────────────
          BACKGROUND SYSTEM
          Layer order (back → front):
            0. Image (Ken Burns div > mouse parallax div > scroll parallax div)
            1. Overlay L1 — base dark tint
            2. Overlay L2 — bottom gradient (text readability)
            3. Overlay L3 — left column gradient (text zone)
            4. Overlay L4 — radial vignette (edge darkening)
            5. Overlay L5 — brand warm tint (right side, above machinery)
          ──────────────────────────────────────────────────────────────────── */}

      {/* Scroll parallax container — scale-[1.15] absorbs movement headroom */}
      <motion.div
        ref={scrollBgRef}
        className="absolute inset-0 z-0 scale-[1.15]"
        style={{ y: bgY, willChange: "transform" }}
        aria-hidden="true"
      >
        {/* Mouse parallax inner — translates within scaled space */}
        <div
          ref={mouseBgRef}
          className="absolute inset-0"
          style={{ willChange: "transform" }}
        >
          {/* Ken Burns scale-in container */}
          <div
            ref={imgEnterRef}
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Superior Nirman Sewa — construction equipment fleet"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_22%] max-sm:object-[38%_18%]"
              quality={88}
            />
          </div>
        </div>

        {/*
         * OVERLAY SYSTEM — 2 layers only (prevents compound-opacity blackout)
         *
         * L1: Diagonal gradient — dark lower-left (text zone) → light upper-right
         *     (machinery visible). Keeps text readable without hiding the image.
         *
         * L2: Bottom band — ensures stats row and CTAs are legible.
         *
         * Total opacity in machinery zone (upper-right): ~18–25% ✓ image visible
         * Total opacity in text zone (lower-left): ~88–92% ✓ text readable
         */}

        {/* L1 — Asymmetric diagonal: text zone dark, machinery zone open */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(118deg, rgba(11,11,11,0.88) 0%, rgba(11,11,11,0.65) 32%, rgba(11,11,11,0.22) 58%, rgba(11,11,11,0.28) 100%)",
          }}
        />

        {/* L2 — Bottom-to-top band: stats + CTAs readable, fades out at 55% height */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11,11,11,0.96) 0%, rgba(11,11,11,0.52) 28%, rgba(11,11,11,0.10) 55%, transparent 75%)",
          }}
        />

        {/* L3 — Top edge: navbar legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,11,0.45) 0%, transparent 18%)",
          }}
        />

        {/* L4 — Brand accent glow on the right (ties yellow JCBs to orange brand) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 68% 38%, rgba(255,107,0,0.07), transparent 65%)",
          }}
        />
      </motion.div>

      {/* ── Page-load curtain — fades out to reveal the background ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[3] bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.08 }}
      />



      {/* Subtle glow behind text only — right side left clean so JCBs show */}
      <div className="pointer-events-none absolute left-[5%] bottom-[30%] z-[1] h-56 w-56 rounded-full bg-accent/8 blur-[80px]" />

      {/* ────────────────────────────────────────────────────────────────────
          CONTENT
          ──────────────────────────────────────────────────────────────────── */}
      <motion.div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pt-40"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-[56rem]">
          {/* Badge */}
          <div className="hero-badge mb-5 sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Excellence in Construction Since 2009
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title font-display font-bold leading-[1.04] tracking-tight text-white text-[clamp(2.4rem,5.6vw,5.4rem)]">
            Building Nepal&apos;s{" "}
            <span className="text-gradient">Future</span>{" "}
            with Excellence
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle mt-6 max-w-2xl leading-relaxed text-white/80 text-[clamp(1rem,1.8vw,1.2rem)]">
            Superior Nirman Sewa delivers quality construction, infrastructure
            development, and engineering solutions with commitment, innovation,
            and professionalism across Nepal.
          </p>

          {/* CTA buttons */}
          <div className="hero-cta mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            <Link href="/projects/" className="btn-primary">
              Explore Projects
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact/"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/20 sm:px-8 sm:py-3.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats row — 2 cols on mobile, 4 on desktop */}
          <div className="hero-stats mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:mt-16 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-2xl border border-white/18 px-4 py-3 backdrop-blur-xl sm:px-5 sm:py-4"
                style={{ background: "rgba(255,255,255,0.10)" }}
              >
                <div className="absolute left-0 top-0 h-full w-[2px] rounded-l-xl bg-gradient-to-b from-accent to-transparent" />
                <p className="font-display text-xl font-bold text-white sm:text-2xl">
                  {stat.value}{stat.suffix}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/55 sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-12 left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex">
          <motion.div
            className="flex flex-col items-center gap-2 text-white/55"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <span className="text-[9px] uppercase tracking-[0.35em]">
              Scroll to explore
            </span>
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
              <motion.div
                className="h-1.5 w-1 rounded-full bg-accent"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ────────────────────────────────────────────────────────────────────
          MARQUEE TICKER
          ──────────────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/8 bg-black/70 py-3 backdrop-blur-sm">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 whitespace-nowrap px-6 text-xs font-medium uppercase tracking-[0.12em] text-white/65 sm:gap-6 sm:px-8 sm:tracking-[0.15em]"
            >
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
