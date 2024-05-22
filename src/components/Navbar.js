import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';

import "./Navbar.css"

const Navbar = ({ onLogin, onLogout, isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await axios.post(`http://localhost:4000/api/auth/login`, {
      email,
      password
    });
    if (response.status === 200) {
      console.log({response})
      const token = response.data?.data?.accessToken;
      onLogin(token);
      setUsername(response.data?.data?.user.fullName);
    } else {
      console.log('User not exist');
    }
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" style={{ padding: '10px' }} expand="lg">
      <BootstrapNavbar.Brand href="/">Quran App</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button variant="secondary" onClick={() => navigate(-1)} className="mr-2">Back</Button>
          {!isLoggedIn ? (
            <>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter email"
                className="mr-2 input-field"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter password"
                className="mr-2 input-field"
              />
              <Button variant="primary" onClick={handleLogin} className="mr-2 btn">Login</Button>
              <Button variant="success" onClick={() => navigate('/register')} className='btn'>Register</Button>
            </>
          ) : (
            <>
              <span className="navbar-text mr-3">Welcome, {username}!</span>
              <Button variant="danger" onClick={onLogout}>Logout</Button>
            </>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
