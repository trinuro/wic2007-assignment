import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const modules = [
  {
    id: 1,
    title: "Basic Cybersecurity",
    description: "Learn fundamental concepts of cybersecurity including passwords, viruses, and online safety.",
    icon: "🛡️",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Online Privacy",
    description: "Coming soon: Discover how to protect your personal information online.",
    icon: "🔒",
    difficulty: "Intermediate",
    comingSoon: true
  },
  {
    id: 3,
    title: "Digital Defense",
    description: "Coming soon: Master advanced techniques to defend against cyber threats.",
    icon: "⚔️",
    difficulty: "Advanced",
    comingSoon: true
  }
]

function DashboardPage() {
  const navigate = useNavigate()
  const [earnedBadges, setEarnedBadges] = useState([])
  const [completedModules, setCompletedModules] = useState([])

  useEffect(() => {
    // Load earned badges from localStorage
    const savedBadges = localStorage.getItem('earnedBadges')
    if (savedBadges) {
      const badges = JSON.parse(savedBadges)
      setEarnedBadges(badges)
      // Extract completed module IDs from badges
      const completed = [...new Set(badges.map(badge => badge.moduleId))]
      setCompletedModules(completed)
    }
  }, [])

  return (
    <div className="dashboard-page">
      <div className="content dashboard-content">
        {earnedBadges.length > 0 && (
          <div className="badges-showcase">
            <h2>Your Achievements</h2>
            <div className="badges-grid">
              {earnedBadges.map((badge, index) => (
                <div key={index} className="badge-card">
                  <div className="badge-icon-large">{badge.icon}</div>
                  <h3>{badge.name}</h3>
                  <p className="badge-date">{new Date(badge.earnedAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="dashboard-header">
          <h2>Learning Modules</h2>
          <p>Select a module to start your cybersecurity journey</p>
        </div>

        <div className="modules-grid">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className={`module-card ${module.comingSoon ? 'coming-soon' : ''} ${completedModules.includes(module.id) ? 'completed' : ''}`}
              onClick={() => !module.comingSoon && navigate('/quiz')}
            >
              {completedModules.includes(module.id) && (
                <div className="completion-mark">✓</div>
              )}
              <div className="module-icon">{module.icon}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <div className="module-footer">
                <span className="difficulty">{module.difficulty}</span>
                {module.comingSoon ? (
                  <span className="coming-soon-badge">Coming Soon</span>
                ) : (
                  <span className="start-module">
                    {completedModules.includes(module.id) ? 'Retake Module →' : 'Start Module →'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage 