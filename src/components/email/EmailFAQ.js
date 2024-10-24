import React from 'react';
import "../../asset/styles/email/emailfaq.css";
import { FaPlus } from 'react-icons/fa';

const EmailFAQ = () => {
  return (
    <div className="email_faq-container">
    {/* Left section */}
    <div className="email_faq-left">
      <h1>Frequently Asked Questions</h1>
    </div>

    {/* Right section with questions */}
    <div className="email_faq-right">
      <ul className="email_faq-list">
        <li>
         <span className="email_faq-question">Can I start building my website and blog for free?</span>
          <FaPlus className="email_faq-icon" />
        </li>
        <li>
          <span className="email_faq-question">Can I build landing pages in Podia?</span>
          <FaPlus className="email_faq-icon" />
        </li>
        <li>
          <span className="email_faq-question">Doed Podia include website hosting?</span>
          <FaPlus className="email_faq-icon" />
        </li>
        <li>
          <span className="email_faq-question">Can I connect a custom domain?</span>
          <FaPlus className="email_faq-icon" />
        </li>
        <li>
          <span className="email_faq-question">Does Podia have SEO features?</span>
          <FaPlus className="email_faq-icon" />
        </li>
        <li>
          <span className="email_faq-question">What features does Podia have?</span>
          <FaPlus className="email_faq-icon" />
        </li>
      </ul>
    </div>
  </div>
  );
}

export default EmailFAQ;
