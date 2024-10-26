import React from 'react';
import CourseTop from './courses/CourseTop';
import CourseBuild from './courses/CourseBuild';
import CourseSell from './courses/CourseSell';
import CourseBundle from './courses/CourseBundle';
import CourseMigration from './courses/CourseMigration';
import CourseBusiness from './courses/CourseBusiness';

const Course = () => {
  return (
    <div>
      <CourseTop/>
      <CourseBuild/>
      <CourseSell/>
      <CourseBundle/>
      <CourseMigration/>
      <CourseBusiness/>
    </div>
  );
}

export default Course;
