import React from 'react';
import "../../asset/styles/email/emailfooter.css";
import emailfooter from "../../asset/images/email_bottom.jpg";

const EmailFooter = () => {
  return (
    <div className="email_footer">
        <div className="email_footer_image">
           <img src={emailfooter} alt="footer"/>
        </div>
    </div>
  );
}

export default EmailFooter;
