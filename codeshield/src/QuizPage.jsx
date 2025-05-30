import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from './questions'

function QuizPage() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (optionIndex) => {
    setSelectedAnswer(optionIndex)
    setShowExplanation(true)
    
    const isCorrect = optionIndex === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }
    
    setAnswers([...answers, {
      question: currentQuestion,
      selected: optionIndex,
      correct: isCorrect
    }])
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      navigate('/result', { 
        state: { 
          score,
          total: questions.length,
          answers
        }
      })
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="quiz-page">
      <div className="content quiz-content">
        <div className="quiz-header">
          <h2>Question {currentQuestion + 1}/{questions.length}</h2>
          <div className="score">Score: {score}</div>
        </div>
        
        <div className="question-card">
          <h3>{question.question}</h3>
          
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !selectedAnswer && handleAnswer(index)}
                className={`option-btn ${
                  selectedAnswer === index 
                    ? index === question.correctAnswer 
                      ? 'correct' 
                      : 'wrong'
                    : ''
                } ${selectedAnswer !== null ? 'disabled' : ''}`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="explanation">
              <p>{question.explanation}</p>
              <button 
                className="next-btn"
                onClick={handleNext}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizPage 