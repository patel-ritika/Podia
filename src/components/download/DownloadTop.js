import React from 'react';
import "../../asset/styles/download/downloadtop.css";
import download from "../../asset/images/download.svg";

const DownloadTop = () => {
  return (
    <div className="digital">
     <div className="downloadtop">
        <div className="downloadtop_detail">
            <h1>Sell your ebooks, worksheets,<br></br>
            templates, and just about anything else</h1>
            <h4>Just upload your product, set up a sales page, and start selling in minutes.</h4>
            <button className="download">Start selling today</button>
        </div>
    </div>
    <div className="downloadtop_image">
           <img src={download} alt="download"/>
    </div>
    <div className="downloadtop_left">
        <h1>Upload. Launch. Sell.</h1>
        <h4>Podia handles all of the tricky parts<br></br>
        of selling downloads. Just upload<br></br>
        your product, set up a sales page,<br></br>
        tell your audience about it, and let<br></br>
        us deal with the technical stuff.</h4>
    </div>
    </div>
  );
}

export default DownloadTop;
