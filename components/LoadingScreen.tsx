"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            {/* Logo with glow ring */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-accent/10 blur-xl" />
              <motion.div
                initial={{ rotate: -10, scale: 0.7 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <Image src="/logo.svg" alt="Logo" width={100} height={100} priority />
              </motion.div>
            </div>

            {/* Name + motto */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Superior Nirman Sewa
              </h2>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-accent/60" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent/90">
                  Building Excellence
                </p>
                <span className="h-px w-8 bg-accent/60" />
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="h-[3px] w-64 overflow-hidden rounded-full bg-white/10 sm:w-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent via-accent-light to-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
