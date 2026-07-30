import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description:
    "The Plethora Literacy Club is a learning and empowerment initiative helping children build financial literacy, digital literacy, entrepreneurship, leadership, communication, and practical creative skills early.",
  keywords: [
    "literacy club",
    "financial literacy for children",
    "digital literacy Nigeria",
    "entrepreneurship for children",
    "school club Abuja",
    "child empowerment",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "A learning and empowerment initiative equipping children with financial literacy, digital skills, entrepreneurship, leadership, and practical life skills.",
    url: site.url,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "Equipping children with financial literacy, digital skills, entrepreneurship, leadership, and practical life skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
