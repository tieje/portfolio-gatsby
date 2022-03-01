import React from "react"
import { HomeHeader, } from './components/HomeHeader'
import { HomeMain } from './components/HomeMain'
import { SideNavBar } from './components/SideNavBar'
/*import { HomeFooter } from './components/HomeFooter'
*/

const IndexPage = () => {
  return (
    <body className="scroll-smooth">
      <SideNavBar />
      <HomeHeader />
      <HomeMain />
    </body>
  );
};

export default IndexPage;
