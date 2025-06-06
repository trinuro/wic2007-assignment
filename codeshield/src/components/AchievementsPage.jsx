import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Your 6 modules
const moduleInfo = {
  1: {
    name: "Social Media Safety - lesson 1",
    description: "Protecting yourself on social media platforms",
    icon: "🔒"
  },
  2: {
    name: "Phishing - lesson 1",
    description: "Identifying and avoiding online scams",
    icon: "🎣"
  },
  3: {
    name: "Authentication - lesson 1",
    description: "Understanding secure login methods",
    icon: "🔑"
  },
  4: {
    name: "Social Media Safety - lesson 2",
    description: "Advanced social media privacy settings",
    icon: "🔒"
  },
  5: {
    name: "Phishing - lesson 2",
    description: "Spotting sophisticated scam emails",
    icon: "🎣"
  },
  6: {
    name: "Authentication - lesson 2",
    description: "Using two-factor authentication (2FA)",
    icon: "🔑"
  }
};

// Define the special certificate for course completion
const certificateInfo = {
  name: "Cybersecurity Graduate",
  description: "Congratulations! You have mastered all cybersecurity lessons.",
  icon: "🎓" // A graduation cap icon
};


function AchievementsPage() {
  const navigate = useNavigate();
  // State for the individual badges
  const [achievements, setAchievements] = useState([]);
  // State for the final certificate, if earned
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    // 1. Process individual badges (same as your code)
    const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
    const achievementsData = Object.entries(completedModules).map(([moduleId, data]) => ({
      moduleId,
      badge: data.badge,
      score: data.score,
      totalQuestions: data.totalQuestions,
      completedAt: new Date(data.completedAt),
      percentage: Math.round((data.score / data.totalQuestions) * 100)
    }));
    achievementsData.sort((a, b) => b.completedAt - a.completedAt);
    setAchievements(achievementsData);

    // 2. Check for full course completion to award the certificate
    const totalModules = Object.keys(moduleInfo).length;
    const numCompleted = Object.keys(completedModules).length;

    if (numCompleted >= totalModules) {
      // Calculate total score and total possible questions
      const totalScore = achievementsData.reduce((sum, data) => sum + data.score, 0);
      const totalQuestions = achievementsData.reduce((sum, data) => sum + data.totalQuestions, 0);

      // Find the most recent completion date
      const latestCompletionDate = new Date(
        Math.max(...achievementsData.map(data => data.completedAt))
      );

      // Create the final certificate object
      setCertificate({
        ...certificateInfo,
        totalScore,
        totalQuestions,
        completedAt: latestCompletionDate,
        percentage: Math.round((totalScore / totalQuestions) * 100) || 0
      });
    }

  }, []);

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

        {/* Display the final certificate if the course is complete */}
        {certificate && (
          <div className="certificate-section">
            <div className="badge-card certificate-card"> {/* Added 'certificate-card' for special styling */}
                <div className="badge-icon-large">
                  {certificate.icon}
                </div>
                <h3>{certificate.name}</h3>
                <p className="badge-description">
                  {certificate.description}
                </p>
                <p className="badge-date">
                  Course completed on {formatDate(certificate.completedAt)}
                </p>
                <div className="badge-score">
                  Total Score: {certificate.totalScore}/{certificate.totalQuestions} ({certificate.percentage}%)
                </div>
            </div>
            <hr className="section-divider" />
          </div>
        )}

        {/* Display the grid of earned badges */}
        {achievements.length === 0 ? (
          <div className="no-achievements">
            <h2>No Badges Yet</h2>
            <h2>Complete lessons to earn badges and track your progress!</h2>
            <br />
            <button 
              className="start-btn"
              onClick={() => navigate('/dashboard')}
            >
              Start Learning
            </button>
          </div>
        ) : (
          <div className="badges-showcase">
            {certificate && <h4>Your Earned Badges</h4>} {/* Add a title if certificate is also shown */}
            <div className="badges-grid">
              {achievements.map((achievement, index) => {
                const module = moduleInfo[achievement.moduleId];
                return (
                  <div key={index} className="badge-card">
                    <div className="badge-icon-large">
                      {achievement.badge.icon}
                    </div>
                    {/* The lesson name is the main title */}
                    <h3>{module?.name || 'Unknown Module'}</h3>
                    
                    {/* The specific badge title is a subtitle */}
                    <p className="badge-tier-name">{achievement.badge.name}</p>
                    
                    <p className="badge-description">
                      {module?.description}
                    </p>
                    <p className="badge-date">
                      Earned on {formatDate(achievement.completedAt)}
                    </p>
                    <div className="badge-score">
                      Score: {achievement.score}/{achievement.totalQuestions} ({achievement.percentage}%)
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div style={{ height: "1.5em" }} />
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