import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/QAType.css';

const MAX_QUESTIONS = 5;

function QAType() {
  const [questions, setQuestions] = useState([{ options: ['', '', ''], correctOptionIndex: null, timer: 'OFF' }]);

  const addQuestion = () => {
    if (questions.length < MAX_QUESTIONS) {
      setQuestions([...questions, { options: ['', '', ''], correctOptionIndex: null, timer: 'OFF' }]);
    }
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const setCorrectOption = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctOptionIndex = oIndex;
    setQuestions(newQuestions);
  };

  const setTimer = (qIndex, timer) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].timer = timer;
    setQuestions(newQuestions);
  };

  return (
    <div id="background">
      <div id="blurred-background"></div>
      <div id="qa-modal">
      <div className="poll-controls">
        <span>1</span>
      <button onClick={addQuestion} disabled={questions.length >= MAX_QUESTIONS}>+</button>
      </div>
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="question-block">
            <div className="question-header">
              {qIndex > 0 && (
                <button className="remove-question" onClick={() => removeQuestion(qIndex)}>×</button>
              )}
            </div>
            <input
             id="poll-question"
              type="text"
              placeholder="Poll Question"
            />
            <div id="option-type">
              <label>Option Type:</label>
              <input type="radio" name={`optionType-${qIndex}`} value="text" defaultChecked /> Text
              <input type="radio" name={`optionType-${qIndex}`} value="image" /> Image URL
              <input type="radio" name={`optionType-${qIndex}`} value="text-image" /> Text & Image URL
            </div>
            <table>
                <tr>
                  <td>
            {question.options.map((option, oIndex) => (
              
              <div key={oIndex} id="option-block">
                <input className="correct-option-btn"
                  onClick={() => setCorrectOption(qIndex, oIndex)}
                  type="text"
                  value={option}
                  onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                  class={`option-input ${question.correctOptionIndex === oIndex ? 'correct-option' : ''}`}
                  placeholder="Text"
                />
              </div>
            ))}
             <button id="add-option">Add option</button>

            </td>
            <td>
            <div class="timer-block">
              <label id="timer">Timer:</label>
              <button
                class={`timer-btn ${question.timer === 'OFF' ? 'selected-timer' : ''}`}
                onClick={() => setTimer(qIndex, 'OFF')}
              >OFF</button>
              <button
                class={`timer-btn ${question.timer === '5 sec' ? 'selected-timer' : ''}`}
                onClick={() => setTimer(qIndex, '5 sec')}
              >5 sec</button>
              <button
                class={`timer-btn ${question.timer === '10 sec' ? 'selected-timer' : ''}`}
                onClick={() => setTimer(qIndex, '10 sec')}
              >10 sec</button>
            </div>
            </td>
            </tr>
            </table>
          </div>
        ))}
        <div className="poll-controls">
        <Link to="/CreateQuiz"><button id="cancel-btn">Cancel</button></Link>
          <Link to="/CQuiz"><button id="create-quiz-btn">Create Quiz</button></Link>
          </div>
      
      </div>
    </div>
  );
}

export default QAType;
