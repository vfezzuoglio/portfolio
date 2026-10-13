import { HelixRibbon } from './HelixRibbon'
import { nodeT, yFor } from './helixMath'
import type { MemoryNode } from './nodes'

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
  const active = nodes[selectedIndex]
  const selectedT = nodeT(selectedIndex, nodes.length)

  return (
    <div className="animus-helix">
      <svg className="animus-helix-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <HelixRibbon selectedT={selectedT} />
      </svg>

      <div className="animus-helix-nodes">
        {nodes.map((node, index) => {
          const t = nodeT(index, nodes.length)
          const x = t * 100
          const y = yFor(t)
          const isSelected = index === selectedIndex
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
            </button>
          )
        })}
      </div>

      <div className="animus-seqpanel">
        <div className="animus-seqpanel-tag">
          <span>{categoryLabel}</span>
          <span className="animus-seqpanel-idx">
            {selectedIndex + 1} / {nodes.length}
          </span>
        </div>
        <div className="animus-seqpanel-bar">
          <span className="animus-seqpanel-pct">{active.synch}%</span>
          <span className="animus-seqpanel-meta">
            <span className="animus-seqpanel-title">{active.title}</span>
            {(active.date || active.meta) && (
              <span className="animus-seqpanel-date">{active.date ?? active.meta}</span>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
