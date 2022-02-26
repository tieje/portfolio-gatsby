import React from "react"
import { HomeHeader } from './components/header/HomeHeader'
import { HomeMain } from './components/main/HomeMain'
import { HomeFooter } from './components/HomeFooter'
import { SideNavBar } from './components/SideNavBar/SideNavBar'


const IndexPage = () => {
  return (
    <body>
      <SideNavBar />
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </body>
  );
};

export default IndexPage;
