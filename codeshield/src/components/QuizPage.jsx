import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./QuizPage.css";

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
  },
  2: {
    questions: [
      {
        question: "You receive this WhatsApp message:\n\nSalam.. cuba check IC, sbb kerajaan bagi kite bantuan RM300. Cara nak claim duit tu:\nhttps://b4ntuan-my-t3rk1ni-cvc07ru29.vercel.app/\n\nDaulat Tuanku",
        options: [
          "It contains a long message in Malay",
          "It's a legitimate government notice",
          "It uses a suspicious-looking link and plays on emotions",
          "It mentions \"Daulat Tuanku\" so it must be real"
        ],
        correct: 2,
        explanation: "This is a phishing scam. It pretends to be from the government, uses emotional triggers like free aid, and includes a suspicious link to steal your information."
      },
      {
        question: "Which of these is a common sign of a phishing message?",
        options: [
          "Personalized greeting with your full name",
          "Asking you to log in through a suspicious link",
          "Sharing safety tips",
          "Telling you to update your game"
        ],
        correct: 1,
        explanation: "Phishing messages often trick people into entering their credentials on fake websites via suspicious links."
      },
      {
        question: "Which of these is the best way to protect yourself from phishing scams?",
        options: [
          "Use the same password for all your accounts",
          "Turn off two-factor authentication to avoid delays",
          "Be careful with links, and enable two-factor authentication",
          "Click suspicious links only on mobile"
        ],
        correct: 2,
        explanation: "Using 2FA and avoiding suspicious links are two of the best ways to prevent phishing attacks."
      },
      {
        question: "You receive an email that says: \"Your bank account has been frozen. Click here to verify your info now.\"\nThe sender's email is 'support@b4nk-secure-help.com'. What should you do?",
        options: [
          "Click the link and log in quickly",
          "Reply to the email and ask for proof",
          "Ignore it and log in via the official bank website",
          "Forward it to your parents"
        ],
        correct: 2,
        explanation: "The sender is not using the real bank domain, which is a red flag. Always visit the official website directly instead of clicking unknown links."
      },
      {
        question: "You receive this email:\n\n\"Dear user,\n\nWe've detected suspicious activity on your account and have temporarily suspended access for your protection.\n\nTo restore your access, please verify your information immediately via this link:\n\nhttps://support.google.com.my/10759436/verify\n\nFailure to act within 24 hours will result in permanent suspension of your account.\n\nThank you for your prompt attention.\n\n— The Security Team\n\nThis is an automated message. Please do not reply.\"\n\nIt's from no-reply@accounts.google.com. What makes this message suspicious?",
        options: [
          "It uses a Google domain for the link",
          "It threatens suspension within 24 hours",
          "The URL uses an unexpected country subdomain (.com.my) and not the official accounts.google.com domain",
          "It's sent from no-reply@accounts.google.com"
        ],
        correct: 2,
        explanation: "Official Google security notifications always link to URLs under accounts.google.com without extra country subdomains. The use of \"support.google.com.my\" is a red flag indicating a phishing attempt."
      },
      {
        question: "An 18-year-old Malaysian teen received a call saying the police were after him over an illegal parcel in his name. Over several days, he was told not to contact anyone, paid a total of RM309,000, then his family was asked for ransom. What key warning sign did scammers use to manipulate him?",
        options: [
          "They offered a real police phone number for verification",
          "They instructed him to keep the matter secret and not contact family",
          "They asked for his social media password to 'verify' his identity",
          "They provided official government websites for payment"
        ],
        correct: 1,
        explanation: "A common tactic in scams is isolation: urging victims to stay silent and not seek advice, which prevents them from verifying the story or getting help."
      }
    ]
  },
  3: {
    questions: [
      {
        question: "Which of the following is the strongest password?",
        options: ["12345678", "password123", "John2005", "G!v3M3$3cur1ty!"],
        correct: 3,
        explanation: "Strong passwords use a combination of uppercase and lowercase letters, numbers, and symbols. 'G!v3M3$3cur1ty!' is complex and hard to guess."
      },
      {
        question: "Why is it risky to use the same password for multiple accounts?",
        options: [
          "It makes logging in easier",
          "It can cause slower internet speed",
          "If one account is hacked, all accounts become vulnerable",
          "Websites don't allow reused passwords"
        ],
        correct: 2,
        explanation: "If hackers gain access to one account, they can try the same password on your other accounts and break in easily."
      },
      {
        question: "What is two-factor authentication (2FA)?",
        options: [
          "Logging into two accounts at the same time",
          "Using two different passwords",
          "An extra step to verify your identity after entering your password",
          "A type of antivirus software"
        ],
        correct: 2,
        explanation: "2FA adds an extra layer of security by asking for something you have (like a code sent to your phone) in addition to your password."
      },
      {
        question: "Which of the following should you AVOID when creating a password?",
        options: [
          "Using a mix of letters, numbers, and symbols",
          "Using your name or birthdate",
          "Changing your password regularly",
          "Using different passwords for different sites"
        ],
        correct: 1,
        explanation: "Personal information like your name or birthdate is easy for attackers to guess or find online."
      },
      {
        question: "How often should you change your passwords for important accounts?",
        options: ["Never", "Only if hacked", "Every 6–12 months", "Every day"],
        correct: 2,
        explanation: "Changing your password regularly reduces the risk of long-term exposure if it has been compromised without your knowledge."
      },
      {
        question: "What is a password manager?",
        options: [
          "A tool that creates and stores strong passwords for you",
          "A person who remembers your passwords",
          "An antivirus feature",
          "A browser extension to block ads"
        ],
        correct: 0,
        explanation: "Password managers help you generate and securely store complex passwords so you don't have to remember them all."
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
  const [isCorrect, setIsCorrect] = useState(false);
  const [showEffect, setShowEffect] = useState(false);

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
    
    const correct = questions[currentQuestion].correct === selectedOption;
    setIsCorrect(correct);
    setShowEffect(true);
    
    if (correct) {
      setScore(score + 1);
    }

    // Reset effect after animation
    setTimeout(() => {
      setShowEffect(false);
    }, 1000);
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
          score: score,
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
          <h3 style={{ whiteSpace: 'pre-line' }}>{questions[currentQuestion].question}</h3>
          
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`option-btn ${
                  selectedAnswer === null ? "" :
                  index === questions[currentQuestion].correct ? "correct" :
                  selectedAnswer === index ? "wrong" : ""
                } ${selectedAnswer !== null ? "disabled" : ""} ${
                  showEffect && selectedAnswer === index ? 
                  (isCorrect ? "correct-animation" : "wrong-animation") : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className={`explanation ${showEffect ? (isCorrect ? "correct-explanation" : "wrong-explanation") : ""}`}>
              <p style={{ whiteSpace: 'pre-line' }}>{questions[currentQuestion].explanation}</p>
              <button onClick={handleNext} className="next-btn">
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          )}
        </div>

        {showEffect && isCorrect && (
          <div className="confetti-container">
            {Array.from({ length: 50 }).map((_, index) => (
              <div 
                key={index} 
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  backgroundColor: `hsl(${Math.random() * 360}, 50%, 50%)`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage; 