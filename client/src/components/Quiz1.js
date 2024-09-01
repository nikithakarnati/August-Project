import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz1.css';


const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correctAnswer: 2,
    timer: 10,
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 2,
    timer: 5,
  },
  {
    question: 'What is the boiling point of water?',
    options: ['100°C', '0°C', '50°C', '90°C'],
    correctAnswer: 0,
    timer: 10,
  },
  // Add more questions as needed
];

const Quiz1 = () => {
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

export default Quiz1;
