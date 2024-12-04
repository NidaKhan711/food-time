import React from 'react';
import '../Style/About.scss'; 

const About = () => {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src='./pizzaA.png' alt="About Us" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to our website! <br />
          We are passionate about delivering the best service. <br />
          Our team works hard to bring your ideas to life. <br />
          Customer satisfaction is our top priority. <br />
          Thank you for trusting us on your journey. <br />
          Let's achieve greatness together!
        </p>
      </div>
    </div>
  );
};

export default About;
