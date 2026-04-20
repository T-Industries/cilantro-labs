"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Sprout, Users } from "lucide-react";
import { SectionHeader } from "./pillars";

const items = [
  {
    icon: Sprout,
    title: "Built for restaurants, not retrofitted.",
    body: "Every agent is shaped around the cadence of a working kitchen and dining room — not generic SaaS workflows.",
  },
  {
    icon: Users,
    title: "Owner-first, not engineer-first.",
    body: "If you can describe what you want done, you can put it on the agents. No dashboards to babysit.",
  },
  {
    icon: Clock,
    title: "Hours back, every week.",
    body: "Reclaim the recurring busywork. Spend the time on guests, food, and the things only humans can do.",
  },
  {
    icon: Shield,
    title: "Quiet, reliable, accountable.",
    body: "Agents work in the background, surface what you need to know, and stay out of your way.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Why Cilantro Labs"
          title="We're building the AI team you wish you could hire."
          subtitle="Restaurants don't need more software. They need fewer things on the owner's plate. That's the whole point."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-background p-7"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-card text-accent">
                  <it.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="text-base font-semibold tracking-tight">
                  {it.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
