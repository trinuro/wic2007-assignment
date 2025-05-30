import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const badges = {
  gold: {
    name: "Cyber Guardian",
    icon: "🏆",
    description: "Master of cybersecurity knowledge!"
  },
  silver: {
    name: "Digital Defender",
    icon: "🛡️",
    description: "Strong understanding of security concepts!"
  },
  bronze: {
    name: "Security Apprentice",
    icon: "📚",
    description: "Good start on your security journey!"
  }
};

// Minimum percentage to pass a module
const PASS_PERCENTAGE = 60;

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions, moduleId } = location.state || {};

  useEffect(() => {
    if (score && totalQuestions && moduleId) {
      const percentage = (score / totalQuestions) * 100;
      if (percentage >= PASS_PERCENTAGE) {
        // Save module completion to localStorage
        const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
        completedModules[moduleId] = {
          score: score,
          totalQuestions: totalQuestions,
          completedAt: new Date().toISOString(),
          badge: calculateBadge(score, totalQuestions)
        };
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
      }
    }
  }, [score, totalQuestions, moduleId]);

  const calculateBadge = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return badges.gold;
    if (percentage >= 60) return badges.silver;
    if (percentage >= 40) return badges.bronze;
    return null;
  };

  const handleRetry = () => {
    navigate('/quiz', { state: { moduleId } });
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  if (!score || !totalQuestions) {
    return (
      <div className="result-page">
        <div className="result-card">
          <h1>No Results Available</h1>
          <button onClick={handleBackToDashboard} className="dashboard-btn">Back to Dashboard</button>
        </div>
      </div>
    );
  }

  const percentage = Math.round((score / totalQuestions) * 100);
  const badge = calculateBadge(score, totalQuestions);
  const passed = percentage >= PASS_PERCENTAGE;

  return (
    <div className="result-page">
      <div className="result-content">
        <h1>Quiz Complete!</h1>
        
        <div className="score-section">
          <div className="final-score">
            <span className="score-number">{score}</span>
            <span className="score-total">/{totalQuestions}</span>
          </div>
          <div className="percentage">{percentage}%</div>
        </div>

        {badge && (
          <div className="badge-section">
            <div className="badge">
              <span className="badge-icon">{badge.icon}</span>
              <h3>Achievement Unlocked!</h3>
              <p>You've earned the badge:</p>
              <span className="badge-name">{badge.name}</span>
            </div>
          </div>
        )}

        <div className="message">
          {passed 
            ? "Congratulations! You've completed this module! 🎉"
            : "Keep practicing to improve your cybersecurity knowledge!"}
        </div>

        <div className="action-buttons">
          <button onClick={handleRetry} className="retry-btn">
            Try Again
          </button>
          <button onClick={handleBackToDashboard} className="dashboard-btn">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage; 