import React from 'react';
import "../../asset/styles/website/websitefaq.css";
import { FaPlus } from 'react-icons/fa';

const WebsiteFAQ = () => {
  return (
    <div className="faq-container">
    {/* Left section */}
    <div className="faq-left">
      <h1>Frequently Asked Questions</h1>
    </div>

    {/* Right section with questions */}
    <div className="faq-right">
      <ul className="faq-list">
        <li>
         <span className="faq-question">Can I start building my website and blog for free?</span>
          <FaPlus className="faq-icon" />
        </li>
        <li>
          <span className="faq-question">Can I build landing pages in Podia?</span>
          <FaPlus className="faq-icon" />
        </li>
        <li>
          <span className="faq-question">Doed Podia include website hosting?</span>
          <FaPlus className="faq-icon" />
        </li>
        <li>
          <span className="faq-question">Can I connect a custom domain?</span>
          <FaPlus className="faq-icon" />
        </li>
        <li>
          <span className="faq-question">Does Podia have SEO features?</span>
          <FaPlus className="faq-icon" />
        </li>
        <li>
          <span className="faq-question">What features does Podia have?</span>
          <FaPlus className="faq-icon" />
        </li>
      </ul>
    </div>
  </div>
  );
}

export default WebsiteFAQ;
