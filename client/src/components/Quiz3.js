import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz1.css';

const questionsData = [
  {
    question: 'what is the largest ocean on earth ?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 3,
    timer: 5,
  },
  {
    question: 'Which planet is closest to sun?',
    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
    correctAnswer: 2,
    timer: 5,
  },
  {
    question: 'Which scientist developed the theory of Relativity?',
    options: ['Isac Newton', 'Albert Einstien', 'Galileo Galilei', 'Nicola Tesla'],
    correctAnswer: 1,
    timer: 5,
  },
  
  // Add more questions as needed
];

const Quiz3 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timer, setTimer] = useState(questionsData[0].timer);
  const navigate = useNavigate();

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleNext = useCallback(() => {
    if (selectedOption !== null && selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }
    
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setTimer(questionsData[currentQuestionIndex + 1].timer);
    } else {
      navigate('/Results', {
        state: {
          correctAnswers,
          totalQuestions: questionsData.length,
        },
      });
    }
  }, [currentQuestionIndex, selectedOption, correctAnswers, navigate, currentQuestion.correctAnswer]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          handleNext();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [handleNext]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div id="quiz-container">
      <div id="quiz-header">
        <div id="no">{currentQuestionIndex + 1}/{questionsData.length}</div>
        <div className="timer" style={{ color: timer <= 5 ? 'red' : 'black' }}>{timer}s</div>
      </div>
      <div id="question">{currentQuestion.question}</div>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <button id="next" onClick={handleNext}>
        {currentQuestionIndex < questionsData.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
};

export default Quiz3;
