"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Digital presence, automated.",
    body: "Your restaurant's web presence — set up, kept current, and continuously tuned by AI. Owners stay out of the dashboard.",
  },
  {
    icon: Workflow,
    title: "Operations on autopilot.",
    body: "The recurring back-of-house work that drains your week, handled by agents that never miss a deadline or a detail.",
  },
  {
    icon: Cpu,
    title: "Agents that ship work.",
    body: "Not chatbots. Purpose-built AI agents that take action, coordinate with each other, and report back in plain English.",
  },
];

export function Pillars() {
  return (
    <section id="platform" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Platform"
          title="A team of AI agents, working in the background."
          subtitle="One platform. Three pillars. Built specifically for the way restaurants actually run."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-accent">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
