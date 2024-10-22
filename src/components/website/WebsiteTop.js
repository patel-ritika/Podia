import React from 'react';
import "../../asset/styles/website/websitetop.css";
import websitetop from "../../asset/images/feature1.jpg";

const WebsiteTop = () => {
  return (
    <div className="website_top">
      <div className="website_top_image">
        <img src={websitetop} alt="top"/>
      </div>
      <div className="website_top_detail">
        <h1>A beautiful website<br></br>
        in the next 10 minutes</h1>
        <h4>You don't have to choose between a website that<br></br>
        looks amazing and one that's easy to build yourself.</h4>
        <button className="website_top_button">Start your free trial</button>
      </div>
    </div>
  );
}

export default WebsiteTop;
