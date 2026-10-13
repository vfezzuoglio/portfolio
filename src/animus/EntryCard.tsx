import type { ReactNode } from 'react'

export function EntryCard({
  title,
  href,
  date,
  meta,
  tag,
  bullets,
  synch,
  tags,
  children,
}: {
  title?: string
  href?: string
  date?: string
  meta?: string
  tag?: string
  bullets?: string[]
  synch?: number
  tags?: string[]
  children?: ReactNode
}) {
  return (
    <div className="animus-card">
      {(title || date || tag) && (
        <div className="animus-card-head">
          {(title || tag) && (
            <div className="animus-card-title">
              {title && (href ? (
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              ) : (
                title
              ))}
              {tag && <span className="animus-card-tag">{tag}</span>}
            </div>
          )}
          {date && <span className="animus-card-date">{date}</span>}
        </div>
      )}
      {meta && <p className="animus-card-meta">{meta}</p>}
      {bullets && (
        <ul className="animus-bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
      {children}
      {typeof synch === 'number' && (
        <div className="animus-synchbar">
          <div className="animus-synchbar-track">
            <div className="animus-synchbar-fill" style={{ width: `${synch}%` }} />
          </div>
          <span className="animus-synchbar-label">{synch}% SYNCH</span>
        </div>
      )}
      {tags && (
        <div className="animus-tagrow">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}
