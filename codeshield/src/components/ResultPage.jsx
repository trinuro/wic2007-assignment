import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// UPDATED: Now contains definitions for all 6 modules.
const badges = {
  1: {  // Social Media Safety - lesson 1
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
  2: {  // Phishing - lesson 1
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
  3: {  // Authentication - lesson 1
    gold: {
      name: "Authentication Master",
      icon: "🔑",
      description: "Master of secure authentication!"
    },
    silver: {
      name: "Access Controller",
      icon: "🛡️",
      description: "Strong understanding of access control!"
    },
    bronze: {
      name: "Login Learner",
      icon: "🎯",
      description: "Beginning the path of secure logins!"
    }
  },
  // --- NEW BADGES ADDED BELOW ---
  4: {  // Social Media Safety - lesson 2 (Same badges as module 1)
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
  5: {  // Phishing - lesson 2 (Same badges as module 2)
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
  6: {  // Authentication - lesson 2 (Same badges as module 3)
    gold: {
      name: "Authentication Master",
      icon: "🔑",
      description: "Master of secure authentication!"
    },
    silver: {
      name: "Access Controller",
      icon: "🛡️",
      description: "Strong understanding of access control!"
    },
    bronze: {
      name: "Login Learner",
      icon: "🎯",
      description: "Beginning the path of secure logins!"
    }
  }
};

// Minimum percentage to pass a module
const PASS_PERCENTAGE = 60;

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  // The rest of the component remains exactly the same.
  const { score, totalQuestions, moduleId } = location.state || {};

  useEffect(() => {
    if (typeof score === 'number' && totalQuestions && moduleId) {
      const percentage = (score / totalQuestions) * 100;
      const passed = percentage >= PASS_PERCENTAGE;
      
      const badge = calculateBadge(score, totalQuestions);
      
      const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
      // Note: We are no longer using 'earnedBadges'. The 'completedModules' object
      // now contains all the necessary info, including the badge.
      // This simplifies the logic. Let's stick with just `completedModules`.
      
      if (passed) {
        // Only update completed modules if the user passed
        completedModules[moduleId] = {
          score,
          totalQuestions,
          completedAt: new Date().toISOString(),
          percentage,
          badge, // The badge object is now stored here
          passed: true
        };
        
        localStorage.setItem('completedModules', JSON.stringify(completedModules));

      } else {
        // If not passed, you might want to store the attempt or not.
        // Storing it allows tracking attempts, but let's only store passed modules
        // for a cleaner `completedModules` object. You can uncomment this if needed.
        /*
        completedModules[moduleId] = {
          score,
          totalQuestions,
          completedAt: new Date().toISOString(),
          percentage,
          badge: null, // No badge earned
          passed: false
        };
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
        */
      }
    }
  }, [score, totalQuestions, moduleId, navigate]);

  const calculateBadge = (score, total) => {
    if (!moduleId) return null; // Guard against missing moduleId
    const percentage = (score / total) * 100;
    // This line already handles the new modules perfectly!
    const moduleBadges = badges[moduleId] || badges[1]; 
    if (percentage >= 80) return moduleBadges.gold;
    if (percentage >= 60) return moduleBadges.silver;
    // Note: We only award a badge if they pass (>= 60%). Bronze is no longer the "fail" badge.
    return null; // Return null if score is below 60%
  };

  const handleRetry = () => {
    navigate('/quiz', { state: { moduleId } });
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  if (typeof score !== 'number' || !totalQuestions || !moduleId) {
    return (
      <div className="result-page">
        <div className="result-card">
          <h1>No Results Available</h1>
          <p>Please go back to the dashboard and start a quiz.</p>
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

        {/* Show badge section only if a badge was earned (i.e., they passed) */}
        {passed && badge && (
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
            : "Keep practicing to improve your cybersecurity knowledge! You need to score at least 60% to complete this module."}
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