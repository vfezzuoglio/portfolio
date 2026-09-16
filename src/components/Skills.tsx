import { skills } from '../data/resume'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <h3 className="mb-3 text-sm font-medium text-[var(--text-muted)]">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm text-[var(--accent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
