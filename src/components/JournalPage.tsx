import type { ReactNode } from 'react'
import type { Reflection } from '../data/reflections'

function withHighlight(text: string, phrase: string): ReactNode {
  const idx = text.indexOf(phrase)
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark className="ink-mark">{phrase}</mark>
      {text.slice(idx + phrase.length)}
    </>
  )
}

type Props = {
  reflection: Reflection
  pageNumber: number
}

export function JournalPage({ reflection, pageNumber }: Props) {
  const highlightIndex = reflection.body.findIndex((p) =>
    p.includes(reflection.highlight),
  )

  return (
    <article className="journal-page" aria-live="polite">
      <div className="journal-page__header">
        <h2 className="journal-page__title">{reflection.title}</h2>
        <p className="journal-page__meta">
          {reflection.company} &middot; {reflection.role} &middot;{' '}
          {reflection.term}
        </p>
      </div>

      <div className="journal-page__body">
        {reflection.body.map((para, i) => (
          <p key={i}>
            {i === highlightIndex
              ? withHighlight(para, reflection.highlight)
              : para}
          </p>
        ))}

        <aside className="index-card">
          <p className="index-card__label">quick tally</p>
          <ul>
            {reflection.stats.map((stat) => (
              <li key={stat.label}>
                <span aria-hidden="true">{stat.emoji}</span> {stat.label}
                <strong>{stat.value}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="journal-page__footer">
        <span className="journal-page__pagenum">pg. {pageNumber}</span>
      </div>
    </article>
  )
}
