import React from 'react';
import "../../asset/styles/webinar/weblady.css";
import weblady from "../../asset/images/weblady.jpg"; 

const Weblady = () => {
  return (
    <div className="web-lady">
    {/* Left side image */}
    <img src={weblady} alt="lady" className="lady-image" />

    {/* Right side content */}
    <div className="web_content">
      <h1>"I genuinely believe that Podia<br />motivates me to create more."</h1>
      <h4>Podia puts everything you need in one place. Get all the<br></br>
       features you need to sell online courses. Plus your<br></br>
        website, your email marketing, and all your other digital<br></br>
         products.</h4>
      <h5>SOFIA RROCHA SILVA<br />LUSCOFIA</h5>
      </div>
      
    </div>
  );
}

export default Weblady;
