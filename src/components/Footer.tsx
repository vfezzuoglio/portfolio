import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--text-muted)]">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  )
}
