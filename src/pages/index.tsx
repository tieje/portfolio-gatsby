import React from "react"
import { HomeHeader, } from '../components/HomeHeader'
import { HomeMain } from '../components/HomeMain'
import { SideNavBar } from '../components/SideNavBar'
import { HomeFooter } from '../components/HomeFooter'


const IndexPage = () => {
  return (
    <div className='font-serif overflow-x-hidden'>
      <SideNavBar />
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
};

export default IndexPage;
