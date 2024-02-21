
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
  
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Logo /> {}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
      </ul>
      <button className="login-button" onClick={handleLoginClick}>Login</button>
    </nav>
  );
};

export default Navbar;


