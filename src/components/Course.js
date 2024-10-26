import React from 'react';
import CourseTop from './courses/CourseTop';
import CourseBuild from './courses/CourseBuild';
import CourseSell from './courses/CourseSell';
import CourseBundle from './courses/CourseBundle';

const Course = () => {
  return (
    <div>
      <CourseTop/>
      <CourseBuild/>
      <CourseSell/>
      <CourseBundle/>
    </div>
  );
}

export default Course;
