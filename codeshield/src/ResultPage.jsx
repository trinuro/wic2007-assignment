import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function ResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { score, total } = location.state || { score: 0, total: 0 }
  const percentage = (score / total) * 100

  const getBadge = () => {
    if (percentage === 100) return { name: "Cyber Master", icon: "🏆" }
    if (percentage >= 80) return { name: "Security Expert", icon: "🛡️" }
    if (percentage >= 60) return { name: "Digital Guardian", icon: "🔰" }
    return { name: "Security Apprentice", icon: "🎯" }
  }

  const badge = getBadge()

  useEffect(() => {
    // Save the earned badge to localStorage
    const newBadge = {
      ...badge,
      score: percentage,
      earnedAt: new Date().toISOString(),
      moduleId: 1, // Basic Cybersecurity module
      moduleTitle: "Basic Cybersecurity"
    }

    const savedBadges = JSON.parse(localStorage.getItem('earnedBadges') || '[]')
    localStorage.setItem('earnedBadges', JSON.stringify([...savedBadges, newBadge]))
  }, [badge, percentage])

  return (
    <div className="result-page">
      <div className="content result-content">
        <h2>Quiz Complete!</h2>
        
        <div className="result-card">
          <div className="score-section">
            <div className="final-score">
              <span className="score-number">{score}</span>
              <span className="score-total">/{total}</span>
            </div>
            <div className="percentage">{percentage}%</div>
          </div>

          <div className="badge-section">
            <div className="badge">
              <span className="badge-icon">{badge.icon}</span>
              <h3>Achievement Unlocked!</h3>
              <p>You've earned the badge:</p>
              <span className="badge-name">{badge.name}</span>
            </div>
          </div>

          <div className="message">
            {percentage === 100 && "Perfect score! You're a true cybersecurity expert!"}
            {percentage >= 80 && percentage < 100 && "Great job! You have strong cybersecurity knowledge!"}
            {percentage >= 60 && percentage < 80 && "Good effort! Keep learning about cybersecurity!"}
            {percentage < 60 && "Keep practicing! Cybersecurity is an ongoing journey!"}
          </div>

          <button className="start-btn" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultPage 