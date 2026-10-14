import { useMemo } from 'react'

function seededRandom(seed: number) {
  let t = seed
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

export function HomeMenuBackdrop() {
  const cards = useMemo(() => {
    const rand = seededRandom(42)
    const out: { id: number; x: number; y: number; size: number; rot: number; opacity: number }[] = []
    const count = 26
    for (let i = 0; i < count; i++) {
      const diag = i / (count - 1)
      // Cascade diagonally from lower-left toward upper-right, with jitter so it reads as a loose stack, not a grid.
      const x = -6 + diag * 58 + (rand() - 0.5) * 16
      const y = 92 - diag * 70 + (rand() - 0.5) * 14
      out.push({
        id: i,
        x,
        y,
        size: 46 + rand() * 60,
        rot: 45 + (rand() - 0.5) * 14,
        opacity: 0.35 + rand() * 0.45,
      })
    }
    return out
  }, [])

  return (
    <div className="animus-homebackdrop" aria-hidden="true">
      {cards.map((c) => (
        <span
          key={c.id}
          className="animus-homebackdrop-card"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: c.size,
            height: c.size,
            opacity: c.opacity,
            transform: `translate(-50%, -50%) rotate(${c.rot}deg)`,
          }}
        />
      ))}
    </div>
  )
}
