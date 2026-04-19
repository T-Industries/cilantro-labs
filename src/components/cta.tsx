import { WaitlistForm } from "./waitlist-form";

export function CTA() {
  return (
    <section id="waitlist" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <div className="relative overflow-hidden rounded-3xl border border-border p-10 sm:p-14">
          <div className="bg-radial-accent absolute inset-0 -z-10" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Early access
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Run your restaurant.
            <br />
            <span className="accent-gradient">Let the agents run the rest.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">
            We're onboarding a small group of restaurants ahead of public
            launch. Add your email to be one of them.
          </p>

          <WaitlistForm />

          <p className="mt-6 text-xs text-muted">
            No spam. We'll only reach out about early access.
          </p>
        </div>
      </div>
    </section>
  );
}
