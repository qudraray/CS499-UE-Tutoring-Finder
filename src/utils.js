import { tutors } from './data/sessions'

export function formatTime(t) {
  const [h, m] = t.split(':').map(Number)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${hour} ${suffix}` : `${hour}:${String(m).padStart(2, '0')} ${suffix}`
}

export function formatWhen(s) {
  if (s.type === 'request') return 'By request'
  if (s.type === 'tbd') return 'TBD'
  return `${s.day}, ${formatTime(s.start)} – ${formatTime(s.end)}`
}

// Wireframe says: first name + last initial
export function tutorLabel(s) {
  if (s.type === 'request') return 'Assigned when requested'
  if (s.type === 'tbd') return 'TBD'
  const t = tutors.find((x) => x.id === s.tutorId)
  return t ? `${t.first} ${t.last[0]}.` : 'See Math website for info'
}