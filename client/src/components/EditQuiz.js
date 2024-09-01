import React from 'react';
import { useParams } from 'react-router-dom';

function EditQuiz() {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Quiz {id}</h2>
      {/* Form to edit the quiz */}
    </div>
  );
}

export default EditQuiz;
