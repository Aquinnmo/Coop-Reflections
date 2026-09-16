import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from 'bun:test'
import { JournalPage } from './JournalPage'
import { reflections } from '../data/reflections'

test('renders the Deployment Assistant roadmap before its supporting paragraph', () => {
  const report = renderToStaticMarkup(
    <JournalPage reflection={reflections[0]} pageNumber={1} />,
  )

  expect(report).toContain('I had the pleasure of working at SPS Commerce')
  expect(report).toContain('Co-op Student of the Year nomination')
  expect(report).not.toContain('<h2')
  expect(report).toContain('Deployment Assistant roadmap')
  expect(report).toContain('<strong>Plan</strong>')
  expect(report).toContain('<strong>Build</strong>')
  expect(report).toContain('<strong>Launch</strong>')
  expect(report).toContain('<strong>Next</strong>')
  expect(report.indexOf('Deployment Assistant roadmap')).toBeLessThan(
    report.indexOf('Now instead'),
  )
})

test('renders the team lunch photo after the active-citizen paragraph', () => {
  const report = renderToStaticMarkup(
    <JournalPage reflection={reflections[0]} pageNumber={1} />,
  )

  expect(report).toContain('src="/sps-lunch.jpg"')
  expect(report).toContain(
    'alt="The SPS Commerce team sharing a meal around a restaurant table"',
  )
  expect(report).toContain('Lunch with the SPS Commerce team')
  expect(report.indexOf('I was also an active citizen at SPS')).toBeLessThan(
    report.indexOf('src="/sps-lunch.jpg"'),
  )
  expect(report.indexOf('src="/sps-lunch.jpg"')).toBeLessThan(
    report.indexOf('What I have learned at this placement'),
  )
})
