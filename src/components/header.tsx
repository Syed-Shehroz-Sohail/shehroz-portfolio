"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";
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
      <nav className="desktop-nav" aria-label="Main navigation">
        <div className="nav-group">{navigation.slice(0, 3).map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <a href="#home" className="wordmark" aria-label={`${site.shortName}, home`}>{site.shortName}<span>.</span></a>
        <div className="nav-group">{navigation.slice(3).map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
      </nav>
      <a href="#home" className="wordmark mobile-wordmark" aria-label={`${site.shortName}, home`}>{site.shortName}<span>.</span></a>
      <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span className={open ? "menu-lines is-open" : "menu-lines"}><i /><i /></span></button>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {navigation.map(item => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Arrow diagonal /></a>
        ))}
      </nav>
    </header>
  );
}
