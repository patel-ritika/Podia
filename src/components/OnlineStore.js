import React from 'react';
import OnlineStoreTop from './onlinestore/OnlineStoreTop';
import OnlineSell from './onlinestore/OnlineSell';
import OnlineCoupon from './onlinestore/OnlineCoupon';
import OnlineLady from './onlinestore/OnlineLady';


const OnlineStore = () => {
  return (
    <div>
      <OnlineStoreTop/>
      <OnlineSell/>
      <OnlineCoupon/>
      <OnlineLady/>
    </div>
  );
}

export default OnlineStore;
