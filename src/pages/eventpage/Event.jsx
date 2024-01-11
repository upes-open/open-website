import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
//import UpcomingEvent from './UpcomingEvent';
import PastEvents from './PastEvents';


function Event() {
  return (
	<>
	<Header/>
	<main>
		<br /><br /><br /><br />
	{/*<UpcomingEvent/>*/}

	<PastEvents/>
	</main>
	<Footer/>
	</>
  )
}

export default Event