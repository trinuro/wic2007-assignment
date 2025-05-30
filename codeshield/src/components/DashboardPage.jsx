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
              onClick={() => handleModuleClick(module)}
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