import React from 'react';
import "../../asset/styles/onlinestore/onlinelady.css";
import ladyImage from "../../asset/images/amy.jpg"; // Import your image

const OnlineLady = () => {
  return (
    <div className="online-lady">
    {/* Left side image */}
    <img src={ladyImage} alt="Lady" className="lady-image" />

    {/* Right side content */}
    <div className="lady_content">
      <h1>Grow your business with ease<br />using our powerful tools and<br />insights to reach new<br />customers worldwide</h1>
      <h4>Our platform offers everything<br />you need to succeed, from<br />marketing to customer support</h4>
      <h5>Seamlessly manage your<br />business online</h5>
      
      {/* Button for free trial */}
      <button className="trial-button">Start Your Free Trial</button>
    </div>
  </div>
  );
}

export default OnlineLady;
