import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Superior Nirman Sewa for construction consultations, project inquiries, and quotes.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get In Touch
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-muted-light">
            Ready to start your next project? Reach out and our team will respond
            within 24-48 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15}>
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <h3 className="font-display text-lg font-semibold text-white">
                      Contact Details
                    </h3>
                    <ul className="mt-4 space-y-4 text-sm text-muted-light">
                      <li className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {CONTACT.address}
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${CONTACT.phone}`} className="hover:text-accent transition-colors">
                          {CONTACT.phone}
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                          {CONTACT.email}
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {CONTACT.hours}
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card overflow-hidden">
                    <div className="flex aspect-video items-center justify-center bg-surface-light">
                      <div className="text-center p-6">
                        <svg className="mx-auto h-12 w-12 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="mt-3 text-sm text-muted">
                          Google Maps
                        </p>
                        <p className="mt-1 text-xs text-muted/70">
                          Replace with embedded map iframe when ready
                        </p>
                        {/* Embed Google Maps iframe here:
                        <iframe src="..." className="w-full h-full" loading="lazy" />
                        */}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
