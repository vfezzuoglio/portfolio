import { otherRepos, projects } from '../data/resume'
import { Section } from './Section'

const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572a5',
  'C#': '#178600',
  'C++': '#f34b7d',
  Go: '#00add8',
}

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
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-[var(--text)] hover:text-[var(--accent)]"
              >
                {project.name}
              </a>
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

      <h3 className="mb-6 mt-12 text-lg font-medium text-[var(--text)]">More on GitHub</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-left transition-colors hover:border-[var(--accent)]"
          >
            <p className="truncate text-sm font-medium text-[var(--text)]">{repo.name}</p>
            <div className="mt-2 flex items-center gap-3 text-xs text-[var(--text-muted)]">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: languageColors[repo.language] ?? 'var(--text-muted)' }}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stars && <span>★ {repo.stars}</span>}
              {repo.updated && <span>Updated {repo.updated}</span>}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
