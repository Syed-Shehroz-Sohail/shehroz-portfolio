import { site } from "@/lib/site";
import { ExternalLink, ResumeLink } from "./ui";

export function Contact() {
  return (
    <>
      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="shell">
          <div className="contact-heading">
            <h2 id="contact-heading">Get In Touch</h2>
            <svg className="contact-divider" width="82" height="16" viewBox="0 0 82 16" fill="none" aria-hidden="true"><path d="M2 9c5-8 10-8 15 0s10 8 15 0 10-8 15 0 10 8 15 0 10-8 18 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className="contact-layout">
            <form className="contact-form" action={site.contactEndpoint} method="POST" aria-label="Contact form">
              <div className="contact-form-row">
                <div className="contact-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" autoComplete="name" required /></div>
                <div className="contact-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div>
              </div>
              <div className="contact-field contact-message"><label htmlFor="contact-message">Write your message</label><textarea id="contact-message" name="message" rows={6} required /></div>
              <button className="contact-submit" type="submit">Send Message</button>
            </form>
            <div className="contact-info">
              <address><dl>
                <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
                <div><dt>Phone</dt><dd><a href={`tel:${site.phoneHref}`}>{site.phone}</a></dd></div>
                <div><dt>Location</dt><dd>{site.location}</dd></div>
              </dl></address>
              <div className="contact-socials"><ExternalLink href={site.github}>GitHub</ExternalLink><ExternalLink href={site.linkedin}>LinkedIn</ExternalLink><ResumeLink>Download CV</ResumeLink></div>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer shell"><p>© {new Date().getFullYear()} {site.name}</p><p>Engineering, architecture, and delivery.</p><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  );
}
