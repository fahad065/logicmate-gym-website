"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X, MapPin } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/membership", label: "Membership" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-md bg-volt text-ink">
            <Dumbbell className="size-5" />
          </span>
          <span className="font-display text-2xl leading-none tracking-wide">
            FORGE FITNESS
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  active ? "text-volt" : "text-white/75 hover:text-volt"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/locations"
            className="flex items-center gap-1.5 text-sm text-white/75 hover:text-volt"
          >
            <MapPin className="size-3.5" /> Find a Gym
          </Link>
          <Link
            href="/join"
            className="rounded-full bg-volt px-5 py-2 text-sm font-bold text-ink shadow-sm transition-colors hover:bg-volt-dark"
          >
            Start Free Trial
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-semibold ${
                  pathname === link.href ? "text-volt" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-volt px-5 py-2.5 text-center text-sm font-bold text-ink"
            >
              Start Free Trial
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
