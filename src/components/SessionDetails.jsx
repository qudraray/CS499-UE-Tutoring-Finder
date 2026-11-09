import { tutors } from '../data/sessions'
import { formatWhen, tutorLabel } from '../utils'

// TODO: replace with the real request form link from the UE tutoring page
const REQUEST_FORM_URL = 'https://www.evansville.edu/'

export default function SessionDetails({ session, onBack }) {
  const tutor = tutors.find((t) => t.id === session.tutorId)
  const typeLabel =
    session.type === 'request' ? 'Available by request'
    : session.type === 'tbd' ? 'TBD'
    : 'Drop-in'

  return (
    <main className="page">
      <button className="btn-link" onClick={onBack}>← Back to results</button>
      <h2>{session.courses.join(', ')} Tutoring</h2>
      <dl className="details">
        <dt>Day / Time</dt><dd>{formatWhen(session)} (Central)</dd>
        <dt>Location</dt><dd>{session.location ?? '—'}</dd>
        <dt>Type</dt><dd>{typeLabel}</dd>
        <dt>Tutor</dt><dd>{tutorLabel(session)}</dd>
        {tutor && (<><dt>Contact</dt><dd>{tutor.email}</dd></>)}
        <dt>Subject</dt><dd>{session.subject}</dd>
        <dt>Courses</dt><dd>{session.courses.join(', ')}</dd>
      </dl>
      {session.type === 'request' && (
        <p className="notice">
          Requests need 72 hours' notice.{' '}
          <a href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=Mn3Vp_fKjUmhj-Qp-N8faBkabvyqqIFHqiRsNKjqj5xUNEtUSzJYMjdKOUVRME41VkpTNVpOU001SCQlQCN0PWcu&route=shorturl" target="_blank" rel="noreferrer">Open UE's request form</a>
        </p>
      )}
      <p className="tip">Tip: Bring your course materials and specific questions.</p>
      <button className="btn" onClick={onBack}>Back to results</button>
    </main>
  )
}