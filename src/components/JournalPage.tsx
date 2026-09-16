import { Fragment } from 'react'
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
          {reflection.paragraphs.map((paragraph, index) => (
            <Fragment key={paragraph}>
              {reflection.roadmap?.beforeParagraph === index && (
                <figure className="project-timeline">
                  <figcaption className="project-timeline__label">
                    {reflection.roadmap.title}
                  </figcaption>
                  <ol>
                    {reflection.roadmap.steps.map((step) => (
                      <li key={step}>
                        <strong>{step}</strong>
                      </li>
                    ))}
                  </ol>
                </figure>
              )}
              <p>{paragraph}</p>
              {reflection.photo?.afterParagraph === index && (
                <figure className="report-photo">
                  <img
                    src={reflection.photo.src}
                    alt={reflection.photo.alt}
                    width="3000"
                    height="4000"
                    loading="lazy"
                  />
                  <figcaption>{reflection.photo.caption}</figcaption>
                </figure>
              )}
            </Fragment>
          ))}
        </section>
      </div>

      <div className="journal-page__footer">
        <span className="journal-page__pagenum">pg. {pageNumber}</span>
      </div>
    </article>
  )
}
