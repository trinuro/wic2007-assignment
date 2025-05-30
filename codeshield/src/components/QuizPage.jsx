import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const quizData = {
  1: {
    questions: [
      {
        question: "What is a strong password usually made up of?",
        options: [
          "Your birthday and name",
          "A combination of letters, numbers, and special characters",
          "The word 'password' with numbers",
          "Your pet's name"
        ],
        correct: 1,
        explanation: "Strong passwords use a mix of different characters to make them harder to guess or crack."
      },
      {
        question: "Which of these is a common sign of a computer virus?",
        options: [
          "The computer runs faster than usual",
          "Programs start or close without your permission",
          "The screen becomes brighter",
          "The keyboard makes clicking sounds"
        ],
        correct: 1,
        explanation: "Unexpected program behavior is a common sign of malware infection."
      },
      {
        question: "What should you do if you receive a suspicious email?",
        options: [
          "Open all attachments to check them",
          "Click links to verify they work",
          "Delete it without opening",
          "Forward it to all your contacts"
        ],
        correct: 2,
        explanation: "It's safest to delete suspicious emails without opening them to avoid potential security threats."
      },
      {
        question: "What is two-factor authentication?",
        options: [
          "Using two different passwords",
          "Logging in from two devices",
          "Using something you know and something you have",
          "Sharing your password with two people"
        ],
        correct: 2,
        explanation: "Two-factor authentication combines something you know (password) with something you have (like a phone) for better security."
      },
      {
        question: "How often should you update your software?",
        options: [
          "Never, it's not important",
          "Only when your computer breaks",
          "As soon as updates are available",
          "Once a year"
        ],
        correct: 2,
        explanation: "Regular software updates are crucial as they often contain security patches for vulnerabilities."
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