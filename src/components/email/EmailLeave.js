import React from 'react';
import "../../asset/styles/email/emailleave.css";
import { IoIosCheckmarkCircle } from 'react-icons/io';


const EmailLeave = () => {
  return (
    <div className="emailleave-container">
    {/* Left Side */}
    <div className="emailleave-left">
      <h1>
        Leave the technical stuff to us...
      </h1>
      <h4>
      No code, no messy integrations, no headaches,<br></br>
      Podia Email alredy has everything you need.
      </h4>
    </div>

    {/* Right Side */}
    <div className="emailleave-right">
      <div className="emailleave-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>Custome sending domain</h2>
        <h5>Set up a custom sending domain to send emails from your<br></br>
        own domain.</h5>
      </div>
      <div className="emailleave-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>Managed deliverability</h2>
        <h5>Podia handles deliverability for you, so your email hits the<br></br>
        inbox.</h5>
      </div>
      <div className="emailleave-item">
        <IoIosCheckmarkCircle className="icon" />
        <h2>Email analytics</h2>
        <h5>See exactly how every email performs, down to the last<br></br>
        sale.</h5>
      </div>
    </div>
  </div>

  );
}

export default EmailLeave;
