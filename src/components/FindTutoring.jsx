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
    <main className="page page-wide">