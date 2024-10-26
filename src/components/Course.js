import React from 'react';
import CourseTop from './courses/CourseTop';
import CourseBuild from './courses/CourseBuild';
import CourseSell from './courses/CourseSell';

const Course = () => {
  return (
    <div>
      <CourseTop/>
      <CourseBuild/>
      <CourseSell/>
    </div>
  );
}

export default Course;
