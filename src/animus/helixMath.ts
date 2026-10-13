export const AMPLITUDE = 9
export const BASE_Y = 52
export const FREQ = 1.3
export const PHASE = 0.5

export function yFor(t: number) {
  return BASE_Y + AMPLITUDE * Math.sin(t * Math.PI * FREQ + PHASE)
}

export function nodeT(index: number, count: number) {
  if (count <= 1) return 0.5
  return 0.14 + (0.72 * index) / (count - 1)
}

function toHex2(n: number) {
  return n.toString(16).padStart(2, '0')
}

export function lerpColor(a: string, b: string, t: number) {
  const clamp = Math.max(0, Math.min(1, t))
  const ah = parseInt(a.slice(1), 16)
  const bh = parseInt(b.slice(1), 16)
  const ar = (ah >> 16) & 0xff
  const ag = (ah >> 8) & 0xff
  const ab = ah & 0xff
  const br = (bh >> 16) & 0xff
  const bg = (bh >> 8) & 0xff
  const bb = bh & 0xff
  const r = Math.round(ar + (br - ar) * clamp)
  const g = Math.round(ag + (bg - ag) * clamp)
  const bl = Math.round(ab + (bb - ab) * clamp)
  return `#${toHex2(r)}${toHex2(g)}${toHex2(bl)}`
}
