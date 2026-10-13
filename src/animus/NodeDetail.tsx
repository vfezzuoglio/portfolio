import { profile } from '../data/resume'
import type { MemoryNode } from './nodes'
import { EntryCard } from './EntryCard'

function SummaryDetail({ node }: { node: MemoryNode }) {
  return (
    <EntryCard meta={node.meta}>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--a-text)', margin: '0 0 16px' }}>{profile.blurb}</p>
      <div className="animus-contact-grid">
        <a className="animus-contact-link" href={`mailto:${profile.email}`}>
          <span className="label">Email</span>
          <span className="value">{profile.email}</span>
        </a>
        <a className="animus-contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
          <span className="label">LinkedIn</span>
          <span className="value">linkedin.com/in/vincent-fezzuoglio</span>
        </a>
        <a className="animus-contact-link" href={profile.github} target="_blank" rel="noreferrer">
          <span className="label">GitHub</span>
          <span className="value">github.com/vfezzuoglio</span>
        </a>
      </div>
    </EntryCard>
  )
}

function ContactDetail() {
  return (
    <div className="animus-contact-grid">
      <a className="animus-contact-link" href={`mailto:${profile.email}`}>
        <span className="label">Transmit Message</span>
        <span className="value">{profile.email}</span>
      </a>
      <a className="animus-contact-link" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
        <span className="label">Direct Channel</span>
        <span className="value">{profile.phone}</span>
      </a>
      <a className="animus-contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
        <span className="label">LinkedIn</span>
        <span className="value">vincent-fezzuoglio</span>
      </a>
      <a className="animus-contact-link" href={profile.github} target="_blank" rel="noreferrer">
        <span className="label">GitHub</span>
        <span className="value">vfezzuoglio</span>
      </a>
      <a className="animus-contact-link" href={`https://${profile.website}`} target="_blank" rel="noreferrer">
        <span className="label">Network Node</span>
        <span className="value">{profile.website}</span>
      </a>
      <a className="animus-contact-link" href="/Vincent_Fezzuoglio_Resume.pdf" target="_blank" rel="noreferrer">
        <span className="label">Dossier</span>
        <span className="value">Download résumé</span>
      </a>
    </div>
  )
}

function SkillsDetail({ node }: { node: MemoryNode }) {
  return (
    <EntryCard>
      <div className="animus-chip-grid">
        {node.skillItems?.map((item) => (
          <span key={item} className="animus-chip">
            {item}
          </span>
        ))}
      </div>
    </EntryCard>
  )
}

function ReposDetail({ node }: { node: MemoryNode }) {
  return (
    <>
      <div className="animus-entry-sub" style={{ marginBottom: 14 }}>
        {node.meta}
      </div>
      <div className="animus-grid-cards">
        {node.repoItems?.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="animus-card"
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <div className="animus-card-title" style={{ fontSize: 15 }}>
              {repo.name}
            </div>
            <div className="animus-card-date" style={{ marginTop: 6 }}>
              {[repo.language, repo.updated && `Updated ${repo.updated}`, repo.stars && `★ ${repo.stars}`]
                .filter(Boolean)
                .join(' · ')}
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export function NodeDetail({ node }: { node: MemoryNode }) {
  switch (node.kind) {
    case 'summary':
      return <SummaryDetail node={node} />
    case 'contact':
      return <ContactDetail />
    case 'skills':
      return <SkillsDetail node={node} />
    case 'repos':
      return <ReposDetail node={node} />
    default:
      return (
        <EntryCard
          meta={node.meta}
          date={node.date}
          tag={node.tag}
          paragraphs={node.paragraphs}
          bullets={node.bullets}
          tags={node.tags}
        >
          {node.href && (
            <a className="animus-modal-link" href={node.href} target="_blank" rel="noreferrer">
              View repository ↗
            </a>
          )}
        </EntryCard>
      )
  }
}
