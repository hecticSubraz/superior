"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const normalize = (path: string) => path.replace(/\/$/, "") || "/";
  const currentPath = normalize(pathname);
  const isHome = currentPath === "/";

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-gold to-accent"
        style={{ scaleX }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || !isHome
            ? "bg-background/95 backdrop-blur-2xl border-b border-stone-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
      >
        {/* true when the background is the cream page (not see-through hero) */}
        {(() => {
          const isLight = isScrolled || !isHome;
          return (
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
              {/* Logo */}
              <Link href="/" className="group flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-xl bg-accent/0 transition-all duration-300 group-hover:bg-accent/10" />
                  <Image
                    src="/logo.svg"
                    alt={SITE_NAME}
                    width={42}
                    height={42}
                    className="relative transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className={cn(
                    "block font-display text-[1.1rem] font-bold leading-tight transition-colors duration-500",
                    isLight ? "text-foreground" : "text-white"
                  )}>
                    Superior
                  </span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-[11px]">
                    Nirman Sewa
                  </span>
                </div>
              </Link>

              {/* Desktop nav */}
              <ul className="hidden items-center gap-1 lg:flex">
                {NAV_LINKS.map((link) => {
                  const isActive = currentPath === normalize(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
                          isActive
                            ? isLight ? "text-foreground" : "text-white"
                            : isLight
                              ? "text-muted hover:text-foreground"
                              : "text-white/70 hover:text-white"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className={cn(
                              "absolute inset-0 rounded-full border",
                              isLight
                                ? "bg-foreground/6 border-foreground/10"
                                : "bg-white/8 border-white/10"
                            )}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                          />
                        )}
                        <span className="relative">{link.label}</span>
                        {isActive && (
                          <motion.span
                            layoutId="nav-dot"
                            className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <Link
                href="/contact/"
                className="btn-primary hidden text-[11px] lg:inline-flex"
              >
                Get Free Quote
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Hamburger */}
              <button
                type="button"
                className={cn(
                  "relative z-50 flex h-11 w-11 flex-col items-center justify-center rounded-xl backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-accent/10 lg:hidden",
                  isLight
                    ? "border border-stone-300 bg-stone-100/80"
                    : "border border-white/10 bg-white/5"
                )}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
              >
                <span className={cn(
                  "h-[1.5px] w-5 transition-all duration-300 origin-center",
                  isLight ? "bg-foreground" : "bg-white",
                  isMobileOpen ? "translate-y-[3.5px] rotate-45" : "mb-[5px]"
                )} />
                <span className={cn(
                  "h-[1.5px] transition-all duration-300",
                  isLight ? "bg-foreground" : "bg-white",
                  isMobileOpen ? "w-5 -translate-y-[3.5px] -rotate-45" : "w-3.5"
                )} />
              </button>
            </nav>
          );
        })()}

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-stone-200 bg-background/98 backdrop-blur-2xl lg:hidden"
            >
              <ul className="flex flex-col px-4 pb-6 pt-4">
                {NAV_LINKS.map((link, i) => {
                  const isActive = currentPath === normalize(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all",
                          isActive
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "text-muted hover:bg-stone-100 hover:text-foreground"
                        )}
                      >
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.li
                  className="mt-4 px-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/contact/" className="btn-primary w-full justify-center text-xs">
                    Get Free Quote
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
