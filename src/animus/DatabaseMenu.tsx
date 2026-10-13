import { categories } from './data'

export function DatabaseMenu({
  selectedIndex,
  onHover,
  onSelect,
}: {
  selectedIndex: number
  onHover: (index: number) => void
  onSelect: (index: number) => void
}) {
  const active = categories[selectedIndex]

  return (
    <div className="animus-database">
      <div className="animus-db-menu">
        <div className="animus-db-heading">
          <span className="animus-diamond" />
          DATABASE
        </div>
        <ul className="animus-db-list">
          {categories.map((category, index) => (
            <li key={category.id} className="animus-db-item">
              <button
                type="button"
                className={index === selectedIndex ? 'is-active' : ''}
                onMouseEnter={() => onHover(index)}
                onFocus={() => onHover(index)}
                onClick={() => onSelect(index)}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="animus-db-ghost">
        <div className="animus-db-ghost-text">
          {active.label}
          <span className="animus-db-desc">{active.description}</span>
        </div>
      </div>
    </div>
  )
}
