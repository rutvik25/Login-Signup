import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/login')}>Login</button> &nbsp;
      <button onClick={() => navigate('/signup')}>Signup</button>
    </>
  )
}

export default App