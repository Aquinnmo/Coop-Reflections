import type { Reflection } from '../data/reflections'

type Props = {
  reflection: Reflection
  pageNumber: number
}

export function JournalPage({ reflection, pageNumber }: Props) {
  return (
    <article className="journal-page" aria-live="polite">
      <div className="journal-page__body">
        <section className="report-section">
          {reflection.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </div>

      <div className="journal-page__footer">
        <span className="journal-page__pagenum">pg. {pageNumber}</span>
      </div>
    </article>
  )
}
