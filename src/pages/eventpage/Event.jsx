import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import UpcomingEvent from './UpcomingEvent';
import PastEvents from './PastEvents';

function Upcoming() {
  return (
	<>
	<Header/>
	<main>
	<Breadcrumb/>
	<UpcomingEvent/>
	<PastEvents/>
	</main>
	<Footer/>
	</>
  )
}

export default Upcoming