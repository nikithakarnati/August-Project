import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/CQuiz.css'; // Assuming you have a CSS file for styling

function CQuiz() {
  const [link] = useState('https://yourquizlink.com/quiz-id');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div id="background">
      <div id="blurred-background"></div>
    <div id="modal">
      <div id="modal">
      <Link to="/QAType"><span id="close-btn">&times;</span></Link>
        <h2 id="modalhead">Congrats your Quiz is Published!</h2>
        <input 
          type="text" 
          value={link} 
          readOnly 
          id="inputlink"
        />
        <button 
          onClick={copyToClipboard} 
          id="share">
          Share
        </button>
      </div>
    </div>
    </div>
  );
}

export default CQuiz;
