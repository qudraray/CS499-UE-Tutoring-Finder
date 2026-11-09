import { useEffect, useRef, useState } from 'react'
import SessionForm from './SessionForm'
import { formatWhen, tutorLabel } from '../utils'

export default function ManageSessions({ sessions, onAdd, onUpdate, onDelete }) {
  // null = form closed, 'new' = adding, number = id being edited
  const [editing, setEditing] = useState(null)
  const formRef = useRef(null)

  useEffect(() => {
    if (editing !== null) formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [editing])

  const locations = [...new Set(sessions.map((s) => s.location).filter(Boolean))].sort()
  const editingSession = typeof editing === 'number' ? sessions.find((s) => s.id === editing) : null

  const handleSave = (data) => {
    if (editing === 'new') onAdd(data)
    else onUpdate(data)
    setEditing(null)
  }

  const handleDelete = (s) => {
    if (window.confirm(`Delete session "${s.courses.join(', ')}" (${formatWhen(s)})?`)) {
      onDelete(s.id)
      if (editing === s.id) setEditing(null)
    }
  }

  return (
    <main className="page">
      <div className="section-head">
        <h2>Manage sessions</h2>
        <button className="btn" onClick={() => setEditing('new')}>+ Add session</button>
      </div>
      <p className="muted">{sessions.length} sessions. Changes are kept in memory for this prototype.</p>

      <div className="table-wrap">
        <table className="sessions-table">
          <thead>
            <tr>
              <th>Course</th><th>Day / Time</th><th>Room</th><th>Type</th><th>Tutor</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={s.id}>
                <td>{s.courses.join(', ')}</td>
                <td>{formatWhen(s)}</td>
                <td>{s.location ?? '—'}</td>
                <td>{s.type === 'drop-in' ? 'Drop-in' : s.type === 'request' ? 'Request' : 'TBD'}</td>
                <td>{tutorLabel(s)}</td>
                <td className="actions">
                  <button className="btn btn-small" onClick={() => setEditing(s.id)}>Edit</button>
                  <button className="btn btn-small btn-danger" onClick={() => handleDelete(s)}>Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing !== null && (
        <div ref={formRef}>
          <SessionForm
            key={editing}
            session={editingSession}
            locations={locations}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        </div>
      )}
    </main>
  )
}