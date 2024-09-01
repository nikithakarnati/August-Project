import React from 'react';
import { useParams } from 'react-router-dom';

function QuizDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Quiz {id} Details</h2>
      {/* Quiz details go here */}
    </div>
  );
}

export default QuizDetail;
