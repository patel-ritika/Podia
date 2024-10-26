import React from 'react';
import CourseTop from './courses/CourseTop';
import CourseBuild from './courses/CourseBuild';
import CourseSell from './courses/CourseSell';
import CourseBundle from './courses/CourseBundle';
import CourseMigration from './courses/CourseMigration';

const Course = () => {
  return (
    <div>
      <CourseTop/>
      <CourseBuild/>
      <CourseSell/>
      <CourseBundle/>
      <CourseMigration/>
    </div>
  );
}

export default Course;
