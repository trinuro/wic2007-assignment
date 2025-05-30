import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    id: "basic-security",
    title: "Basic Cybersecurity",
    description: "Learn fundamental concepts of cybersecurity including passwords, viruses, and online safety.",
    icon: "🛡️",
    difficulty: "Beginner",
    status: "active"
  },
  {
    id: "online-privacy",
    title: "Online Privacy",
    description: "Coming soon: Discover how to protect your personal information online.",
    icon: "🔒",
    difficulty: "Intermediate",
    status: "coming-soon"
  },
  {
    id: "digital-defense",
    title: "Digital Defense",
    description: "Coming soon: Master advanced techniques to defend against cyber threats.",
    icon: "⚔️",
    difficulty: "Advanced",
    status: "coming-soon"
  }
];

function DashboardPage() {
  const navigate = useNavigate();
  const [completedModules, setCompletedModules] = useState({});

  useEffect(() => {
    // Load completed modules from localStorage
    const completed = JSON.parse(localStorage.getItem('completedModules') || '{}');
    setCompletedModules(completed);
  }, []);

  const handleModuleClick = (moduleId, status) => {
    if (status === "coming-soon") return;
    navigate('/quiz', { state: { moduleId } });
  };

  const getModuleStatus = (moduleId, defaultStatus) => {
    if (defaultStatus === "coming-soon") return defaultStatus;
    return completedModules[moduleId] ? "completed" : "active";
  };

  const getBadgeCount = () => {
    return Object.keys(completedModules).length;
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
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
              <span className="badge-count">{getBadgeCount()}</span>
            </button>
          </div>
        </div>
        
        <div className="modules-grid">
          {modules.map((module) => {
            const status = getModuleStatus(module.id, module.status);
            const completion = completedModules[module.id];
            
            return (
              <div 
                key={module.id} 
                className={`module-card ${status}`}
                onClick={() => handleModuleClick(module.id, status)}
              >
                {status === "completed" && (
                  <div className="completion-mark" title="Module Completed">✓</div>
                )}
                <span className="module-icon">{module.icon}</span>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div className="module-footer">
                  <span className={`difficulty ${module.difficulty.toLowerCase()}`}>
                    {module.difficulty}
                  </span>
                  {status === "coming-soon" ? (
                    <span className="coming-soon-badge">Coming Soon</span>
                  ) : status === "completed" ? (
                    <div className="completion-details">
                      <span className="badge-icon">{completion.badge.icon}</span>
                      <span className="badge-score">{completion.score}/{completion.totalQuestions}</span>
                    </div>
                  ) : (
                    <span className="start-module">Start Module →</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage; 