import { useState } from 'react';
import './App.css';

interface ExecMovement {
  name: string;
  new_role: string;
  company: string;
  inferred_email: string;
  confidence_score: number;
}

function App() {
  const [data, setData] = useState<ExecMovement[]>([]);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);

  const triggerPipeline = async () => {
    setLoading(true);
    setLogs([]);
    addLog("Initializing 8-K SEC Scraper and PR Newswire RSS ingestion...");
    
    // Simulate latency for demo purposes if backend isn't running
    setTimeout(() => addLog("Found 3 new executive movement events. Passing to LLM for extraction..."), 1500);
    setTimeout(() => addLog("LLM Extracted Name, Role, Company. Generating inferred B2B emails..."), 3500);
    
    setTimeout(() => {
      setData([
        { name: "Sarah Jenkins", new_role: "Chief Technology Officer", company: "Acme Corp", inferred_email: "sarah.jenkins@acmecorp.com", confidence_score: 0.94 },
        { name: "Marcus Vance", new_role: "Vice President of Sales", company: "GlobalData Inc", inferred_email: "mvance@globaldata.com", confidence_score: 0.88 },
        { name: "David Lee", new_role: "Chief Financial Officer", company: "BetaTech", inferred_email: "david.lee@betatech.com", confidence_score: 0.91 }
      ]);
      addLog("Pipeline complete. Data synced to outreach queue.");
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="container">
      <header>
        <h1>👔 B2B Executive Movement Arbitrage</h1>
        <p>Catch newly hired executives 90 days before they update LinkedIn.</p>
      </header>

      <main>
        <div className="controls">
          <button onClick={triggerPipeline} disabled={loading} className={loading ? 'loading' : ''}>
            {loading ? 'Running AI Engine...' : 'Run Extraction Pipeline'}
          </button>
        </div>

        <div className="grid">
          <div className="terminal">
            <h3>System Logs</h3>
            <div className="log-window">
              {logs.map((log, i) => <div key={i}>{log}</div>)}
              {loading && <div className="blink">_</div>}
            </div>
          </div>

          <div className="results">
            <h3>Outreach Queue</h3>
            {data.length === 0 && !loading && <p className="empty">No data extracted yet. Run the pipeline.</p>}
            <div className="card-list">
              {data.map((exec, i) => (
                <div key={i} className="card">
                  <div className="card-header">
                    <strong>{exec.name}</strong>
                    <span className="badge">{(exec.confidence_score * 100).toFixed(0)}% Match</span>
                  </div>
                  <div className="card-body">
                    <p><strong>Role:</strong> {exec.new_role}</p>
                    <p><strong>Company:</strong> {exec.company}</p>
                    <p><strong>Email (Guessed):</strong> <code>{exec.inferred_email}</code></p>
                  </div>
                  <button className="action-btn">Draft Cold Email</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;