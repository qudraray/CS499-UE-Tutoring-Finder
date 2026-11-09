import { useState } from 'react'
import { DAYS, subjects } from '../data/sessions'
import SearchFilters from './SearchFilters'
import SessionCard from './SessionCard'

const EMPTY = { query: '', day: '', subject: '', location: '', hideTbd: false }

export default function FindTutoring({ sessions, onView }) {
  const [filters, setFilters] = useState(EMPTY)

  const realToday = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const [todayView, setTodayView] = useState(DAYS.includes(realToday) ? realToday : 'Monday')

  const locations = [...new Set(sessions.map((s) => s.location).filter(Boolean))].sort()

  const todays = sessions.filter((s) => s.day === todayView)

  const q = filters.query.trim().toLowerCase()
  const results = sessions.filter((s) => {
    if (q && !(s.courses.join(' ') + ' ' + s.subject).toLowerCase().includes(q)) return false
    if (filters.day && s.day !== filters.day) return false
    if (filters.subject && s.subject !== filters.subject) return false
    if (filters.location && s.location !== filters.location) return false
    if (filters.hideTbd && s.type === 'tbd') return false
    return true
  })

  return (
    <main className="page">
      <section>
        <div className="section-head">
          <h2>Today's sessions</h2>
          <label className="day-pick">
            Day:
            <select value={todayView} onChange={(e) => setTodayView(e.target.value)}>
              {DAYS.map((d) => (
                <option key={d} value={d}>{d}{d === realToday ? ' (today)' : ''}</option>
              ))}
            </select>
          </label>
        </div>
        {todays.length === 0 ? (
          <p className="muted">No sessions scheduled for this day.</p>
        ) : (
          todays.map((s) => <SessionCard key={s.id} session={s} onView={onView} />)
        )}
      </section>

      <section>
        <h2>Find a tutor</h2>
        <SearchFilters
          filters={filters}
          onChange={setFilters}
          subjects={subjects}
          locations={locations}
        />
        <p className="count">{results.length} sessions found</p>
        {results.length === 0 ? (
          <p className="muted">No sessions match. Try clearing a filter.</p>
        ) : (
          results.map((s) => <SessionCard key={s.id} session={s} onView={onView} />)
        )}
      </section>
    </main>
  )
}