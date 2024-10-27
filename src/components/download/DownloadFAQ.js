import React from 'react';
import "../../asset/styles/download/downloadfaq.css";
import { FaPlus } from 'react-icons/fa';

const DownloadFAQ = () => {
  return (
    <div className="digital_faq-container">
    {/* Left section */}
    <div className="digital_faq-left">
      <h1>Frequently Asked Questions</h1>
    </div>

    {/* Right section with questions */}
    <div className="digital_faq-right">
      <ul className="digital_faq-list">
        <li>
         <span className="digital_faq-question">What kinds of things can I sell with Podia?</span>
          <FaPlus className="digital_faq-icon" />
        </li>
        <li>
          <span className="digital_faq-question">How much does Podia cost?</span>
          <FaPlus className="digital_faq-icon" />
        </li>
        <li>
          <span className="digital_faq-question">Can I build landing pages in Podia?</span>
          <FaPlus className="digital_faq-icon" />
        </li>
        <li>
          <span className="digital_faq-question">What payment methods can my customers use?</span>
          <FaPlus className="digital_faq-icon" />
        </li>
        <li>
          <span className="digital_faq-question">Can I offer different payment plans?</span>
          <FaPlus className="digital_faq-icon" />
        </li>
        <li>
          <span className="digital_faq-question">What languages and currencies does Podia support?</span>
          <FaPlus className="digital_faq-icon" />
        </li>
      </ul>
    </div>
  </div>
  );
}

export default DownloadFAQ;
