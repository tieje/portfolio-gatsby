/*
    <main>
      <h1 className="text-3xl font-bold underline">
        The home page of thomas james
      </h1>
      <p>
        My portfolio site is still being built.
      </p>
      <ul>
        <li>
          <a href="https://github.com/tieje/portfolio-gatsby">
            Check out the progress at my github!
          </a>
        </li>
      </ul>
    </main>
*/

import React from "react"
import { HomeHeader } from './components/header/HomeHeader'
import { HomeMain } from './components/main/HomeMain'
import { HomeFooter } from './components/HomeFooter'
import { SideNavBar } from './components/SideNavBar/SideNavBar'
// markup
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
