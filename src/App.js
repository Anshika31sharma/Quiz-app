import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/quiz/:topic" element={<QuizPage />} />
      </Routes>
      </Router>
  );
}

export default App;
