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

function useParticles(count: number, seed: number) {
  return useMemo(() => {
    const rand = seededRandom(seed)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size: 4 + rand() * 10,
      duration: 10 + rand() * 14,
      delay: rand() * -20,
      opacity: 0.15 + rand() * 0.35,
    }))
  }, [count, seed])
}

export function AnimusBackground() {
  const particles = useParticles(26, 7)

  return (
    <div className="animus-bg" aria-hidden="true">
      <div className="animus-grid" />
      <svg className="animus-strands" viewBox="0 0 1600 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="strandFade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--a-line)" stopOpacity="0" />
            <stop offset="15%" stopColor="var(--a-line)" stopOpacity="1" />
            <stop offset="85%" stopColor="var(--a-line)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--a-line)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="animus-strand animus-strand--a">
          <path
            d="M -200 300 C 100 200, 300 420, 600 320 S 1100 180, 1400 320 S 1900 420, 2200 300"
            fill="none"
            stroke="url(#strandFade)"
            strokeWidth="2.5"
          />
        </g>
        <g className="animus-strand animus-strand--b">
          <path
            d="M -200 340 C 100 440, 300 220, 600 360 S 1100 500, 1400 360 S 1900 220, 2200 340"
            fill="none"
            stroke="url(#strandFade)"
            strokeWidth="1.5"
          />
        </g>
        <g className="animus-strand animus-strand--c">
          <path
            d="M -200 500 C 150 420, 350 620, 650 520 S 1150 400, 1450 520 S 1950 620, 2200 500"
            fill="none"
            stroke="url(#strandFade)"
            strokeWidth="1"
          />
        </g>
      </svg>
      <div className="animus-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="animus-particle"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="animus-vignette" />
    </div>
  )
}
