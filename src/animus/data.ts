export type CategoryId =
  | 'summary'
  | 'education'
  | 'work-experience'
  | 'volunteer'
  | 'certifications'
  | 'projects'
  | 'skills'
  | 'contact'

export type Category = {
  id: CategoryId
  label: string
  description: string
}

export function synchFor(seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return 78 + (hash % 20)
}

export const categories: Category[] = [
  { id: 'summary', label: 'SUMMARY', description: 'Profile overview and current synchronization status.' },
  { id: 'education', label: 'EDUCATION', description: 'Academic record.' },
  { id: 'work-experience', label: 'WORK EXPERIENCE', description: 'Professional engagements, by role and timeframe.' },
  { id: 'volunteer', label: 'VOLUNTEER', description: 'Unpaid engagements and community contributions.' },
  { id: 'certifications', label: 'CERTIFICATIONS', description: 'Verified credentials.' },
  { id: 'projects', label: 'PROJECTS', description: 'Constructed artifacts and simulated systems.' },
  { id: 'skills', label: 'SKILLS', description: 'Trained abilities and equipped tools.' },
  { id: 'contact', label: 'CONTACT', description: 'Instructions for establishing contact.' },
]
