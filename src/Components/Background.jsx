// Background.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Background = ({ isLoggedIn }) => {
  const backgroundStyles = {
    backgroundImage: `url('/images/mainwallpaper4.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyles}>
      {/* Always render the button */}
      <Link to="/book-your-waste-pickup">
        <button className="book-button">Book Your Waste Pickup</button>
      </Link>
    </div>
  );
};

export default Background;





