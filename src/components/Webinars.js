import React from 'react';
import WebinarTop from './webinar/WebinarTop';
import Webfeature from './webinar/Webfeature';
import Webgrow from './webinar/Webgrow';
import Weblady from './webinar/Weblady';
import WebList from './webinar/WebList';
import WebFAQ from './webinar/WebFAQ';

const Webinars = () => {
  return (
    <div>
      <WebinarTop/>
      <Webfeature/>
      <Webgrow/>
      <Weblady/>
      <WebList/>
      <WebFAQ/>
    </div>
  );
}

export default Webinars;
