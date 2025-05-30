import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const badges = {
  1: {  // Social Media Safety Module
    gold: {
      name: "Social Media Guardian",
      icon: "🔒",
      description: "Master of social media safety!"
    },
    silver: {
      name: "Privacy Protector",
      icon: "🛡️",
      description: "Strong understanding of online privacy!"
    },
    bronze: {
      name: "Safety Apprentice",
      icon: "📱",
      description: "Good start on social media safety!"
    }
  },
  2: {  // Phishing Module
    gold: {
      name: "Phishing Expert",
      icon: "🎣",
      description: "Master at detecting phishing attempts!"
    },
    silver: {
      name: "Scam Detector",
      icon: "🔍",
      description: "Good at identifying online scams!"
    },
    bronze: {
      name: "Security Novice",
      icon: "🌟",
      description: "Learning to spot online threats!"
    }
  },
  3: {  // Digital Defense Module (for future use)
    gold: {
      name: "Cyber Warrior",
      icon: "⚔️",
      description: "Master of digital defense!"
    },
    silver: {
      name: "Security Sentinel",
      icon: "🛡️",
      description: "Strong defender of digital assets!"
    },
    bronze: {
      name: "Defense Initiate",
      icon: "🎯",
      description: "Beginning the path of cyber defense!"
    }
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
      
      // Calculate badge based on score
      const badge = calculateBadge(score, totalQuestions);
      
      // Get existing data from localStorage
      const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
      const earnedBadges = JSON.parse(localStorage.getItem('earnedBadges') || '[]');
      
      // Update completed modules
      completedModules[moduleId] = {
        score,
        totalQuestions,
        completedAt: new Date().toISOString(),
        percentage,
        badge
      };
      
      // Remove any existing badges for this module
      const filteredBadges = earnedBadges.filter(b => b.moduleId !== moduleId);
      
      // Add the new badge
      filteredBadges.push({
        ...badge,
        moduleId,
        earnedAt: new Date().toISOString(),
        score: percentage
      });
      
      // Save both to localStorage
      localStorage.setItem('completedModules', JSON.stringify(completedModules));
      localStorage.setItem('earnedBadges', JSON.stringify(filteredBadges));
    }
  }, [score, totalQuestions, moduleId]);

  const calculateBadge = (score, total) => {
    const percentage = (score / total) * 100;
    const moduleBadges = badges[moduleId] || badges[1]; // Default to module 1 badges if moduleId not found
    if (percentage >= 80) return moduleBadges.gold;
    if (percentage >= 60) return moduleBadges.silver;
    return moduleBadges.bronze;
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
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage; 