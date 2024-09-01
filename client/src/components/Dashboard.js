import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const quizzes = [
    { id: 1, title: 'Quiz 1', views: 0, createdAt: '04 Sep, 2023' },
    { id: 2, title: 'Quiz 2', views: 0, createdAt: '04 Sep, 2023' },
    { id: 3, title: 'Quiz 3', views: 0, createdAt: '04 Sep, 2023' },
    { id: 4, title: 'Quiz 4', views: 0, createdAt: '04 Sep, 2023' },
    { id: 5, title: 'Quiz 5', views: 0, createdAt: '04 Sep, 2023' },
    { id: 6, title: 'Quiz 6', views: 0, createdAt: '04 Sep, 2023' },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1 id="head">QUIZZIE</h1>
        <nav id="heads">
          <ul>
            <li><a href="/dashboard" id="optn">Dashboard</a></li>
            <li className="sidebar1"><a href="/analytics" id="optn1">Analytics</a></li>
            <li className="sidebar1"><a href="/CreateQuiz" id="optn2">Create Quiz</a></li>
          </ul>
        </nav>
        <Link to="/Login"><button type="submit" id="logout">LOGOUT</button></Link>
      </aside>
      
      <main id="content">
        <div className="stats">
          <div id="impress">
            <h2 className="styl">6</h2>
            <p>Quiz Created</p>
          </div>
          <div id="impress1">
            <h2 className="styl">3</h2>
            <p>Questions Created</p>
          </div>
          <div id="impress2">
            <h2 className="styl">0</h2>
            <p>Total Impressions</p>
          </div>
        </div>
        
        <div id="head1">
          <h2>Trending Quizzes</h2>
        </div>
        
        <div className="quizzes-grid">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-card">
              <Link to={`/quiz/${quiz.id}`}>
                <button type="submit" id="quiz">{quiz.title}</button>
              </Link>
              <span id="view">{quiz.views} 
                <i id="image"><img src={`${process.env.PUBLIC_URL}/eye.png`} alt="eye icon" /></i>
              </span>
              <p id="date">Created on: {quiz.createdAt}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
