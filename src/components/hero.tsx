import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-portrait">
        <Image
          src={`${site.basePath}/images/shehroz-portrait.webp`}
          alt=""
          width={1106}
          height={1422}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-copy shell">
        <h1 id="hero-title">{site.name}</h1>
        <p>{site.headline}</p>
      </div>
      <a className="hero-scroll" href="#work" aria-label="Scroll to portfolio">
        <span className="hero-scroll-icon" aria-hidden="true" />
        <span>Scroll</span>
      </a>
    </section>
  );
}
