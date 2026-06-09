import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import CTA from "@/sections/CTA";
import {
  managingDirector,
  values,
  team,
  companyHistory,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Superior Nirman Sewa — our mission, vision, values, history, and leadership team driving construction excellence in Nepal.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Superior Nirman Sewa"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Who We Are
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Superior Nirman Sewa
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading">Company Introduction</h2>
              <p className="section-subheading mx-auto mt-6">
                Founded in Kathmandu, Superior Nirman Sewa has grown into one of
                Nepal&apos;s most trusted construction companies. We specialize in
                building construction, infrastructure development, and
                comprehensive project management — delivering projects that stand
                as monuments to quality and engineering excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <div className="glass-card h-full p-8 sm:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
                <p className="mt-4 leading-relaxed text-muted-light">
                  To deliver world-class construction services that exceed client
                  expectations, contribute to Nepal&apos;s infrastructure growth,
                  and set new benchmarks for quality, safety, and sustainability
                  in the building industry.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="glass-card h-full p-8 sm:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
                <p className="mt-4 leading-relaxed text-muted-light">
                  To be Nepal&apos;s most respected construction company,
                  recognized for engineering innovation, ethical business
                  practices, and transformative projects that shape communities
                  and drive national development.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center">
            <h2 className="section-heading">Our Values</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="glass-card-hover h-full p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-accent">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center">
            <h2 className="section-heading">Our History</h2>
          </ScrollReveal>
          <div className="mt-12 space-y-8">
            {companyHistory.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <span className="font-display text-3xl font-bold text-accent sm:w-24">
                    {item.year}
                  </span>
                  <div className="glass-card flex-1 p-6">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center">
            <h2 className="section-heading">Leadership Team</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.1}>
                <div className="glass-card-hover h-full p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 font-display text-2xl font-bold text-accent">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold">{member.role}</p>
                  <p className="mt-3 text-sm text-muted">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={managingDirector.image}
                  alt={managingDirector.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Managing Director
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                {managingDirector.name}
              </h2>
              <p className="mt-2 text-gold">{managingDirector.position}</p>
              <p className="mt-6 leading-relaxed text-muted-light">
                {managingDirector.quote}
              </p>
              <p className="mt-6 font-display text-xl italic text-accent/70">
                — {managingDirector.signature}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
