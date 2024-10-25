import React from 'react';
import "../../asset/styles/onlinestore/onlinevisit.css";
import image1 from "../../asset/images/plug4.jpg";
import image2 from "../../asset/images/plug3.jpg";
import image3 from "../../asset/images/plug8.jpg";
import image4 from "../../asset/images/plug7.jpg";
import image5 from "../../asset/images/plug2.jpg";
import image6 from "../../asset/images/plug6.jpg";
import image7 from "../../asset/images/plug5.jpg";
import image8 from "../../asset/images/plug1.jpg";

const OnlineVisit = () => {
  return (
    <div className="store-sales">
      <h1>Beautiful sales pages that turn visitors into buyers </h1>
      <h2>Podia sales pages make your products and services look amazing.<br></br>
      Here's what entrepreneurs like you are selling on Podia today.</h2>
      
      <div className="store_image-grid">
        <div className="store_image-container">
          <img src={image1} alt="Sale 1" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="store_image-container">
          <img src={image2} alt="Sale 2" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="store_image-container">
          <img src={image3} alt="Sale 3" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="store_image-container">
          <img src={image4} alt="Sale 4" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="store_image-container">
          <img src={image5} alt="Sale 5" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="store_image-container">
          <img src={image6} alt="Sale 6" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="store_image-container">
          <img src={image7} alt="Sale 7" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="store_image-container">
          <img src={image8} alt="Sale 8" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default OnlineVisit;
