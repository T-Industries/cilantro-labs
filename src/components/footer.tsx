import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-xs text-muted">
            AI agents for the modern restaurant.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-xs text-muted sm:items-end">
          <a
            href="mailto:gpwc@bluecilantro.ca"
            className="transition-colors hover:text-foreground"
          >
            gpwc@bluecilantro.ca
          </a>
          <span>© {year} Cilantro Labs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
