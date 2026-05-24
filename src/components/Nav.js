export default function Nav({ sections, active, onNavigate }) {
  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <span className="nav-logo-main">The Dubai Mall</span>
        <span className="nav-logo-sub">Emaar Properties · Downtown Dubai</span>
      </div>
      <ul className="nav-links">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              className={active === s.id ? "active" : ""}
              onClick={() => onNavigate(s.id)}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
