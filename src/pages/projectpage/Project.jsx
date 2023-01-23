import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
// import AboutInner from './AboutInner'
import LatestMatch from './LatestProjects'
import DeployProjects from './DeployedProjects'
// import TeamMem from '../../teampage/TeamMem'


function AboutUs() {
  return (
	<>
	<Header/>
	<main>
	<Breadcrumb/>
    <DeployProjects />
	{/* <AboutInner/> */}
	<LatestMatch/>
	{/* <TeamMem/> */}
	
	</main>
	<Footer/>
	</>
  )
}

export default AboutUs
