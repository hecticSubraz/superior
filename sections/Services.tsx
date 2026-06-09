import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </span>
          <h2 className="section-heading mt-4">Our Services</h2>
          <p className="section-subheading mx-auto">
            Comprehensive construction solutions tailored to meet the diverse
            needs of residential, commercial, and infrastructure projects.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.08}>
              <TiltCard>
                <div className="glass-card-hover group h-full p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link href="/services/" className="btn-outline text-xs">
            View All Services
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
