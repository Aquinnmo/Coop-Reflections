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
    title: 'The SALSA Tasting',
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
]
