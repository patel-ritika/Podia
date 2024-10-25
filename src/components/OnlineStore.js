import React from 'react';
import OnlineStoreTop from './onlinestore/OnlineStoreTop';
import OnlineSell from './onlinestore/OnlineSell';
import OnlineCoupon from './onlinestore/OnlineCoupon';
import OnlineLady from './onlinestore/OnlineLady';
import OnlineVisit from './onlinestore/OnlineVisit';
import OnlineLeave from './onlinestore/OnlineLeave';
import OnlineFAQ from './onlinestore/OnlineFAQ';


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
    </div>
  );
}

export default OnlineStore;
