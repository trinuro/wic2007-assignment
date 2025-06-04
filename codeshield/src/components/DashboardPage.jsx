import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const modules = [
  {
    id: 1,
    title: "Social Media Safety",
    //description: "Learn how to protect yourself on social media platforms, handle friend requests safely, avoid online predators, and maintain your privacy in the digital world.",
    icon: "🔒",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Phishing",
    //description: "Learn to identify and protect yourself from phishing attempts, scams, and social engineering attacks that try to steal your personal information.",
    icon: "🎣",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "Authentication",
    //description: "Learn to create and manage strong, understand why reuse is dangerous, and use password managers to safeguard your personal information.",
    icon: "⚔️",
    difficulty: "Advanced",
  }
]

function DashboardPage() {
  const navigate = useNavigate()
  const [earnedBadges, setEarnedBadges] = useState([])
  const [completedModules, setCompletedModules] = useState([])

  useEffect(() => {
    // Load completed modules from localStorage
    const savedModules = localStorage.getItem('completedModules')
    if (savedModules) {
      const modules = JSON.parse(savedModules)
      // Only consider modules that have been passed
      const passedModuleIds = Object.entries(modules)
        .filter(([_, data]) => data.passed)
        .map(([id]) => parseInt(id))
      setCompletedModules(passedModuleIds)
    }

    // Load earned badges from localStorage
    const savedBadges = localStorage.getItem('earnedBadges')
    if (savedBadges) {
      const badges = JSON.parse(savedBadges)
      setEarnedBadges(badges)
    }
  }, [])

  const handleModuleClick = (module) => {
    if (!module.comingSoon) {
      navigate('/quiz', { 
        state: { 
          moduleId: module.id,
          moduleTitle: module.title
        } 
      })
    }
  }

  return (
    <div className="dashboard-page">
      <div className="content dashboard-content">
        <div className="dashboard-header">
          <div className="header-content">
            <h2>Learning Modules</h2>
            <p>Select a module to start your cybersecurity journey</p>
            <button 
              className="achievements-button"
              onClick={() => navigate('/achievements')}
            >
              <span className="trophy-icon">🏆</span>
              <span>View Achievements</span>
              <span className="badge-count">{earnedBadges.length}</span>
            </button>
          </div>
        </div>

        <div className="modules-grid">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className={`module-card ${module.comingSoon ? 'coming-soon' : ''} ${completedModules.includes(module.id) ? 'completed' : ''}`}
            >
              {completedModules.includes(module.id) && (
                <div className="completion-mark">✓</div>
              )}
              <div className="module-icon">{module.icon}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              {!module.comingSoon && (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
                  <button
                    className="start-learning-btn-pixel"
                    style={{
                      minWidth: 140,
                      background: '#0a192f',
                      color: '#64ffda',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      fontFamily: 'monospace, \"Press Start 2P\", \"VT323\", \"Courier New\", Courier',
                      border: '4px solid #64ffda',
                      borderRadius: 0,
                      boxShadow: '0 0 0 4px #0a192f',
                      padding: '1rem 2.5rem',
                      cursor: 'pointer',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      transition: 'transform 0.1s',
                      outline: 'none',
                    }}
                    onMouseDown={e => { e.currentTarget.style.transform = 'translateY(2px)'; }}
                    onMouseUp={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                    onClick={() => navigate(`/module/${module.id}`)}
                  >
                    START LEARNING
                  </button>
                </div>
              )}
              <div className="module-footer">
                {module.comingSoon ? (
                  <span className="coming-soon-badge">Coming Soon</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage