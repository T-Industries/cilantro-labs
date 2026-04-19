"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./pillars";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Plug Cilantro Labs into the few systems your restaurant already uses. Setup is measured in minutes, not weeks.",
  },
  {
    n: "02",
    title: "Delegate",
    body: "Tell the agents what you want handled. They take it from there — coordinating, executing, and checking their own work.",
  },
  {
    n: "03",
    title: "Grow",
    body: "Get your time back. Watch the operation run smoother every week as the agents learn the rhythm of your restaurant.",
  },
];

export function How() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps to a restaurant that runs itself."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">{s.n}</span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
