import React from 'react';
import "../../asset/styles/onlinestore/onlinestoretop.css";
import onlinestore from "../../asset/images/feature2.svg";

const OnlineStoreTop = () => {
  return (
    <div className="onlinestore_top">
    <div className="onlinestore_top_image">
      <img src={onlinestore} alt="top"/>
    </div>
    <div className="onlinestore_top_detail">
      <h1>An online store that<br></br>
      makes selling easy</h1>
      <h4>Sell anything from your Podia store.<br></br>
       Upload your content and leave the<br></br>
        hosting, checkout, and delivery to us.</h4>
      <button className="onlinestore_top_button">Get your free online store</button>
    </div>
  </div>
  );
}

export default OnlineStoreTop;
