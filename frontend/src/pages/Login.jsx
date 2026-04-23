import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    const stored = JSON.parse(localStorage.getItem('sahayak_user') || 'null');
    if (!stored || stored.email !== email || stored.password !== password) {
      setError('Invalid email or password.'); return;
    }
    localStorage.setItem('sahayak_auth', JSON.stringify({ name: stored.name, email }));
    navigate('/dashboard');
  };

  return (
    <div className="auth-layout">
      <div className="auth-left">
        <div className="auth-left-bg">AI</div>
        <div className="auth-logo">
          <div className="auth-logo-icon">🧠</div>
          SAHAYAK AI
        </div>
        <div className="auth-left-content">
          <h1>AI-Powered Support for Everyone Who Needs It</h1>
          <p>Transform the way you help people. Get instant risk assessments, personalized action plans, and discover relevant government schemes for anyone in need.</p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-icon">🛡️</div>
              <div>
                <h4>Risk Assessment</h4>
                <span>AI-powered vulnerability detection</span>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">⚡</div>
              <div>
                <h4>30-Day Action Plans</h4>
                <span>Structured intervention timelines</span>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">👥</div>
              <div>
                <h4>Scheme Matching</h4>
                <span>Connect people to government programs</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="testimonial">
          <p>"SAHAYAK AI has transformed how I help people in my community. Finding the right schemes and creating action plans is now effortless."</p>
          <div className="testimonial-author">
            <div className="avatar-circle">R</div>
            <div>
              <h5>Rahul Verma</h5>
              <span>Community Volunteer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Welcome back</h2>
          <p className="subtitle">Enter your credentials to access your account</p>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn-primary">Sign in</button>
          </form>
          <p className="auth-footer">Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}
