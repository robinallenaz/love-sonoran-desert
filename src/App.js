import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Love Sonoran Desert</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#mission">Our Mission</a>
          <a href="#help">How to Help</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Supporting Our Unhoused Neighbors in Arizona</h2>
        <p>Providing essential supplies and compassionate support to those in need</p>
        <button className="cta-button">Donate Now</button>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Love Sonoran Desert is dedicated to helping unhoused individuals in Arizona by providing essential supplies and support. We believe in treating everyone with dignity and respect while working to make a positive impact in our community.</p>
      </section>

      <section id="mission" className="mission">
        <h2>Our Mission</h2>
        <p>We distribute vital supplies including water, food, hygiene products, and clothing to unhoused individuals across Arizona's Sonoran Desert region, where extreme temperatures and limited resources create urgent needs.</p>
      </section>

      <section id="help" className="help">
        <h2>How You Can Help</h2>
        <div className="help-options">
          <div className="help-card">
            <h3>Donate Supplies</h3>
            <p>Water, non-perishable food, clothing, hygiene products</p>
          </div>
          <div className="help-card">
            <h3>Volunteer</h3>
            <p>Join our distribution team or help organize supplies</p>
          </div>
          <div className="help-card">
            <h3>Spread the Word</h3>
            <p>Share our mission with your community</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: help@lovesonorandesert.org</p>
        <p>Phone: (555) 123-4567</p>
      </section>

      <footer>
        <p>&copy; 2024 Love Sonoran Desert. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
