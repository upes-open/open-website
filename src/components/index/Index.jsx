import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Slider from './Slider';

import Brand from './Brand';
import Gallery from './Gallery';

import DeployedProjects from '../../pages/projectpage/DeployedProjects'
import UpcomingEvent from '../../pages/eventpage/UpcomingEvent'
import OpenLearning from '../../pages/aboutuspage/OpenLearning'
import Barclays from '../../pages/vedant'
import OutReachy from '../../pages/medhavi';

function Index() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <UpcomingEvent />
        <OutReachy/>
        <Barclays/>
        <OpenLearning />
        <DeployedProjects />
        <Gallery />
        <Brand />
      </main>
      <Footer />
    </>
  )
}

export default Index