import React from "react"
import { HomeHeader, } from './components/HomeHeader'
import { HomeMain } from './components/HomeMain'
import { HomeFooter } from './components/HomeFooter'
import { SideNavBar } from './components/SideNavBar'


const IndexPage = () => {
  return (
    <body className="scroll-smooth">
      <SideNavBar />
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </body>
  );
};

export default IndexPage;
