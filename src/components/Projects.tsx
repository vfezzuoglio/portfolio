import { projects } from '../data/resume'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-left"
          >
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium text-[var(--text)]">{project.name}</h3>
              <span className="text-xs text-[var(--text-muted)]">{project.date}</span>
            </div>
            <p className="mb-3 text-sm text-[var(--accent)]">{project.subtitle}</p>
            <ul className="mb-4 flex-1 space-y-2">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[var(--bg-soft)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
