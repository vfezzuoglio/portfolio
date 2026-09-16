import { profile } from '../data/resume'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
        <p className="mb-6 text-[var(--text-muted)]">
          I'm always open to discussing new opportunities, projects, or just talking shop.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
            className="rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {profile.phone}
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)]">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)]">
            GitHub
          </a>
        </div>
      </div>
    </Section>
  )
}
