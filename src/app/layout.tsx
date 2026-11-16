import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Lead Software Engineer`,
  description: site.description,
  alternates: { canonical: site.url },
  icons: { icon: `${site.basePath}/icon.svg` },
  openGraph: {
    title: `${site.name} — Lead Software Engineer`,
    description: site.description,
    url: site.url,
    type: "website",
    images: [{ url: new URL("social-card.png", site.url).href, width: 1200, height: 630, alt: "Syed Shehroz Sohail — Lead Software Engineer. Building systems. Leading delivery." }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} — Lead Software Engineer`, description: site.description, images: [new URL("social-card.png", site.url).href] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
