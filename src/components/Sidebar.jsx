import { profile, navItems } from '../data/content'

export default function Sidebar({ activeId, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="profile-block">
        <div className="avatar-ring">{profile.initials}</div>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
      </div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn${activeId === item.id ? ' active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">{profile.location} · India</div>
    </aside>
  )
}
