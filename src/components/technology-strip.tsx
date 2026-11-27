import Image from "next/image";
import { site } from "@/lib/site";

// The local brand icons come from Simple Icons 15.0.0.
const technologies = [
  { name: "React.js", icon: "react" },
  { name: "React Native", icon: "react" },
  { name: "Flutter", icon: "flutter" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Laravel", icon: "laravel" },
  { name: "MySQL", icon: "mysql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Solution architecture", icon: "solution-architecture" },
] as const;

export function TechnologyStrip() {
  return (
    <div className="stack-strip">
      <div className="stack-track">
        {["primary", "repeat"].map(copy => (
          <ul key={copy} className="stack-list" aria-label={copy === "primary" ? "Technologies" : undefined} aria-hidden={copy === "repeat" || undefined}>
            {technologies.map(({ name, icon }) => (
              <li key={name}>
                <Image src={`${site.basePath}/technologies/${icon}.svg`} width={18} height={18} alt="" loading="eager" />
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <input className="stack-toggle" type="checkbox" aria-label="Pause technology animation" title="Pause or resume scrolling" />
    </div>
  );
}
