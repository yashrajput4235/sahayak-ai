import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ dark = false }) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('sahayak_dark') === 'true');
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('sahayak_auth') || 'null');
    setUser(auth);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('sahayak_dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('sahayak_auth');
    navigate('/');
  };

  const initial = user ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <nav className={`navbar${dark ? ' navbar-dark' : ''}`}>
      <div className="navbar-logo" style={dark ? { color: '#F9FAFB' } : {}}>
        <div className="navbar-logo-icon">🧠</div>
        SAHAYAK AI
      </div>

      <div className="navbar-avatar-wrap" ref={dropdownRef}>
        <div className="navbar-user" onClick={() => setOpen(o => !o)} title={user?.name}>
          {initial}
        </div>

        {open && (
          <div className="avatar-dropdown">
            <button className="dropdown-item" onClick={() => { setDarkMode(d => !d); setOpen(false); }}>
              <span>{darkMode ? '☀️' : '🌙'}</span>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className="dropdown-divider" />
            <button className="dropdown-item dropdown-item-danger" onClick={handleLogout}>
              <span>🚪</span>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
