"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

const baseLink =
  "rounded-full px-4 py-2 text-sm font-medium transition-colors";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10">
            <Image
              src="/me.jpg"
              alt="Matthew Darabasz"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Matthew Darabasz</p>
            <p className="text-xs text-slate-400">Software Developer</p>
          </div>
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 rounded bg-white" />
            <span
              className={`h-0.5 w-5 rounded bg-white transition ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span className="h-0.5 w-5 rounded bg-white" />
          </div>
        </button>
        <div className="hidden flex-1 md:block" />
        <nav className="hidden items-center justify-end gap-2 md:flex md:flex-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                scroll
                className={`${baseLink} ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block" />
      </div>
      <div
        id="mobile-nav"
        className={`absolute right-6 top-[calc(100%+0.75rem)] w-[min(18rem,90vw)] rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/60 backdrop-blur md:hidden sm:right-10 lg:right-12 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-wrap gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                scroll
                className={`${baseLink} basis-[calc(50%-0.5rem)] text-center ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
