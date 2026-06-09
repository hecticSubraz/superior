import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { managingDirector } from "@/lib/data";

export default function ManagingDirector() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={managingDirector.image}
                alt={managingDirector.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold to-accent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 sm:p-10 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Leadership
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Message from the Managing Director
              </h2>

              <div className="relative mt-8">
                <span className="absolute -left-2 -top-4 font-display text-6xl text-accent/20">
                  &ldquo;
                </span>
                <blockquote className="relative border-l-2 border-accent/50 pl-6 text-base leading-relaxed text-muted-light sm:text-lg">
                  {managingDirector.quote}
                </blockquote>
              </div>

              <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="font-display text-xl font-semibold text-white">
                    {managingDirector.name}
                  </p>
                  <p className="mt-1 text-sm text-gold">{managingDirector.position}</p>
                </div>
                <p className="font-display text-2xl italic text-accent/60">
                  {managingDirector.signature}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
