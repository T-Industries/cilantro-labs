"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-radial-accent absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 text-center sm:pt-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>AI agents · purpose-built for hospitality</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.03em] sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">The AI workforce</span>
          <br />
          <span className="accent-gradient">behind every great restaurant.</span>
        </motion.h1>
      </div>
    </section>
  );
}
