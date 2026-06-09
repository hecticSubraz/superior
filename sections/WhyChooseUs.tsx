"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";
import { timeline } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Process
          </span>
          <h2 className="section-heading mt-4">Why Choose Us</h2>
          <p className="section-subheading mx-auto">
            A proven five-stage process ensuring quality, transparency, and
            on-time delivery for every project.
          </p>
        </ScrollReveal>

        <div className="relative mt-16">
          <div
            ref={lineRef}
            className="absolute left-6 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-accent via-gold to-accent lg:left-1/2 lg:block"
          />

          <div className="space-y-12 lg:space-y-0">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="glass-card-hover p-8">
                      <span className="font-display text-3xl font-bold text-accent/30">
                        {item.step}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background lg:left-1/2 lg:block" />

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
