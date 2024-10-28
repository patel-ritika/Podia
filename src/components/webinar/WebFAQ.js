import React from 'react';
import "../../asset/styles/webinar/webfaq.css";
import { FaPlus } from 'react-icons/fa';

const WebFAQ = () => {
  return (
    <div className="course_faq-container">
    {/* Left section */}
    <div className="course_faq-left">
      <h1>Frequently Asked Questions</h1>
    </div>

    {/* Right section with questions */}
    <div className="course_faq-right">
      <ul className="course_faq-list">
        <li>
         <span className="course_faq-question">What features does Podia have?</span>
          <FaPlus className="course_faq-icon" />
        </li>
        <li>
          <span className="course_faq-question">How much does Podia cost?</span>
          <FaPlus className="course_faq-icon" />
        </li>
        <li>
          <span className="course_faq-question">Can I build landing pages in Podia?</span>
          <FaPlus className="course_faq-icon" />
        </li>
        <li>
          <span className="course_faq-question">What payment methods can my customers use?</span>
          <FaPlus className="course_faq-icon" />
        </li>
        <li>
          <span className="course_faq-question">Can I offer different payment plans?</span>
          <FaPlus className="course_faq-icon" />
        </li>
        <li>
          <span className="course_faq-question">What languages and currencies does Podia support?</span>
          <FaPlus className="course_faq-icon" />
        </li>
      </ul>
    </div>
  </div>
  );
}

export default WebFAQ;
