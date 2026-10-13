import { useMemo } from 'react'
import type { MemoryNode } from './nodes'

const AMPLITUDE = 9
const BASE_Y = 52
const FREQ = 1.3
const PHASE = 0.5

function yFor(t: number) {
  return BASE_Y + AMPLITUDE * Math.sin(t * Math.PI * FREQ + PHASE)
}

function nodeT(index: number, count: number) {
  if (count <= 1) return 0.5
  return 0.14 + (0.72 * index) / (count - 1)
}

export function HelixView({
  categoryLabel,
  nodes,
  selectedIndex,
  onHoverNode,
  onOpenNode,
}: {
  categoryLabel: string
  nodes: MemoryNode[]
  selectedIndex: number
  onHoverNode: (index: number) => void
  onOpenNode: (index: number) => void
}) {
  const pathD = useMemo(() => {
    const points: string[] = []
    for (let i = -10; i <= 110; i += 2) {
      const t = i / 100
      const x = t * 100
      const y = yFor(t)
      points.push(`${i === -10 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
    }
    return points.join(' ')
  }, [])

  const active = nodes[selectedIndex]

  return (
    <div className="animus-helix">
      <svg className="animus-helix-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="helixFade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--a-line-strong)" stopOpacity="0" />
            <stop offset="12%" stopColor="var(--a-line-strong)" stopOpacity="1" />
            <stop offset="88%" stopColor="var(--a-line-strong)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--a-line-strong)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={pathD} fill="none" stroke="url(#helixFade)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
        <path
          d={pathD}
          fill="none"
          stroke="url(#helixFade)"
          strokeWidth="0.25"
          opacity="0.6"
          transform="translate(0, 2.2)"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={pathD}
          fill="none"
          stroke="url(#helixFade)"
          strokeWidth="0.25"
          opacity="0.6"
          transform="translate(0, -2.2)"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="animus-helix-nodes">
        {nodes.map((node, index) => {
          const t = nodeT(index, nodes.length)
          const x = t * 100
          const y = yFor(t)
          const isSelected = index === selectedIndex
          const anchor = x < 30 ? 'start' : x > 70 ? 'end' : 'center'
          return (
            <button
              key={node.id}
              type="button"
              className={`animus-helix-node${isSelected ? ' is-selected' : ''}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => onHoverNode(index)}
              onFocus={() => onHoverNode(index)}
              onClick={() => onOpenNode(index)}
              aria-label={node.title}
            >
              <span className="animus-helix-marker" />
              {isSelected && (
                <span className={`animus-helix-callout anchor-${anchor}`}>
                  <span className="animus-helix-eyebrow">{categoryLabel}</span>
                  <span className="animus-helix-title">{node.title}</span>
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className="animus-helix-synch">
        <div className="animus-helix-synch-track">
          <div className="animus-helix-synch-fill" style={{ width: `${active.synch}%` }} />
          <div className="animus-helix-synch-label">
            <span>{active.synch}%</span>
            <span>SYNCH</span>
          </div>
        </div>
      </div>
    </div>
  )
}
