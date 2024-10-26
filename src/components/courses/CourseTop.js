import React from 'react';
import "../../asset/styles/courses/coursetop.css";
import course from "../../asset/images/course.svg";

const CourseTop = () => {
  return (
    <div className="coursetop">
        <div className="coursetop_detail">
            <h1>Create and sell online courses</h1>
            <h4>Turn what you know into what you get paid for. Podia makes it easy to sell courses that your audience will love.</h4>
            <button className="selling">Start selling today</button>
        </div>

        <div className="coursetop_image">
          <img src={course} alt="course"/>
        </div>
        <div className="coursetop_right">
          <h1>You'll love how your<br></br>
          course looks, and so<br></br>
          will your students</h1>
          <h4>Podia makes it easy to set up a<br></br>
          clean, gorgeous online course in<br></br>
          minutes, no coding skills needed.</h4>
        </div>
    </div>
  );
}

export default CourseTop;
