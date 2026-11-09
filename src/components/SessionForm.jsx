import { useState } from 'react'
import { DAYS, subjects, tutors } from '../data/sessions'

const BLANK = {
  courses: '',
  subject: subjects[0],
  type: 'drop-in',
  day: 'Monday',
  start: '',
  end: '',
  location: '',
  tutorId: '',
}

export default function SessionForm({ session, locations, onSave, onCancel }) {
  const [form, setForm] = useState(
    session
      ? {
          courses: session.courses.join(', '),
          subject: session.subject,
          type: session.type,
          day: session.day ?? 'Monday',
          start: session.start ?? '',
          end: session.end ?? '',
          location: session.location ?? '',
          tutorId: session.tutorId ?? '',
        }
      : BLANK
  )
  const [error, setError] = useState('')

  const set = (key, value) => setForm({ ...form, [key]: value })
  const timed = form.type === 'drop-in'

  const handleSubmit = (e) => {
    e.preventDefault()
    const courses = form.courses.split(',').map((c) => c.trim()).filter(Boolean)
    if (courses.length === 0) return setError('Enter at least one course (e.g., CHEM 118).')
    if (timed) {
      if (!form.start || !form.end) return setError('Start and end times are required for drop-in sessions.')
      if (form.end <= form.start) return setError('End time must be after start time.')
      if (!form.location.trim()) return setError('Location is required for drop-in sessions.')
    }
    setError('')
    onSave({
      ...(session ?? {}),
      courses,
      subject: form.subject,
      type: form.type,
      day: timed ? form.day : null,
      start: timed ? form.start : null,
      end: timed ? form.end : null,
      location: timed ? form.location.trim() : null,
      tutorId: timed && form.tutorId ? form.tutorId : null,
      notes: session?.notes ?? '',
    })
  }

  return (
    <form className="session-form" onSubmit={handleSubmit}>
      <h3>{session ? 'Edit session' : 'Add session'}</h3>

      <label>
        Courses (comma-separated)
        <input
          type="text"
          value={form.courses}
          onChange={(e) => set('courses', e.target.value)}
          placeholder="CHEM 118, CHEM 341"
        />
      </label>

      <div className="form-grid">
        <label>
          Subject
          <select value={form.subject} onChange={(e) => set('subject', e.target.value)}>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label>
          Type
          <select value={form.type} onChange={(e) => set('type', e.target.value)}>
            <option value="drop-in">Drop-in</option>
            <option value="request">By request</option>
            <option value="tbd">TBD</option>
          </select>
        </label>
        <label>
          Day
          <select value={form.day} disabled={!timed} onChange={(e) => set('day', e.target.value)}>
            {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </label>
        <label>
          Start
          <input type="time" value={form.start} disabled={!timed} onChange={(e) => set('start', e.target.value)} />
        </label>
        <label>
          End
          <input type="time" value={form.end} disabled={!timed} onChange={(e) => set('end', e.target.value)} />
        </label>
        <label>
          Location
          <input
            type="text"
            list="location-options"
            value={form.location}
            disabled={!timed}
            onChange={(e) => set('location', e.target.value)}
            placeholder="KC 101"
          />
          <datalist id="location-options">
            {locations.map((l) => <option key={l} value={l} />)}
          </datalist>
        </label>
        <label>
          Tutor
          <select value={form.tutorId} disabled={!timed} onChange={(e) => set('tutorId', e.target.value)}>
            <option value="">— None —</option>
            {tutors.map((t) => (
              <option key={t.id} value={t.id}>{t.first} {t.last}</option>
            ))}
          </select>
        </label>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="form-actions">
        <button type="submit" className="btn">Save</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}