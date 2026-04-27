import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiPost } from '../services/api';

export default function Dashboard() {
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('sahayak_auth') || 'null');
    if (!auth) navigate('/');
  }, [navigate]);

  const handleGenerate = async () => {
    if (!notes.trim()) return;
    setError('');
    setLoading(true);
    try {
      const result = await apiPost('/api/cases/generate', { notes });
      navigate('/results', { state: { result } });
    } catch (err) {
      setError(err.message || 'Failed to generate plan. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-page">
        <div className="dashboard-header">
          <h1>Case Management Dashboard</h1>
          <p>Enter case details to receive AI-powered risk assessment and action recommendations.</p>
        </div>

        <div className="case-card">
          <div className="case-card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Case Details
          </div>
          <textarea
            className="case-textarea"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Enter beneficiary details, problems, income status, family situation, health conditions, employment history, and any other relevant information..."
          />
          <p className="case-hint">Include as much detail as possible for accurate AI analysis and recommendations.</p>
          {error && <div className="error-msg">{error}</div>}
          <button className="btn-generate" onClick={handleGenerate} disabled={!notes.trim() || loading}>
            {loading ? '⏳ Generating Plan...' : '⚙️ Generate Plan'}
          </button>
        </div>
      </div>
    </div>
  );
}
