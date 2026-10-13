import { useMemo } from 'react'

function hashStr(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0
  }
  return h
}

function scatterPosition(key: string, index: number, count: number) {
  const h = hashStr(`${key}-${index}`)
  const diag = count <= 1 ? 0.5 : index / (count - 1)
  const baseX = 10 + diag * 66
  const baseY = 16 + diag * 56
  const jitterX = ((h % 17) - 8) * 1.3
  const jitterY = ((Math.floor(h / 17) % 15) - 7) * 1.3
  const rot = (Math.floor(h / 255) % 9) - 4
  return {
    x: Math.min(90, Math.max(6, baseX + jitterX)),
    y: Math.min(88, Math.max(10, baseY + jitterY)),
    rot,
  }
}

export type InventorySidebarItem = { id: string; label: string }
export type InventoryChip = { key: string; label: string; sublabel?: string; active?: boolean }

export function InventoryView({
  headerLabel,
  sidebarItems,
  selectedIndex,
  onSelect,
  chips,
}: {
  headerLabel: string
  sidebarItems: InventorySidebarItem[]
  selectedIndex: number
  onSelect: (index: number) => void
  chips: InventoryChip[]
}) {
  const positioned = useMemo(
    () => chips.map((chip, i) => ({ chip, pos: scatterPosition(chip.key, i, chips.length) })),
    [chips],
  )

  return (
    <div className="animus-inventory">
      <div className="animus-inv-sidebar">
        <div className="animus-inv-header">
          <span className="animus-inv-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          {headerLabel}
        </div>
        <ul className="animus-inv-list">
          {sidebarItems.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                className={index === selectedIndex ? 'is-selected' : ''}
                onMouseEnter={() => onSelect(index)}
                onFocus={() => onSelect(index)}
                onClick={() => onSelect(index)}
              >
                <span className="animus-diamond" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="animus-inv-scatter">
        {positioned.map(({ chip, pos }) => {
          const anchorEnd = pos.x > 60
          return (
            <div
              key={chip.key}
              className={`animus-inv-chip${chip.active ? ' is-active' : ''}${anchorEnd ? ' anchor-end' : ''}`}
              style={
                anchorEnd
                  ? { right: `${100 - pos.x}%`, top: `${pos.y}%`, transform: `rotate(${pos.rot}deg)` }
                  : { left: `${pos.x}%`, top: `${pos.y}%`, transform: `rotate(${pos.rot}deg)` }
              }
            >
              <span className="animus-inv-chip-marker" />
              <span className="animus-inv-chip-text">
                <span className="animus-inv-chip-label">{chip.label}</span>
                {chip.sublabel && <span className="animus-inv-chip-sublabel">{chip.sublabel}</span>}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
