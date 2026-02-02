import { experiences } from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Experience
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Building products and supporting teams across web and IT.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          I&#39;ve worked with small teams to deliver customer-facing websites,
          internal portals, and custom UI systems. I&#39;m now looking for
          software development and IT roles where I can apply that experience.
        </p>
      </section>

      <section className="grid gap-6">
        {experiences.map((role) => (
          <article
            key={`${role.company}-${role.role}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {role.role} · {role.company}
                </h2>
                <p className="text-sm text-slate-400">{role.location}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {role.timeframe}
              </p>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              {role.bullets.map((bullet) => (
                <li key={`${role.company}-${bullet}`}>• {bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
