import React from 'react';
import "../../asset/styles/download/downloadlist.css";
import { FaCheck } from 'react-icons/fa';

const DownloadList = () => {
  return (
    <div className="download-list-container">
      <h1>All the features you need, none<br></br>
      of the stuff that gets in the way</h1>
      <h4>If you;re wondering "can Podia do this?", the answer is<br></br>
      probably yes. Here's what you get right out of the box.</h4>
      
      <div className="download-lists-container">
        <ul className="download-list">
          <li><FaCheck className="check-icon" /> Digital products</li>
          <li><FaCheck className="check-icon" /> Coupons</li>
          <li><FaCheck className="check-icon" /> Presell products</li>
          <li><FaCheck className="check-icon" /> Bundles</li>
          <li><FaCheck className="check-icon" /> Instant pauouts</li>
          <li><FaCheck className="check-icon" /> Product categories</li>
        </ul>

        <ul className="download-list">
          <li><FaCheck className="check-icon" /> Upsells</li>
          <li><FaCheck className="check-icon" /> Email marketing</li>
          <li><FaCheck className="check-icon" /> Affiliate marketing</li>
          <li><FaCheck className="check-icon" /> Payment plans</li>
          <li><FaCheck className="check-icon" /> Lead magnets</li>
          <li><FaCheck className="check-icon" /> Waitlists</li>
        </ul>

        <ul className="download-list">
          <li><FaCheck className="check-icon" /> Video hosting included</li>
          <li><FaCheck className="check-icon" /> Free migrations</li>
          <li><FaCheck className="check-icon" /> Global tax support</li>
          <li><FaCheck className="check-icon" /> World-class support</li>
          <li><FaCheck className="check-icon" /> All other Podia features</li>
          <li><FaCheck className="check-icon" /> Landing pages</li>
        </ul>

        <ul className="download-list">
          <li><FaCheck className="check-icon" /> High-converting checkout</li>
          <li><FaCheck className="check-icon" /> Webinars</li>
          <li><FaCheck className="check-icon" /> Online courses</li>
          <li><FaCheck className="check-icon" /> Coaching</li>
          <li><FaCheck className="check-icon" /> Website</li>
          <li><FaCheck className="check-icon" /> Customer messaging</li>
        </ul>
      </div>
    </div>
 
 
  );
}

export default DownloadList;
