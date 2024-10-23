import React from 'react';
import "../../asset//styles/email/emailcard.css";
import card1 from "../../asset/images/card1.svg";
import card2 from "../../asset/images/card2svg.svg";

const EmailCard = () => {
  return (
    <div className="email_card">
        <div className="email_card1_image">
           <img src={card1} alt="card1"/>
        </div>
        <div className="email_card1_detail">
            <h1>Segment based on tags,<br></br>
            products purchased,<br></br>
            memberships,<br></br>
            and revenue</h1>
            <h4>All your customers’ info is in Podia,<br></br>
             which means you can use it to segment<br></br>
              your emails in a way other platforms<br></br>
               can’t. Target messages based on how<br></br>
                much your customers have spent, their<br></br>
                 activity, and what they’re interested in.</h4>
        </div>

        <div className="email_card2_image">
           <img src={card2} alt="card2"/>
        </div>
        <div className="email_card2_detail">
            <h1>Automated campaigns<br></br>
            for welcome emails,<br></br>
            sales, and anything else</h1>
            <h4>Podia Email is integrated into your store<br></br>
             and website. That means you can use<br></br>
              email automation to reach your customers<br></br>
               at exactly the right moment, instead of<br></br>
                worrying about whether your separate<br></br>
                 platforms are even talking to each other.</h4>
        </div>
    </div>
  );
}

export default EmailCard;
