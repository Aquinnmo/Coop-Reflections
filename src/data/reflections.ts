export type Reflection = {
  id: string
  tabLabel: string
  tabColor: string
  title: string
  company: string
  role: string
  term: string
  body: string[]
  highlight: string
  stats: { emoji: string; label: string; value: string }[]
}

// Placeholder entries — swap in real reflections as each term wraps up.
// Add a new object to the front of this array for each new term.
export const reflections: Reflection[] = [
  {
    id: 'su25',
    tabLabel: 'Summer \'26',
    tabColor: 'var(--tab-coral)',
    title: 'Somehow I Still Have All My Fingers',
    company: 'SPS Commerce',
    role: 'Software Engineering Intern',
    term: 'Summer 2025',
    highlight: 'the robot arm and I reached an understanding',
    body: [
      'Week one, my badge photo made me look like I was being booked for a crime, and honestly the vibe of the internship never fully recovered from that first impression. By week two the robot arm and I reached an understanding: it would stop trying to hand me the wrong bin, and I would stop yelling "no, the OTHER left" at a machine with no concept of handedness.',
      'The actual work was mostly calibration scripts and a state machine that I rewrote four times because I kept discovering new ways for a conveyor belt to surprise me. Turns out "industrial hardware" is just software with worse error messages and higher stakes. I learned more about debouncing a button in three weeks here than in three semesters of lecture slides.',
      'Lowest point: I flashed the wrong firmware to the demo unit forty minutes before a client walkthrough and had to explain, calmly, why the arm was now trying to fist-bump a clipboard. Highest point: fixing it in thirty-eight of those forty minutes and never telling anyone how close it was. I am telling everyone now.',
      'What I am actually taking with me: hardware forgives nothing, but it also does not gaslight you the way a flaky test suite does — when something is wrong, something is physically, visibly wrong. There is a strange comfort in that. Also, wear the safety glasses even when you are "just looking."',
    ],
    stats: [
      { emoji: '🦾', label: 'Firmware flashes', value: '61' },
      { emoji: '🧯', label: 'Minor fire drills (real)', value: '1' },
      { emoji: '🥤', label: 'Vending machine visits', value: '89' },
      { emoji: '🩹', label: 'Bandaids required', value: '2' },
    ],
  },
  {
    id: 'sp25',
    tabLabel: 'SP25',
    tabColor: 'var(--tab-mustard)',
    title: 'I Have Seen the Inside of a Pivot Table and I Am Not the Same',
    company: 'Widget & Sons Analytics',
    role: 'Data Analyst Co-op',
    term: 'Spring 2025',
    highlight: 'a dashboard nobody asked for but everyone now depends on',
    body: [
      'This term I learned that "data-driven" mostly means someone screenshots your chart into a slide deck and then asks you to make the bars a different color. I said yes every time. I have no spine and a very flexible relationship with corporate blue.',
      'My big project was untangling a spreadsheet that had been passed between interns since roughly the Obama administration, full of formulas referencing cells that referenced other cells that referenced a tab someone deleted in 2019. I rebuilt it as a dashboard nobody asked for but everyone now depends on, which feels like the most accurate summary of what it means to work in this field.',
      'I sat in on my first real client call and said nothing useful for the first twenty minutes, then said one moderately useful thing about outlier filtering and was treated, for the rest of the call, like a founding partner. The bar, it turns out, is extremely manageable if you show up with a chart.',
      'Biggest lesson: a clean dataset is a myth invented to torment analysts, and the real skill is being unbothered by mess. Also, never trust a column labeled "misc" — it is doing at least three jobs and lying about all of them.',
    ],
    stats: [
      { emoji: '📊', label: 'Dashboards shipped', value: '7' },
      { emoji: '📎', label: '"Per my last email"s sent', value: '12' },
      { emoji: '☕', label: 'Cups of coffee', value: '214' },
      { emoji: '🔁', label: 'Times the CSV import broke', value: '23' },
    ],
  },
  {
    id: 'fa24',
    tabLabel: 'FA24',
    tabColor: 'var(--tab-sage)',
    title: 'Everyone Kept Saying "Just Push To Main"',
    company: 'TechNoodle Inc.',
    role: 'Software Engineering Co-op',
    term: 'Fall 2024',
    highlight: 'nobody had touched in four years and everybody was afraid of',
    body: [
      'First co-op, first badge, first time getting genuinely lost in a building for eleven minutes looking for a bathroom that turned out to be behind an unmarked door labeled "STORAGE." Set the tone for the whole term, honestly: mildly lost, technically making progress.',
      'My onboarding ticket was to fix a typo in a tooltip. It took me two and a half days, because it lived in a legacy service that nobody had touched in four years and everybody was afraid of, including, eventually, me. I now understand why senior engineers get a specific look on their face when you mention that repo by name.',
      'Around week six I shipped my first real feature, a small settings toggle that took four PR review rounds and taught me more about naming variables than four years of school did. Around week nine I broke staging with what I still maintain was a "reasonable" migration. Both are on my resume, only one is described accurately.',
      'What stuck with me: "just push to main" is something people say to sound casual about a process that is, in fact, extremely not casual, and asking a clarifying question in standup is always cheaper than finding out the hard way in code review. I said "per my last email" exactly once and regretted it immediately.',
    ],
    stats: [
      { emoji: '💬', label: 'Slack messages sent', value: '1,042' },
      { emoji: '🐛', label: 'Bugs blamed on "the cache"', value: '9' },
      { emoji: '🔀', label: 'PR review rounds, record', value: '4' },
      { emoji: '🧭', label: 'Minutes lost finding the bathroom', value: '11' },
    ],
  },
]
