import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateAccountPage = () => {
  const navigate = useNavigate();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleCreateAccount = () => {
    // Perform registration logic, e.g., send data to the server


    // For simplicity, navigate to the dashboard after account creation
    navigate('/login');
  };


  const handleLogin = () => {
    navigate('/login');
  };


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(/images/login.png)', // Adjust the path based on your project structure
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          width: '300px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <h2>Create Account</h2>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <button onClick={handleCreateAccount} style={{ marginTop: '10px' }}>
          Create Account
        </button>
        <p style={{ marginTop: '10px' }}>
          Already have an account?{' '}
          <span onClick={handleLogin} style={{ color: 'blue', cursor: 'pointer' }}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};


export default CreateAccountPage;





