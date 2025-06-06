import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
import DashboardPage from './components/DashboardPage'
import AchievementsPage from './components/AchievementsPage'
import CoursesPage from './components/CoursesPage'
import ModulePage from './components/ModulePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/courses/:moduleId" element={<CoursesPage />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
      </Routes>
    </Router>
  )
}

function MainPage() {
  const navigate = useNavigate()
  
  return (
    <div className="main-page">
      <div className="content">
        <div className="hero-section">
          <h1 className="glitch-text">CodeShield</h1>
          <h2 className="main-subheading">Level up your cybersecurity knowledge, one badge at a time!</h2>
          <p className="hero-description">
            Welcome to the ultimate cybersecurity challenge! Test your knowledge, protect the digital realm,
            and earn badges as a cyber defender. Are you ready to become a guardian of the cyber world?
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Learn Security</h3>
            <p>Master essential cybersecurity concepts through interactive lessons</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Earn Badges</h3>
            <p>Collect unique badges as you progress through your security journey</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Test Skills</h3>
            <p>Challenge yourself with real-world security scenarios</p>
          </div>
        </div>

        <div className="cta-section">
          <button 
            className="start-btn animated-cta" 
            onClick={() => navigate('/dashboard')}
            aria-label="Start Your Journey"
          >
            <span className="btn-text">Start Your Journey</span>
            <span className="btn-arrow">→</span>
          </button>
          <div className="cta-subtitle">No account needed! Takes less than a minute to begin!</div>
        </div>
      </div>
    </div>
  )
}

export default App
