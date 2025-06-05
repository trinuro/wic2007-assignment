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
  },
  4: {
    questions: [
      {
        question: "Which of the following practices helps reduce the risk of being stalked on Facebook?",
        options: [
          "Joining more public groups",
          "Using the 'View As' feature",
          "Posting your school and birthday",
          "Accepting all friend requests"
        ],
        correct: 1,
        explanation: "The 'View As' feature lets you see how your profile appears to strangers, helping you identify and limit exposed personal information."
      },
      {
        question: "Why should teens avoid engaging in 'Add Yours' sticker trends on Instagram?",
        options: [
          "They decrease follower count",
          "They lead to account suspension",
          "They can reveal too much personal information",
          "They don't work on private accounts"
        ],
        correct: 2,
        explanation: "'Add Yours' stickers often encourage oversharing, which can be used to profile or scam users."
      },
      {
        question: "What is a safe action if someone on TikTok asks you to join a dangerous viral challenge?",
        options: [
          "Ignore and do it anyway",
          "Record a duet mocking it",
          "Report the trend and avoid participation",
          "Comment that the trend is fake"
        ],
        correct: 2,
        explanation: "Reporting harmful content and avoiding participation are the safest ways to handle potentially dangerous trends."
      },
      {
        question: "Which red flag might suggest a grooming attempt?",
        options: [
          "A request to switch to a private messaging app",
          "A compliment on your public post",
          "A like on an old photo",
          "A mutual friend request"
        ],
        correct: 0,
        explanation: "Groomers often try to isolate teens by moving conversations to private or encrypted platforms where monitoring is harder."
      },
      {
        question: "Why should users avoid anonymous Q&A features in unknown apps?",
        options: [
          "They reduce app performance",
          "They are illegal",
          "They can be used for bullying and harassment",
          "They don't allow profile pictures"
        ],
        correct: 2,
        explanation: "Anonymous features often lack moderation, making them prime tools for cyberbullying and abuse."
      },
      {
        question: "What is a universal smart safety habit recommended in the module?",
        options: [
          "Changing your profile name weekly",
          "Posting chat screenshots",
          "Performing a monthly privacy check",
          "Using a public Wi-Fi without VPN"
        ],
        correct: 2,
        explanation: "Regular privacy checks help users stay updated on their settings and limit unintended data exposure."
      }
    ]
  },
  5: {
    questions: [
      {
        question: "Which of the following is a common red flag in fake job or internship offers?",
        options: [
          "Detailed job descriptions with company contacts",
          "Requesting payment for job kits or training",
          "Interviews conducted via official platforms",
          "Use of company email addresses like @google.com"
        ],
        correct: 1,
        explanation: "Legitimate employers never ask for upfront payments. Scammers often trick victims into paying for fake job kits or training."
      },
      {
        question: "How do tech support scammers typically gain control of your device?",
        options: [
          "By sending friend requests",
          "By asking for your Wi-Fi password",
          "By requesting you install remote access tools",
          "By offering free antivirus software"
        ],
        correct: 2,
        explanation: "Scammers often ask victims to install tools like TeamViewer or AnyDesk, which give them full control over the device."
      },
      {
        question: "What tactic is commonly used in fake online marketplace buyer scams?",
        options: [
          "Offering to meet in public",
          "Overpaying and asking for a refund before payment clears",
          "Using platform’s in-app chat",
          "Requesting payment through Shopee or Lazada"
        ],
        correct: 1,
        explanation: "Scammers overpay and request a refund before the money clears, tricking sellers into sending real money for fake payments."
      },
      {
        question: "What makes a social media giveaway suspicious?",
        options: [
          "It’s promoted by a verified page",
          "It asks you to like and comment",
          "It requires clicking a link in the bio from an unverified page",
          "It features multiple prize winners"
        ],
        correct: 2,
        explanation: "Scammers create fake accounts and use bio links to collect personal data. Always verify the page's authenticity."
      },
      {
        question: "Why is the phrase 'You've been specially selected' in a job offer suspicious?",
        options: [
          "It’s commonly used by HR managers",
          "It creates urgency and pressure to respond",
          "It shows the company values you",
          "It confirms you're qualified"
        ],
        correct: 1,
        explanation: "Scammers use exclusivity and urgency to push victims into acting quickly without thinking or verifying."
      },
      {
        question: "What is the best way to verify a suspicious job offer?",
        options: [
          "Reply directly to the email you received",
          "Check the company’s LinkedIn page for similar offers",
          "Search the job title on job scam forums",
          "Contact the company directly through their official website"
        ],
        correct: 3,
        explanation: "Verifying job offers through the official company site or HR department is the most reliable way to avoid scams."
      }
    ]
    
  },

6: {
  questions: [
    {
      question: "What is an example of the 'Something Only You Should Know' authentication factor?",
      options: [
        "Fingerprint scan",
        "Password",
        "Hardware security key",
        "OTP app code"
      ],
      correct: 1,
      explanation: "'Something Only You Should Know' refers to knowledge factors like passwords, PINs, or security question answers."
    },
    {
      question: "Why is multi-factor authentication (MFA) considered your strongest defense?",
      options: [
        "It replaces passwords entirely",
        "It uses only biometric verification",
        "It combines two or more authentication factors to block most attacks",
        "It stores your password securely"
      ],
      correct: 2,
      explanation: "MFA requires two or more factors, like password + OTP, which blocks over 90% of phishing and credential-stuffing attacks."
    },
    {
      question: "Which of the following is a safer alternative to SMS-based OTP for two-factor authentication?",
      options: [
        "Using password hints",
        "Using authenticator apps like Google Authenticator",
        "Using email verification",
        "Using a simple PIN"
      ],
      correct: 1,
      explanation: "Authenticator apps generate time-based codes offline and are less vulnerable to interception or SIM swapping compared to SMS."
    },
    {
      question: "What is a key risk of relying solely on biometric authentication?",
      options: [
        "Biometrics are easy to fake",
        "Biometrics always work on every device",
        "You need a backup method if biometric fails or is unavailable",
        "Biometric data changes frequently"
      ],
      correct: 2,
      explanation: "Biometric authentication may not always be available or may fail, so having a backup method is important."
    },
    {
      question: "Which of the following is a common authentication mistake to avoid?",
      options: [
        "Using a password manager",
        "Reusing the same password across multiple accounts",
        "Enabling multi-factor authentication",
        "Using hardware security keys"
      ],
      correct: 1,
      explanation: "Reusing passwords increases risk because if one account is compromised, others become vulnerable."
    },
    {
      question: "In the university email phishing example, how does enabling MFA help?",
      options: [
        "It prevents the phishing email from arriving",
        "It blocks access even if the password is stolen",
        "It automatically deletes phishing emails",
        "It logs you out every hour"
      ],
      correct: 1,
      explanation: "Even if a phisher gets the password, they cannot access the account without the second factor, such as an OTP from an authenticator app."
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

  useEffect(() => {
    if (showScore) {
      navigate('/result', {
        state: {
          score: score,
          totalQuestions: quizData[moduleId].questions.length,
          moduleId
        }
      });
    }
  }, [showScore, score, moduleId, navigate]);

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