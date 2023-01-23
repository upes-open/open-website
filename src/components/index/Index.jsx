import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SliderTwo from './SliderTwo';
import NewGamesArea from './NewGamesArea'
import GamesAreatwo from './GamesAreatwo'
import UpcomingEvent from './UpcomingEvent'
import Brand from './Brand';
import TeamArea from './TeamArea';
import Gallery from './Gallery';


function IndexTwo(){
	return(
        <>
          <Header/>
        <main>
          <SliderTwo/>
          <UpcomingEvent/>
          <GamesAreatwo/>
          <NewGamesArea/>
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