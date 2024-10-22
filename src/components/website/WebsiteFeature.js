import React from 'react';
import "../../asset/styles/website/websitefeature.css";
import websitefeature from "../../asset/images/website_feature.jpg";
import websitefeature1 from "../../asset/images/website_feature1.jpg";
import websitefeature2 from "../../asset/images/website_feature2.jpg";

const WebsiteFeature = () => {
  return (
    <div className="website_feature_heading">
        <div className="website_small_heading">
            <h1>Designed for anything you can imagine</h1>
            <h4>Most website builders are full of things that make you go “ugh”, “huh?”,<br></br>
             and “that’s not how I wanted it!!”. We got rid of them, and made it<br></br>
              easy to build a delightful website that helps you grow your business.</h4>
        </div>

        <div className="website_feature1_image">
           <img src={websitefeature} alt="feature"/>
        </div>
        <div className="website_feature1_detail">
            <h1>A site builder that<br></br>
            makes it easy to<br></br>
            customize your website</h1>
            <p>Your business is unique, and your website<br></br>
             should be, too. That’s why we made editing<br></br>
              your site simple and straightforward,<br></br>
               with loads of customization options that<br></br>
                you don’t need to be a designer to use.</p>
        </div>

        <div className="website_feature2_image">
            <img src={websitefeature1} alt="feature1"/>
        </div>
        <div className="website_feature2_detail">
            <h1>The blogging platform<br></br>
            that helps you grow<br></br>
            your following and turn<br></br>
            readers into buyers</h1>
            <p>Launch a blog that looks just the<br></br>
             way you want it to, and publish posts<br></br>
              with ease. Because everything is<br></br>
               integrated in Podia, you can sell<br></br>
                products directly from your blog and<br></br>
                 turn blog posts into emails with a click.</p>
                 <button className="website_feature_button">Learn more about blogging</button>
        </div>

        <div className="website_feature3_image">
           <img src={websitefeature2} alt="feature2"/>
        </div>
        <div className="website_feature3_detail">
            <h1>Get discovered with<br></br>
            built-in SEO tools</h1>
            <p>Search engines love Podia too. Your site<br></br>
             comes with SEO must-haves like speed<br></br>
              and modern architecture, plus features<br></br>
               like custom metadata to help you target<br></br>
                the keywords that are important to you.</p>
        </div>
    </div>
  );
}

export default WebsiteFeature;
