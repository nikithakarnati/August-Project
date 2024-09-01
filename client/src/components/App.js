import React from 'react';
import '../styles/App.css';
// import components
import Main from './Main';
import Login from './Login';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Quiz1 from './Quiz1';
import Results from './Results';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Quiz5 from './Quiz5';
import Quiz6 from './Quiz6';
import QuizAnalysis from './QuizAnalysis';
import QuizDetail from './QuizDetail';
import EditQuiz from './EditQuiz';
import Delete from './Delete';
import QuizWiseAnalysis from './QuizWiseAnalysis';
import CreateQuiz from './CreateQuiz';
import QAType from './QAType';
import CQuiz from './CQuiz';
import PollType from './PollType';
import Image from './Image';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
const router =createBrowserRouter([
  {
    path :'/',
    element : <Main></Main>
  },
  {
    path :'/Login',
    element : <Login></Login>
  },
  {
    path :'/Dashboard',
    element : <Dashboard></Dashboard>
  },
  {
    path :'/Analytics',
    element : <Analytics></Analytics>
  },
  {
    path :'/QuizAnalysis',
    element : <QuizAnalysis></QuizAnalysis>
  },
  {
    path :'/QuizDetail',
    element : <QuizDetail></QuizDetail>
  },
  {
    path :'/EditQuiz',
    element : <EditQuiz></EditQuiz>
  },
  {
    path :'/Delete',
    element : <Delete></Delete>
  },
  {
    path :'/QuizWiseAnalysis',
    element :<QuizWiseAnalysis></QuizWiseAnalysis>
  },
  {
    path :'/CreateQuiz',
    element :<CreateQuiz></CreateQuiz>
  },
  {
    path :'/QAType',
    element :<QAType></QAType>
  },
  {
    path :'/CQuiz',
    element : <CQuiz></CQuiz>
  },
  {
    path :'/Image',
    element :<Image></Image>
  },
  {
    path : '/PollType',
    element :<PollType></PollType>
  },
  {
    path :'/quiz/1',
    element : <Quiz1></Quiz1>
  },
  {
    path :'/quiz/2',
    element : <Quiz2></Quiz2>
  },
  {
    path :'/quiz/3',
    element : <Quiz3></Quiz3>
  },
  {
    path :'/quiz/4',
    element : <Quiz4></Quiz4>
  },
  {
    path :'/quiz/5',
    element : <Quiz5></Quiz5>
  },
  {
    path :'/quiz/6',
    element : <Quiz6></Quiz6>
  },
  {
    path : '/Results',
    element :<Results></Results>
  },
  
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
