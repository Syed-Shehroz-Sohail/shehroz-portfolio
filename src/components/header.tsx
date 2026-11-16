"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/site";
import { Arrow } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeWithEscape);
    return () => document.removeEventListener("keydown", closeWithEscape);
  }, [open]);

  return (
    <header className="site-header shell">
      <a href="#home" className="wordmark" aria-label="Shehroz, back to top">shehroz<span className="text-rust">.</span><span className="wordmark-small">LEAD SOFTWARE ENGINEER</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a href="#contact" className="header-contact">Let’s talk <Arrow diagonal /></a>
      <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span className={open ? "menu-lines is-open" : "menu-lines"}><i /><i /></span></button>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {[...navigation, { label: "Contact", href: "#contact" }].map(item => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Arrow diagonal /></a>
        ))}
      </nav>
    </header>
  );
}
