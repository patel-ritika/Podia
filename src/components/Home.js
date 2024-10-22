import React from 'react';
import HomeTop from './home/HomeTop';
import HomeCard from './home/HomeCard';
import HomeBusiness from './home/HomeBusiness';
import HomeFeature from './home/HomeFeature';
import HomeSales from './home/HomeSales';
import HomeList from './home/HomeList';
import HomeFooter from './home/HomeFooter';

const Home = () => {
  return (
    <div>
      <HomeTop/>
      <HomeCard/>
      <HomeBusiness/>
      <HomeFeature/>
      <HomeSales/>
      <HomeList/>
      <HomeFooter/>
    </div>
  );
}

export default Home;
