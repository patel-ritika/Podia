import React from 'react';
import "../../asset/styles/webinar/weblist.css";
import { FaCheck } from 'react-icons/fa';


const WebList = () => {
  return (
    <div className="course-list-container">
      <h1>All the features you need, none<br></br>
      of the stuff that gets in the way</h1>
      <h4>If you;re wondering "can Podia do this?", the answer is<br></br>
      probably yes. Here's what you get right out of the box.</h4>
      
      <div className="feature-lists-container">
        <ul className="feature-list">
          <li><FaCheck className="check-icon" /> Quizzes</li>
          <li><FaCheck className="check-icon" /> Course comments</li>
          <li><FaCheck className="check-icon" /> Access limits</li>
          <li><FaCheck className="check-icon" /> Seat limits</li>
          <li><FaCheck className="check-icon" /> Upsells</li>
          <li><FaCheck className="check-icon" /> Coupons</li>
          <li><FaCheck className="check-icon" /> Embeds</li>
        </ul>

        <ul className="feature-list">
          <li><FaCheck className="check-icon" /> Drip courses</li>
          <li><FaCheck className="check-icon" /> Presell courses</li>
          <li><FaCheck className="check-icon" /> Bundles</li>
          <li><FaCheck className="check-icon" /> Instant payouts</li>
          <li><FaCheck className="check-icon" /> Future start dates</li>
          <li><FaCheck className="check-icon" /> Customer messaging</li>
          <li><FaCheck className="check-icon" /> Course certificates</li>
        </ul>

        <ul className="feature-list">
          <li><FaCheck className="check-icon" /> World-class support</li>
          <li><FaCheck className="check-icon" /> Video hosting included</li>
          <li><FaCheck className="check-icon" /> Track student progress</li>
          <li><FaCheck className="check-icon" /> Email marketing</li>
          <li><FaCheck className="check-icon" /> Affiliate marketing</li>
          <li><FaCheck className="check-icon" /> Payment plans</li>
          <li><FaCheck className="check-icon" /> Lead magnets</li>
        </ul>

        <ul className="feature-list">
          <li><FaCheck className="check-icon" /> Waitlists</li>
          <li><FaCheck className="check-icon" /> Custom website</li>
          <li><FaCheck className="check-icon" /> Landing pages</li>
          <li><FaCheck className="check-icon" /> High-converting checkout</li>
          <li><FaCheck className="check-icon" /> Free migrations</li>
          <li><FaCheck className="check-icon" /> Global tax support</li>
          <li><FaCheck className="check-icon" /> All other Podia features</li>
        </ul>
      </div>
      </div>
  );
}

export default WebList;
