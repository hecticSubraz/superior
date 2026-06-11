import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
      <h1 className="font-display text-5xl font-bold text-accent sm:text-6xl">404</h1>
      <h2 className="mt-4 font-display text-xl font-semibold text-foreground sm:text-2xl">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8 text-xs">
        Back to Home
      </Link>
    </section>
  );
}
