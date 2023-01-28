import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SliderTwo from './SliderTwo';
import NewGamesArea from './NewGamesArea'
import GamesAreatwo from './GamesAreatwo'
import UpcomingEvent from '../../pages/eventpage/UpcomingEvent'
import Brand from './Brand';
import TeamArea from './TeamArea';
import Gallery from './Gallery';

import DeployedProjects from '../../pages/projectpage/DeployedProjects'


function IndexTwo(){
	return(
        <>
          <Header/>
        <main>
          <SliderTwo/>
          <UpcomingEvent/>
          <GamesAreatwo/>
          <DeployedProjects/>
         {/* <GamesArea/> */}
          {/* <CtaArea/> */}
          <TeamArea />
          <Gallery />
          <Brand />
         {/* <ShopAreaTwo/> */}
          {/* <BlogArea/> */}
        </main>
        <Footer/>
        </>
	)
}
	
export default IndexTwo