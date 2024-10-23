import React from 'react';
import "../../asset/styles/email/emailtop.css";
import emailtop from "../../asset/images/feature3.svg";

const EmailTop = () => {
  return (
    <div className="email_top">
    <div className="email_top_image">
      <img src={emailtop} alt="top"/>
    </div>
    <div className="email_top_detail">
      <h1>Email marketing that<br></br>
      works seamlessly<br></br>
      with the rest of<br></br>
      your business</h1>
      <h4>From weekly newsletters to segmented sales<br></br>
       pitches, Podia Email helps you build your audience,<br></br>
        nurture your relationships, and make more sales.</h4>
      <button className="email_top_button">Start your free trial</button>
    </div>
  </div>
  );
}

export default EmailTop;
