import React from 'react';
import OnlineStoreTop from './onlinestore/OnlineStoreTop';
import OnlineSell from './onlinestore/OnlineSell';
import OnlineCoupon from './onlinestore/OnlineCoupon';


const OnlineStore = () => {
  return (
    <div>
      <OnlineStoreTop/>
      <OnlineSell/>
      <OnlineCoupon/>
    </div>
  );
}

export default OnlineStore;
