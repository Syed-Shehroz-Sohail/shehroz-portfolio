import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { TechnologyStrip } from "@/components/technology-strip";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TechnologyStrip />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
