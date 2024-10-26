import React from 'react';
import "../../asset/styles/courses/coursemen.css";
import menImage from "../../asset/images/men.jpg"; // Import your image


const CourseMen = () => {
  return (
    <div className="online-men">
    {/* Left side image */}
    <img src={menImage} alt="men" className="men-image" />

    {/* Right side content */}
    <div className="men_content">
      <h1>"Rather than worrying about the<br />website and logistics, I can focus on<br />making the best courses possible."</h1>
      <h4>Podia puts everything you need in one place. Get all the<br></br>
       features you need to sell online courses. Plus your<br></br>
        website, your email marketing, and all your other digital<br></br>
         products.</h4>
      <h5>ALI ABDAAL<br />DOCTOR AND TEACHER</h5>
      </div>
      
    </div>
  );
}

export default CourseMen;
