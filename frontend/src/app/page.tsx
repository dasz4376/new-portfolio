import Link from "next/link";
import {
  achievements,
  highlights,
  projects,
  skills,
} from "@/lib/site-data";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Full-stack developer with IT & systems background
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Matthew Darabasz
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Full-stack developer building{" "}
            <span className="bg-linear-to-r from-blue-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              production web apps
            </span>{" "}
            and internal tools.
          </h1>
          <p className="text-lg text-slate-300">
            Hands-on experience building and maintaining production web
            applications while supporting infrastructure, identity systems, and
            deployment workflows. I&#39;m currently deepening implementation-level
            skills in JavaScript, React, and backend development.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Contact Me
            </Link>
            <a
              href="/MatthewDarabaszResume.pdf"
              className="rounded-full border border-white/20 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
            <Link
              href="/projects"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
            >
              Explore Projects
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-400">
            {["Full-Stack", "React", "TypeScript", "IT Systems"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(59,130,246,0.25)] transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
          <p className="text-sm font-semibold text-slate-200">How I Work</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Full-stack delivery with an operational mindset.
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            I like to own features end-to-end—scoping the problem, building a
            clean UI, and backing it with reliable backend and data work. I have
            collaborated with stakeholders in recent roles to translate operational needs into
            technical solutions. I&#39;m currently seeking software development
            and IT roles, including junior positions, where I can learn and grow
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Craft · Iterate · Deliver
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/70"
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

      <section className="grid gap-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Featured Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Project work grounded in real roles.
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-200 transition hover:text-white"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  0{index + 1}
                </span>
              </div>
              <div>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {project.highlight}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={`${project.name}-${tech}`}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition group-hover:border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  className="text-sm font-semibold text-slate-200 transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
                  Visit live site →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Achievements
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Highlights from recent roles.
          </h2>
          <div className="mt-6 grid gap-4">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/80"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-xs text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Skills Snapshot
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            The toolkit I use every day.
          </h2>
          <div className="mt-6 grid gap-4">
            {skills.map((group) => (
              <div
                key={group.group}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/80"
              >
                <p className="text-sm font-semibold text-white">
                  {group.group}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={`${group.group}-${item}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:border-white/30 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
