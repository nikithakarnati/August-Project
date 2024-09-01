import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreateQuiz.css'; // Import the CSS file

function CreateQuiz() {
  return (
    <div id="background">
      <div id="blurred-background"></div>
      <div id="modal-content">
        <input id="Qname1" type="text" placeholder="Quiz name" />
        
        <div className="quiz-type-container">
          <table id="tbl1">
            <tr>
           <td><span id="type">QuizType</span></td>
          
            <td><Link to="/QAType">
              <button id="qa" className="quiz-type-button">Q & A</button>
            </Link></td>
            <td><Link to="/poll-type">
              <button id="poll" className="quiz-type-button">Poll Type</button>
            </Link></td>
          
          </tr>
        </table>
        </div>
        
        <div className="button-container">
          <Link to="/Analytics">
            <button id="cancel">Cancel</button>
          </Link>
          <Link to="/continue">
            <button id="continue">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
