import { experience, volunteer } from '../data/resume'
import { Section } from './Section'

function Entry({
  company,
  location,
  role,
  date,
  bullets,
}: {
  company: string
  location: string
  role: string
  date: string
  bullets: string[]
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-left">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium text-[var(--text)]">{role}</h3>
        <span className="text-sm text-[var(--text-muted)]">{date}</span>
      </div>
      <p className="mb-4 text-sm text-[var(--accent)]">
        {company} · {location}
      </p>
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <Entry key={job.company} {...job} />
        ))}
      </div>

      <h3 className="mb-6 mt-12 text-lg font-medium text-[var(--text)]">Volunteer Work</h3>
      <div className="space-y-6">
        {volunteer.map((job) => (
          <Entry key={job.company} {...job} />
        ))}
      </div>
    </Section>
  )
}
