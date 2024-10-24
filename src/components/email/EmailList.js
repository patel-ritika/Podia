import React from 'react';
import "../../asset/styles/email/emaillist.css";
import image1 from '../../asset/images/email_list1.jpg';
import image2 from '../../asset/images/email_list2.jpg';
import image3 from '../../asset/images/email_list3.jpg';
import image4 from '../../asset/images/email_list4.jpg';
import image5 from '../../asset/images/email_list5.jpg';
import image6 from '../../asset/images/email_list6.jpg';
import image7 from '../../asset/images/email_list7.jpg';
import image8 from '../../asset/images/email_list8.jpg';

const EmailList = () => {
  return (
    <div className="email-sales">
    <h1>Landing pages,email forms,and lead<br></br>
    magnets that help you grow your email list</h1>
    <h2>Here are some of the landing pages entrepreneurs<br></br>
     like you have made with Podia to help grow their lists.</h2>
    
    <div className="email_image-grid">
      <div className="email_image-container">
        <img src={image1} alt="Sale 1" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
      <div className="email_image-container">
        <img src={image2} alt="Sale 2" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
      <div className="email_image-container">
        <img src={image3} alt="Sale 3" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
      <div className="email_image-container">
        <img src={image4} alt="Sale 4" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
      <div className="email_image-container">
        <img src={image5} alt="Sale 5" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
      <div className="email_image-container">
        <img src={image6} alt="Sale 6" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
      <div className="email_image-container">
        <img src={image7} alt="Sale 7" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
      <div className="email_image-container">
        <img src={image8} alt="Sale 8" />
        <div className="overlay">
          <span className="view-site">View Site</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default EmailList;
