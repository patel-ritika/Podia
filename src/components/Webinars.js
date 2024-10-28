import React from 'react';
import WebinarTop from './webinar/WebinarTop';
import Webfeature from './webinar/Webfeature';
import Webgrow from './webinar/Webgrow';
import Weblady from './webinar/Weblady';
import WebList from './webinar/WebList';

const Webinars = () => {
  return (
    <div>
      <WebinarTop/>
      <Webfeature/>
      <Webgrow/>
      <Weblady/>
      <WebList/>
    </div>
  );
}

export default Webinars;
