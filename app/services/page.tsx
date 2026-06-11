import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import ServiceIcon from "@/components/ServiceIcon";
import CTA from "@/sections/CTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Superior Nirman Sewa's construction services — building, residential, commercial, road construction, renovation, and project management.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-24">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What We Offer
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            End-to-end construction solutions backed by expertise, innovation,
            and an unwavering commitment to quality.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl space-y-14 sm:space-y-24">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <div
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12"
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {service.description}
                  </p>

                  <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent-dark">
                    Key Benefits
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-stone-600">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
