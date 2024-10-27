import React from 'react';
import "../../asset/styles/download/downloadtake.css";
import takes from "../../asset/images/check.svg";

const DownloadTake = () => {
  return (
    <div className="take">
        <h1>Take customers from "need it"<br></br>
        to "got it" in just a few seconds</h1>
        <h4>Podia’s high-converting checkout gives you revenue-boosting<br></br>
        features that increase the value of every sale and every customer.</h4>
        <img src={takes} alt="takes"/>
    </div>
  );
}

export default DownloadTake;
