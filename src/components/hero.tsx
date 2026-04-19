"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Cilantro Labs deploys AI agents that quietly handle the work no one
          went to culinary school for. Less admin. Less software. More
          restaurant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-px"
          >
            Get early access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#platform"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground/90 transition-colors hover:bg-card"
          >
            See the platform
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <HeroPanel />
        </motion.div>
      </div>
    </section>
  );
}

function HeroPanel() {
  const lines = [
    { agent: "front-of-house", text: "Site refreshed for tonight's specials." },
    { agent: "back-office", text: "Vendor invoices reconciled. 3 flagged for review." },
    { agent: "compliance", text: "Renewals tracked. Nothing expiring this month." },
    { agent: "insights", text: "Yesterday's recap drafted and sent to ownership." },
  ];

  return (
    <div className="glass relative overflow-hidden rounded-2xl p-2 shadow-[0_30px_120px_-20px_rgba(16,185,129,0.25)]">
      <div className="rounded-xl border border-border bg-background/60 p-5">
        <div className="mb-4 flex items-center gap-2 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent-glow)]" />
          <span>Agents · live</span>
          <span className="ml-auto font-mono text-[11px]">cilantro-labs.com</span>
        </div>
        <ul className="space-y-2.5 font-mono text-[13px] leading-relaxed">
          {lines.map((l, i) => (
            <motion.li
              key={l.agent}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 rounded-md border border-border bg-card px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                {l.agent}
              </span>
              <span className="text-foreground/90">{l.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="shimmer pointer-events-none absolute inset-x-0 top-0 h-px" />
    </div>
  );
}
