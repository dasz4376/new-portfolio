import { socialLinks } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Let&#39;s connect about software opportunities.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          I&#39;m actively looking for software development and IT roles,
          including junior software positions, and I&#39;m open to teams that
          value growth, collaboration, and clean engineering.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-xl font-semibold text-white">Reach out</h2>
          <p className="mt-2 text-sm text-slate-300">
            Email is the fastest way to reach me.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <a
              href="mailto:mattdarabasz@gmail.com"
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-200 transition hover:border-white/30 hover:bg-slate-900/60"
            >
              mattdarabasz@gmail.com
            </a>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
              Wenonah, New Jersey · Remote-friendly
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
              Open to mentorship, feedback, and learning in a role.
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-xl font-semibold text-white">Find me online</h2>
          <p className="mt-2 text-sm text-slate-300">
            Quick links to the places I share work and updates.
          </p>
          <div className="mt-6 grid gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-200 transition hover:border-white/30 hover:bg-slate-900/60"
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
      </section>
    </div>
  );
}
