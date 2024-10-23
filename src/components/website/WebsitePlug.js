import React from 'react';
import "../../asset/styles/website/websiteplug.css";
import img1 from '../../asset/images/plug1.jpg';
import img2 from '../../asset/images/plug2.jpg';
import img3 from '../../asset/images/plug3.jpg';
import img4 from '../../asset/images/plug4.jpg';
import img5 from '../../asset/images/plug5.jpg';
import img6 from '../../asset/images/plug6.jpg';
import img7 from '../../asset/images/plug7.jpg';
import img8 from '../../asset/images/plug8.jpg';



const WebsitePlug = () => {
  return (
    <div className="plug-sales">
      <h1>Their businesses found a home<br></br>
      with Podia.So can yours. </h1>
      <h2>Check out real examples of beautiful, high-performing websites built with Podia.</h2>
      
      <div className="plug_image-grid">
        <div className="plug_image-container">
          <img src={img1} alt="Sale 1" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="plug_image-container">
          <img src={img2} alt="Sale 2" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="plug_image-container">
          <img src={img3} alt="Sale 3" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="plug_image-container">
          <img src={img4} alt="Sale 4" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="plug_image-container">
          <img src={img5} alt="Sale 5" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="plug_image-container">
          <img src={img6} alt="Sale 6" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="plug_image-container">
          <img src={img7} alt="Sale 7" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
        <div className="plug_image-container">
          <img src={img8} alt="Sale 8" />
          <div className="overlay">
            <span className="view-site">View Site</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsitePlug;
