import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
import DashboardPage from './components/DashboardPage'
import AchievementsPage from './components/AchievementsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </Router>
  )
}

function MainPage() {
  const navigate = useNavigate()
  
  return (
    <div className="main-page">
      <div className="content">
        <h1>CodeShield</h1>
        <p>
          Welcome to the ultimate cybersecurity challenge! Test your knowledge, protect the digital realm,
          and earn badges as a cyber defender. Are you ready to become a guardian of the cyber world?
        </p>
        <div className="features">
          <div className="feature">
            <span className="icon">🛡️</span>
            <span>Learn Security</span>
          </div>
          <div className="feature">
            <span className="icon">🏆</span>
            <span>Earn Badges</span>
          </div>
          <div className="feature">
            <span className="icon">🎯</span>
            <span>Test Skills</span>
          </div>
        </div>
        <div className="action-buttons">
          <button 
            className="start-btn" 
            onClick={() => navigate('/dashboard')}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
