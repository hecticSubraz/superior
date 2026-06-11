"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = [
  "Building Construction",
  "Residential",
  "Commercial",
  "Road & Infrastructure",
  "Renovation",
  "Other",
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend-only form — connect backend API here later:
    // const response = await fetch('/api/contact', { method: 'POST', body: formData });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card flex flex-col items-center p-6 text-center sm:p-12"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Thank You!</h3>
            <p className="mt-2 max-w-md text-muted">
              Your message has been received. Our team will get back to you within 24-48 hours.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="btn-outline mt-6 text-xs"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="glass-card space-y-6 p-5 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-foreground placeholder-stone-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-foreground placeholder-stone-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-muted">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-foreground placeholder-stone-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="+977 9851137519"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-muted">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-white">
                    Select type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-stone-300 bg-white px-4 py-3 text-foreground placeholder-stone-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
