import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';

import OurContributors from './OurContributors'

function Contributors() {
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

export default Contributors
