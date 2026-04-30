import Link from "next/link";
import { Logo } from "./logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-5">
        <Link href="/" aria-label="Cilantro Labs home">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
