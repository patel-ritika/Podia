import React from 'react';
import "../../asset/styles/webinar/webfeature.css";
import web1 from "../../asset/images/web1.jpg";
import web2 from "../../asset/images/web2.jpg";
import web3 from "../../asset/images/web3.jpg";
import web4 from "../../asset/images/web4.jpg";

const Webfeature = () => {
  return (
    <div className="webfeatures">
        <div className="webfeature1_image">
            <img src={web1} alt="web1"/>
        </div> 
        <div className="webfeature1_detail">
             <h1>A Zoom companion<br></br>
             that makes selling easy</h1>
             <h5>Turn webinars into revenue</h5>
             <h4>Sell access to your webinars in<br></br>
              advance using beautiful sales pages<br></br>
               and high-converting checkout flows.</h4>
               <h5>Make your business look good</h5>
               <h4>Ditch Zoom’s boring registration<br></br>
                pages and make your brand shine<br></br>
                 with a beautiful, custom sales page.</h4>
        </div>

        <div className="webfeature2_image">
            <img src={web2} alt="web2"/>
        </div>
        <div className="webfeature2_detail">
            <h1>Grow your own<br></br>
            audience, not YouTube's</h1>
            <h5>Get real attendee information</h5>
            <h4>Instead of borrowing YouTube’s audience,<br></br>
             build your own. Let attendees register<br></br>
              for your YouTube Live (free or paid)<br></br>
               with their real email addresses, and<br></br>
                start building stronger relationships.</h4>
                <h5>Your audience, your revenue</h5>
                <h4>In addition to earning money by selling <br></br>
                access to your webinar, Podia makes it easy<br></br>
                 for you to sell courses, coaching, or any<br></br>
                  other digital products to your audience.</h4>
        </div>

        <div className="webfeature3_image">
            <img src={web3} alt="web3"/>
        </div>
        <div className="webfeature3_detail">
            <h1>Yes, there will be a replay.</h1>
            <h4>Webinar replays automatically get <br></br>
            converted into digital products you can sell,<br></br>
             give away, or bundle with other products.</h4>
        </div>

        <div className="webfeature4_image">
            <img src={web4} alt="web4"/>
        </div>
        <div className="webfeature4_detail">
            <h1>Keep the party going in<br></br>
            your attebdees' inboxes.</h1>
            <h4>After your webinar, use Podia’s powerful<br></br>
             email marketing features to nurture<br></br>
              your relationship with your attendees,<br></br>
               sending them broadcasts, newsletters,<br></br>
                sales funnels, and automated campaigns.</h4>
        </div>
    </div>
  );
}

export default Webfeature;
