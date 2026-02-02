import { achievements, education, skills } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          About
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          I build reliable, user-friendly software with a full-stack mindset.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          I&#39;m a junior full-stack developer focused on React, TypeScript, and clean
          UI systems. I&#39;ve contributed to websites and internal tools, and I
          enjoy owning features end-to-end from the interface to the data layer.
        </p>
        <p className="mt-4 text-base text-slate-300">
          I&#39;m currently seeking software development and IT roles, including
          junior opportunities where I can grow and contribute.
        </p>
        <p className="mt-4 text-base text-slate-300">
          My best work happens when I can collaborate, learn from experienced
          engineers, and deliver improvements that make teams more effective.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Education
          </p>
          {education.map((item) => (
            <div key={item.school} className="mt-4">
              <h2 className="text-xl font-semibold text-white">
                {item.school}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{item.degree}</p>
              <p className="text-sm text-slate-400">
                {item.focus} · GPA {item.gpa}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {item.timeframe}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Achievements
          </p>
          <div className="mt-4 grid gap-4">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-xs text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Skills
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
            >
              <p className="text-sm font-semibold text-white">{group.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={`${group.group}-${item}`}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
