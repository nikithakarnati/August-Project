import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function QuizAnalysis() {
  const [quizzes, setQuizzes] = useState([
    { id: 1, name: 'Quiz 1', createdOn: '01 Sep, 2023', impressions: 345 },
    { id: 2, name: 'Quiz 2', createdOn: '04 Sep, 2023', impressions: 667 },
    { id: 3, name: 'Quiz 3', createdOn: '06 Sep, 2023', impressions: 1600 },
    { id: 4, name: 'Quiz 4', createdOn: '09 Sep, 2023', impressions: 789 },
    { id: 5, name: 'Quiz 5', createdOn: '11 Sep, 2023', impressions: 995 },
    { id: 6, name: 'Quiz 6', createdOn: '13 Sep, 2023', impressions: 2500 },
    { id: 7, name: 'Quiz 7', createdOn: '14 Sep, 2023', impressions: 231 },
    { id: 8, name: 'Quiz 8', createdOn: '17 Sep, 2023', impressions: 1300 },
  ]);

  const handleQuizVisit = (id) => {
    setQuizzes(quizzes.map(quiz => quiz.id === id ? { ...quiz, impressions: quiz.impressions + 1 } : quiz));
  };

  const handleDelete = (id) => {
    setQuizzes(quizzes.filter(quiz => quiz.id !== id));
  };

  const handleShare = (id) => {
    const quiz = quizzes.find(quiz => quiz.id === id);
    const link = `${window.location.origin}/quiz/${quiz.id}`;
    navigator.clipboard.writeText(link).then(() => {
      alert(`Link copied to clipboard: ${link}`);
    });
  };

  const addQuiz = () => {
    const newQuiz = {
      id: quizzes.length + 1,
      name: `Quiz ${quizzes.length + 1}`,
      createdOn: new Date().toLocaleDateString('en-GB'),
      impressions: 0,
    };
    setQuizzes([...quizzes, newQuiz]);
  };

  const renderQuizRow = (quiz) => (
    <tr key={quiz.id}>
      <td>{quiz.id}</td>
      <td>{quiz.name}</td>
      <td>{quiz.createdOn}</td>
      <td>{quiz.impressions}</td>
      <td>
        <Link to={`/edit-quiz/${quiz.id}`}>✏️</Link>
        <button onClick={() => handleDelete(quiz.id)}>🗑</button>
        <button onClick={() => handleShare(quiz.id)}>🔗</button>
        <Link to={`/quiz/${quiz.id}`} onClick={() => handleQuizVisit(quiz.id)}>Question Wise Analysis</Link>
      </td>
    </tr>
  );

  return (
    <div className="quiz-analysis">
      <h1>Quiz Analysis</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Quiz Name</th>
            <th>Created on</th>
            <th>Impression</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map(renderQuizRow)}
        </tbody>
      </table>
      <button onClick={addQuiz}>Add New Quiz</button>
      <div>{'{more quiz can be added}'}</div>
    </div>
  );
}

export default QuizAnalysis;
