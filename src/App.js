// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import LoginPage from './Components/LoginPage';
import CreateAccountPage from './Components/CreateAccountPage';
import BookYourWastePickup from './Components/BookYourWastePickup';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} welcomeMessage={welcomeMessage} />}
        />
        <Route
          path="/login"
          element={<LoginPage setLoggedIn={setLoggedIn} setWelcomeMessage={setWelcomeMessage} />}
        />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/book-your-waste-pickup" element={<BookYourWastePickup />} />
      </Routes>
    </Router>
  );
}

export default App;









