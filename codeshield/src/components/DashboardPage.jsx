import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const modules = [
  {
    id: 1,
    title: "Social Media Safety",
    description: "Learn how to protect yourself on social media platforms, handle friend requests safely, avoid online predators, and maintain your privacy in the digital world.",
    icon: "🔒",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Phishing",
    description: "Learn to identify and protect yourself from phishing attempts, scams, and social engineering attacks that try to steal your personal information.",
    icon: "🎣",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "Password Awareness",
    description: "Learn to create and manage strong, unique passwords, understand why reuse is dangerous, and use password managers to safeguard your personal information.",
    icon: "⚔️",
    difficulty: "Advanced",
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
            >
              {completedModules.includes(module.id) && (
                <div className="completion-mark">✓</div>
              )}
              <div className="module-icon">{module.icon}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <div className="module-footer">
                {module.comingSoon ? (
                  <span className="coming-soon-badge">Coming Soon</span>
                ) : (
                  <>
                    <button className="courses-btn" onClick={() => navigate(`/courses/${module.id}`)}>
                      Courses
                    </button>
                    <button className="start-module-btn" onClick={() => handleModuleClick(module)}>
                      {completedModules.includes(module.id) ? 'Retake Module →' : 'Start Module →'}
                    </button>
                  </>
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