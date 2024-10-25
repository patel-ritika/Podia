import React from 'react';
import "../../asset/styles/onlinestore/onlineleave.css";
import { IoIosCheckmarkCircle } from 'react-icons/io';


const OnlineLeave = () => {
  return (
    <div className="storeleave-container">
    {/* Left Side */}
    <div className="storeleave-left">
      <h1>
        Turn your fans and<br></br>
        customers into salespeople
      </h1>
      <h4>
      Affiliate marketing is built right into<br></br>
      Podia and works with all product types,<br></br>
      no third-party integrations required.
      </h4>
    </div>

    {/* Right Side */}
    <div className="storeleave-right">
      <div className="storeleave-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>Your program, your terms</h2>
        <h5>Set custom commission amounts for any product, or use a<br></br>
        default site-wide commission structure.</h5>
      </div>
      <div className="storeleave-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>Public or private</h2>
        <h5>Let any customer sign up, or keep your affiliate program<br></br>
        invite-only. You have full control over how you run your<br></br>
        affiliate marketing.</h5>
      </div>
      <div className="storeleave-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>Payouts made easy</h2>
        <h5>We'll do the math for you every month and tell you who's<br></br>
        owed what, so payouts are fast and simple.</h5>
      </div>
    </div>
  </div>

  );
}

export default OnlineLeave;
