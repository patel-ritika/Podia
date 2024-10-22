import React from 'react';
import "../../asset/styles/home/homefeature.css";
import feature1 from "../../asset/images/feature1.jpg";
import feature2 from "../../asset/images/feature2.svg";
import feature3 from "../../asset/images/feature3.svg";

const HomeFeature = () => {
  return (
   <div className="features">
    <div className="feature1">
        <img src={feature1} alt="feature1"/>
        </div>
 
        <div className="feature1_detail">
        <h3>WEBSITE</h3>
        <h4>Customize without<br></br>
        compromize</h4>
        <p>Don’t settle for a generic website. Choose<br></br>
         from Podia’s stunning, professionally-<br></br>
         designed templates, and easily customize<br></br>
          your site to make it feel like your own.</p>
          <button className="learn1">Learn more</button>
    </div>

    <div className="feature2">
      <img src={feature2} alt="feature2"/>
       </div>  

       <div className="feature2_detail">
      <h3>ONLINE STORE</h3>
      <h4>Sell anything<br></br>
      you can imagine</h4>
      <p>Sell courses, downloads, memberships,<br></br>
       tickets, coaching, or any other digital<br></br>
        product. Podia makes it simple.</p>
        <button className="learn2">Learn more</button>
    </div>

    <div className="feature3">
        <img src={feature3} alt="feature3"/>
      </div>

      <div className="feature3_detail">
        <h3>EMAIL MARKETING</h3>
        <h4>Build a loyal following</h4>
        <p>Leave your over-priced email platform<br></br>
         behind for one that connects your<br></br>
          newsletter and marketing emails<br></br>
           seamlessly with the rest of your business.</p>
           <button className="learn3">Learn more</button>
    </div>
   </div>
  );
}

export default HomeFeature;
