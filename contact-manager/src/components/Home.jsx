import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to the Contact Manager</h2>
      <Link to='/contacts' className="home-link">View Contacts</Link>
    </div>
  );
};

export default Home;