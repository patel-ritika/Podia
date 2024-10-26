import React from 'react';
import CourseTop from './courses/CourseTop';
import CourseBuild from './courses/CourseBuild';
import CourseSell from './courses/CourseSell';
import CourseBundle from './courses/CourseBundle';
import CourseMigration from './courses/CourseMigration';
import CourseBusiness from './courses/CourseBusiness';
import CourseMen from './courses/CourseMen';
import CourseList from './courses/CourseList';
import CourseFAQ from './courses/CourseFAQ';

const Course = () => {
  return (
    <div>
      <CourseTop/>
      <CourseBuild/>
      <CourseSell/>
      <CourseBundle/>
      <CourseMigration/>
      <CourseBusiness/>
      <CourseMen/>
      <CourseList/>
      <CourseFAQ/>
    </div>
  );
}

export default Course;
