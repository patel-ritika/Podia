import React from 'react';
import "../../asset/styles/home/homesales.css";
import image1 from '../../asset/images/sales1.jpg';
import image2 from '../../asset/images/sales2.jpg';
import image3 from '../../asset/images/sales3.jpg';
import image4 from '../../asset/images/sales4.jpg';
import image5 from '../../asset/images/sales5.jpg';
import image6 from '../../asset/images/sales6.jpg';
import image7 from '../../asset/images/sales7.jpg';
import image8 from '../../asset/images/sales8.jpg';

const HomeSales = () => {
  return (
    <div className="home-sales">
      <h1>Designs that turn heads and close sales.</h1>
      <h2>You don't habe to choose between a website that<br></br>
      looks amazing and one that's easy to build yourself.</h2>
      
      <div className="image-grid">
        <div className="image-container">
          <img src={image1} alt="Sale 1" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="image-container">
          <img src={image2} alt="Sale 2" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="image-container">
          <img src={image3} alt="Sale 3" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="image-container">
          <img src={image4} alt="Sale 4" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="image-container">
          <img src={image5} alt="Sale 5" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="image-container">
          <img src={image6} alt="Sale 6" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="image-container">
          <img src={image7} alt="Sale 7" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="image-container">
          <img src={image8} alt="Sale 8" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSales;
