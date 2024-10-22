import React from 'react';
import "../../asset/styles/home/homecard.css";

const HomeCard = () => {
  return (
    <div className="card-container">
      {/* First Card */}
      <div className="card card-one">
        <h2 className="card-heading">Online store</h2>
        <p className="card-paragraph">Sell anything. Upload your content and leave the<br></br>
        hosting, checkout, and delivery to us.</p>
      </div>

      {/* Second Card */}
      <div className="card card-two">
        <h2 className="card-heading">Website</h2>
        <p className="card-paragraph">Build a beautiful website in less than 10 minutes<br></br>
        with professionally designed templates.</p>
      </div>

      {/* Third Card */}
      <div className="card card-three">
        <h2 className="card-heading">Email marketing</h2>
        <p className="card-paragraph">Beautiful email marketing that works perfectly<br></br>
        with your online store and website.</p>
      </div>
    </div>
  );
}

export default HomeCard;
