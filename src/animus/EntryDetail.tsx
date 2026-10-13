import {
  certifications,
  education,
  experience,
  otherRepos,
  profile,
  projects,
  skills,
  volunteer,
} from '../data/resume'
import type { CategoryId } from './data'
import { synchFor } from './data'
import { EntryCard } from './EntryCard'

function isActive(date: string) {
  return /present/i.test(date)
}

function Overview() {
  return (
    <>
      <EntryCard title={profile.title} meta={`${profile.location} · ${profile.website}`} synch={100}>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--a-text)', margin: 0 }}>{profile.blurb}</p>
      </EntryCard>
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
    </>
  )
}

function People() {
  return (
    <>
      <EntryCard title={profile.name} meta={profile.title} synch={100}>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--a-text)', margin: 0 }}>{profile.blurb}</p>
      </EntryCard>
      {education.map((edu) => (
        <EntryCard
          key={edu.degree}
          title={edu.degree}
          meta={`${edu.school} · ${edu.location}`}
          date={edu.date}
          synch={synchFor(edu.degree)}
          bullets={[edu.detail]}
        />
      ))}
    </>
  )
}

function Locations() {
  return (
    <>
      {experience.map((job) => (
        <EntryCard
          key={job.company}
          title={`${job.role} — ${job.company}`}
          meta={job.location}
          date={job.date}
          tag={isActive(job.date) ? 'ACTIVE' : undefined}
          bullets={job.bullets}
          synch={synchFor(job.company + job.role)}
        />
      ))}
    </>
  )
}

function SecretLocations() {
  return (
    <>
      {volunteer.map((job) => (
        <EntryCard
          key={job.company}
          title={`${job.role} — ${job.company}`}
          meta={job.location}
          date={job.date}
          tag="CLASSIFIED"
          bullets={job.bullets}
          synch={synchFor(job.company + job.role)}
        />
      ))}
    </>
  )
}

function Documents() {
  return (
    <>
      <EntryCard title="Full Dossier" meta="Complete resume, exported as PDF" synch={100}>
        <a
          className="animus-contact-link"
          href="/Vincent_Fezzuoglio_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: 14 }}
        >
          <span className="label">Download</span>
          <span className="value">Vincent_Fezzuoglio_Resume.pdf</span>
        </a>
      </EntryCard>
      {certifications.map((cert) => (
        <EntryCard key={cert.name} title={cert.name} date={cert.date} synch={synchFor(cert.name)} />
      ))}
    </>
  )
}

function Projects() {
  return (
    <>
      <div className="animus-grid-cards">
        {projects.map((project) => (
          <EntryCard
            key={project.name}
            title={project.name}
            href={project.github}
            meta={project.subtitle}
            date={project.date}
            bullets={project.bullets}
            tags={project.stack}
            synch={synchFor(project.name)}
          />
        ))}
      </div>
      <h3
        style={{
          fontFamily: 'Oxanium, sans-serif',
          fontSize: 13,
          letterSpacing: '0.16em',
          color: 'var(--a-text-dim)',
          textTransform: 'uppercase',
          margin: '28px 0 14px',
        }}
      >
        Additional Fragments
      </h3>
      <div className="animus-grid-cards">
        {otherRepos.map((repo) => (
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

function Abilities() {
  return (
    <>
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="animus-ability-group">
          <h3>{group}</h3>
          <div className="animus-chip-grid">
            {items.map((item) => (
              <span key={item} className="animus-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function UserManual() {
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

export function EntryDetail({ categoryId }: { categoryId: CategoryId }) {
  switch (categoryId) {
    case 'overview':
      return <Overview />
    case 'people':
      return <People />
    case 'locations':
      return <Locations />
    case 'secret-locations':
      return <SecretLocations />
    case 'documents':
      return <Documents />
    case 'projects':
      return <Projects />
    case 'abilities':
      return <Abilities />
    case 'user-manual':
      return <UserManual />
    default:
      return null
  }
}
