import React from 'react';
import "../../asset/styles/onlinestore/onlinefaq.css";
import { FaPlus } from 'react-icons/fa';


const OnlineFAQ = () => {
  return (
    <div className="store_faq-container">
    {/* Left section */}
    <div className="store_faq-left">
      <h1>Frequently Asked Questions</h1>
    </div>

    {/* Right section with questions */}
    <div className="store_faq-right">
      <ul className="store_faq-list">
        <li>
         <span className="store_faq-question">What kinds of things can I sell with Podia?</span>
          <FaPlus className="store_faq-icon" />
        </li>
        <li>
          <span className="store_faq-question">Can I build landing pages in Podia?</span>
          <FaPlus className="store_faq-icon" />
        </li>
        <li>
          <span className="store_faq-question">What payment methods can my customers use?</span>
          <FaPlus className="store_faq-icon" />
        </li>
        <li>
          <span className="store_faq-question">How do I get my money after someone pays me?</span>
          <FaPlus className="store_faq-icon" />
        </li>
        <li>
          <span className="store_faq-question">What languages and currencies does Podia support?</span>
          <FaPlus className="store_faq-icon" />
        </li>
        <li>
          <span className="store_faq-question">How does Podia handle sales tax?</span>
          <FaPlus className="store_faq-icon" />
        </li>
      </ul>
    </div>
  </div>
  );
}

export default OnlineFAQ;
