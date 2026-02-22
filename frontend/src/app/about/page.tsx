import { achievements, education, skills } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          About
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Full-stack developer with hands-on software and IT experience.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          I have built & maintained production web applications and support
          infrastructure, identity systems, and deployment workflows. My work
          spans frontend development, backend integration, and IT systems in
          startup environments.
        </p>
        <p className="mt-4 text-base text-slate-300">
          I&#39;m currently deepening implementation-level skills in JavaScript,
          React, and backend development while looking for a collaborative
          engineering environment that values code quality and mentorship.
        </p>
        <p className="mt-4 text-base text-slate-300">
          I work best with clear communication and feedback loops that help
          teams ship reliable improvements.
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
