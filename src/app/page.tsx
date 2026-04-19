import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Why } from "@/components/why";
import { How } from "@/components/how";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Why />
        <How />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
