import React from 'react';
import "../../asset/styles/website/websitelist.css";
import { FaCheckCircle } from 'react-icons/fa';

const WebsiteList = () => {
  return (
    <div className="websitelist-container">
      <div className="websitelist-left">
        <h1>
          All the features you need to<br/>
          build a site you love, none of the<br/>
          other stuff that gets in the way
        </h1>
        <h4>
          If you're wondering "can Podia do this?",the answer is<br/>
          probably yes. Here's what you get right out of the box.
        </h4>
      </div>

      <div className="websitelist-right">
        <ul className="listt">
          <li><FaCheckCircle className="icon" /> Built-in SEO</li>
          <li><FaCheckCircle className="icon" /> Checkout and payments</li>
          <li><FaCheckCircle className="icon" /> Custom domains</li>
          <li><FaCheckCircle className="icon" /> Blogging</li>
          <li><FaCheckCircle className="icon" /> Video</li>
          <li><FaCheckCircle className="icon" /> Third-party embeds</li>
          <li><FaCheckCircle className="icon" /> Email forms</li>
          <li><FaCheckCircle className="icon" /> Customer dashboard</li>
        </ul>

        <ul className="listt">
          <li><FaCheckCircle className="icon" /> Colors and styles</li>
          <li><FaCheckCircle className="icon" /> Online courses</li>
          <li><FaCheckCircle className="icon" /> Memberships</li>
          <li><FaCheckCircle className="icon" /> Digital products</li>
          <li><FaCheckCircle className="icon" /> Email marketing</li>
          <li><FaCheckCircle className="icon" /> Mobile friendly</li>
          <li><FaCheckCircle className="icon" /> Fonts</li>
        </ul>
      </div>

      <h1 className="center-heading">
        Start with a website, grow with...
      </h1>
      <h4 className="center-subheading">
      While our website builder is great on its own, the magic of Podia<br></br>
       is how it streamlines your business with everything in one place.
      </h4>

      <div className="boxes">
        <div className="boxx">
          <h2>Online Store</h2>
          <p>Sell memberships, courses, digital<br></br>
          downloads, and anything else you like.</p>
        </div>
        <div className="boxx">
          <h2>Email Marketing</h2>
          <p>Beautigul email marketing that's built<br></br>
          directly into your website and online<br></br>
          store.</p>
        </div>
      </div>
    </div>
  );
}

export default WebsiteList;
