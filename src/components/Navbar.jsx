export default function Navbar({ view, onNavigate }) {
  return (
    <header className="navbar">
      <h1 className="brand">UE Tutoring Finder</h1>
      <nav>
        <button
          className={view === 'manage' ? 'nav-btn' : 'nav-btn active'}
          onClick={() => onNavigate('find')}
        >
          Find Tutoring
        </button>
        <button
          className={view === 'manage' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => onNavigate('manage')}
        >
          Manage
        </button>
      </nav>
    </header>
  )
}