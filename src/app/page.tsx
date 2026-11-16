import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

const buildingBlocks = ["React.js", "React Native", "Next.js", "TypeScript", "Laravel", "MySQL", "Solution architecture"];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <div className="stack-strip">
          <div className="shell">
            <span>THE BUILDING BLOCKS</span>
            <ul aria-label="The Building Blocks">
              {buildingBlocks.map((technology, index) => (
                <li key={technology}>
                  {index > 0 && <span className="stack-separator" aria-hidden="true">✳</span>}
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Work />
        <About />
        <Services />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
