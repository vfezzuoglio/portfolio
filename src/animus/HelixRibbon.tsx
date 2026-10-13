import { useId, useMemo } from 'react'
import { FREQ, PHASE, lerpColor, yFor } from './helixMath'

const T_START = -0.16
const T_END = 1.16
const STEP = 0.014
const GREY_A = '#e7e8ea'
const GREY_B = '#d3d4d7'
const SHADOW = '#c3c4c8'
const RED_CORE = '#c8161f'
const RED_EDGE = '#8f0f17'

type Rung = {
  key: number
  x: number
  y: number
  angle: number
  length: number
  thickness: number
  fill: string
}

export function HelixRibbon({
  selectedT,
  opened = false,
  cursor,
}: {
  selectedT: number
  opened?: boolean
  cursor?: { x: number; y: number } | null
}) {
  const clipId = useId()
  const glowId = useId()
  const rungs = useMemo<Rung[]>(() => {
    const eps = 0.004
    const out: Rung[] = []
    let key = 0
    for (let t = T_START; t <= T_END; t += STEP) {
      const x = t * 100
      const y = yFor(t)
      const y0 = yFor(t - eps)
      const y1 = yFor(t + eps)
      const dx = eps * 2 * 100
      const dy = y1 - y0
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI

      const bulge = 3.4 * Math.sin(t * Math.PI * 2 * 1.9 + 0.4)
      const baseThickness = Math.max(5, Math.min(13, 9.5 + bulge))
      const length = STEP * 100 * 1.9

      const shadowMix = Math.max(0, Math.sin(t * Math.PI * FREQ + PHASE))
      const base = key % 2 === 0 ? GREY_A : GREY_B
      const grey = lerpColor(base, SHADOW, shadowMix * 0.5)

      const dist = Math.abs(t - selectedT)
      const redFactor = Math.max(0, 1 - dist / 0.085)
      const redShade = lerpColor(RED_EDGE, RED_CORE, 1 - dist / 0.12)
      const fill = redFactor > 0 ? lerpColor(grey, redShade, Math.pow(redFactor, 1.4)) : grey

      // Selected node's neighborhood swells 1.5x while just highlighted, and up to 3x once opened.
      const maxGrowth = opened ? 2 : 0.5
      const thickness = baseThickness * (1 + maxGrowth * Math.pow(redFactor, 0.85))

      out.push({ key: key++, x, y, angle, length, thickness, fill })
    }
    return out
  }, [selectedT, opened])

  // Unit rhombus (half-thickness 1, so a y-scale of thickness/2 yields the final height),
  // matching the diamond motif used for nodes, breadcrumbs, and background particles.
  const shapes = rungs.map((r) => {
    const hl = r.length / 2
    return { ...r, points: `0,-1 ${hl},0 0,1 ${-hl},0` }
  })

  return (
    <g>
      <defs>
        <radialGradient id={glowId}>
          <stop offset="0%" stopColor="#e8384f" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#e8384f" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#e8384f" stopOpacity="0" />
        </radialGradient>
        <clipPath id={clipId}>
          {shapes.map((r) => (
            <g key={r.key} transform={`translate(${r.x} ${r.y}) rotate(${r.angle})`}>
              <polygon points={r.points} style={{ transform: `scaleY(${r.thickness / 2})` }} />
            </g>
          ))}
        </clipPath>
      </defs>

      <g>
        {shapes.map((r) => (
          <g key={r.key} transform={`translate(${r.x} ${r.y}) rotate(${r.angle})`}>
            <polygon
              className="animus-helix-rung"
              points={r.points}
              fill={r.fill}
              style={{ transform: `scaleY(${r.thickness / 2})` }}
            />
          </g>
        ))}
      </g>

      {cursor && (
        <circle
          cx={cursor.x}
          cy={cursor.y}
          r={14}
          fill={`url(#${glowId})`}
          clipPath={`url(#${clipId})`}
        />
      )}
    </g>
  )
}
