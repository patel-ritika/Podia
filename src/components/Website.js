import React from 'react';
import WebsiteTop from './website/WebsiteTop';
import WebsiteSale from './website/WebsiteSale';
import WebsiteFeature from './website/WebsiteFeature';
import WebsitePlug from './website/WebsitePlug';
import WebsiteList from './website/WebsiteList';

const Website = () => {
  return (
    <div>
      <WebsiteTop/>
      <WebsiteSale/>
      <WebsiteFeature/>
      <WebsitePlug/>
      <WebsiteList/>
    </div>
  );
}

export default Website;
