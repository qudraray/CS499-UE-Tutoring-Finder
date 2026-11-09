// Mock data based on the UE Fall 2026 Peer Tutoring Schedule (PDF).
// Times are 24-hour "HH:MM" strings so they sort and filter easily.

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

export const tutors = [
  { id: 'rr211', first: 'Ross', last: 'Rider', email: 'rr211@evansville.edu' },
  { id: 'lc256', first: 'Lanae', last: 'Canen', email: 'lc256@evansville.edu' },
  { id: 'cb538', first: 'Caroline', last: 'Buechlein', email: 'cb538@evansville.edu' },
  { id: 'cw416', first: 'Camille', last: 'Wy', email: 'cw416@evansville.edu' },
  { id: 'ar566', first: 'Aadit', last: 'Raikar', email: 'ar566@evansville.edu' },
  { id: 'ew304', first: 'Evan', last: 'Weber', email: 'ew304@evansville.edu' },
  { id: 'me197', first: 'Mackenzie', last: 'Earney', email: 'me197@evansville.edu' },
  { id: 'ar560', first: 'Ava', last: 'Rasche', email: 'ar560@evansville.edu' },
  { id: 'eh343', first: 'Elizabeth', last: 'Harpenau', email: 'eh343@evansville.edu' },
  { id: 'ap444', first: 'Adam', last: 'Pawlak', email: 'ap444@evansville.edu' },
  { id: 'ap480', first: 'Andrew', last: 'Potter', email: 'ap480@evansville.edu' },
  { id: 'md318', first: 'Maeve', last: 'Doyle', email: 'md318@evansville.edu' },
  { id: 'ag453', first: 'Alyssa', last: 'Goffinet', email: 'ag453@evansville.edu' },
  { id: 'jb930', first: 'Jaylin', last: 'Boger', email: 'jb930@evansville.edu' },
  { id: 'cs640', first: 'Connor', last: 'Shin', email: 'cs640@evansville.edu' },
  { id: 'hl95', first: 'Hadley', last: 'Leibering', email: 'hl95@evansville.edu' },
  { id: 'sp315', first: 'Swara', last: 'Patel', email: 'sp315@evansville.edu' },
]

export const subjects = [
  'Biology', 'Business', 'Chemistry', 'Engineering', 'Exercise Science',
  'History', 'Language', 'Math', 'Neuroscience & Psychology', 'Nursing', 'Physics',
]

let nextId = 1
const make = (subject, courses, day, start, end, location, tutorId, type = 'drop-in') => ({
  id: nextId++,
  subject,
  courses,
  day,
  start,
  end,
  location,
  tutorId,
  type, // 'drop-in' | 'request' | 'tbd'
  notes: '',
})

const BIOL = ['BIOL 100', 'BIOL 107', 'BIOL 119', 'BIOL 120', 'BIOL 320', 'BIOL 331']
const ENGR = ['ENGR 212', 'ENGR 232', 'ENGR 366']

export const sessions = [
  // Biology
  make('Biology', BIOL, 'Monday', '15:00', '16:00', 'KC 203', 'rr211'),
  make('Biology', BIOL, 'Monday', '18:00', '20:00', 'KC 203', 'lc256'),
  make('Biology', BIOL, 'Tuesday', '18:00', '20:00', 'KC 203', 'cb538'),
  make('Biology', BIOL, 'Wednesday', '17:00', '19:00', 'KC 203', 'rr211'),

  // Business (by request)
  make('Business', ['ACCT 210', 'ACCT 211'], null, null, null, null, null, 'request'),
  make('Business', ['FIN 361'], null, null, null, null, null, 'request'),

  // Chemistry
  make('Chemistry', ['CHEM 118'], 'Monday', '14:00', '16:00', 'KC 102', 'cw416'),
  make('Chemistry', ['CHEM 118'], 'Monday', '18:00', '20:00', 'KC 101', 'ar566'),
  make('Chemistry', ['CHEM 118'], 'Tuesday', '18:00', '20:00', 'KC 102', 'ew304'),
  make('Chemistry', ['CHEM 118'], 'Wednesday', '18:00', '20:00', 'KC 101', 'me197'),
  make('Chemistry', ['CHEM 341'], 'Tuesday', '18:00', '20:00', 'KC 102', 'ew304'),
  make('Chemistry', ['CHEM 341'], 'Wednesday', '17:00', '18:00', 'KC 102', 'ar560'),
  make('Chemistry', ['CHEM 341'], 'Thursday', '18:00', '19:00', 'KC 125', 'ar560'),

  // Engineering
  make('Engineering', ENGR, 'Monday', '15:00', '16:00', 'KC 243', 'eh343'),
  make('Engineering', ENGR, 'Tuesday', '18:30', '19:30', 'KC 243', 'eh343'),

  // Exercise Science
  make('Exercise Science', ['EXSS 112'], 'Thursday', '19:00', '21:00', 'KC 225', 'ap444'),
  make('Exercise Science', ['EXSS 352'], 'Tuesday', '19:00', '21:00', 'GH 100', 'ap480'),
  make('Exercise Science', ['EXSS 356'], null, null, null, null, null, 'request'),

  // History (by request)
  make('History', ['HIST 112', 'HIST 142', 'HIST 318', 'HIST 345', 'HIST 348'], null, null, null, null, null, 'request'),

  // Language
  make('Language', ['French'], null, null, null, null, null, 'request'),
  make('Language', ['LATN 111'], 'Tuesday', '18:00', '19:00', 'HH 12', 'md318'),
  make('Language', ['LATN 211'], 'Tuesday', '19:00', '20:00', 'HH 12', 'md318'),
  make('Language', ['Spanish'], 'Monday', '12:00', '13:00', 'HH 106', 'ag453'),
  make('Language', ['Spanish'], 'Tuesday', '15:00', '16:00', 'HH 106', 'jb930'),
  make('Language', ['Spanish'], 'Wednesday', '12:00', '13:00', 'HH 106', 'ag453'),
  make('Language', ['Spanish'], 'Thursday', '15:00', '16:00', 'HH 106', 'jb930'),

  // Math: Mon-Thu 5-9 PM, one session per day
  ...DAYS.map((day) => make('Math', ['MATH'], day, '17:00', '21:00', 'KC 304', null)),

  // Neuroscience & Psychology
  make('Neuroscience & Psychology', ['NEUR 125'], 'Thursday', '19:00', '21:00', 'HH 117', 'cs640'),
  make('Neuroscience & Psychology', ['PSYC 245'], null, null, null, null, null, 'request'),

  // Nursing
  make('Nursing', ['NURS T100'], 'Monday', '15:00', '17:00', 'GH 239', 'hl95'),
  make('Nursing', ['NUTR 304'], null, null, null, null, null, 'tbd'),

  // Physics
  make('Physics', ['PHYS 121'], 'Monday', '13:00', '14:00', 'KC 102', 'sp315'),
  make('Physics', ['PHYS 121'], 'Monday', '17:00', '19:00', 'KC 101', 'sp315'),
  make('Physics', ['PHYS 121'], 'Wednesday', '17:00', '19:00', 'KC 101', 'sp315'),
  make('Physics', ['PHYS 121'], 'Thursday', '11:00', '12:00', 'KC 102', 'sp315'),
  make('Physics', ['PHYS 121'], null, null, null, null, null, 'tbd'),
]