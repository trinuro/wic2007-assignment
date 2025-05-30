import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AchievementsPage() {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Load completed modules and their badges from localStorage
    const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
    
    // Transform the completed modules data into achievements array
    const achievementsData = Object.entries(completedModules).map(([moduleId, data]) => ({
      moduleId,
      badge: data.badge,
      score: data.score,
      totalQuestions: data.totalQuestions,
      completedAt: new Date(data.completedAt),
      percentage: Math.round((data.score / data.totalQuestions) * 100)
    }));

    // Sort by completion date (most recent first)
    achievementsData.sort((a, b) => b.completedAt - a.completedAt);
    setAchievements(achievementsData);
  }, []);

  const getModuleName = (moduleId) => {
    const moduleNames = {
      'basic-security': 'Basic Cybersecurity',
      'online-privacy': 'Online Privacy',
      'digital-defense': 'Digital Defense'
    };
    return moduleNames[moduleId] || moduleId;
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Your Achievements</h2>
          <p>Showcase of your cybersecurity learning journey</p>
        </div>

        {achievements.length === 0 ? (
          <div className="no-achievements">
            <h3>No Badges Yet</h3>
            <p>Complete modules to earn badges and track your progress!</p>
            <button 
              className="start-btn"
              onClick={() => navigate('/dashboard')}
            >
              Start Learning
            </button>
          </div>
        ) : (
          <div className="badges-showcase">
            <div className="badges-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="badge-card">
                  <div className="badge-icon-large">
                    {achievement.badge.icon}
                  </div>
                  <h3>{achievement.badge.name}</h3>
                  <p className="module-name">
                    {getModuleName(achievement.moduleId)}
                  </p>
                  <p className="badge-date">
                    Earned on {formatDate(achievement.completedAt)}
                  </p>
                  <div className="badge-score">
                    Score: {achievement.score}/{achievement.totalQuestions} ({achievement.percentage}%)
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button 
          className="back-btn"
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default AchievementsPage; 