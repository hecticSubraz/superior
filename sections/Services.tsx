"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="blueprint-grid absolute inset-0 opacity-10" />
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            What We Do
          </span>
          <h2 className="section-heading mt-5">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Comprehensive construction solutions tailored to meet the diverse
            needs of residential, commercial, and infrastructure projects.
          </p>
        </ScrollReveal>

        {/* Services grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.07}>
              <motion.div
                className="gradient-border-card group relative h-full cursor-default p-8 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Top accent line — reveals on hover */}
                <div className="absolute left-0 top-0 h-[2px] w-0 rounded-tl-2xl bg-gradient-to-r from-accent to-gold transition-all duration-500 group-hover:w-full" />

                {/* Service number */}
                <span className="step-number absolute right-6 top-4 text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-white">
                  <ServiceIcon type={service.icon} className="h-7 w-7" />
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 transition-opacity group-hover:opacity-0 group-hover:animate-pulse-ring" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-muted-light">
                  {service.description}
                </p>

                {/* Bottom arrow row */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted transition-all duration-300 group-hover:text-accent">
                  <span>Learn more</span>
                  <svg
                    className="h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-12 text-center" delay={0.15}>
          <Link href="/services/" className="btn-outline">
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
