import React from 'react';
import "../../asset/styles/courses/coursesell.css";

const CourseSell = () => {
  return (
    <div className="coursesell">
    <h1>Sales and marketing made simple</h1>
    <h4>From pre-sells to upsells, Podia has everything<br></br>
    you need to help make your course a success.</h4>
    
    <div className="course_boxes">
      <div className="course_box course_box1">
        <h5>Start earning early with pre-sells</h5>
        <p>Take payments before you launch with<br></br>
         Podia’s pre-selling feature, the perfect<br></br>
          way to validate your next course idea.</p>
      </div>
      
      <div className="course_box course_box2">
        <h5>Make more money with upsells</h5>
        <p>Offer additional products and services<br></br>
         during the checkout flow, at the exact<br></br>
          moment your student is ready to buy.</p>
      </div>
      
      <div className="course_box course_box3">
        <h5>Everyone loves a discount</h5>
        <p>Set up basic discounts or create<br></br>
         customized coupons with usage limits<br></br>
          and expiration dates.</p>
      </div>
      
      <div className="course_box course_box4">
        <h5>Sales pages that turn heads</h5>
        <p>Create beautiful sales pages that turn<br></br>
         visitors into buyers. Start with<br></br>
          professionally-designed templates<br></br>
           and customize them to match your<br></br>
            brand.</p>
      </div>
    </div>
  </div>
  );
}

export default CourseSell;
