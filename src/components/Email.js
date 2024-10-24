import React from 'react';
import EmailTop from './email/EmailTop';
import EmailTemplate from './email/EmailTemplate';
import EmailGrow from './email/EmailGrow';
import EmailCard from './email/EmailCard';
import EmailList from './email/EmailList';
import EmailLeave from './email/EmailLeave';
import EmailFAQ from './email/EmailFAQ';
import EmailFooter from './email/EmailFooter';

const Email = () => {
  return (
    <div>
      <EmailTop/>
      <EmailTemplate/>
      <EmailGrow/>
      <EmailCard/>
      <EmailList/>
      <EmailLeave/>
      <EmailFAQ/>
      <EmailFooter/>
    </div>
  );
}

export default Email;
