// React
import React from 'react';
// React Router
import { Route, BrowserRouter as Router } from 'react-router-dom'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Custom Components
import Main from './components/Main/Main'
import Layout from './components/Layout/Layout'
import Calendar from './components/Calendar/Calendar'
import Topics from './components/Topics/Topics'
import Subtopics from './components/Subtopics/Subtopics'
import Profs from './components/Profs/Profs'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/home" component={() => <Layout><h1>Home</h1></Layout>} />
      <Route path="/profile" component={() => <Layout><h1>Profile</h1></Layout>} />
      <Route path="/topics" component={() => <Layout><Topics /></Layout>} />
      <Route path="/topics/:topic" component={(props: any) => <Layout><Subtopics {...props}/></Layout>} />
      <Route path="/professors" component={() => <Layout><Profs /></Layout>} />
      <Route path="/calendar" component={() => <Layout><Calendar /></Layout>} />
    </Router>
  );
}

export default App;
