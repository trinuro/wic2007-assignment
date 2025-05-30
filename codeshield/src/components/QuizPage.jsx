import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const quizData = {
  1: {
    questions: [
      {
        question: "You receive a friend request from someone you don't know. Their profile has very few details, but they send you a personal message complimenting your photos. What should you do?",
        options: [
          "Accept the request—everyone deserves a chance.",
          "Ignore or decline the request—only accept people you know.",
          "Accept, then block them immediately.",
          "Send them your phone number to prove trust."
        ],
        correct: 1,
        explanation: "Only accept friend requests from people you know to avoid strangers who may be predators."
      },
      {
        question: "A new social media feature lets you share your real‑time location with followers for 'safety reasons.' What's the safest action?",
        options: [
          "Enable it—friends should know where you are.",
          "Only share with a small group of close friends.",
          "Never enable real‑time location sharing with any followers.",
          "Share for 24 hours, then disable it."
        ],
        correct: 2,
        explanation: "Never enable real‑time location sharing—it exposes you to tracking by anyone who can view your profile."
      },
      {
        question: "You see an ad offering free concert tickets if you click a link and fill out your profile details. How should you proceed?",
        options: [
          "Click and fill out—free tickets are awesome!",
          "Research the promoter's official site first.",
          "Share the link with friends before clicking.",
          "Click, but only share basic info."
        ],
        correct: 1,
        explanation: "Always verify promotions through official channels to avoid phishing."
      },
      {
        question: "Which sign might indicate someone is trying to groom you online?",
        options: [
          "They avoid personal questions.",
          "They quickly ask to move to a private chat platform.",
          "They only talk about school subjects.",
          "They share public memes."
        ],
        correct: 1,
        explanation: "Groomers often push conversations to private channels."
      },
      {
        question: "Before trusting someone online, what's a reliable way to verify they are who they claim?",
        options: [
          "Video‑call them in small groups.",
          "Trust their social media profile alone.",
          "Check mutual connections and reputable sources.",
          "Read their public comments."
        ],
        correct: 2,
        explanation: "Checking mutual connections and verifying external sources reduces risk."
      }
    ]
  }
};

function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const moduleId = location.state?.moduleId;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  if (!moduleId || !quizData[moduleId]) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <h1>Quiz Not Found</h1>
          <button className="next-btn" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>
      </div>
    );
  }

  const questions = quizData[moduleId].questions;

  const handleAnswerClick = (selectedOption) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(selectedOption);
    setShowExplanation(true);
    
    if (questions[currentQuestion].correct === selectedOption) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
      navigate('/result', {
        state: {
          score: score + (questions[currentQuestion].correct === selectedAnswer ? 1 : 0),
          totalQuestions: questions.length,
          moduleId
        }
      });
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-content">
        <div className="quiz-header">
          <div className="question-count">
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className="score">
            Score: {score}
          </div>
        </div>

        <div className="question-card">
          <h3>{questions[currentQuestion].question}</h3>
          
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`option-btn ${
                  selectedAnswer === null ? "" :
                  index === questions[currentQuestion].correct ? "correct" :
                  selectedAnswer === index ? "wrong" : ""
                } ${selectedAnswer !== null ? "disabled" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="explanation">
              <p>{questions[currentQuestion].explanation}</p>
              <button onClick={handleNext} className="next-btn">
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage; 