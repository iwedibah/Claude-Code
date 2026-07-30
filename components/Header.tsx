"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "@/components/Logo";
import { Close, Menu } from "@/components/Icons";
import { Container } from "@/components/ui";
import { nav } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    // Deferred so the initial sync happens outside the effect body — this also
    // covers loads that land mid-page (anchor links, restored scroll position).
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-900/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-navy-900"
                    : "text-navy-800/70 hover:text-navy-900"
                }`}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-500"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-14px_rgba(10,32,56,0.9)] transition hover:-translate-y-0.5 hover:bg-navy-700"
          >
            Partner with us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-full border border-navy-900/15 text-navy-900 transition hover:bg-navy-900/5 lg:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-navy-900/10 bg-cream lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                pathname === item.href
                  ? "bg-navy-900/5 text-navy-900"
                  : "text-navy-800/80 hover:bg-navy-900/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-navy-900 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Partner with us
          </Link>
        </Container>
      </div>
    </header>
  );
}
