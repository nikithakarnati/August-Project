import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Analytics.css';
function Analytics() {
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

  return (
    
    <div className="dashboard-container">
       <aside className="sidebar">
        <h1 id="head">QUIZZIE</h1>
        <nav id="heads">
          <ul>
            <li ><a href="/dashboard" id="optn1">Dashboard</a></li>
            <li class="sidebar1"><a href="/analytics" id="optn">Analytics</a></li>
            <li class="sidebar1"><a href="/CreateQuiz" id="optn2" >Create Quiz</a></li>
          </ul>
        </nav>
        <a href="/logout" className="logout">LOGOUT</a>
      </aside>
      <main id="content">
      <h1 id="head2">Quiz Analysis</h1>
      <table id="tbl">
        <thead >
          <tr id="row1">
          <th class="sn">S.No</th>
          <th class="sn">Quiz Name</th>
          <th class="sn">Created on</th>
          <th class="sn">Impression</th>
          <th class="sn">Actions</th>
          <th class="sn">Question Wise Analysis</th>
          </tr>
        </thead>
        <tbody id="data">
          {quizzes.map((quiz, index) => (
            <tr key={quiz.id}>
              <td>{index + 1}</td>
              <td>{quiz.name}</td>
              <td>{quiz.createdOn}</td>
              <td>{quiz.impressions}</td>
              <td>
                <Link to={`/edit-quiz/${quiz.id}`} ><img src= {`${process.env.PUBLIC_URL}/edit.png`} alt="" ></img></Link>
                <button onClick={() => handleDelete(quiz.id)} ><img src= {`${process.env.PUBLIC_URL}/delete.png`} alt="" ></img></button>
                <button onClick={() => handleShare(quiz.id)} ><img src= {`${process.env.PUBLIC_URL}/share.png`} alt="" ></img></button></td>
                <td><Link to={`/quizwise-analysis/${quiz.id}`} onClick={() => handleQuizVisit(quiz.id)}>Question Wise Analysis</Link>
              </td>
            </tr>
          ))}    
        </tbody>
      </table>
      
    </main> 
    </div>
   );
}

export default Analytics;
