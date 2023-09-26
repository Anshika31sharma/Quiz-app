import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const handleNavigation = (topic) => {
      navigate(`/quiz/${topic.toLowerCase()}`);
    };
    return (
      <div>
        <h1>Welcome to the Quiz App</h1>
        <div className="options">
          <button onClick={() => handleNavigation('Sports')}>Sports</button>
          <button onClick={() => handleNavigation('Science')}>Space</button>
          <button onClick={() => handleNavigation('History')}>History</button>
        </div>
      </div>
    );
}
export default HomePage;