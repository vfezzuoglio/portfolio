import { profile } from '../data/resume'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center md:pt-28">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
        {profile.title}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
        {profile.name}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
        {profile.blurb}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="/Vincent_Fezzuoglio_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
