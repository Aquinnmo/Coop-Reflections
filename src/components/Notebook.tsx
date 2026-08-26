import { useState } from 'react'
import { reflections } from '../data/reflections'
import { EntryTabs } from './EntryTabs'
import { JournalPage } from './JournalPage'

export function Notebook() {
  const [activeId, setActiveId] = useState(reflections[0].id)
  const activeIndex = reflections.findIndex((r) => r.id === activeId)
  const active = reflections[activeIndex] ?? reflections[0]

  return (
    <div className="notebook">
      <div className="notebook__spine" aria-hidden="true" />

      <div className="notebook__page-wrap">
        <header className="notebook__cover">
          <span className="notebook__tape" aria-hidden="true" />
          <h1 className="notebook__title">Adam Montgomery</h1>
          <p className="notebook__subtitle">Co-op reflections over the work terms</p>
        </header>

        <JournalPage
          key={active.id}
          reflection={active}
          pageNumber={reflections.length - activeIndex}
        />
      </div>

      <EntryTabs
        reflections={reflections}
        activeId={activeId}
        onSelect={setActiveId}
      />
    </div>
  )
}
