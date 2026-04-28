import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiPost, apiGet } from '../services/api';

const POLL_INTERVAL = 2000;
const POLL_TIMEOUT  = 300000; // 5 minutes

export default function Dashboard() {
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const pollTimer = useRef(null);
  const elapsedTimer = useRef(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('sahayak_auth') || 'null');
    if (!auth) navigate('/');
    return () => {
      clearTimeout(pollTimer.current);
      clearInterval(elapsedTimer.current);
    };
  }, [navigate]);

  const startElapsedCounter = () => {
    setElapsed(0);
    elapsedTimer.current = setInterval(() => {
      setElapsed(s => s + 1);
    }, 1000);
  };

  const stopElapsedCounter = () => {
    clearInterval(elapsedTimer.current);
  };

  const pollForResult = (caseId, deadline) => {
    pollTimer.current = setTimeout(async () => {
      if (Date.now() > deadline) {
        stopElapsedCounter();
        setError('Analysis is taking too long. Please try again later.');
        setLoading(false);
        return;
      }
      try {
        const data = await apiGet(`/api/cases/status/${caseId}?_t=${Date.now()}`);
        if (data.status === 'completed') {
          clearTimeout(pollTimer.current);
          stopElapsedCounter();
          navigate('/results', { state: { result: data.result } });
        } else if (data.status === 'failed') {
          clearTimeout(pollTimer.current);
          stopElapsedCounter();
          setError(data.error || 'Case analysis failed. Please try again.');
          setLoading(false);
        } else {
          if (data.status === 'processing') {
            setStatusMsg('🧠 AI is generating your 30-day plan…');
          } else {
            setStatusMsg('⏳ Case queued, waiting for worker…');
          }
          pollForResult(caseId, deadline);
        }
      } catch (err) {
        stopElapsedCounter();
        setError(err.message || 'Failed to fetch result.');
        setLoading(false);
      }
    }, POLL_INTERVAL);
  };

  const handleGenerate = async () => {
    if (!notes.trim()) return;
    setError('');
    setStatusMsg('');
    setLoading(true);
    try {
      const { caseId } = await apiPost('/api/cases/generate', { notes });
      setStatusMsg('AI is analysing your case…');
      startElapsedCounter();
      pollForResult(caseId, Date.now() + POLL_TIMEOUT);
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
          {statusMsg && !error && (
            <div className="status-msg">
              <span className="status-spinner">⏳</span>
              {statusMsg}
              <span className="status-elapsed">{elapsed}s</span>
            </div>
          )}
          <button className="btn-generate" onClick={handleGenerate} disabled={!notes.trim() || loading}>
            {loading ? '⏳ Generating Plan...' : '⚙️ Generate Plan'}
          </button>
        </div>
      </div>
    </div>
  );
}
