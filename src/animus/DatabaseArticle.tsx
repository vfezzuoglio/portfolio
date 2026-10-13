import type { ReactNode } from 'react'
import { profile } from '../data/resume'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function DatabaseArticle({
  categoryLabel,
  title,
  body,
  children,
}: {
  categoryLabel: string
  title: string
  body: string
  children?: ReactNode
}) {
  return (
    <div className="animus-article">
      <div className="animus-article-media">
        <span className="animus-article-monogram">{initials(profile.name)}</span>
      </div>
      <div className="animus-article-panel">
        <div className="animus-article-header">
          <span>{categoryLabel}</span>
        </div>
        <div className="animus-article-body">
          <h2 className="animus-article-title">{title}</h2>
          <p>{body}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
