import React from 'react';
import Brand from './Brand';
import AboutUsArea from './AboutUsArea';
import OurVerticals from './OurVerticals';
import OpenLearning from './OpenLearning';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function AboutUs() {
  return (
    <>
        <Header/>
        <main>
          <br/>
          <br/>
          <br/>
          <br />
          <br />
          <AboutUsArea/>
          <OurVerticals/>
          <OpenLearning/>
          <Brand/>
        </main>
        <Footer/>
    </>
  )
}

export default AboutUs;
