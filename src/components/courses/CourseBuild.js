import React from 'react';
import "../../asset/styles/courses/coursebuild.css";
import { FaCheck } from 'react-icons/fa'; // Import the check icon

const CourseBuild = () => {
  return (
    <div className="coursebuild">
    <h1>Building your online course has never been easier</h1>
    <h4>Podia handles all of the tricky parts of creating a course. Just add your<br></br>
    content and organize it how you want to. Let us deal with the technical stuff.</h4>
    
    
    
    <div className="row">
      <div className="column">
      <h5><span className="course_icon"><FaCheck /></span>Ultimate flexibility </h5>
      <p>Add as many modules, lessons, videos, audio files,<br></br>
       quizzes, embeds, and files as you want. We’ll even<br></br>
        host your video content so you don’t need to<br></br>
         connect — and pay for — extra tools.</p>
      </div>
      <div className="column">
        <h5><span className="course_icon"><FaCheck /></span>Your course, your way </h5>
        <p>Build a self-paced course, a cohort-based course,<br></br>
         or a course where content is delivered on a<br></br>
          schedule.</p>
      </div>
      <div className="column">
        <h5><span className="course_icon"><FaCheck /></span>Build stress-free </h5>
        <p>Create courses on your 30-day free trial without<br></br>
         spending a dime. All plans come with unlimited<br></br>
          courses so you can build as much as you like.</p>
      </div>
    </div>
  </div>
  );
}

export default CourseBuild;
