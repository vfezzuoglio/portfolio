import { certifications, education } from '../data/resume'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-left"
          >
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-medium text-[var(--text)]">{edu.degree}</h3>
              <span className="text-sm text-[var(--text-muted)]">{edu.date}</span>
            </div>
            <p className="text-sm text-[var(--accent)]">
              {edu.school} · {edu.location}
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{edu.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 text-left"
          >
            <p className="text-sm font-medium text-[var(--text)]">{cert.name}</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">{cert.date}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
