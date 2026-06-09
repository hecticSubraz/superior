"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9,
        stagger: 0.15,
      });
    }, contentRef);

    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Construction site"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      <Hero3D />

      <div className="blueprint-grid absolute inset-0 z-[1] opacity-30" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Excellence in Construction
          </span>

          <h1 className="hero-title max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Building Nepal&apos;s Future with{" "}
            <span className="text-gradient">Excellence</span>
          </h1>

          <p className="hero-subtitle mt-6 max-w-2xl text-base leading-relaxed text-muted-light sm:text-lg lg:text-xl">
            Superior Nirman Sewa delivers quality construction, infrastructure
            development, and engineering solutions with commitment, innovation,
            and professionalism.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link href="/projects/" className="btn-primary">
              Explore Projects
            </Link>
            <Link href="/contact/" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
