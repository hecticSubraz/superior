import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-accent">404</h1>
      <h2 className="mt-4 font-display text-2xl font-semibold text-white">
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
