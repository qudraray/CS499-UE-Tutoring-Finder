import { DAYS } from '../data/sessions'

export default function SearchFilters({ filters, onChange, subjects, locations }) {
  const set = (key, value) => onChange({ ...filters, [key]: value })

  return (
    <section className="filters">
      <input
        className="search"
        type="text"
        placeholder="Search course or subject (e.g., CHEM 118)"
        value={filters.query}
        onChange={(e) => set('query', e.target.value)}
      />
      <div className="filter-row">
        <label>
          Day
          <select value={filters.day} onChange={(e) => set('day', e.target.value)}>
            <option value="">Any</option>
            {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </label>
        <label>
          Subject
          <select value={filters.subject} onChange={(e) => set('subject', e.target.value)}>
            <option value="">Any</option>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label>
          Location
          <select value={filters.location} onChange={(e) => set('location', e.target.value)}>
            <option value="">Any</option>
            {locations.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={filters.hideTbd}
            onChange={(e) => set('hideTbd', e.target.checked)}
          />
          Hide sessions marked TBD
        </label>
      </div>
    </section>
  )
}