import React from 'react';
import { useParams } from 'react-router-dom';

function QuizWiseAnalysis() {
  const { id } = useParams();

  // Fetch data related to this specific quiz if needed
  // For example:
  const quizData = {
    1: { name: 'Quiz 1', details: 'Detailed analysis for Quiz 1...' },
    2: { name: 'Quiz 2', details: 'Detailed analysis for Quiz 2...' },
    // Add more quiz data as needed
  };

  const quiz = quizData[id];

  if (!quiz) {
    return <div>Quiz not found!</div>;
  }

  return (
    <div>
      <h1>{quiz.name} - Quiz Wise Analysis</h1>
      <p>{quiz.details}</p>
    </div>
  );
}

export default QuizWiseAnalysis;
