import type { CSSProperties } from 'react'
import type { Reflection } from '../data/reflections'

type Props = {
  reflections: Reflection[]
  activeId: string
  onSelect: (id: string) => void
}

export function EntryTabs({ reflections, activeId, onSelect }: Props) {
  return (
    <div className="tabs" role="tablist" aria-label="Co-op terms">
      {reflections.map((r) => (
        <button
          key={r.id}
          type="button"
          role="tab"
          aria-selected={r.id === activeId}
          className="tabs__tab"
          style={{ '--tab-color': r.tabColor } as CSSProperties}
          onClick={() => onSelect(r.id)}
        >
          {r.tabLabel}
        </button>
      ))}
    </div>
  )
}
