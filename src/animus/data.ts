export type CategoryId =
  | 'overview'
  | 'people'
  | 'locations'
  | 'secret-locations'
  | 'documents'
  | 'projects'
  | 'abilities'
  | 'user-manual'

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
  { id: 'overview', label: 'RECENT ENTRIES', description: 'Profile summary and current synchronization status.' },
  { id: 'people', label: 'PEOPLE', description: 'Subject biography and academic record.' },
  { id: 'locations', label: 'LOCATIONS', description: 'Professional engagements, by location and timeframe.' },
  { id: 'secret-locations', label: 'SECRET LOCATIONS', description: 'Unlisted engagements. Volunteer activity.' },
  { id: 'documents', label: 'DOCUMENTS', description: 'Certifications and recovered dossiers.' },
  { id: 'projects', label: 'PROJECTS', description: 'Constructed artifacts and simulated systems.' },
  { id: 'abilities', label: 'ABILITIES', description: 'Trained skills and equipped tools.' },
  { id: 'user-manual', label: 'USER MANUAL', description: 'Instructions for establishing contact.' },
]
