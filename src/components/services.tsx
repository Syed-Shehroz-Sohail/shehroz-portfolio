import { services } from "@/data/portfolio";
import { SectionHeading, ServiceIcon } from "./ui";

export function Services() {
  return (
    <section id="services" className="section shell">
      <SectionHeading label="HOW I CAN HELP" title={<>Good ideas deserve<br /><span className="accent-text">good execution.</span></>}>
        <p>Hands-on development and a collaborative approach, wherever your project needs support.</p>
      </SectionHeading>
      <div className="services-grid">
        {services.map(service => (
          <article className="service" key={service.title}>
            <ServiceIcon name={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-tags">{service.tags}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
