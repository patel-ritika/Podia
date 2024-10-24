import React from 'react';
import EmailTop from './email/EmailTop';
import EmailTemplate from './email/EmailTemplate';
import EmailGrow from './email/EmailGrow';
import EmailCard from './email/EmailCard';
import EmailList from './email/EmailList';

const Email = () => {
  return (
    <div>
      <EmailTop/>
      <EmailTemplate/>
      <EmailGrow/>
      <EmailCard/>
      <EmailList/>
    </div>
  );
}

export default Email;
