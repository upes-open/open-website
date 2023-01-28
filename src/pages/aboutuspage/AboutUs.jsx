import React from 'react';
import AboutUsArea from './AboutUsArea';
import OurVerticals from './OurVerticals';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import OurPrincipals from '../../pages/aboutuspage/OurPrincipals'


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
          <OurPrincipals/>
          <OurVerticals/>
        </main>
        <Footer/>
    </>
  )
}

export default AboutUs;
