import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChapterList from './components/ChapterList';
import Chapter from './pages/Chapter';
import Register from './components/Register';


const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Router>
      <Navbar onLogin={handleLogin} onLogout={handleLogout} isLoggedIn={!!token} />
      <Routes>
        <Route path="/" element={token ? <ChapterList token={token} /> : <h2 style={{ textAlign: 'center', marginTop: '50px' }} >Login to access chapters</h2>} />
        <Route path="/chapter/:chapterId" element={token ? <Chapter token={token} /> : <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Login to access chapter details</h2>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
