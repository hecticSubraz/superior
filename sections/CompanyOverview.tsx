"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { stats } from "@/lib/data";

export default function CompanyOverview() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/company-bg.jpg"
          alt="Company background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Track Record
            </span>
            <h2 className="section-heading mt-4">Company Overview</h2>
            <p className="section-subheading mx-auto">
              Numbers that reflect our commitment to excellence and the trust
              placed in us by clients across Nepal.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="glass-card-hover group p-8 text-center">
                  <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-light transition-colors group-hover:text-accent">
                    {stat.label}
                  </p>
                  <div className="mx-auto mt-4 h-0.5 w-12 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
