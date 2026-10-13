import {
  certifications,
  education,
  experience,
  otherRepos,
  profile,
  projects,
  skills,
  volunteer,
  type Repo,
} from '../data/resume'
import type { CategoryId } from './data'
import { synchFor } from './data'

export type NodeKind = 'card' | 'summary' | 'contact' | 'skills' | 'repos'

export type MemoryNode = {
  id: string
  title: string
  meta?: string
  date?: string
  tag?: string
  bullets?: string[]
  tags?: string[]
  href?: string
  synch: number
  kind?: NodeKind
  skillItems?: string[]
  repoItems?: Repo[]
}

function isActive(date: string) {
  return /present/i.test(date)
}

export const categoryNodes: Record<CategoryId, MemoryNode[]> = {
  summary: [
    {
      id: 'summary',
      title: profile.title,
      meta: `${profile.location} · ${profile.website}`,
      synch: 100,
      kind: 'summary',
    },
  ],
  education: education.map((edu) => ({
    id: edu.degree,
    title: edu.degree,
    meta: `${edu.school} · ${edu.location}`,
    date: edu.date,
    bullets: [edu.detail],
    synch: synchFor(edu.degree),
  })),
  'work-experience': experience.map((job) => ({
    id: `${job.company}-${job.role}`,
    title: `${job.role} — ${job.company}`,
    meta: job.location,
    date: job.date,
    tag: isActive(job.date) ? 'ACTIVE' : undefined,
    bullets: job.bullets,
    synch: synchFor(job.company + job.role),
  })),
  volunteer: volunteer.map((job) => ({
    id: `${job.company}-${job.role}`,
    title: `${job.role} — ${job.company}`,
    meta: job.location,
    date: job.date,
    bullets: job.bullets,
    synch: synchFor(job.company + job.role),
  })),
  certifications: certifications.map((cert) => ({
    id: cert.name,
    title: cert.name,
    date: cert.date,
    synch: synchFor(cert.name),
  })),
  projects: [
    ...projects.map((project) => ({
      id: project.name,
      title: project.name,
      meta: project.subtitle,
      date: project.date,
      bullets: project.bullets,
      tags: project.stack,
      href: project.github,
      synch: synchFor(project.name),
    })),
    {
      id: 'more-repos',
      title: 'More on GitHub',
      meta: `${otherRepos.length} additional repositories`,
      synch: 100,
      kind: 'repos' as const,
      repoItems: otherRepos,
    },
  ],
  skills: Object.entries(skills).map(([group, items]) => ({
    id: group,
    title: group,
    synch: synchFor(group),
    kind: 'skills' as const,
    skillItems: items,
  })),
  contact: [
    {
      id: 'contact',
      title: 'Contact',
      synch: 100,
      kind: 'contact' as const,
    },
  ],
}
