import { useState } from 'react'
import Navbar from './components/Navbar'
import FindTutoring from './components/FindTutoring'
import SessionDetails from './components/SessionDetails'
import ManageSessions from './components/ManageSessions'
import { sessions as initialSessions } from './data/sessions'
import './App.css'

export default function App() {
  const [view, setView] = useState('find')
  const [sessions, setSessions] = useState(initialSessions)
  const [selectedId, setSelectedId] = useState(null)

  const selected = sessions.find((s) => s.id === selectedId)

  const addSession = (data) =>
    setSessions((prev) => [...prev, { ...data, id: Math.max(0, ...prev.map((s) => s.id)) + 1 }])
  const updateSession = (data) =>
    setSessions((prev) => prev.map((s) => (s.id === data.id ? data : s)))
  const deleteSession = (id) =>
    setSessions((prev) => prev.filter((s) => s.id !== id))

  const navigate = (v) => {
    setSelectedId(null)
    setView(v)
  }

  let content
  if (view === 'manage') {
    content = (
      <ManageSessions
        sessions={sessions}
        onAdd={addSession}
        onUpdate={updateSession}
        onDelete={deleteSession}
      />
    )
  } else if (selected) {
    content = <SessionDetails session={selected} onBack={() => setSelectedId(null)} />
  } else {
    content = <FindTutoring sessions={sessions} onView={setSelectedId} />
  }

  return (
    <>
      <Navbar view={view} onNavigate={navigate} />
      {content}
    </>
  )
}
