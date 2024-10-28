import React from 'react';
import WebinarTop from './webinar/WebinarTop';
import Webfeature from './webinar/Webfeature';
import Webgrow from './webinar/Webgrow';
import Weblady from './webinar/Weblady';
import WebList from './webinar/WebList';
import WebFAQ from './webinar/WebFAQ';
import WebFooter from './webinar/WebFooter';

const Webinars = () => {
  return (
    <div>
      <WebinarTop/>
      <Webfeature/>
      <Webgrow/>
      <Weblady/>
      <WebList/>
      <WebFAQ/>
      <WebFooter/>
    </div>
  );
}

export default Webinars;
