import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiPost, LOGO_URL } from '../services/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.password || !form.confirm) { setError('Please fill in all fields.'); return; }
    if (form.password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (form.password !== form.confirm) { setError('Passwords do not match.'); return; }
    setLoading(true);
    try {
      const data = await apiPost('/api/auth/register', { name: form.name, email: form.email, password: form.password });
      localStorage.setItem('sahayak_token', data.token);
      localStorage.setItem('sahayak_auth', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-left">
        <div className="auth-left-bg">AI</div>
        <div className="auth-logo">
          <div className="auth-logo-icon">
            <img src={LOGO_URL} alt="Sahayak AI" className="auth-logo-img" />
          </div>
          SAHAYAK AI
        </div>
        <div className="auth-left-content">
          <h1>Start Helping People Today</h1>
          <p>Join thousands of people who are using AI to help others find the right support, schemes, and action plans.</p>
          <ul className="checklist">
            {[
              'AI-powered risk assessment for anyone in need',
              'Automated 30-day personalized action plans',
              'Government scheme recommendations',
              'Easy-to-use case tracking dashboard',
              'Secure and private data management',
              'Help more people, faster',
            ].map((item) => (
              <li key={item}>
                <span className="check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="stats-row">
          <div className="stat-card"><span className="stat-num">10K+</span><span className="stat-label">People Helped</span></div>
          <div className="stat-card"><span className="stat-num">500+</span><span className="stat-label">Active Users</span></div>
          <div className="stat-card"><span className="stat-num">98%</span><span className="stat-label">Satisfaction</span></div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Create an account</h2>
          <p className="subtitle">Enter your details to get started with SAHAYAK AI</p>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Jane Doe" value={form.name} onChange={set('name')} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" value={form.password} onChange={set('password')} />
              <p className="form-hint">Must be at least 6 characters</p>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" value={form.confirm} onChange={set('confirm')} />
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
          <p className="auth-footer">Already have an account? <Link to="/">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}
