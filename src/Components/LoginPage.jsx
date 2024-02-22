import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username && password) {
      
      navigate('/dashboard');
    } else {
      
      alert('Please enter both username and password.');
    }
  };

  const handleCreateAccount = () => {
    
    navigate('/create-account');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin} style={{ marginTop: '10px' }}>Login</button>
        <p style={{ marginTop: '10px' }}>Don't have an account? <span onClick={handleCreateAccount} style={{ color: 'blue', cursor: 'pointer' }}>Create Account</span></p>
      </div>
    </div>
  );
};

export default LoginPage;