import { useState } from 'react';
import { 
  CheckCircle2, 
  GitCommit, 
  ShieldCheck, 
  Cloud, 
  Terminal, 
  Layers, 
  Code2,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { add, subtract, multiply, divide, power } from './utils/calculator';

function App() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);
  const [operation, setOperation] = useState('add');
  const [copiedCmd, setCopiedCmd] = useState('');

  // Calculate result based on selected operation
  const getResult = () => {
    try {
      switch (operation) {
        case 'add':
          return add(num1, num2);
        case 'subtract':
          return subtract(num1, num2);
        case 'multiply':
          return multiply(num1, num2);
        case 'divide':
          return divide(num1, num2);
        case 'power':
          return power(num1, num2);
        default:
          return 0;
      }
    } catch (err) {
      return err.message;
    }
  };

  const stages = [
    {
      id: 'lint',
      name: '1. Code Linting',
      type: 'ci',
      desc: 'Enforces code style, checks for unused variables & syntax bugs.',
      cmd: 'npm run lint',
      icon: <Code2 size={20} color="#38bdf8" />
    },
    {
      id: 'test',
      name: '2. Automated Tests',
      type: 'ci',
      desc: 'Executes Vitest suite. Blocks deployment if any unit test fails.',
      cmd: 'npm run test:run',
      icon: <ShieldCheck size={20} color="#34d399" />
    },
    {
      id: 'build',
      name: '3. Production Build',
      type: 'ci',
      desc: 'Bundles optimized, minified production assets using Vite.',
      cmd: 'npm run build',
      icon: <Layers size={20} color="#f59e0b" />
    },
    {
      id: 'deploy',
      name: '4. Continuous Deployment',
      type: 'cd',
      desc: 'Publishes the verified bundle directly to GitHub Pages live.',
      cmd: 'actions/deploy-pages',
      icon: <Cloud size={20} color="#c084fc" />
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(''), 2000);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="status-pill">
          <span className="pulse-dot"></span>
          <span>CI/CD Automated Pipeline Ready</span>
        </div>
        <h1 className="app-title">
          GitHub Actions <span className="highlight">CI / CD</span> Pipeline
        </h1>
        <p className="app-subtitle">
          Automated continuous integration and continuous deployment demo using React, 
          Vitest, GitHub Actions, and GitHub Pages.
        </p>
      </header>

      {/* Pipeline Visualizer */}
      <section className="pipeline-section">
        <div className="section-header">
          <h2 className="section-title">
            <Layers size={22} color="#38bdf8" />
            Automated Pipeline Stages
          </h2>
          <span className="tag-badge">Trigger: git push / pull_request</span>
        </div>

        <div className="pipeline-stepper">
          {stages.map((stage) => (
            <div key={stage.id} className="stage-card">
              <span className={`stage-badge ${stage.type}`}>
                {stage.type.toUpperCase()} Stage
              </span>
              <div className="stage-icon-wrap">
                {stage.icon}
              </div>
              <h3 className="stage-title">{stage.name}</h3>
              <p className="stage-desc">{stage.desc}</p>
              <div 
                className="stage-command"
                style={{ cursor: 'pointer' }}
                title="Click to copy command"
                onClick={() => copyToClipboard(stage.cmd)}
              >
                <Terminal size={14} />
                <code>{copiedCmd === stage.cmd ? 'Copied!' : stage.cmd}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid: Interactive Feature + Lab Demo Script */}
      <div className="main-grid">
        {/* Left Column: Interactive Calculator Feature (Protected by CI Tests) */}
        <section className="card-panel">
          <h2 className="panel-title">
            <Sparkles size={20} color="#38bdf8" />
            Interactive Tested Feature
          </h2>
          <p className="panel-desc">
            This calculator is powered by <code>calculator.js</code> and guarded by 
            automated tests in <code>calculator.test.js</code>.
          </p>

          <div className="calculator-box">
            <div className="calc-inputs">
              <input
                type="number"
                aria-label="Input number 1"
                className="calc-input"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
              <input
                type="number"
                aria-label="Input number 2"
                className="calc-input"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>

            <div className="calc-actions">
              <button
                className={`calc-btn ${operation === 'add' ? 'active' : ''}`}
                onClick={() => setOperation('add')}
              >
                + Add
              </button>
              <button
                className={`calc-btn ${operation === 'subtract' ? 'active' : ''}`}
                onClick={() => setOperation('subtract')}
              >
                - Sub
              </button>
              <button
                className={`calc-btn ${operation === 'multiply' ? 'active' : ''}`}
                onClick={() => setOperation('multiply')}
              >
                × Mul
              </button>
              <button
                className={`calc-btn ${operation === 'divide' ? 'active' : ''}`}
                onClick={() => setOperation('divide')}
              >
                ÷ Div
              </button>
              <button
                className={`calc-btn ${operation === 'power' ? 'active' : ''}`}
                onClick={() => setOperation('power')}
              >
                ^ Pow
              </button>
            </div>

            <div className="calc-result-box">
              <span className="calc-result-label">Computed Result</span>
              <span className="calc-result-val" data-testid="calc-result">
                {getResult()}
              </span>
            </div>

            <div className="test-note">
              <strong>💡 CI Demonstration Tip:</strong>
              <br />
              In <code>src/utils/calculator.js</code>, change <code>return a + b</code> to <code>return a - b</code>.
              Push this bug to GitHub to show the audience how <strong>GitHub Actions blocks the release!</strong>
            </div>
          </div>
        </section>

        {/* Right Column: Lab Presentation Walkthrough */}
        <section className="card-panel">
          <h2 className="panel-title">
            <CheckCircle2 size={20} color="#34d399" />
            Live Demo Walkthrough
          </h2>
          <p className="panel-desc">
            Follow these simple steps to present this CI/CD pipeline in your lab:
          </p>

          <div className="step-list">
            <div className="step-item">
              <div className="step-num">1</div>
              <div className="step-content">
                <h4>Push to GitHub</h4>
                <p>Create a GitHub repo, add remote, and push this repository.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">2</div>
              <div className="step-content">
                <h4>Enable GitHub Pages</h4>
                <p>Go to <strong>Repo Settings &gt; Pages &gt; Source</strong>, choose <strong>GitHub Actions</strong>.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">3</div>
              <div className="step-content">
                <h4>Observe Green Pipeline</h4>
                <p>Click the <strong>Actions</strong> tab. Watch CI run tests and CD deploy your app live.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">4</div>
              <div className="step-content">
                <h4>Demonstrate Quality Gate</h4>
                <p>Introduce a small bug in code; push to a branch. Show CI fail and block broken deployment.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div>
          <span>Software Engineering Lab Demo &bull; Continuous Integration & Continuous Deployment</span>
        </div>
        <div className="footer-badges">
          <span className="tag-badge">
            <GitCommit size={14} /> v1.0.0
          </span>
          <span className="tag-badge">
            <RefreshCw size={14} /> Node v22
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
