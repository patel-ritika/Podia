import React from 'react';
import "../../asset/styles/email/emailgrow.css";
import { IoIosCheckmarkCircle } from 'react-icons/io';

const EmailGrow = () => {
  return (
    <div className="emailgrow-container">
    {/* Left Side */}
    <div className="emailgrow-left">
      <h1>
        Growing your business is a<br />
        lot simpler when your email<br />
        marketing is built right in
      </h1>
      <h4>
      Email marketing in the same place as your website and<br></br>
       online store means that you don’t have to worry about<br></br>
        connecting anything. But it also gives you an email<br></br>
         platform that’s simply better at selling your products.
      </h4>
    </div>

    {/* Right Side */}
    <div className="emailgrow-right">
      <div className="emailgrow-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>No messing with email integrations</h2>
        <h5>Instead of wrestling to get the right data from one platform<br></br>
         to another, have all your subscribers’ info in one place.</h5>
      </div>
      <div className="emailgrow-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>One platform,one login,no hassle</h2>
        <h5>Segment based on data you can’t get in other platforms (like<br></br>
         product purchases and sales numbers). And with everything<br></br>
          in one place, your sales-triggered automations will actually work.</h5>
      </div>
      <div className="emailgrow-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>Segmentation based on actual sales</h2>
        <h5>Stop switching back and forth between tools. Your email<br></br>
         marketing, website, and online store all use the same<br></br>
          system, so anything you design in one is easy to design in<br></br>
           the others</h5>
      </div>
    </div>
  </div>
  );
}

export default EmailGrow;
