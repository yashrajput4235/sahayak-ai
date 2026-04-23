import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MOCK_RESULT = {
  riskLevel: 'Low Risk',
  riskColor: 'green',
  riskDescription: 'Based on the provided information, the person appears to be in a stable situation with manageable challenges.',
  actionPlan: [
    { day: 1, text: 'Initial assessment and documentation of current situation' },
    { day: 3, text: 'Connect with local support services and community resources' },
    { day: 5, text: 'Begin eligibility verification for government schemes' },
    { day: 7, text: 'Submit applications for identified benefit programs' },
    { day: 10, text: 'Follow up on pending applications and gather additional documents' },
    { day: 14, text: 'Conduct mid-point review and adjust support plan as needed' },
    { day: 21, text: 'Connect with employment or skill development programs' },
    { day: 30, text: 'Final review and transition to long-term support plan' },
  ],
  schemes: [
    {
      name: 'National Food Security Program',
      description: 'Based on income level and family size, the person qualifies for subsidized food grains.',
      steps: [
        'Gather income proof and family composition documents',
        'Visit nearest Public Distribution System office',
        'Submit application with required documents',
        'Collect ration card within 15 working days',
      ],
    },
    {
      name: 'Housing Assistance Scheme',
      description: 'The person meets criteria for affordable housing support based on current living conditions.',
      steps: [
        'Obtain residence certificate from local authority',
        'Submit application at Housing Development office',
        'Complete verification process',
        'Receive approval and subsidy details',
      ],
    },
    {
      name: 'Skill Development Initiative',
      description: 'Employment history suggests potential for vocational training and job placement assistance.',
      steps: [
        'Register at nearest employment exchange',
        'Attend skill assessment session',
        'Enroll in relevant training program',
        'Complete placement assistance process',
      ],
    },
  ],
};

function SchemeItem({ scheme }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="scheme-item">
      <div className="scheme-header">
        <h4>{scheme.name}</h4>
        <p>{scheme.description}</p>
        <button className="toggle-btn" onClick={() => setOpen(o => !o)}>
          {open ? 'Hide Steps ▲' : 'Show Steps ▼'}
        </button>
      </div>
      {open && (
        <div className="scheme-steps">
          <ol>
            {scheme.steps.map((step, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default function Results() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('sahayak_auth') || 'null');
    if (!auth) { navigate('/'); return; }
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="results-page" style={{ minHeight: '100vh' }}>
        <div className="results-inner">
          <button className="back-link" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </button>
          <div className="results-header">
            <h1>AI-Generated Recommendations</h1>
            <p>Based on the case details you provided, here are the personalized recommendations.</p>
          </div>
          <div className="loading-center">
            <div className="spinner" />
            <h3>Analyzing Case Details</h3>
            <p>Our AI is processing the information to generate personalized risk assessment, action plan, and scheme recommendations.</p>
          </div>
          <div className="skeleton-grid">
            {[1, 2, 3].map(n => (
              <div key={n} className="skeleton-card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                  <span className="skel skel-icon" />
                  <span className="skel skel-title" style={{ flex: 1 }} />
                </div>
                <div className="skel skel-line" style={{ width: '100%' }} />
                <div className="skel skel-line" style={{ width: '85%' }} />
                <div className="skel skel-line" style={{ width: '70%' }} />
                <div className="skel skel-line" style={{ width: '55%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const r = MOCK_RESULT;
  const badgeClass = r.riskColor === 'green' ? 'badge-green' : r.riskColor === 'orange' ? 'badge-orange' : 'badge-red';

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
              <span className={badgeClass}>{r.riskLevel}</span>
            </div>
            <p>{r.riskDescription}</p>
          </div>

          <div className="result-card">
            <div className="result-card-header">
              <div className="result-card-title">
                <span>📅</span> 30-Day Action Plan
              </div>
            </div>
            <ul className="action-plan-list">
              {r.actionPlan.map((item, i) => (
                <li key={i}>
                  <span className="day-badge">{item.day}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="schemes-section">
          <div className="schemes-section-title">
            <span>🏛️</span> Eligible Government Schemes
          </div>
          {r.schemes.map((scheme, i) => <SchemeItem key={i} scheme={scheme} />)}
        </div>

        <button className="analyze-another-btn" onClick={() => navigate('/dashboard')}>
          ← Analyze Another Case
        </button>
      </div>
    </div>
  );
}
