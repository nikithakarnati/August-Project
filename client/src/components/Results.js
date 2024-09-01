import React from 'react';
import { useLocation} from 'react-router-dom';
import '../styles/Results.css';

const Results = () => {
  const { state } = useLocation();
//   const navigate = useNavigate();
  const { correctAnswers, totalQuestions } = state || {};

//   const handleRestart = () => {
//     navigate('/quiz1'); // Navigate back to the quiz
//   };

  return (
    
    //   
    <div id="quiz-container">
        <h2 id="result">Congrats Quiz is completed</h2>
        <img id="cup" src= {`${process.env.PUBLIC_URL}/Cup.png`} alt="" ></img>
        <p id="score">Your Score is<span id="score1"> {correctAnswers} / {totalQuestions} .</span> </p>
       
     </div>
   
  );
};

export default Results;
