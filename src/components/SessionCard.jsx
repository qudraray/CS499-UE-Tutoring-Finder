import { formatWhen } from '../utils'

export default function SessionCard({ session, onView }) {
  const typeLabel =
    session.type === 'request' ? 'Request needed (72 hrs)'
    : session.type === 'tbd' ? 'TBD'
    : 'Drop-in'

  return (
    <article className="card">
      <div className="card-main">
        <h3>{session.courses.join(', ')}</h3>
        <p>
          {formatWhen(session)}
          {session.location && ` · ${session.location}`}
        </p>
        <span className={`badge badge-${session.type}`}>{typeLabel}</span>
      </div>
      <button className="btn" onClick={() => onView(session.id)}>
        View details
      </button>
    </article>
  )
}