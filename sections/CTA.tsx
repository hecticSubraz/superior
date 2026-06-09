import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Construction background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Build Your{" "}
              <span className="text-gradient">Next Project?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-light">
              Partner with Nepal&apos;s trusted construction experts. Let&apos;s
              bring your vision to life with quality, precision, and excellence.
            </p>
            <Link href="/contact/" className="btn-primary mt-10 inline-flex">
              Request Consultation
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
