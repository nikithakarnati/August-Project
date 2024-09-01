import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz1.css';

const questionsData = [
  {
    question: 'what is the capital of Australia ?',
    options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
    correctAnswer: 3,
    timer: 5,
  },
  {
    question: 'Who is the author of the Harry potter Series?',
    options: ['J.R.R.Tolkien', 'J.K.Rowling', 'C.S.Lewis', 'Suzanne Collins'],
    correctAnswer: 1,
    timer: 5,
  },
  {
    question: ' What is the chemical symbol for sodium?',
    options: ['Na', 'So', 'Sd', 'Nd'],
    correctAnswer: 0,
    timer: 5,
  },
  {
    question: 'Which country is known as Land of the Midnight Sun?',
    options: ['Sweden', ' Canada', 'Russia', 'Norway'],
    correctAnswer: 3,
    timer: 5,
  },
  {
    question: 'What is the Power House of the cell?',
    options: ['Nucleus', ' Golgi Complex', 'Liposome', 'Mitochondria'],
    correctAnswer: 3,
    timer: 5,
}

  
  // Add more questions as needed
];

const Quiz6 = () => {
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

export default Quiz6;
