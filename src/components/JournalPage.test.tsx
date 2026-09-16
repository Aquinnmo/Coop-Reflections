import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from 'bun:test'
import { JournalPage } from './JournalPage'
import { reflections } from '../data/reflections'

test('renders the Summer 2026 report without headings', () => {
  const report = renderToStaticMarkup(
    <JournalPage reflection={reflections[0]} pageNumber={1} />,
  )

  expect(report).toContain('I had the pleasure of working at SPS Commerce')
  expect(report).toContain('Co-op Student of the Year nomination')
  expect(report).not.toContain('<h2')
  expect(report).not.toContain('Project timeline')
})
