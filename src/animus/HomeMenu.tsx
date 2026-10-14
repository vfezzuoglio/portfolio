export type HomeMenuItem = {
  id: string
  label: string
  action: () => void
}

export function HomeMenu({
  items,
  selectedIndex,
  onHover,
  onSelect,
}: {
  items: HomeMenuItem[]
  selectedIndex: number
  onHover: (index: number) => void
  onSelect: (index: number) => void
}) {
  return (
    <ul className="animus-homemenu">
      {items.map((item, index) => {
        const isSelected = index === selectedIndex
        return (
          <li key={item.id} className="animus-homemenu-row" style={{ marginLeft: `${index * 34}px` }}>
            <button
              type="button"
              className={`animus-homemenu-item${isSelected ? ' is-selected' : ''}`}
              onMouseEnter={() => onHover(index)}
              onFocus={() => onHover(index)}
              onClick={() => onSelect(index)}
            >
              <span className="animus-homemenu-marker" />
              <span className="animus-homemenu-label">{item.label}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
