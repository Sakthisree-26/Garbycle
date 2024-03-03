// MainPage.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Background from './Background';

const MainPage = ({ isLoggedIn, setLoggedIn }) => {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Background isLoggedIn={isLoggedIn} />
      {isLoggedIn && (
        <div>
          <h2 style={{ textAlign: 'center' }}>{welcomeMessage}</h2>
        </div>
      )}
    </div>
  );
};

export default MainPage;












