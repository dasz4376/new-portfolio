import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">
              Open to opportunities
            </p>
            <p className="max-w-xl text-sm text-slate-400">
              Seeking software development and IT roles, including junior
              positions, in teams where I can grow and contribute.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <Link
                key={`footer-${link.href}`}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={`social-${link.href}`}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Matthew Darabasz. Built with Next.js,
          React, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
