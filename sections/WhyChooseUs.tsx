"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";
import { timeline } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const stepColors = ["#FF6B00", "#FF8C40", "#D4AF37", "#E8CB6A", "#B0B0B0"];

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
            start: "top 55%",
            end: "bottom 45%",
            scrub: 1.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background layers */}
      <div className="blueprint-grid absolute inset-0 opacity-10" />
      <div className="absolute right-0 top-0 h-[400px] w-[300px] bg-gradient-to-bl from-accent/4 to-transparent" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[300px] bg-gradient-to-tr from-gold/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Our Process
          </span>
          <h2 className="section-heading mt-5">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            A proven five-stage process ensuring quality, transparency, and
            on-time delivery for every project we undertake.
          </p>
        </ScrollReveal>

        {/* Benefits strip */}
        <ScrollReveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {["ISO Certified", "15+ Years Experience", "120+ Projects Delivered", "98% Client Satisfaction"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-medium text-muted-light">
                <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Animated connecting line */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 hidden h-full w-px origin-top lg:left-1/2 lg:block"
            style={{
              background: `linear-gradient(to bottom, ${stepColors[0]}, ${stepColors[2]}, ${stepColors[4]})`,
            }}
          />

          <div className="space-y-10 lg:space-y-0">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={item.step} delay={index * 0.08}>
                  <div className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Card side */}
                    <div className={`lg:w-[46%] ${isEven ? "lg:pr-14 lg:text-right" : "lg:pl-14"}`}>
                      <motion.div
                        className="gradient-border-card relative overflow-hidden p-8"
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Accent corner */}
                        <div
                          className={`absolute top-0 h-[2px] w-14 ${isEven ? "right-0" : "left-0"} bg-gradient-to-r from-transparent to-accent`}
                          style={{ background: isEven ? `linear-gradient(to left, ${stepColors[index]}, transparent)` : `linear-gradient(to right, ${stepColors[index]}, transparent)` }}
                        />

                        {/* Step number */}
                        <span
                          className="font-display text-6xl font-bold leading-none"
                          style={{
                            background: `linear-gradient(135deg, ${stepColors[index]}26, transparent)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {item.step}
                        </span>

                        <h3 className="mt-1 font-display text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 hidden lg:left-1/2 lg:flex lg:items-center lg:justify-center">
                      <div className="relative">
                        <div
                          className="h-5 w-5 -translate-x-1/2 rounded-full border-2 border-background"
                          style={{ background: stepColors[index] }}
                        />
                        <div
                          className="absolute inset-0 -translate-x-1/2 rounded-full opacity-30"
                          style={{
                            background: stepColors[index],
                            animation: "pulse-ring 2s ease-out infinite",
                          }}
                        />
                      </div>
                    </div>

                    {/* Empty opposite side */}
                    <div className="hidden lg:block lg:w-[46%]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
