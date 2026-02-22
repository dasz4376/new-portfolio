import Link from "next/link";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Projects
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Selected work from production environments.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          These projects reflect real client and internal needs: responsive
          websites, UI features, and performance-focused improvements.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">
                {project.name}
              </h2>
              <p className="mt-3 text-sm text-slate-300">
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
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-3">
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
              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Ask about this work →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
