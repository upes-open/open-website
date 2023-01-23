import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';

import OurContributors from './OurContributors'

function AboutUs() {
  return (
	<>
	<Header/>
	<main>
	<Breadcrumb/>
	<OurContributors/>	
	</main>
	<Footer/>
	</>
  )
}

export default AboutUs
