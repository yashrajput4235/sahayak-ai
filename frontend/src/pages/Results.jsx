import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function getRiskMeta(risk) {
  if (!risk) return {
    level: 'Unknown', color: 'orange', badgeClass: 'badge-orange',
    desc: 'Risk level could not be determined.',
    detail: 'AI was unable to assess the risk level from the provided information.'
  };
  const r = risk.toLowerCase();
  if (r === 'high') return {
    level: 'High Risk', color: 'red', badgeClass: 'badge-red',
    desc: 'Immediate attention & urgent intervention required.',
    detail: 'Score 70–100 · Case shows severe vulnerability — financial crisis, health emergency, or safety threat. Action must begin within 24–48 hours.'
  };
  if (r === 'medium') return {
    level: 'Medium Risk', color: 'orange', badgeClass: 'badge-orange',
    desc: 'Structured support & regular follow-up needed.',
    detail: 'Score 40–70 · Case has moderate challenges that could worsen without timely intervention. Scheduled support over 30 days recommended.'
  };
  return {
    level: 'Low Risk', color: 'green', badgeClass: 'badge-green',
    desc: 'Stable situation with manageable challenges.',
    detail: 'Score 0–40 · Person has basic needs met and support systems in place. Periodic check-ins and scheme enrolment are sufficient.'
  };
}

function RiskScoreCircle({ score, color }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const colorMap = { red: '#EF4444', orange: '#F97316', green: '#22C55E' };
  const stroke = colorMap[color] || '#94A3B8';
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="risk-score-circle-wrap">
      <svg width="110" height="110" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="8" />
        <circle
          cx="45" cy="45" r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 45 45)"
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      <div className="risk-score-circle-label" style={{ color: stroke }}>
        <span className="risk-score-num">{score}</span>
        <span className="risk-score-unit">/100</span>
      </div>
    </div>
  );
}


function SchemeItem({ scheme }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="scheme-item">
      <div className="scheme-header">
        <h4>{scheme.name}</h4>
        <p>{scheme.reason || scheme.description}</p>
        <button className="toggle-btn" onClick={() => setOpen(o => !o)}>
          {open ? 'Hide Steps ▲' : 'Show Steps ▼'}
        </button>
      </div>
      {open && (
        <div className="scheme-steps">
          {Array.isArray(scheme.steps) ? (
            <ol>
              {scheme.steps.map((step, i) => (
                <li key={i}>
                  <span className="step-num">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          ) : (
            <p>{scheme.steps}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('sahayak_auth') || 'null');
    if (!auth) { navigate('/'); return; }
    if (!result) { navigate('/dashboard'); }
  }, [navigate, result]);

  if (!result) return null;

  // Handle needs_review / error state from AI
  if (result.status === 'needs_review') {
    return (
      <div className="results-page">
        <Navbar dark />
        <div className="results-inner">
          <button className="back-link" onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
          <div className="results-header">
            <h1>AI Review Required</h1>
            <p>{result.reason || result.error || 'The AI response needs manual review.'}</p>
          </div>
          <button className="analyze-another-btn" onClick={() => navigate('/dashboard')}>← Try Again</button>
        </div>
      </div>
    );
  }

  const riskMeta = getRiskMeta(result.risk);
  const actionPlan = result.plan || [];
  const schemes = result.schemes || [];

  return (
    <div className="results-page">
      <Navbar dark />

      <div className="results-inner">
        <button className="back-link" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>
        <div className="results-header">
          <h1>AI-Generated Recommendations</h1>
          <p>Based on the case details you provided, here are the personalized recommendations.</p>
        </div>

        <div className="analysis-badge">⚙️ Analysis Complete</div>

        <div className="results-top-grid">
          <div className="result-card">
            <div className="result-card-header">
              <div className="result-card-title">
                <span>🛡️</span> Risk Level
              </div>
              <span className={riskMeta.badgeClass}>{riskMeta.level}</span>
            </div>
            <p>{riskMeta.desc}</p>
            <p className="risk-detail">{riskMeta.detail}</p>
            {result.risk_score !== undefined && (
              <RiskScoreCircle score={result.risk_score} color={riskMeta.color} />
            )}
          </div>

          <div className="result-card">
            <div className="result-card-header">
              <div className="result-card-title">
                <span>📅</span> 30-Day Action Plan
              </div>
            </div>
            <ul className="action-plan-list">
              {actionPlan.map((item, i) => (
                <li key={i}>
                  <span className="day-badge">{item.day}</span>
                  {item.task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="schemes-section">
          <div className="schemes-section-title">
            <span>🏛️</span> Eligible Government Schemes
          </div>
          {schemes.map((scheme, i) => <SchemeItem key={i} scheme={scheme} />)}
        </div>

        <button className="analyze-another-btn" onClick={() => navigate('/dashboard')}>
          ← Analyze Another Case
        </button>
      </div>
    </div>
  );
}
