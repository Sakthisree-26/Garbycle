import React from 'react';
import { Link } from 'react-router-dom';

const Background = () => {
  const backgroundStyles = {
    backgroundImage: `url('/images/garbycle1.png')`, 
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
      <Link to="/login"> {}
        <button className="book-button">Book Your Waste Pickup</button>
      </Link>
    </div>
  );
};

export default Background;





