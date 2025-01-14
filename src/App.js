import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';

// Main App component that serves as the root of the application
function App() {
  return (
    <div className="App">
      {/* Header section containing the main navigation links for the website */}
      <header className="header">
        <h1>Love Sonoran Desert</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#mission">Our Mission</a>
          <a href="#help">How to Help</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero section with a prominent call to action encouraging donations */}
      <section className="hero">
        <h2>Supporting Our Unhoused Neighbors in Arizona</h2>
        <p>Providing essential supplies and compassionate support to those in need</p>
        <button className="cta-button">Donate Now</button>
      </section>

      {/* About section providing information about the organization's mission and values */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Love Sonoran Desert is dedicated to helping unhoused individuals in Arizona by providing essential supplies and support. We believe in treating everyone with dignity and respect while working to make a positive impact in our community.</p>
      </section>

      {/* Image gallery component displaying a collection of images related to the Sonoran Desert */}
      <ImageGallery />

      {/* Mission section outlining the specific goals and activities of the organization */}
      <section id="mission" className="mission">
        <h2>Our Mission</h2>
        <p>We distribute vital supplies including water, food, hygiene products, and clothing to unhoused individuals across Arizona's Sonoran Desert region, where extreme temperatures and limited resources create urgent needs.</p>
      </section>

      {/* How to Help section offering various ways for users to contribute to the cause */}
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

      {/* Contact section providing details on how to reach out to the organization */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:LoveSonoranDesert@yahoo.com">LoveSonoranDesert@yahoo.com</a></p>
        <p>Phone: (480) 647-6537</p>
      </section>

      <footer>
        <p>&copy; 2025 Love Sonoran Desert. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
