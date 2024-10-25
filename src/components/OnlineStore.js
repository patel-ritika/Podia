import React from 'react';
import OnlineStoreTop from './onlinestore/OnlineStoreTop';
import OnlineSell from './onlinestore/OnlineSell';
import OnlineCoupon from './onlinestore/OnlineCoupon';
import OnlineLady from './onlinestore/OnlineLady';
import OnlineVisit from './onlinestore/OnlineVisit';
import OnlineLeave from './onlinestore/OnlineLeave';
import OnlineFAQ from './onlinestore/OnlineFAQ';
import OnlineFooter from './onlinestore/OnlineFooter';


const OnlineStore = () => {
  return (
    <div>
      <OnlineStoreTop/>
      <OnlineSell/>
      <OnlineCoupon/>
      <OnlineLady/>
      <OnlineVisit/>
      <OnlineLeave/>
      <OnlineFAQ/>
      <OnlineFooter/>
    </div>
  );
}

export default OnlineStore;
