import { NodeDetail } from './NodeDetail'
import type { MemoryNode } from './nodes'

export function NodeDetailModal({
  node,
  categoryLabel,
  onClose,
}: {
  node: MemoryNode
  categoryLabel: string
  onClose: () => void
}) {
  return (
    <div className="animus-modal-backdrop" onClick={onClose}>
      <div className="animus-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={node.title}>
        <div className="animus-modal-head">
          <span className="animus-modal-eyebrow">{categoryLabel}</span>
          <button type="button" className="animus-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <h2 className="animus-modal-title">{node.title}</h2>
        <div className="animus-modal-body">
          <NodeDetail node={node} />
        </div>
      </div>
    </div>
  )
}
