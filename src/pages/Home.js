import React from 'react';
import ChapterList from '../components/ChapterList';
import Navbar from '../components/Navbar';

const Home = ({ token, handleLogin }) => {
    console.log("home called", token)
  return (
    <div>
        <Navbar onLogin={handleLogin} />
      <h1 style={{ textAlign: 'center' }}>Quranic Chapters</h1>
      <ChapterList token={token} />
    </div>
  );
};

export default Home;
