import React from 'react';
import "../../asset/styles/webinar/webgrow.css";

const Webgrow = () => {
  return (
    <div className="webgrow-container">
    {/* Left Side */}
    <div className="webgrow-left">
      <h1>
        Growing your business is a lot<br />
        simpler when you go all-in-one
      </h1>
      <h4>
      Podia puts your website, online store,<br></br>
       and email marketing in one place, so<br></br>
        everything works together seamlessly.
      </h4>
    </div>

    {/* Right Side */}
    <div className="webgrow-right">
      <div className="webgrow-item">
        <h2>Bundle anything</h2>
        <h5>Your Podia products — courses, downloads, memberships, tickets, coaching, and<br></br>
         everything else — can easily be packaged and sold together as a bundle.</h5>
      </div>
      <div className="webgrow-item">
        <h2>Sell from any page on your website</h2>
        <h5>With Podia, you don’t just get a website that’s beautiful; you get a website that’s built to<br></br>
         sell. Sell your online course from any page or blog post on your site.</h5>
      </div>
      <div className="webgrow-item">
        <h2>Email with confidence</h2>
        <h5>Because Podia Email is connected directly to your online course, you never have to worry<br></br>
         about inaccurate segmentation or automations going haywire because your tools aren’t<br></br>
          talking to each other.</h5>
      </div>
    </div>
  </div>
  );
}

export default Webgrow;
