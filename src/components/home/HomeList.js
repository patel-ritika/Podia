import React from 'react';
import "../../asset/styles/home/homelist.css";
import { FaCheck } from 'react-icons/fa';

const HomeList = () => {
    const listOne = [
        "Website Builder", "Online Courses", "Digital Downloads", "Memberships", "Landing Pages",
        "Blogging", "Templates", "Built-in SEO", "Email Marketing", "Email Automations", 
        "Email Forms", "Segmentation"
      ];
    
      const listTwo = [
        "Fast Checkout", "Tax Support", "20+ Currency Support", "Upsells", "Pre-sales",
        "Affiliate Marketing", "Webinars", "Coaching Products", "Coupons", "Multimedia Products", 
        "Product Bundles", "Custom Products"
      ];
    
  return (
    <div className="home-list-container">
    {/* Left side with heading and paragraphs */}
    <div className="left-section">
      <h1>Everything need to run your<br></br>
      business, right out of the box.</h1>
      <p>“Instead of worrying about 20 different<br></br>
       platforms for email, website, course hosting…<br></br>
       I can just run my business from Podia.”<br></br>
      – Valeria Hernández, VegiVale Wellness</p>
      
    </div>

    {/* Right side with two lists */}
    <div className="right-section">
      <div className="list">
        <ul>
          {listOne.map((item, index) => (
            <li key={index}>
              <FaCheck className="check-icon" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="list">
        <ul>
          {listTwo.map((item, index) => (
            <li key={index}>
              <FaCheck className="check-icon" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default HomeList;
