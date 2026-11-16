import { services } from "@/data/portfolio";
import { SectionHeading, ServiceIcon } from "./ui";

export function Services() {
  return <section id="services" className="section shell"><SectionHeading number="03" label="HOW I CAN HELP" title={<>Good ideas deserve<br /><span className="serif-word">good execution.</span></>}><p>Hands-on development and a collaborative approach, wherever your project needs support.</p></SectionHeading><div className="services-grid">{services.map(service => <article className="service" key={service.number}><div className="service-top"><ServiceIcon name={service.icon} /><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><span className="service-tags">{service.tags}</span></article>)}</div></section>;
}
