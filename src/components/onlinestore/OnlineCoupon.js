import React from 'react';
import "../../asset/styles/onlinestore/onlinecoupon.css";
import { FaArrowRight } from 'react-icons/fa'; // Import right arrow icon
import couponImage from "../../asset/images/check.svg";

const OnlineCoupon = () => {
  return (
    <div className="online-coupon">
      <h1>Take customers from "need it"<br />to "got it" in just a few seconds</h1>
      <h5>Podia's high-converting checkout gives you revenue-boosting<br />features that increase the value of every sale and every customer.</h5>
      
      {/* Display the image */}
      <img src={couponImage} alt="Coupon" className="coupon-image" />
      
      {/* Grid of content with h2, paragraph, and right arrow icon */}
      <div className="content-grid">
        {/* Column 1, Row 1 */}
        <div className="content-item">
          <h2>Coupons <FaArrowRight /></h2>
          <p>Set up basic discounts or create<br></br>
           customized coupons with usage<br></br>
            limits and expiration dates.</p>
        </div>
        {/* Column 2, Row 1 */}
        <div className="content-item">
          <h2>Currency <FaArrowRight /></h2>
          <p>With customers in 167 countries,<br></br>
           Podia supports businesses all over<br></br>
            the world. Take payment in more<br></br>
             than 20 global currencies.</p>
        </div>
        {/* Column 3, Row 1 */}
        <div className="content-item">
          <h2>Payment gateways <FaArrowRight /></h2>
          <p>Your customers can pay with Stripe,<br></br>
           PayPal, Google Pay, Apple Pay, iDeal,<br></br>
            SEPA Debit, Stripe Link, and other<br></br>
             popular payment processors.</p>
        </div>
        {/* Column 1, Row 2 */}
        <div className="content-item">
          <h2>Payment plans <FaArrowRight /></h2>
          <p>Increase conversions by letting<br></br>
           customers pay in installments over<br></br>
            time. Podia handles the recurring<br></br>
             charges for you.</p>
        </div>
        {/* Column 2, Row 2 */}
        <div className="content-item">
          <h2>Upsells <FaArrowRight /></h2>
          <p>Offer additional products and<br></br>
           services during the checkout flow, at<br></br>
            the exact moment your customer is<br></br>
             ready to buy.</p>
        </div>
        {/* Column 3, Row 2 */}
        <div className="content-item">
          <h2>Tax collection <FaArrowRight /></h2>
          <p>Make tax time less stressful with<br></br>
           Podia’s global tax support. Collect<br></br>
            taxes from 230 tax jurisdictions<br></br>
             across all payment methods.</p>
        </div>
      </div>
    </div>
  );
}

export default OnlineCoupon;
