// Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    isLoggedIn ? setLoggedIn(false) : navigate('/login');
  };

  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
      </ul>
      {isLoggedIn ? (
        <div>
          <span className="user-info">Logged In</span>
          <button className="logout-button" onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;




